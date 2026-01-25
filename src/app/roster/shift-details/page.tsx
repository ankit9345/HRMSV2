"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { RosterSidebar } from "@/components/roster-sidebar"
import { ShiftDetailsTable } from "@/components/shift-details-table"
import { LeaveFooter } from "@/components/leave-footer"

export default function ShiftDetailsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <RosterSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="shift-details"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <ShiftDetailsTable />
        </main>
      </div>
      <LeaveFooter />
    </div>
  )
}
