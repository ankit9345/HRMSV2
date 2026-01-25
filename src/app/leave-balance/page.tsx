"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { LeaveBalanceForm } from "@/components/leave-balance-form"
import { LeaveFooter } from "@/components/leave-footer"

export default function LeaveBalancePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="leave-balance"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <LeaveBalanceForm />
        </main>
      </div>
      <LeaveFooter />
    </div>
  )
}
