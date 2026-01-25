"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { RosterSidebar } from "@/components/roster-sidebar"
import { RosterCalendarView } from "@/components/roster-calendar-view"
import { LeaveFooter } from "@/components/leave-footer"

export default function RosterPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <RosterSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="calendar-view"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <RosterCalendarView />
        </main>
      </div>
      <LeaveFooter />
    </div>
  )
}
