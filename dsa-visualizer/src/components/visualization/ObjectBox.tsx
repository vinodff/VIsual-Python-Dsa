"use client"

import { motion } from "framer-motion"

type Props = {
  name: string
  value: string
  address: string
  type: string
  isNew?: boolean
}

const typeColors: Record<string, { bg: string; border: string; text: string }> = {
  int: { bg: "linear-gradient(135deg, #dbeafe, #eff6ff)", border: "#93c5fd", text: "#2563eb" },
  str: { bg: "linear-gradient(135deg, #fce7f3, #fdf2f8)", border: "#f9a8d4", text: "#db2777" },
  float: { bg: "linear-gradient(135deg, #d1fae5, #ecfdf5)", border: "#6ee7b7", text: "#059669" },
  bool: { bg: "linear-gradient(135deg, #fef3c7, #fffbeb)", border: "#fcd34d", text: "#d97706" },
  list: { bg: "linear-gradient(135deg, #e0e7ff, #eef2ff)", border: "#a5b4fc", text: "#4f46e5" },
  dict: { bg: "linear-gradient(135deg, #ede9fe, #f5f3ff)", border: "#c4b5fd", text: "#7c3aed" },
  set: { bg: "linear-gradient(135deg, #dbeafe, #eff6ff)", border: "#93c5fd", text: "#2563eb" },
  tuple: { bg: "linear-gradient(135deg, #fecaca, #fef2f2)", border: "#fca5a5", text: "#dc2626" },
  deque: { bg: "linear-gradient(135deg, #d1fae5, #ecfdf5)", border: "#6ee7b7", text: "#059669" },
  default: { bg: "var(--el-surface-card)", border: "var(--el-primary)", text: "var(--el-ink)" },
}

export function ObjectBox({ name, value, address, type, isNew }: Props) {
  const typeKey = Object.keys(typeColors).find((k) => type.toLowerCase().includes(k))
  const colors = typeKey ? typeColors[typeKey] : typeColors.default

  return (
    <motion.div
      initial={isNew ? { opacity: 0, y: -24, scale: 0.7 } : { opacity: 1, y: 0, scale: 1 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 250,
          damping: 18,
          mass: 0.7,
        },
      }}
      className="flex flex-col items-center"
    >
      {/* Variable name label */}
      {name !== "?" && (
        <motion.div
          initial={isNew ? { opacity: 0, y: 8 } : {}}
          animate={{ opacity: 1, y: 0 }}
          className="mb-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold tracking-tight shadow-sm"
          style={{ background: "var(--el-primary)", color: "#fff" }}
        >
          {name}
        </motion.div>
      )}

      {/* Connecting line from name to object */}
      {name !== "?" && <div className="w-px h-2" style={{ background: "var(--el-hairline-strong)" }} />}

      {/* Object box */}
      <motion.div
        className="rounded-xl px-5 py-3.5 text-center min-w-[110px] shadow-md relative overflow-hidden"
        style={{
          background: colors.bg,
          border: `2px solid ${colors.border}`,
        }}
        whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
      >
        {/* New object indicator */}
        {isNew && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
            style={{ background: "var(--el-success)", color: "#fff" }}
          >
            +
          </motion.div>
        )}

        {/* Value */}
        <p className="text-xl font-bold font-mono" style={{ color: colors.text }}>
          {value}
        </p>

        {/* Type */}
        <p className="text-[10px] mt-1 font-mono font-semibold" style={{ color: colors.text, opacity: 0.7 }}>
          {type}
        </p>

        {/* Inner shimmer for new items */}
        {isNew && (
          <div
            className="absolute inset-0 el-animate-shimmer pointer-events-none"
            style={{ borderRadius: "inherit" }}
          />
        )}
      </motion.div>

      {/* Address label below */}
      <div
        className="mt-1.5 rounded-md px-2 py-0.5 text-[10px] font-mono"
        style={{ background: "var(--el-surface-strong)", color: "var(--el-muted)" }}
      >
        {address}
      </div>
    </motion.div>
  )
}
