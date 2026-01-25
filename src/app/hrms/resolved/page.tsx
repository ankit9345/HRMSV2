"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { CaseTable } from "@/components/case-table"
import { LeaveFooter } from "@/components/leave-footer"

export default function ResolvedCasePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <HrmsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="resolved"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <CaseTable title="Resolved" filter="resolved" />
        </main>
      </div>
      <LeaveFooter />
    </div>
  )
}
