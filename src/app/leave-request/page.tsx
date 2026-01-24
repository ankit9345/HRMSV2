"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { LeaveRequestForm } from "@/components/leave-request-form"

export default function LeaveRequestPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} activePage="leave-request" />
        <main className="flex-1 p-6 lg:ml-64">
          <LeaveRequestForm />
        </main>
      </div>
    </div>
  )
}
