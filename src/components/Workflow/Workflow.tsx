'use client'

import { useState, useMemo, useRef, useEffect, useCallback, useLayoutEffect } from 'react'
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

// Icon lookup from string keys to Lucide components
const iconMap: Record<string, LucideIcon> = {
  UserPlus, Tag, ShoppingCart, CheckCircle, Send, Truck, Settings, Users,
  FileText, Zap, Search, Package, Building2, ThumbsUp, BarChart3, RefreshCw,
  LogIn, Wallet, ClipboardCheck, PieChart, Clock, Ruler, TrendingUp,
}

interface WorkflowStep {
  label: string
  iconKey: string
  description?: string
  stat?: string
}

interface WorkflowDefinition {
  id: string
  title: string
  subtitle?: string
  steps: WorkflowStep[]
}

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
  workflows?: WorkflowDefinition[]
  hideHeader?: boolean
}

// Scatter offsets for organic feel on desktop grid (px)
const desktopScatter = [
  { x: 0, y: 0 },
  { x: 16, y: 4 },
  { x: -8, y: -2 },
  { x: 20, y: 6 },
  { x: -4, y: 2 },
  { x: 10, y: -4 },
  { x: 4, y: 8 },
  { x: -12, y: 0 },
  { x: 14, y: -6 },
  { x: -6, y: 4 },
]

// Scattered offsets for organic look on mobile
const mobileOffsets = [
  'translate-x-0 -translate-y-1',
  'translate-x-6 translate-y-1',
  '-translate-x-4 -translate-y-1',
  'translate-x-8 translate-y-2',
  '-translate-x-3 translate-y-1',
  'translate-x-5 -translate-y-1',
]

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

