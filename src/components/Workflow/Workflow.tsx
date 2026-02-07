'use client'

import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import { ReactFlow, Node, Edge } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import {
  UserPlus,
  Tag,
  ShoppingCart,
  CheckCircle,
  Send,
  Truck,
  ChevronDown,
  Settings,
  Users,
  FileText,
  Zap,
  Search,
  Package,
  Building2,
  ThumbsUp,
  BarChart3,
  RefreshCw,
  LogIn,
  Wallet,
  ClipboardCheck,
  PieChart,
  Clock,
  Ruler,
  TrendingUp,
  LucideIcon,
} from 'lucide-react'
import WorkflowNode, { WorkflowNodeData } from './WorkflowNode'

// Icon lookup from string keys to Lucide components
const iconMap: Record<string, LucideIcon> = {
  UserPlus,
  Tag,
  ShoppingCart,
  CheckCircle,
  Send,
  Truck,
  Settings,
  Users,
  FileText,
  Zap,
  Search,
  Package,
  Building2,
  ThumbsUp,
  BarChart3,
  RefreshCw,
  LogIn,
  Wallet,
  ClipboardCheck,
  PieChart,
  Clock,
  Ruler,
  TrendingUp,
}

// Workflow step definition (new format)
interface WorkflowStep {
  label: string
  iconKey: string
  description?: string
  stat?: string
}

// Single workflow definition (new format)
interface WorkflowDefinition {
  id: string
  title: string
  subtitle?: string
  steps: WorkflowStep[]
}

// Old-format dictionary props (backward compatible)
interface OldWorkflowDictionary {
  title?: string
  subtitle?: string
  nodes?: {
    createClub?: string
    viewPrices?: string
    collectOrder?: string
    approveInternal?: string
    confirmOrder?: string
    trackDelivery?: string
  }
  workflows?: never
}

// New-format dictionary props
interface NewWorkflowDictionary {
  title?: string
  subtitle?: string
  workflows?: WorkflowDefinition[]
  nodes?: {
    createClub?: string
    viewPrices?: string
    collectOrder?: string
    approveInternal?: string
    confirmOrder?: string
    trackDelivery?: string
  }
}

interface WorkflowProps {
  dictionary: {
    workflow?: OldWorkflowDictionary | NewWorkflowDictionary
  }
  locale: string
  /** Pass workflows directly (e.g. from audienceWorkflows) */
  workflows?: WorkflowDefinition[]
  /** Hide section header (title/subtitle) when used as embedded component */
  hideHeader?: boolean
}

// Custom node types for React Flow
const nodeTypes = {
  workflowNode: WorkflowNode,
}

// Edge styling with coral color and smooth curves
const defaultEdgeOptions = {
  type: 'smoothstep' as const,
  style: {
    strokeWidth: 2,
    stroke: '#F97B5F', // coral-500
  },
  animated: true,
}

// Predefined scattered positions for 6-step workflows (mind-map feel)
const scatteredPositions6 = [
  { x: 0, y: 60 },
  { x: 220, y: 0 },
  { x: 410, y: 100 },
  { x: 640, y: 20 },
  { x: 830, y: 110 },
  { x: 1040, y: 40 },
]

// Generate deterministic scattered positions for any step count
function getScatteredPositions(count: number): { x: number; y: number }[] {
  if (count === 6) return scatteredPositions6
  const yOffsets = [60, 0, 100, 20, 110, 40, 70, 10, 90, 30]
  const baseGap = count <= 4 ? 250 : count <= 6 ? 200 : 160
  return Array.from({ length: count }, (_, i) => ({
    x: i * baseGap + ((i * 37 + 13) % 30) - 15,
    y: yOffsets[i % yOffsets.length],
  }))
}

// Scattered offsets for organic look on mobile (x and y)
const mobileOffsets = [
  'translate-x-0 -translate-y-1',
  'translate-x-8 translate-y-2',
  '-translate-x-6 -translate-y-2',
  'translate-x-10 translate-y-1',
  '-translate-x-4 translate-y-3',
  'translate-x-6 -translate-y-1',
]

