import { notFound } from "next/navigation"
import { lessons } from "@/lib/lessons"
import LessonClient from "./LessonClient"

export function generateStaticParams() {
  return Object.keys(lessons).map((lessonId) => ({
    lessonId,
  }))
}

interface PageProps {
  params: Promise<{ lessonId: string }>
}

export default async function LessonPage({ params }: PageProps) {
  const { lessonId } = await params
  const lesson = lessons[lessonId]

  if (!lesson) {
    notFound()
  }

  return <LessonClient lessonId={lessonId} lesson={lesson} />
}
