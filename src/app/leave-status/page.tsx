"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { LeaveStatusTable } from "@/components/leave-status-table"
import { LeaveFooter } from "@/components/leave-footer"

export default function LeaveStatusPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex flex-1">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="leave-status"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <LeaveStatusTable />
        </main>
      </div>
      <LeaveFooter />
    </div>
  )
}
