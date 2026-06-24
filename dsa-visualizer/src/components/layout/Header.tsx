"use client"

import { useLessonStore } from "@/store/lessonStore"
import Link from "next/link"

export function Header() {
  const toggleSidebar = useLessonStore((s) => s.toggleSidebar)

  return (
    <header className="flex items-center justify-between px-4" style={{ height: 56, backgroundColor: "var(--el-canvas)", borderBottom: "1px solid var(--el-hairline)" }}>
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center rounded-full"
          style={{ width: 32, height: 32, backgroundColor: "var(--el-surface-strong)", color: "var(--el-ink)" }}
          aria-label="Toggle sidebar"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 3.5h10M2 7h10M2 10.5h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </button>
        <Link href="/" className="text-sm font-medium" style={{ color: "var(--el-ink)", letterSpacing: "0" }}>
          dsa<span style={{ fontStyle: "italic" }}>.</span>visualizer
        </Link>
      </div>
    </header>
  )
}
