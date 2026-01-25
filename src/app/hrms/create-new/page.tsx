"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { CreateCaseForm } from "@/components/create-case-form"
import { LeaveFooter } from "@/components/leave-footer"

export default function CreateNewPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <HrmsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="create-new"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <CreateCaseForm />
        </main>
      </div>
      <LeaveFooter />
    </div>
  )
}
