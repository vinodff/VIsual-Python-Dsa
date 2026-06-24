"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lesson } from "@/types"

type Props = { lesson: Lesson }
type VarItem = { name: string; value: string; address: string; type: string }
const COLORS = ["#006bff", "#28a948", "#fc0035", "#ffae00", "#8b5cf6", "#06b4d6"]
let addrCounter = 0x3000

function detectType(val: string): string {
  if (val === "True" || val === "False") return "bool"
  if (val.startsWith('"') || val.startsWith("'")) return "str"
  if (val === "None") return "NoneType"
  if (val.includes(".") && !isNaN(Number(val))) return "float"
  if (!isNaN(Number(val))) return "int"
  return "str"
}

export function PlaygroundSection({ lesson }: Props) {
  const isStrings = lesson.id === "strings"
  const isDataTypes = lesson.id === "data-types"
  const [variables, setVariables] = useState<VarItem[]>([])
  const [varName, setVarName] = useState("")
  const [varValue, setVarValue] = useState("")
  const [logs, setLogs] = useState<string[]>([])
  const [stringResult, setStringResult] = useState<string | null>(null)
  const [stringOp, setStringOp] = useState<"upper" | "lower" | "len" | "reverse">("upper")

  const addVariable = () => {
    if (!varName.trim()) return
    const existing = variables.find((v) => v.name === varName)
    const addr = `0x${(addrCounter++).toString(16).toUpperCase()}`
    const type = detectType(varValue)
    const displayVal = varValue || '""'
    if (existing) {
      setVariables((prev) => prev.map((v) => (v.name === varName ? { ...v, value: displayVal, type } : v)))
      setLogs((prev) => [`Reassigned ${varName} → ${displayVal} (${type})`, ...prev.slice(0, 9)])
    } else {
      setVariables((prev) => [...prev, { name: varName, value: displayVal, address: addr, type }])
      setLogs((prev) => [`Created ${varName} = ${displayVal} at ${addr} (${type})`, ...prev.slice(0, 9)])
    }
    setVarName(""); setVarValue("")
  }

  const deleteVariable = (name: string) => {
    setVariables((prev) => prev.filter((v) => v.name !== name))
    setLogs((prev) => [`Deleted ${name}`, ...prev.slice(0, 9)])
  }
  const clearAll = () => { setVariables([]); setLogs([]); setStringResult(null) }

  const runStringOp = () => {
    if (variables.length === 0) return
    const strVar = variables.find((v) => v.type === "str")
    if (!strVar) { setStringResult("No string variable found. Create one first."); return }
    const raw = strVar.value.replace(/^["']|["']$/g, "")
    if (stringOp === "upper") setStringResult(raw.toUpperCase())
    else if (stringOp === "lower") setStringResult(raw.toLowerCase())
    else if (stringOp === "len") setStringResult(`Length: ${raw.length}`)
    else if (stringOp === "reverse") setStringResult(raw.split("").reverse().join(""))
    setLogs((prev) => [`${strVar.name}.${stringOp}() → ${stringResult}`, ...prev.slice(0, 9)])
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--el-primary)" }}>Section 4 of 8</p>
        <h2 className="text-2xl font-semibold tracking-tight" style={{ letterSpacing: "-0.96px" }}>
          {isStrings ? "String Playground" : isDataTypes ? "Type Playground" : "Interactive Playground"}
        </h2>
        <p className="text-sm mt-1" style={{ color: "var(--el-body)" }}>
          {isStrings ? "Create strings and run operations on them."
            : isDataTypes ? "Try different values — Python detects the type automatically."
            : "Create variables and watch them appear in memory."}
        </p>
      </div>

      <div className="rounded-md p-5 flex flex-wrap items-end gap-3" style={{ backgroundColor: "var(--el-canvas-soft)", border: "1px solid var(--el-hairline)" }}>
        <div className="flex-1 min-w-[140px]">
          <label className="text-xs font-medium mb-1 block" style={{ color: "var(--el-muted)" }}>Name</label>
          <input value={varName} onChange={(e) => setVarName(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addVariable()}
            placeholder="e.g. text" className="el-input w-full el-code" />
        </div>
        <div className="flex-1 min-w-[100px]">
          <label className="text-xs font-medium mb-1 block" style={{ color: "var(--el-muted)" }}>Value</label>
          <input value={varValue} onChange={(e) => setVarValue(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addVariable()}
            placeholder={isStrings ? '"Hello"' : '42, 3.14, "hi"'} className="el-input w-full el-code" />
        </div>
        <button onClick={addVariable} className="el-btn el-btn-primary">Assign →</button>
        {variables.length > 0 && <button onClick={clearAll} className="el-btn el-btn-outline">Clear</button>}
      </div>

      {/* String operations panel */}
      {isStrings && variables.filter((v) => v.type === "str").length > 0 && (
        <div className="rounded-md p-5 flex flex-wrap items-end gap-3" style={{ backgroundColor: "var(--el-canvas-soft)", border: "1px solid var(--el-hairline)" }}>
          <div className="flex items-center gap-2">
            {(["upper", "lower", "len", "reverse"] as const).map((op) => (
              <button key={op} onClick={() => setStringOp(op)}
                className="geist-btn text-xs !h-8 !px-3"
                style={{
                  backgroundColor: stringOp === op ? "var(--el-primary)" : "var(--el-surface-card)",
                  color: stringOp === op ? "#fff" : "var(--el-ink)",
                  border: stringOp === op ? "none" : "1px solid var(--el-hairline)",
                }}>
                .{op}()
              </button>
            ))}
          </div>
          <button onClick={runStringOp} className="el-btn el-btn-primary !h-8">Run</button>
          {stringResult && (
            <div className="text-sm font-semibold el-code px-3 py-1.5 rounded-sm" style={{ backgroundColor: "var(--el-success)20", color: "var(--el-success)" }}>
              → {stringResult}
            </div>
          )}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--el-muted)" }}>Variable Table</p>
          <div className="rounded-md overflow-hidden" style={{ border: "1px solid var(--el-hairline)", minHeight: "120px" }}>
            {variables.length === 0 ? (
              <div className="p-5 text-sm" style={{ color: "var(--el-muted)" }}>Assign a variable above</div>
            ) : (
              <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                <thead><tr style={{ backgroundColor: "var(--el-surface-strong)" }}>
                  <th className="text-left px-4 py-2 font-medium" style={{ color: "var(--el-muted)" }}>Name</th>
                  <th className="text-left px-4 py-2 font-medium" style={{ color: "var(--el-muted)" }}>Value</th>
                  <th className="text-left px-4 py-2 font-medium" style={{ color: "var(--el-muted)" }}>Address</th>
                  <th className="text-left px-4 py-2 font-medium" style={{ color: "var(--el-muted)" }}>Type</th>
                  <th></th>
                </tr></thead>
                <tbody>
                  <AnimatePresence>
                    {variables.map((v) => (
                      <motion.tr key={v.name} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: 20 }} style={{ borderTop: "1px solid var(--el-hairline)" }}>
                        <td className="px-4 py-2.5 font-semibold el-code">{v.name}</td>
                        <td className="px-4 py-2.5 el-code">{v.value}</td>
                        <td className="px-4 py-2.5 el-code text-xs" style={{ color: "var(--el-muted)" }}>{v.address}</td>
                        <td className="px-4 py-2.5">
                          <span className="text-xs font-semibold px-1.5 py-0.5 rounded-sm el-code"
                            style={{ backgroundColor: (v.type === "str" ? "#006bff" : v.type === "int" ? "#28a948" : v.type === "float" ? "#fc0035" : "#ffae00") + "20",
                              color: v.type === "str" ? "#006bff" : v.type === "int" ? "#28a948" : v.type === "float" ? "#fc0035" : "#ffae00" }}>
                            {v.type}
                          </span>
                        </td>
                        <td className="px-2 py-2.5"><button onClick={() => deleteVariable(v.name)} className="text-xs" style={{ color: "var(--el-error)" }}>✕</button></td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            )}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--el-muted)" }}>Memory Objects</p>
          <div className="rounded-md p-5 flex flex-wrap gap-3 content-start" style={{ border: "1px solid var(--el-hairline)", minHeight: "120px", backgroundColor: "var(--el-surface-card)" }}>
            <AnimatePresence>
              {variables.map((v) => (
                <motion.div key={v.name} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }} className="flex flex-col items-center">
                  <div className="rounded-md px-4 py-2 text-center min-w-[70px]" style={{ backgroundColor: "var(--el-surface-card)", border: "2px solid var(--el-primary)" }}>
                    <p className="text-lg font-bold el-code">{v.value}</p>
                    <p className="text-[10px] el-code" style={{ color: "var(--el-muted)" }}>{v.type}</p>
                  </div>
                  <div className="mt-1 px-2 py-0.5 rounded-sm text-[10px] el-code" style={{ backgroundColor: "var(--el-primary)", color: "#fff" }}>{v.name}</div>
                  <p className="text-[9px] el-code mt-0.5" style={{ color: "var(--el-muted)" }}>{v.address}</p>
                </motion.div>
              ))}
            </AnimatePresence>
            {variables.length === 0 && <p className="text-sm self-center" style={{ color: "var(--el-muted)" }}>Objects appear here</p>}
          </div>
        </div>
      </div>

      {logs.length > 0 && (
        <div className="rounded-md p-4 el-code text-xs leading-5" style={{ backgroundColor: "var(--el-canvas-soft)", border: "1px solid var(--el-hairline)", color: "var(--el-body)" }}>
          <p className="text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--el-muted)" }}>Log</p>
          {logs.map((log, i) => <p key={i}>{">"} {log}</p>)}
        </div>
      )}
    </div>
  )
}
