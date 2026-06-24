"use client"

import { motion } from "framer-motion"

type Props = {
  lines: string[]
  currentLine: number | null
  onLineClick?: (line: number) => void
}

export function StepCodeBlock({ lines, currentLine, onLineClick }: Props) {
  return (
    <div
      className="overflow-hidden rounded-md text-sm font-mono leading-6"
      style={{
        backgroundColor: "var(--el-surface-card)",
        border: "1px solid var(--el-hairline)",
      }}
    >
      {lines.map((line, i) => {
        const isHighlighted = currentLine === i + 1
        return (
          <div
            key={i}
            onClick={() => onLineClick?.(i + 1)}
            className="flex cursor-pointer transition-colors"
            style={{
              backgroundColor: isHighlighted ? "var(--el-primary)" : "transparent",
              color: isHighlighted ? "#fff" : "var(--el-ink)",
            }}
          >
            <span
              className="w-8 text-right pr-3 select-none text-xs"
              style={{ color: isHighlighted ? "rgba(255,255,255,0.6)" : "var(--el-muted)" }}
            >
              {i + 1}
            </span>
            <span className="whitespace-pre">{line}</span>
          </div>
        )
      })}
    </div>
  )
}
