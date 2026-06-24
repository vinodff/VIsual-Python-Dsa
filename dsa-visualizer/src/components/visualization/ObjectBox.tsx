"use client"

import { motion } from "framer-motion"

type Props = {
  name: string
  value: string
  address: string
  type: string
  isNew?: boolean
}

export function ObjectBox({ name, value, address, type, isNew }: Props) {
  return (
    <motion.div
      initial={isNew ? { opacity: 0, y: -20, scale: 0.8 } : { opacity: 1, y: 0, scale: 1 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 20, mass: 0.8 },
      }}
      className="flex flex-col items-center"
    >
      {/* Object box */}
      <div
        className="rounded-md px-5 py-3 text-center min-w-[100px]"
        style={{
          backgroundColor: "var(--el-surface-card)",
          border: "2px solid var(--el-primary)",
          boxShadow: "var(--el-shadow-card)",
        }}
      >
        <p className="text-2xl font-bold font-mono">{value}</p>
        <p className="text-xs mt-1 font-mono" style={{ color: "var(--el-muted)" }}>
          {type}
        </p>
      </div>

      {/* Address label below */}
      <div
        className="mt-1 rounded-sm px-2 py-0.5 text-[10px] font-mono"
        style={{ backgroundColor: "var(--el-surface-strong)", color: "var(--el-muted)" }}
      >
        {address}
      </div>

      {/* Name label above */}
      <div
        className="mb-1 rounded-sm px-2 py-0.5 text-xs font-semibold"
        style={{ backgroundColor: "var(--el-primary)", color: "#fff" }}
      >
        {name}
      </div>
    </motion.div>
  )
}
