'use client'

import { memo } from 'react'
import { Handle, Position } from '@xyflow/react'
import type { LucideIcon } from 'lucide-react'

export interface WorkflowNodeData {
  label: string
  icon: LucideIcon
}

interface WorkflowNodeProps {
  data: WorkflowNodeData
}

function WorkflowNode({ data }: WorkflowNodeProps) {
  const Icon = data.icon

  return (
    <div className="bg-cream-100 border border-cream-300 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow min-w-[140px]">
      {/* Hidden handles for edge connections */}
      <Handle
        type="target"
        position={Position.Left}
        className="!bg-coral-500 !w-2 !h-2 !border-0"
      />

      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-coral-500 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" strokeWidth={2} />
        </div>
        <span className="font-display font-semibold text-sm text-forest-900 leading-tight">
          {data.label}
        </span>
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
