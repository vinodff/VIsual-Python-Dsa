export type LessonSection = {
  id: string
  title: string
  component: string
}

export type Lesson = {
  id: string
  title: string
  subtitle: string
  icon: string
  phase: string
  sections: LessonSection[]
  pythonCode: string
}

export type CoursePhase = {
  id: string
  title: string
  lessons: { id: string; title: string; icon: string }[]
}

export type AnimationState = {
  highlightedLine: number | null
  variables: Record<string, { value: string; address: string; type: string }>
  memory: { address: string; value: string; label?: string }[]
  output: string[]
}

export type QuizQuestion = {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}
