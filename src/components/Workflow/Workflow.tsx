'use client'

import { ReactFlow, Background, Node, Edge } from '@xyflow/react'
import '@xyflow/react/dist/style.css'

interface WorkflowProps {
  dictionary: {
    workflow?: {
      title?: string
      subtitle?: string
    }
  }
  locale: string
}

// Placeholder nodes for basic canvas setup
const initialNodes: Node[] = [
  {
    id: '1',
    type: 'default',
    position: { x: 250, y: 100 },
    data: { label: 'Workflow Step' },
  },
]

const initialEdges: Edge[] = []

export default function Workflow({ dictionary }: WorkflowProps) {
  const content = dictionary.workflow || {
    title: 'Fra bestilling til levering',
    subtitle: 'Følg jeres udstyr hele vejen - fra første klik til levering på døren',
  }

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
        <div className="h-[300px] w-full rounded-xl overflow-hidden">
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            fitView
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
