'use client'

import { memo } from 'react'
import { Handle, Position } from '@xyflow/react'
import type { LucideIcon } from 'lucide-react'

export interface WorkflowNodeData extends Record<string, unknown> {
  label: string
  icon: LucideIcon
  description?: string
  stat?: string
}

interface WorkflowNodeProps {
  data: WorkflowNodeData
}

function WorkflowNode({ data }: WorkflowNodeProps) {
  const Icon = data.icon

  return (
    <div className="bg-cream-100 border border-cream-300 rounded-xl px-6 py-5 shadow-sm min-w-[260px]">
      {/* Hidden handles for edge connections */}
      <Handle
        type="target"
        position={Position.Left}
        className="!bg-coral-500 !w-2 !h-2 !border-0"
      />

      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-14 h-14 bg-coral-500 rounded-xl flex items-center justify-center">
          <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-display font-bold text-lg text-forest-900 leading-tight">
            {data.label}
          </span>
          {data.description && (
            <span className="text-base text-forest-600 leading-snug mt-1">
              {data.description}
            </span>
          )}
          {data.stat && (
            <span className="text-base text-coral-600 font-semibold leading-snug mt-1">
              {data.stat}
            </span>
          )}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="!bg-coral-500 !w-2 !h-2 !border-0"
      />
    </div>
  )
}

export default memo(WorkflowNode)
