"use client"

import { motion } from "framer-motion"
import { useLessonStore } from "@/store/lessonStore"
import { Lesson } from "@/types"
import { IntroSection } from "@/components/lessons/sections/IntroSection"
import { AnalogySection } from "@/components/lessons/sections/AnalogySection"
import { MemorySection } from "@/components/lessons/sections/MemorySection"
import { PlaygroundSection } from "@/components/lessons/sections/PlaygroundSection"
import { ComplexitySection } from "@/components/lessons/sections/ComplexitySection"
import { CodeSyncSection } from "@/components/lessons/sections/CodeSyncSection"
import { QuizSection } from "@/components/lessons/sections/QuizSection"
import { ChallengeSection } from "@/components/lessons/sections/ChallengeSection"

const sections: Record<string, React.FC<{ lesson: Lesson }>> = {
  Intro: IntroSection,
  Analogy: AnalogySection,
  MemoryVisualization: MemorySection,
  Playground: PlaygroundSection,
  Complexity: ComplexitySection,
  CodeSync: CodeSyncSection,
  Quiz: QuizSection,
  Challenge: ChallengeSection,
}

type Props = { lesson: Lesson }

export function LessonTemplate({ lesson }: Props) {
  const activeSection = useLessonStore((s) => s.activeSection)
  const setActiveSection = useLessonStore((s) => s.setActiveSection)
  const current = lesson.sections.find((s) => s.id === activeSection)
  const Section = current ? sections[current.component] : null

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 24px" }}>
      {/* Lesson header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg">{lesson.icon}</span>
          <span className="el-caption-uppercase" style={{ color: "var(--el-muted)" }}>
            {lesson.phase}
          </span>
        </div>
        <h1 className="el-display-md mb-0.5" style={{ color: "var(--el-ink)" }}>
          {lesson.title}
        </h1>
        <p className="text-sm" style={{ color: "var(--el-muted)" }}>
          {lesson.subtitle}
        </p>
      </div>

      {/* Section tabs */}
      <div className="flex flex-wrap gap-1.5 mb-8 pb-4" style={{ borderBottom: "1px solid var(--el-hairline)" }}>
        {lesson.sections.map((s, i) => {
          const isActive = activeSection === s.id
          return (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className="rounded-full px-3 py-1.5 text-sm transition-all"
              style={{
                backgroundColor: isActive ? "var(--el-primary)" : "transparent",
                color: isActive ? "var(--el-on-primary)" : "var(--el-body)",
                fontWeight: isActive ? 500 : 400,
              }}
            >
              <span className="text-xs mr-1 opacity-60">{i + 1}</span>
              {s.title}
            </button>
          )
        })}
      </div>

      {/* Content */}
      <div>
        {Section && (
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Section lesson={lesson} />
          </motion.div>
        )}
      </div>
    </div>
  )
}