// Desktop workflow card (rendered at natural CSS size — no canvas scaling)
function DesktopCard({
  icon: Icon,
  label,
  description,
  stat,
  stepNumber,
}: {
  icon: LucideIcon
  label: string
  description?: string
  stat?: string
  stepNumber: number
}) {
  return (
    <div className="bg-cream-50 border border-cream-300/60 rounded-2xl px-7 py-6 shadow-md relative">
      <span className="absolute -top-2.5 -left-2.5 w-7 h-7 rounded-full bg-forest-900 text-cream-100 text-xs font-bold flex items-center justify-center shadow-sm">
        {stepNumber}
      </span>
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 w-[52px] h-[52px] bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl flex items-center justify-center shadow-sm">
          <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
        </div>
        <div className="flex flex-col min-w-0 gap-1.5 pt-0.5">
          <span className="font-display font-extrabold text-xl text-forest-900 leading-tight tracking-tight">
            {label}
          </span>
          {description && (
            <span className="text-[15px] text-forest-600 leading-relaxed">
              {description}
            </span>
          )}
          {stat && (
            <span className="text-sm text-coral-600 font-bold tracking-wide uppercase mt-0.5">
              {stat}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

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
      <div className="bg-cream-50 border border-cream-300/60 rounded-2xl px-6 py-5 shadow-md w-full max-w-[320px] relative">
        <span className="absolute -top-2.5 -left-2.5 w-7 h-7 rounded-full bg-forest-900 text-cream-100 text-xs font-bold flex items-center justify-center shadow-sm">
          {stepNumber}
        </span>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-coral-500 to-coral-600 rounded-xl flex items-center justify-center shadow-sm">
            <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
          </div>
          <div className="flex flex-col min-w-0 gap-1">
            <span className="font-display font-extrabold text-lg text-forest-900 leading-tight tracking-tight">
              {label}
            </span>
            {description && (
              <span className="text-sm text-forest-600 leading-relaxed">
                {description}
              </span>
            )}
            {stat && (
              <span className="text-xs text-coral-600 font-bold tracking-wide uppercase mt-0.5">
                {stat}
              </span>
            )}
          </div>
        </div>
      </div>
      {!isLast && (
        <div className="py-2.5">
          <ChevronDown className="w-5 h-5 text-coral-400" />
        </div>
      )}
    </div>
  )
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

  const resolvedWorkflows = useMemo((): WorkflowDefinition[] => {
    if (workflowsProp && workflowsProp.length > 0) return workflowsProp
    const dictContent = content as NewWorkflowDictionary
    if (dictContent.workflows && dictContent.workflows.length > 0) return dictContent.workflows
    const oldContent = content as OldWorkflowDictionary
    return [{
      id: 'default',
      title: oldContent.title || 'Fra bestilling til levering',
      steps: oldNodesToSteps(oldContent.nodes),
    }]
  }, [workflowsProp, content])

  const [activeTab, setActiveTab] = useState(0)
  const showTabs = resolvedWorkflows.length > 1
  const activeWorkflow = resolvedWorkflows[activeTab] || resolvedWorkflows[0]

  // Animation state
  const [visibleStepIndex, setVisibleStepIndex] = useState(-1)
  const [visibleEdgeIndex, setVisibleEdgeIndex] = useState(-1)
  const [activeStepIndex, setActiveStepIndex] = useState(-1)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const isInViewRef = useRef(false)

  // Refs for dynamic edge computation
  const desktopContainerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [edgePaths, setEdgePaths] = useState<string[]>([])

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  // Compute SVG edge paths from actual card positions
  const computeEdgePaths = useCallback(() => {
    const container = desktopContainerRef.current
    if (!container) return

    const cRect = container.getBoundingClientRect()
    const newPaths: string[] = []

    for (let i = 0; i < cardRefs.current.length - 1; i++) {
      const srcWrapper = cardRefs.current[i]
      const tgtWrapper = cardRefs.current[i + 1]
      if (!srcWrapper || !tgtWrapper) { newPaths.push(''); continue }

      // Measure the inner card element (with the visual border/bg), not the grid cell wrapper
      const srcEl = (srcWrapper.firstElementChild as HTMLElement) || srcWrapper
      const tgtEl = (tgtWrapper.firstElementChild as HTMLElement) || tgtWrapper
      const src = srcEl.getBoundingClientRect()
      const tgt = tgtEl.getBoundingClientRect()
      const srcRow = i % 2 // 0=top row, 1=bottom row

      let sx: number, sy: number, ex: number, ey: number

      if (srcRow === 0) {
        // Top → bottom: connect from bottom-center to top-center
        sx = src.left + src.width / 2 - cRect.left
        sy = src.bottom - cRect.top
        ex = tgt.left + tgt.width / 2 - cRect.left
        ey = tgt.top - cRect.top
      } else {
        // Bottom → top: connect from right-center to left-center
        sx = src.right - cRect.left
        sy = src.top + src.height / 2 - cRect.top
        ex = tgt.left - cRect.left
        ey = tgt.top + tgt.height / 2 - cRect.top
      }

      // Smooth cubic bezier
      const midY = (sy + ey) / 2
      newPaths.push(
        `M ${sx.toFixed(1)} ${sy.toFixed(1)} C ${sx.toFixed(1)} ${midY.toFixed(1)}, ${ex.toFixed(1)} ${midY.toFixed(1)}, ${ex.toFixed(1)} ${ey.toFixed(1)}`
      )
    }

    setEdgePaths(newPaths)
  }, [])

  // Recompute edges after layout and on resize
  useLayoutEffect(() => {
    const raf = requestAnimationFrame(computeEdgePaths)
    window.addEventListener('resize', computeEdgePaths)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', computeEdgePaths)
    }
  }, [activeWorkflow, computeEdgePaths])

  // Animation cycle: reveal → hold → fade out → pause → restart
  const startAnimation = useCallback(() => {
    clearTimers()
    setVisibleStepIndex(-1)
    setVisibleEdgeIndex(-1)
    setActiveStepIndex(-1)
    setIsFadingOut(false)

    const stepCount = activeWorkflow.steps.length
    let elapsed = 300

    for (let i = 0; i < stepCount; i++) {
      const nodeTime = elapsed

      const nodeTimer = setTimeout(() => {
        setVisibleStepIndex(i)
        setActiveStepIndex(i)
        // Also draw the edge leading TO this node (edge i-1) simultaneously
        if (i > 0) setVisibleEdgeIndex(i - 1)
        const pulseDuration = i === stepCount - 1 ? 1800 : 1200
        const pulseTimer = setTimeout(() => {
          setActiveStepIndex((prev) => (prev === i ? -1 : prev))
        }, pulseDuration)
        timersRef.current.push(pulseTimer)
      }, nodeTime)
      timersRef.current.push(nodeTimer)

      if (i < stepCount - 1) {
        // Pause between cards: card transition (500ms) + breathing room (800ms)
        elapsed += 500 + 800
      }
    }

    const totalRevealTime = elapsed + 1800

    const holdTimer = setTimeout(() => {
      if (!isInViewRef.current) return
      setIsFadingOut(true)
      setActiveStepIndex(-1)

      const restartTimer = setTimeout(() => {
        if (!isInViewRef.current) return
        setIsFadingOut(false)
        setVisibleStepIndex(-1)
        setVisibleEdgeIndex(-1)
        const cycleTimer = setTimeout(() => {
          if (isInViewRef.current) startAnimation()
        }, 100)
        timersRef.current.push(cycleTimer)
      }, 800)
      timersRef.current.push(restartTimer)
    }, totalRevealTime + 2500)
    timersRef.current.push(holdTimer)
  }, [activeWorkflow.steps.length, clearTimers])

  // Intersection Observer
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )
    observer.observe(section)

    return () => {
      observer.disconnect()
      clearTimers()
    }
  }, [clearTimers])

  // Trigger animation when in view or tab changes
  useEffect(() => {
    if (isInView) {
      startAnimation()
    } else {
      clearTimers()
      setVisibleStepIndex(-1)
      setVisibleEdgeIndex(-1)
      setActiveStepIndex(-1)
      setIsFadingOut(false)
    }
  }, [isInView, activeTab, startAnimation, clearTimers])

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

  // Prepare card refs array for current workflow
  const stepCount = activeWorkflow.steps.length
  if (cardRefs.current.length !== stepCount) {
    cardRefs.current = Array(stepCount).fill(null)
  }

  return (
    <section ref={sectionRef} className="bg-semantic-background-secondary py-16 md:py-24 lg:py-28">
      <style>{`
        .wf-card-hidden {
          opacity: 0;
          transform: scale(0.88) translateY(10px);
          transition: opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .wf-card-visible {
          opacity: 1;
          transform: scale(1) translateY(0);
          transition: opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .wf-edge-hidden {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          opacity: 0;
          transition: stroke-dashoffset 800ms ease-out, opacity 80ms ease-out;
        }
        .wf-edge-visible {
          stroke-dasharray: 600;
          stroke-dashoffset: 0;
          opacity: 1;
          transition: stroke-dashoffset 800ms ease-out, opacity 80ms ease-out;
        }
        @keyframes workflowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(239, 108, 79, 0); }
          50% { box-shadow: 0 0 0 8px rgba(239, 108, 79, 0.15), 0 4px 20px rgba(239, 108, 79, 0.1); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
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
          <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
            {resolvedWorkflows.map((wf, index) => (
              <button
                key={wf.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2.5 rounded-full font-display font-semibold text-sm transition-all duration-200 ${
                  index === activeTab
                    ? 'bg-forest-900 text-cream-100 shadow-md'
                    : 'text-forest-600 hover:text-forest-900 hover:bg-cream-200'
                }`}
              >
                {wf.title}
              </button>
            ))}
          </div>
        )}

        {/* Mobile layout (below lg) */}
        <div className="lg:hidden flex flex-col items-center gap-1 px-2">
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

        {/* Desktop layout (lg+): CSS Grid — cards render at natural size */}
        <div
          ref={desktopContainerRef}
          className="hidden lg:grid relative"
          style={{
            gridTemplateColumns: `repeat(${Math.ceil(stepCount / 2)}, 1fr)`,
            gap: '80px 32px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {/* SVG edge overlay — paths computed dynamically from card positions */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ overflow: 'visible', zIndex: 0 }}
          >
            {edgePaths.map((d, i) =>
              d ? (
                <path
                  key={`edge-${activeWorkflow.id}-${i}`}
                  d={d}
                  fill="none"
                  stroke="#F97B5F"
                  strokeWidth="2"
                  className={
                    i <= visibleEdgeIndex && !isFadingOut
                      ? 'wf-edge-visible'
                      : 'wf-edge-hidden'
                  }
                />
              ) : null
            )}
          </svg>

          {/* Cards placed in 3-col × 2-row staggered grid */}
          {activeWorkflow.steps.map((step, i) => {
            const Icon = iconMap[step.iconKey] || CheckCircle
            const row = i % 2 // 0 = top row, 1 = bottom row
            const col = Math.floor(i / 2)
            const scatter = desktopScatter[i % desktopScatter.length]
            const isVisible = i <= visibleStepIndex && !isFadingOut
            const isPulsing = i === activeStepIndex

            return (
              <div
                key={`${activeWorkflow.id}-${i}`}
                ref={(el) => { cardRefs.current[i] = el }}
                className={isVisible ? 'wf-card-visible' : 'wf-card-hidden'}
                style={{
                  gridRow: row + 1,
                  gridColumn: col + 1,
                  transform: isVisible
                    ? `translate(${scatter.x}px, ${scatter.y}px)`
                    : `translate(${scatter.x}px, ${scatter.y + 10}px) scale(0.88)`,
                  zIndex: 1,
                  ...(isPulsing
                    ? { animation: 'workflowPulse 1s ease-in-out 2', borderRadius: '1rem' }
                    : {}),
                }}
              >
                <DesktopCard
                  icon={Icon}
                  label={step.label}
                  description={step.description}
                  stat={step.stat}
                  stepNumber={i + 1}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
