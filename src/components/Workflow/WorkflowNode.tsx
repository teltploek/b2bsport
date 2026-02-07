'use client'

import { memo } from 'react'
import { Handle, Position } from '@xyflow/react'
import type { LucideIcon } from 'lucide-react'

export interface WorkflowNodeData extends Record<string, unknown> {
  label: string
  icon: LucideIcon
  description?: string
  stat?: string
  stepNumber?: number
}

interface WorkflowNodeProps {
  data: WorkflowNodeData
}

function WorkflowNode({ data }: WorkflowNodeProps) {
  const Icon = data.icon

  return (
    <div className="bg-cream-50 border border-cream-300/60 rounded-2xl px-7 py-6 shadow-md min-w-[300px] max-w-[340px] relative">
      {/* Hidden handles for edge connections */}
      <Handle
        type="target"
        position={Position.Left}
        className="!bg-transparent !w-0 !h-0 !border-0 !min-w-0 !min-h-0"
      />

      {/* Step number badge */}
      {data.stepNumber && (
        <span className="absolute -top-2.5 -left-2.5 w-7 h-7 rounded-full bg-forest-900 text-cream-100 text-xs font-bold flex items-center justify-center shadow-sm">
          {data.stepNumber}
        </span>
      )}

      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 w-[52px] h-[52px] bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl flex items-center justify-center shadow-sm">
          <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
        </div>
        <div className="flex flex-col min-w-0 gap-1.5 pt-0.5">
          <span className="font-display font-extrabold text-xl text-forest-900 leading-tight tracking-tight">
            {data.label}
          </span>
          {data.description && (
            <span className="text-[15px] text-forest-600 leading-relaxed">
              {data.description}
            </span>
          )}
          {data.stat && (
            <span className="text-sm text-coral-600 font-bold tracking-wide uppercase mt-0.5">
              {data.stat}
            </span>
          )}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="!bg-transparent !w-0 !h-0 !border-0 !min-w-0 !min-h-0"
      />
    </div>
  )
}

export default memo(WorkflowNode)
