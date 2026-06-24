"use client"

import { useEffect } from "react"
import { useParams, notFound } from "next/navigation"
import { LessonTemplate } from "@/components/lessons/LessonTemplate"
import { useLessonStore } from "@/store/lessonStore"
import { lessons, courseMap } from "@/lib/lessons"

export default function LessonPage() {
  const params = useParams()
  const lessonId = params.lessonId as string
  const lesson = lessons[lessonId]
  const setCurrentLesson = useLessonStore((s) => s.setCurrentLesson)

  useEffect(() => {
    setCurrentLesson(lessonId)
    return () => setCurrentLesson(null)
  }, [lessonId, setCurrentLesson])

  if (!lesson) notFound()

  return <LessonTemplate lesson={lesson} />
}
