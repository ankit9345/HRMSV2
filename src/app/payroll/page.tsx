"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { PayrollSidebar } from "@/components/payroll-sidebar"
import { SalarySlipForm } from "@/components/salary-slip-form"
import { LeaveFooter } from "@/components/leave-footer"

export default function PayrollPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <PayrollSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="salary-slip"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <SalarySlipForm />
        </main>
      </div>
      <LeaveFooter />
    </div>
  )
}
