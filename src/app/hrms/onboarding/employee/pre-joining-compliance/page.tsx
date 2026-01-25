"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { LeaveFooter } from "@/components/leave-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const allCases = [
  { id: "101", requester: "Amit Jain", department: "IT", shortDesc: "The point of using Lorem Ipsum is that it ...", description: "The point of using Lorem Ipsum is that it ...", category: "Payroll", status: "Open", subStatus: "", assignmentGroup: "Payroll Team", assignTo: "HR", impact: "", argency: "", priority: "" },
  { id: "102", requester: "Sumit Jain", department: "IT", shortDesc: "The point of using Lorem Ipsum is that it ...", description: "The point of using Lorem Ipsum is that it ...", category: "Tax", status: "Open", subStatus: "", assignmentGroup: "Payroll Team", assignTo: "HR", impact: "", argency: "", priority: "" },
  { id: "103", requester: "Saumya Singh", department: "Operations", shortDesc: "The point of using Lorem Ipsum is that it ...", description: "The point of using Lorem Ipsum is that it ...", category: "Compensation", status: "Resolved", subStatus: "", assignmentGroup: "Recruitment Team", assignTo: "HR", impact: "", argency: "", priority: "" },
  { id: "104", requester: "Kanak Singh", department: "HR", shortDesc: "The point of using Lorem Ipsum is that it ...", description: "The point of using Lorem Ipsum is that it ...", category: "Compensation", status: "Resolved", subStatus: "", assignmentGroup: "Recruitment Team", assignTo: "HR", impact: "", argency: "", priority: "" },
  { id: "105", requester: "Karan Singh", department: "Marketing", shortDesc: "The point of using Lorem Ipsum is that it ...", description: "The point of using Lorem Ipsum is that it ...", category: "Compensation", status: "Assign to me", subStatus: "", assignmentGroup: "Recruitment Team", assignTo: "HR", impact: "", argency: "", priority: "" },
  { id: "106", requester: "Amit Chaudhary", department: "Sales", shortDesc: "The point of using Lorem Ipsum is that it ...", description: "The point of using Lorem Ipsum is that it ...", category: "Compensation", status: "Assign to me", subStatus: "", assignmentGroup: "Recruitment Team", assignTo: "HR", impact: "", argency: "", priority: "" },
  { id: "107", requester: "Sanjay Singh", department: "Finance", shortDesc: "The point of using Lorem Ipsum is that it ...", description: "The point of using Lorem Ipsum is that it ...", category: "Tax", status: "On Hold", subStatus: "Pending Information", assignmentGroup: "Recruitment Team", assignTo: "HR", impact: "", argency: "", priority: "" },
  { id: "108", requester: "Yogendra Jain", department: "IT", shortDesc: "The point of using Lorem Ipsum is that it ...", description: "The point of using Lorem Ipsum is that it ...", category: "Tax", status: "On Hold", subStatus: "User not responding", assignmentGroup: "Payroll Team", assignTo: "HR", impact: "", argency: "", priority: "" },
]

export default function PreJoiningComplianceAllPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <HrmsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="employee-prejoining-all"
          activeSection="onboarding"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <Card>
            <CardHeader className="bg-muted py-3 px-4">
              <CardTitle className="text-base font-medium">All</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#1e88e5] text-white">
                      <th className="px-3 py-3 text-left font-medium">Case ID</th>
                      <th className="px-3 py-3 text-left font-medium">Requester Name</th>
                      <th className="px-3 py-3 text-left font-medium">Department</th>
                      <th className="px-3 py-3 text-left font-medium">Short Description</th>
                      <th className="px-3 py-3 text-left font-medium">Description</th>
                      <th className="px-3 py-3 text-left font-medium">Category</th>
                      <th className="px-3 py-3 text-left font-medium">Status</th>
                      <th className="px-3 py-3 text-left font-medium">Sub Status</th>
                      <th className="px-3 py-3 text-left font-medium">Assignment Group</th>
                      <th className="px-3 py-3 text-left font-medium">Assign to</th>
                      <th className="px-3 py-3 text-left font-medium">Impact</th>
                      <th className="px-3 py-3 text-left font-medium">Argency</th>
                      <th className="px-3 py-3 text-left font-medium">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allCases.map((caseItem, index) => (
                      <tr key={caseItem.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-3 py-3 text-primary">{caseItem.id}</td>
                        <td className="px-3 py-3">{caseItem.requester}</td>
                        <td className="px-3 py-3">{caseItem.department}</td>
                        <td className="px-3 py-3 max-w-[200px] truncate">{caseItem.shortDesc}</td>
                        <td className="px-3 py-3 max-w-[200px] truncate">{caseItem.description}</td>
                        <td className="px-3 py-3">{caseItem.category}</td>
                        <td className="px-3 py-3">{caseItem.status}</td>
                        <td className="px-3 py-3">{caseItem.subStatus}</td>
                        <td className="px-3 py-3">{caseItem.assignmentGroup}</td>
                        <td className="px-3 py-3">{caseItem.assignTo}</td>
                        <td className="px-3 py-3">{caseItem.impact}</td>
                        <td className="px-3 py-3">{caseItem.argency}</td>
                        <td className="px-3 py-3">{caseItem.priority}</td>
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
