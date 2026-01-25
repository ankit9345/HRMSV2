"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { AskForItSidebar } from "@/components/ask-for-it-sidebar"
import { IncidentForm } from "@/components/incident-form"
import { LeaveFooter } from "@/components/leave-footer"

export default function AskForItPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <AskForItSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="incident"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <IncidentForm title="Ask for IT" />
        </main>
      </div>
      <LeaveFooter />
    </div>
  )
}
