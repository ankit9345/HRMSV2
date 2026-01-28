"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { LeaveFooter } from "@/components/leave-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const allCases = [
  { id: "101", requester: "Amit Jain", department: "Cleaning", subDepartment: "Supervisor", comment: "New hire for cleaning team", category: "Payroll", status: "Open", subStatus: "", assignmentGroup: "Payroll Team", assignTo: "HR", impact: "" },
  { id: "102", requester: "Sumit Jain", department: "Security", subDepartment: "Static Guarding", comment: "Security personnel onboarding", category: "Tax", status: "Open", subStatus: "", assignmentGroup: "Payroll Team", assignTo: "HR", impact: "" },
  { id: "103", requester: "Saumya Singh", department: "Gardening", subDepartment: "Garden Hand", comment: "Garden maintenance staff", category: "Compensation", status: "Resolved", subStatus: "", assignmentGroup: "Recruitment Team", assignTo: "HR", impact: "" },
  { id: "104", requester: "Kanak Singh", department: "HR", subDepartment: "", comment: "HR coordinator position", category: "Compensation", status: "Resolved", subStatus: "", assignmentGroup: "Recruitment Team", assignTo: "HR", impact: "" },
  { id: "105", requester: "Karan Singh", department: "Marketing", subDepartment: "", comment: "Marketing executive hire", category: "Compensation", status: "Assign to me", subStatus: "", assignmentGroup: "Recruitment Team", assignTo: "HR", impact: "" },
  { id: "106", requester: "Amit Chaudhary", department: "Sales", subDepartment: "", comment: "Sales team expansion", category: "Compensation", status: "Assign to me", subStatus: "", assignmentGroup: "Recruitment Team", assignTo: "HR", impact: "" },
  { id: "107", requester: "Sanjay Singh", department: "Accounts", subDepartment: "", comment: "Accountant position", category: "Tax", status: "On Hold", subStatus: "Pending Information", assignmentGroup: "Recruitment Team", assignTo: "HR", impact: "" },
  { id: "108", requester: "Yogendra Jain", department: "IT", subDepartment: "", comment: "IT support staff", category: "Tax", status: "On Hold", subStatus: "User not responding", assignmentGroup: "Payroll Team", assignTo: "HR", impact: "" },
]

export default function EmployeeJoiningAllPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <HrmsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="employee-joining-all"
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
                      <th className="px-3 py-3 text-left font-medium">Sub Department</th>
                      <th className="px-3 py-3 text-left font-medium">Comment</th>
                      <th className="px-3 py-3 text-left font-medium">Category</th>
                      <th className="px-3 py-3 text-left font-medium">Status</th>
                      <th className="px-3 py-3 text-left font-medium">Sub Status</th>
                      <th className="px-3 py-3 text-left font-medium">Assignment Group</th>
                      <th className="px-3 py-3 text-left font-medium">Assign to</th>
                      <th className="px-3 py-3 text-left font-medium">Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allCases.map((caseItem, index) => (
                      <tr key={caseItem.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-3 py-3 text-primary">{caseItem.id}</td>
                        <td className="px-3 py-3">{caseItem.requester}</td>
                        <td className="px-3 py-3">{caseItem.department}</td>
                        <td className="px-3 py-3">{caseItem.subDepartment}</td>
                        <td className="px-3 py-3 max-w-[200px] truncate">{caseItem.comment}</td>
                        <td className="px-3 py-3">{caseItem.category}</td>
                        <td className="px-3 py-3">{caseItem.status}</td>
                        <td className="px-3 py-3">{caseItem.subStatus}</td>
                        <td className="px-3 py-3">{caseItem.assignmentGroup}</td>
                        <td className="px-3 py-3">{caseItem.assignTo}</td>
                        <td className="px-3 py-3">{caseItem.impact}</td>
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
