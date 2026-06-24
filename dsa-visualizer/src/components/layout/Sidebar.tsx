"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLessonStore } from "@/store/lessonStore"
import { courseMap } from "@/lib/lessons"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Sidebar() {
  const sidebarOpen = useLessonStore((s) => s.sidebarOpen)
  const pathname = usePathname()
  const currentLessonId = pathname.split("/").pop()

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <motion.aside
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 220, opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex-shrink-0 border-r overflow-hidden"
          style={{ borderColor: "var(--el-hairline)", backgroundColor: "var(--el-canvas)" }}
        >
          <div className="w-[220px] h-full overflow-y-auto" style={{ padding: "16px 8px" }}>
            {courseMap.map((phase) => (
              <div key={phase.id} className="mb-6">
                <p className="el-caption-uppercase px-3 mb-1.5" style={{ color: "var(--el-muted)" }}>
                  {phase.title}
                </p>
                {phase.lessons.map((lesson) => {
                  const isActive = currentLessonId === lesson.id
                  return (
                    <Link
                      key={lesson.id}
                      href={`/learn/${lesson.id}`}
                      className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors"
                      style={{
                        backgroundColor: isActive ? "var(--el-surface-card)" : "transparent",
                        color: isActive ? "var(--el-ink)" : "var(--el-muted)",
                        fontWeight: isActive ? 500 : 400,
                        border: isActive ? "1px solid var(--el-hairline)" : "1px solid transparent",
                      }}
                    >
                      <span className="w-5 text-center text-xs">{lesson.icon}</span>
                      <span>{lesson.title}</span>
                    </Link>
                  )
                })}
              </div>
            ))}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
