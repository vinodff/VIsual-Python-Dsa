"use client"

import { useEffect } from "react"
import { LessonTemplate } from "@/components/lessons/LessonTemplate"
import { useLessonStore } from "@/store/lessonStore"
import { Lesson } from "@/types"

interface LessonClientProps {
  lessonId: string
  lesson: Lesson
}

export default function LessonClient({ lessonId, lesson }: LessonClientProps) {
  const setCurrentLesson = useLessonStore((s) => s.setCurrentLesson)

  useEffect(() => {
    setCurrentLesson(lessonId)
    return () => setCurrentLesson(null)
  }, [lessonId, setCurrentLesson])

  return <LessonTemplate lesson={lesson} />
}
