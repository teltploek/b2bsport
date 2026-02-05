'use client'

import { useMemo } from 'react'
import { ReactFlow, Background, Node, Edge } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import {
  UserPlus,
  Tag,
  ShoppingCart,
  CheckCircle,
  Send,
  Truck,
} from 'lucide-react'
import WorkflowNode, { WorkflowNodeData } from './WorkflowNode'

interface WorkflowProps {
  dictionary: {
    workflow?: {
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
    }
  }
  locale: string
}

// Custom node types for React Flow
const nodeTypes = {
  workflowNode: WorkflowNode,
}

// Edge styling with coral color
const defaultEdgeOptions = {
  style: {
    strokeWidth: 2,
    stroke: '#F97B5F', // coral-500
  },
  animated: true,
}

export default function Workflow({ dictionary }: WorkflowProps) {
  const content = dictionary.workflow || {
    title: 'Fra bestilling til levering',
    subtitle: 'Følg jeres udstyr hele vejen - fra første klik til levering på døren',
  }

  // Node definitions with icons and positions for horizontal layout
  const nodes: Node<WorkflowNodeData>[] = useMemo(() => {
    const nodeLabels = content.nodes || {
      createClub: 'Opret klub',
      viewPrices: 'Se aftalepriser',
      collectOrder: 'Saml bestilling',
      approveInternal: 'Godkend internt',
      confirmOrder: 'Bekræft ordre',
      trackDelivery: 'Spor levering',
    }

    return [
      {
        id: 'node-1',
        type: 'workflowNode',
        position: { x: 0, y: 50 },
        data: { label: nodeLabels.createClub || 'Opret klub', icon: UserPlus },
      },
      {
        id: 'node-2',
        type: 'workflowNode',
        position: { x: 200, y: 50 },
        data: { label: nodeLabels.viewPrices || 'Se aftalepriser', icon: Tag },
      },
      {
        id: 'node-3',
        type: 'workflowNode',
        position: { x: 400, y: 50 },
        data: { label: nodeLabels.collectOrder || 'Saml bestilling', icon: ShoppingCart },
      },
      {
        id: 'node-4',
        type: 'workflowNode',
        position: { x: 600, y: 50 },
        data: { label: nodeLabels.approveInternal || 'Godkend internt', icon: CheckCircle },
      },
      {
        id: 'node-5',
        type: 'workflowNode',
        position: { x: 800, y: 50 },
        data: { label: nodeLabels.confirmOrder || 'Bekræft ordre', icon: Send },
      },
      {
        id: 'node-6',
        type: 'workflowNode',
        position: { x: 1000, y: 50 },
        data: { label: nodeLabels.trackDelivery || 'Spor levering', icon: Truck },
      },
    ]
  }, [content.nodes])

  // Edges connecting nodes in sequence
  const edges: Edge[] = useMemo(
    () => [
      { id: 'edge-1-2', source: 'node-1', target: 'node-2' },
      { id: 'edge-2-3', source: 'node-2', target: 'node-3' },
      { id: 'edge-3-4', source: 'node-3', target: 'node-4' },
      { id: 'edge-4-5', source: 'node-4', target: 'node-5' },
      { id: 'edge-5-6', source: 'node-5', target: 'node-6' },
    ],
    []
  )

  return (
    <section className="bg-semantic-background-secondary py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-900 leading-[1.1] tracking-tight mb-6">
            {content.title}
          </h2>
          <p className="text-lg md:text-xl text-forest-700 leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* React Flow Canvas */}
        <div className="h-[200px] w-full rounded-xl overflow-hidden">
          <ReactFlow
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
            proOptions={{ hideAttribution: true }}
          >
            <Background color="#e5e7eb" gap={16} />
          </ReactFlow>
        </div>
      </div>
    </section>
  )
}
