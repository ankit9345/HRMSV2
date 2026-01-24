"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { LeaveBalanceForm } from "@/components/leave-balance-form"

export default function LeaveBalancePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activePage="leave-balance"
      />
      <main className="pt-16 lg:pl-64">
        <div className="p-6">
          <LeaveBalanceForm />
        </div>
      </main>
    </div>
  )
}
