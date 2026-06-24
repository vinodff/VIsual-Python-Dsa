"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { courseMap } from "@/lib/lessons"

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--el-canvas)", minHeight: "100vh" }}>
      {/* Atmospheric orbs */}
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] el-orb-mint opacity-40 pointer-events-none" />
      <div className="fixed top-[30%] right-[-15%] w-[600px] h-[600px] el-orb-peach opacity-30 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[20%] w-[400px] h-[400px] el-orb-lavender opacity-25 pointer-events-none" />

      {/* Top nav */}
      <header className="flex items-center justify-between px-6" style={{ height: 64, backgroundColor: "var(--el-canvas)", borderBottom: "1px solid var(--el-hairline)" }}>
        <span className="text-sm font-medium" style={{ color: "var(--el-ink)", letterSpacing: "0", fontFamily: "'Inter', sans-serif" }}>
          dsa<span style={{ fontStyle: "italic" }}>.</span>visualizer
        </span>
        <span className="text-xs" style={{ color: "var(--el-muted)", letterSpacing: "0.96px", textTransform: "uppercase", fontWeight: 600 }}>
          learn by seeing
        </span>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 24px" }}>
        {/* Hero */}
        <div className="relative text-center mb-24">
          <h1 className="el-display-mega mb-4" style={{ color: "var(--el-ink)" }}>
            Data Structures & Algorithms
            <br />
            <span style={{ fontStyle: "italic" }}>Visualized.</span>
          </h1>
          <p className="el-body-md mx-auto" style={{ color: "var(--el-muted)", maxWidth: 540 }}>
            Every concept animated. Every operation visual. No walls of text.
            Built for people who learn by <em>seeing</em>.
          </p>
          <div className="mt-8">
            <Link
              href="/learn/variables"
              className="el-btn el-btn-primary text-base"
              style={{ height: 48, padding: "12px 28px", fontSize: 16 }}
            >
              Start with Variables →
            </Link>
            <p className="text-xs mt-3" style={{ color: "var(--el-muted-soft)", letterSpacing: "0.96px", textTransform: "uppercase", fontWeight: 600 }}>
              First lesson · 8 sections · ~15 minutes
            </p>
          </div>
        </div>

        {/* Course phases */}
        {courseMap.map((phase) => (
          <div key={phase.id} className="mb-16">
            <p className="el-caption-uppercase mb-4" style={{ color: "var(--el-muted)" }}>
              {phase.title}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {phase.lessons.map((lesson) => (
                <Link key={lesson.id} href={`/learn/${lesson.id}`}>
                  <div
                    className="el-card flex items-center gap-3 !py-3"
                    style={{ cursor: "pointer" }}
                  >
                    <span className="text-lg flex-shrink-0">{lesson.icon}</span>
                    <span className="text-sm font-medium" style={{ color: "var(--el-body-strong)" }}>
                      {lesson.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <footer className="pt-12 text-center border-t" style={{ borderColor: "var(--el-hairline)" }}>
          <p className="text-xs" style={{ color: "var(--el-muted-soft)", letterSpacing: "0.96px", textTransform: "uppercase", fontWeight: 600 }}>
            One topic at a time · Quality over quantity
          </p>
        </footer>
      </main>
    </div>
  )
}
