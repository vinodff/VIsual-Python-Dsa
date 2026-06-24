"use client"

import { Header } from "@/components/layout/Header"
import { Sidebar } from "@/components/layout/Sidebar"
import { useLessonStore } from "@/store/lessonStore"
import { usePathname } from "next/navigation"

export function Providers({ children }: { children: React.ReactNode }) {
  const sidebarOpen = useLessonStore((s) => s.sidebarOpen)
  const pathname = usePathname()
  const isLessonPage = pathname.startsWith("/learn/")

  if (!isLessonPage) return <>{children}</>

  return (
    <div className="flex h-screen flex-col" style={{ backgroundColor: "var(--el-canvas)" }}>
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