// Mobile workflow step component
function MobileWorkflowStep({
  icon: Icon,
  label,
  description,
  stat,
  stepNumber,
  isLast,
  offsetClass,
}: {
  icon: LucideIcon
  label: string
  description?: string
  stat?: string
  stepNumber: number
  isLast: boolean
  offsetClass: string
}) {
  return (
    <div className={`flex flex-col items-center ${offsetClass}`}>
      <div className="bg-cream-100 border border-cream-300 rounded-xl px-4 py-3 shadow-sm w-full max-w-[200px]">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 bg-coral-500 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs text-forest-500 font-medium">
              Trin {stepNumber}
            </span>
            <span className="font-display font-semibold text-sm text-forest-900 leading-tight">
              {label}
            </span>
            {description && (
              <span className="text-xs text-forest-600 leading-tight mt-0.5 truncate">
                {description}
              </span>
            )}
            {stat && (
              <span className="text-xs text-coral-600 font-semibold leading-tight mt-0.5">
                {stat}
              </span>
            )}
          </div>
        </div>
      </div>
      {!isLast && (
        <div className="py-3">
          <ChevronDown className="w-5 h-5 text-coral-500" />
        </div>
      )}
    </div>
  )
}

// Convert workflow steps to React Flow nodes
function stepsToNodes(
  steps: WorkflowStep[],
  visibleUpTo: number,
  activeIndex: number
): Node<WorkflowNodeData>[] {
  const positions = getScatteredPositions(steps.length)
  return steps.map((step, index) => ({
    id: `node-${index + 1}`,
    type: 'workflowNode',
    position: positions[index],
    data: {
      label: step.label,
      icon: iconMap[step.iconKey] || CheckCircle,
      description: step.description,
      stat: step.stat,
    },
    className: index <= visibleUpTo ? 'workflow-node-visible' : 'workflow-node-hidden',
    style: index === activeIndex
      ? { animation: 'workflowPulse 0.6s ease-in-out 3' }
      : undefined,
  }))
}

// Convert workflow steps to React Flow edges
function stepsToEdges(steps: WorkflowStep[], visibleUpTo: number): Edge[] {
  return steps.slice(1).map((_, index) => ({
    id: `edge-${index + 1}-${index + 2}`,
    source: `node-${index + 1}`,
    target: `node-${index + 2}`,
    className: index + 1 <= visibleUpTo ? 'workflow-edge-visible' : 'workflow-edge-hidden',
  }))
}

// Convert old-format nodes to steps
function oldNodesToSteps(nodes: OldWorkflowDictionary['nodes']): WorkflowStep[] {
  const labels = nodes || {}
  return [
    { label: labels.createClub || 'Opret klub', iconKey: 'UserPlus' },
    { label: labels.viewPrices || 'Se aftalepriser', iconKey: 'Tag' },
    { label: labels.collectOrder || 'Saml bestilling', iconKey: 'ShoppingCart' },
    { label: labels.approveInternal || 'Godkend internt', iconKey: 'CheckCircle' },
    { label: labels.confirmOrder || 'Bekræft ordre', iconKey: 'Send' },
    { label: labels.trackDelivery || 'Spor levering', iconKey: 'Truck' },
  ]
}

