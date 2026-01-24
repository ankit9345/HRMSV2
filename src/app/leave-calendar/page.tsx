"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { LeaveCalendarView } from "@/components/leave-calendar-view"

export default function LeaveCalendarPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="leave-calendar"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <LeaveCalendarView />
        </main>
      </div>
    </div>
  )
}
