"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { OrganizationPoliciesSidebar } from "@/components/organization-policies-sidebar"
import { LeaveFooter } from "@/components/leave-footer"

export default function KnowledgeBaseOperationsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <OrganizationPoliciesSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="knowledge-base-operations"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <p className="text-primary">knowledgebaseoperations works!</p>
        </main>
      </div>
      <LeaveFooter />
    </div>
  )
}