export default function Workflow({
  dictionary,
  locale,
  workflows: workflowsProp,
  hideHeader,
}: WorkflowProps) {
  const content = useMemo(
    () =>
      dictionary.workflow || {
        title: 'Fra bestilling til levering',
        subtitle: 'Følg jeres udstyr hele vejen - fra første klik til levering på døren',
      },
    [dictionary.workflow]
  )

  // Determine the workflows to render
  const resolvedWorkflows = useMemo((): WorkflowDefinition[] => {
    // Direct prop takes highest priority
    if (workflowsProp && workflowsProp.length > 0) {
      return workflowsProp
    }

    // New format: dictionary has workflows array
    const dictContent = content as NewWorkflowDictionary
    if (dictContent.workflows && dictContent.workflows.length > 0) {
      return dictContent.workflows
    }

    // Old format: backward compatibility with nodes object
    const oldContent = content as OldWorkflowDictionary
    return [
      {
        id: 'default',
        title: oldContent.title || 'Fra bestilling til levering',
        steps: oldNodesToSteps(oldContent.nodes),
      },
    ]
  }, [workflowsProp, content])

  const [activeTab, setActiveTab] = useState(0)
  const showTabs = resolvedWorkflows.length > 1
  const activeWorkflow = resolvedWorkflows[activeTab] || resolvedWorkflows[0]

  // Animation state
  const [visibleStepIndex, setVisibleStepIndex] = useState(-1)
  const [activeStepIndex, setActiveStepIndex] = useState(-1)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  // Reset animation when tab changes or when entering view
  const startAnimation = useCallback(() => {
    clearTimers()
    setVisibleStepIndex(-1)
    setActiveStepIndex(-1)

    const stepCount = activeWorkflow.steps.length
    // Reveal nodes one by one: 400ms per node + 300ms delay between
    for (let i = 0; i < stepCount; i++) {
      const nodeDelay = i * 700 // 400ms transition + 300ms gap
      const timer = setTimeout(() => {
        setVisibleStepIndex(i)
        setActiveStepIndex(i)
        // Remove pulse after showing next node (or after 1.8s for last)
        const pulseTimer = setTimeout(() => {
          setActiveStepIndex((prev) => (prev === i ? -1 : prev))
        }, i === stepCount - 1 ? 1800 : 600)
        timersRef.current.push(pulseTimer)
      }, nodeDelay + 200) // 200ms initial delay
      timersRef.current.push(timer)
    }
  }, [activeWorkflow.steps.length, clearTimers])

  // Intersection Observer
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )
    observer.observe(section)

    return () => {
      observer.disconnect()
      clearTimers()
    }
  }, [clearTimers])

  // Trigger animation when section enters view or tab changes
  useEffect(() => {
    if (isInView) {
      startAnimation()
    } else {
      clearTimers()
      setVisibleStepIndex(-1)
      setActiveStepIndex(-1)
    }
  }, [isInView, activeTab, startAnimation, clearTimers])

  // Build nodes and edges for current active workflow
  const nodes = useMemo(
    () => stepsToNodes(activeWorkflow.steps, visibleStepIndex, activeStepIndex),
    [activeWorkflow.steps, visibleStepIndex, activeStepIndex]
  )

  const edges = useMemo(
    () => stepsToEdges(activeWorkflow.steps, visibleStepIndex),
    [activeWorkflow.steps, visibleStepIndex]
  )

  // Mobile steps for current active workflow
  const mobileSteps = useMemo(
    () =>
      activeWorkflow.steps.map((step) => ({
        icon: iconMap[step.iconKey] || CheckCircle,
        label: step.label,
        description: step.description,
        stat: step.stat,
      })),
    [activeWorkflow.steps]
  )

  return (
    <section ref={sectionRef} className="bg-semantic-background-secondary py-12 md:py-16 lg:py-20">
      {/* Animation CSS */}
      <style>{`
        .workflow-node-hidden {
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 400ms ease-out, transform 400ms ease-out;
        }
        .workflow-node-visible {
          opacity: 1;
          transform: scale(1);
          transition: opacity 400ms ease-out, transform 400ms ease-out;
        }
        .workflow-edge-hidden .react-flow__edge-path {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          transition: stroke-dashoffset 300ms ease-out;
        }
        .workflow-edge-visible .react-flow__edge-path {
          stroke-dasharray: 200;
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 300ms ease-out;
        }
        @keyframes workflowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(249, 123, 95, 0); }
          50% { box-shadow: 0 0 0 4px rgba(249, 123, 95, 0.4); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-900 leading-[1.1] tracking-tight mb-6">
              {content.title}
            </h2>
            <p className="text-lg md:text-xl text-forest-700 leading-relaxed">
              {content.subtitle}
            </p>
          </div>
        )}

        {/* Tab Navigation */}
        {showTabs && (
          <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-10">
            {resolvedWorkflows.map((wf, index) => (
              <button
                key={wf.id}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-lg font-display font-semibold text-sm transition-colors ${
                  index === activeTab
                    ? 'bg-forest-900 text-cream-100'
                    : 'text-forest-600 hover:text-forest-900 hover:bg-cream-200'
                }`}
              >
                {wf.title}
              </button>
            ))}
          </div>
        )}

        {/* Mobile: Vertical list with scattered positioning (hidden on md+) */}
        <div className="md:hidden flex flex-col items-center gap-1">
          {mobileSteps.map((step, index) => (
            <MobileWorkflowStep
              key={`${activeWorkflow.id}-${index}`}
              icon={step.icon}
              label={step.label}
              description={step.description}
              stat={step.stat}
              stepNumber={index + 1}
              isLast={index === mobileSteps.length - 1}
              offsetClass={mobileOffsets[index % mobileOffsets.length]}
            />
          ))}
        </div>

        {/* Desktop: React Flow Canvas (hidden on mobile) */}
        <div className="hidden md:block h-[340px] w-full rounded-xl overflow-hidden [&_.react-flow]:cursor-default">
          <ReactFlow
            key={activeWorkflow.id}
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            defaultEdgeOptions={defaultEdgeOptions}
            fitView
            fitViewOptions={{ padding: 0.2 }}
            panOnDrag={false}
            zoomOnScroll={false}
            nodesDraggable={false}
            zoomOnPinch={false}
            preventScrolling={false}
            nodesConnectable={false}
            elementsSelectable={false}
            proOptions={{ hideAttribution: true }}
          />
        </div>
      </div>
    </section>
  )
}
