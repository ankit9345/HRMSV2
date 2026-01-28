"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { LeaveFooter } from "@/components/leave-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const resolvedCases = [
  { id: "103", requester: "Saumya Singh", department: "Gardening", subDepartment: "Garden Hand", comment: "Garden maintenance staff exit", category: "Compensation", status: "Resolved", subStatus: "", assignmentGroup: "Recruitment Team", assignTo: "HR", impact: "" },
  { id: "104", requester: "Kanak Singh", department: "HR", subDepartment: "", comment: "HR coordinator exit", category: "Compensation", status: "Resolved", subStatus: "", assignmentGroup: "Recruitment Team", assignTo: "HR", impact: "" },
]

export default function OffboardingEmployeeJoiningResolvedPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <HrmsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="off-employee-joining-resolved"
          activeSection="offboarding"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <Card>
            <CardHeader className="bg-muted/50 border-b">
              <CardTitle className="text-lg font-medium">Resolved</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#1e88e5] text-white">
                      <th className="px-3 py-3 text-left text-xs font-medium">Case ID</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Requester Name</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Department</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Sub Department</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Comment</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Category</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Status</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Sub Status</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Assignment Group</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Assign to</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resolvedCases.map((caseItem, index) => (
                      <tr key={caseItem.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-3 py-3 text-xs text-blue-600">{caseItem.id}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.requester}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.department}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.subDepartment}</td>
                        <td className="px-3 py-3 text-xs max-w-[200px] truncate">{caseItem.comment}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.category}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.status}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.subStatus}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.assignmentGroup}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.assignTo}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
      <LeaveFooter />
    </div>
  )
}
