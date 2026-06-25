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

const typeColors: Record<string, string> = {
  str: "var(--el-type-str)",
  int: "var(--el-type-int)",
  float: "var(--el-type-float)",
  bool: "var(--el-type-bool)",
  list: "var(--el-type-list)",
  dict: "var(--el-type-dict)",
  "function object": "var(--el-type-function)",
}

export function MemoryMap({ variables, memory }: Props) {
  const [activeVar, setActiveVar] = useState<string | null>(null)

  const getTypeClass = (type: string) => {
    const key = Object.keys(typeColors).find((t) => type.toLowerCase().includes(t))
    return key ? typeColors[key] : "var(--el-surface-strong)"
  }

  return (
    <div className="space-y-5">
      {/* Variable Table */}
      <div>
        <p className="el-caption-uppercase mb-3" style={{ color: "var(--el-muted)" }}>
          <span className="mr-1">&#x1F4CB;</span> Variable Table (name / reference)
        </p>
        <div className="flex flex-wrap gap-2">
          {variables.length === 0 ? (
            <p className="text-sm py-4 text-center w-full" style={{ color: "var(--el-muted)" }}>
              No variables yet / press play to begin
            </p>
          ) : (
            variables.map((v, i) => {
              const isActive = activeVar === v.name
              const cell = memory.find((c) => c.address === v.address)
              return (
                <motion.button
                  key={v.name}
                  initial={{ opacity: 0, scale: 0.85, y: -8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { delay: i * 0.06, type: "spring", stiffness: 200, damping: 18 },
                  }}
                  onClick={() => setActiveVar(isActive ? null : v.name)}
                  className="relative flex items-center gap-2.5 rounded-xl px-3.5 py-2 text-sm font-mono cursor-pointer transition-all"
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, var(--el-primary), #44403c)"
                      : "var(--el-surface-card)",
                    color: isActive ? "#fff" : "var(--el-ink)",
                    border: `1px solid ${isActive ? "transparent" : "var(--el-hairline)"}`,
                    boxShadow: isActive ? "0 4px 16px rgba(41,37,36,0.2)" : "var(--el-shadow-sm)",
                  }}
                >
                  <span className="font-semibold">{v.name}</span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                    style={{ color: isActive ? "rgba(255,255,255,0.5)" : "var(--el-muted-soft)" }}>
                    <path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ opacity: isActive ? 0.6 : 0.5 }}>{v.address}</span>
                  {v.isNew && (
                    <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full"
                      style={{ backgroundColor: "var(--el-success)" }} />
                  )}
                </motion.button>
              )
            })
          )}
        </div>
      </div>

      {/* Data flow bus */}
      {activeVar && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex items-center justify-center gap-2 py-1"
        >
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, var(--el-hairline-strong), transparent)" }} />
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full" style={{ background: "var(--el-surface-strong)", color: "var(--el-muted)" }}>
            dereference
          </span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, var(--el-hairline-strong), transparent)" }} />
        </motion.div>
      )}

      {/* Memory Map */}
      <div>
        <p className="el-caption-uppercase mb-3" style={{ color: "var(--el-muted)" }}>
          <span className="mr-1">&#x1F9E0;</span> Memory (address / object)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {memory.map((cell, i) => {
            const isActive = activeVar !== null && variables.find((v) => v.address === cell.address && v.name === activeVar)
            const isReferenced = variables.some((v) => v.address === cell.address)
            const hasValue = cell.value !== "0"
            return (
              <motion.div
                key={cell.address}
                layout
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { delay: i * 0.03, type: "spring", stiffness: 180, damping: 16 },
                }}
                className="rounded-xl p-3 font-mono text-sm transition-all cursor-default"
                style={{
                  background: isActive
                    ? "linear-gradient(135deg, #292524, #44403c)"
                    : isReferenced && hasValue
                      ? "var(--el-surface-card)"
                      : "var(--el-surface-strong)",
                  border: `1px solid ${
                    isActive
                      ? "transparent"
                      : isReferenced && hasValue
                        ? "var(--el-hairline)"
                        : "var(--el-hairline-soft)"
                  }`,
                  color: isActive ? "#fff" : "var(--el-ink)",
                  boxShadow: isActive
                    ? "0 8px 24px rgba(41,37,36,0.25)"
                    : isReferenced && hasValue
                      ? "var(--el-shadow-sm)"
                      : "none",
                }}
              >
                {/* Address + badge */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px]" style={{ opacity: 0.5 }}>{cell.address}</span>
                  {isActive && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-wider"
                      style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}>
                      &larr; {activeVar}
                    </span>
                  )}
                  {cell.isNew && !isActive && (
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--el-success)" }} />
                  )}
                </div>

                {/* Value */}
                <p className="text-base font-semibold truncate">
                  {hasValue ? cell.value : "\u2014"}
                </p>

                {/* Type badge */}
                {hasValue && (
                  <span
                    className="inline-block mt-1.5 text-[10px] font-semibold px-1.5 py-0.5 rounded-md"
                    style={{ background: getTypeClass(cell.type), color: "inherit" }}
                  >
                    {cell.type}
                  </span>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 text-[10px]" style={{ color: "var(--el-muted)" }}>
        <span className="flex items-center gap-1">
          <span
            className="w-2 h-2 rounded-sm"
            style={{ backgroundColor: "var(--el-surface-card)" }}
          />
          Referenced
        </span>
        <span className="flex items-center gap-1">
          <span
            className="w-2 h-2 rounded-sm"
            style={{ backgroundColor: "var(--el-surface-strong)" }}
          />
          Free
        </span>
        <span className="flex items-center gap-1">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--el-success)" }}
          />
          Newly allocated
        </span>
      </div>
    </div>
  )
}
