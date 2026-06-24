"use client"

import { motion } from "framer-motion"
import { useState } from "react"

type MemoryCell = {
  address: string
  value: string
  type: string
  isNew?: boolean
  isActive?: boolean
}

type VariableRef = {
  name: string
  address: string
  isNew?: boolean
}

type Props = {
  variables: VariableRef[]
  memory: MemoryCell[]
}

export function MemoryMap({ variables, memory }: Props) {
  const [activeCell, setActiveCell] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      {/* Variable → Reference Table */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--el-muted)" }}>
          Variable Table (name → reference)
        </p>
        <div className="flex flex-wrap gap-2">
          {variables.length === 0 ? (
            <p className="text-sm" style={{ color: "var(--el-muted)" }}>No variables yet</p>
          ) : (
            variables.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, ease: [0.175, 0.885, 0.32, 1.1] }}
                className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-mono"
                style={{
                  backgroundColor: activeCell === v.name ? "var(--el-surface-strong)" : "var(--el-surface-card)",
                  border: `1px solid ${activeCell === v.name ? "var(--el-primary)" : "var(--el-hairline)"}`,
                  color: "var(--el-ink)",
                }}
                onMouseEnter={() => setActiveCell(v.name)}
                onMouseLeave={() => setActiveCell(null)}
              >
                <span className="font-semibold">{v.name}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-zinc-400">
                  <path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ color: "var(--el-muted)" }}>{v.address}</span>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Memory Map */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--el-muted)" }}>
          Memory (address → object)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {memory.map((cell, i) => {
            const isActive = activeCell && variables.find(v => v.address === cell.address && v.name === activeCell)
            return (
              <motion.div
                key={cell.address}
                initial={{ opacity: 0, y: 8 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: cell.isNew ? [1, 1.05, 1] : 1,
                }}
                transition={{ delay: i * 0.03, duration: 0.2 }}
                className="rounded-md p-3 font-mono text-sm"
                style={{
                  backgroundColor: isActive ? "var(--el-surface-strong)" : "var(--el-surface-card)",
                  border: `1px solid ${isActive ? "var(--el-primary)" : cell.value !== "0" ? "var(--el-hairline-strong)" : "var(--el-hairline)"}`,
                  boxShadow: isActive ? "var(--el-shadow-card)" : "none",
                }}
              >
                <p className="text-xs" style={{ color: "var(--el-muted)" }}>{cell.address}</p>
                <p className="text-base font-semibold mt-0.5">{cell.value}</p>
                <p className="text-xs" style={{ color: "var(--el-muted)" }}>{cell.type}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
