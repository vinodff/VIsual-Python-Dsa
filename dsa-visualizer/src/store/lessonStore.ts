"use client"

import { create } from "zustand"

type LessonStore = {
  sidebarOpen: boolean
  currentLessonId: string | null
  activeSection: string
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  setCurrentLesson: (id: string | null) => void
  setActiveSection: (id: string) => void
}

export const useLessonStore = create<LessonStore>((set) => ({
  sidebarOpen: true,
  currentLessonId: null,
  activeSection: "intro",
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setCurrentLesson: (id) => set({ currentLessonId: id }),
  setActiveSection: (id) => set({ activeSection: id }),
}))
