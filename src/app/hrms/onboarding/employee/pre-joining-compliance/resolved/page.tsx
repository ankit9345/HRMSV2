"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { LeaveFooter } from "@/components/leave-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const resolvedCases = [
  { id: "103", department: "Gardening", subDepartment: "Garden Hand", documentNumber: "DOC-003", validFrom: "2024-03-01", validTill: "2025-03-01", workRights: "Working Visa", driverLicense: "Yes", wwcc: "Yes", policeCheck: "Yes" },
  { id: "105", department: "HR", subDepartment: "", documentNumber: "DOC-005", validFrom: "2024-05-01", validTill: "2025-05-01", workRights: "PR", driverLicense: "Yes", wwcc: "Yes", policeCheck: "Yes" },
]

export default function PreJoiningComplianceResolvedPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <HrmsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="employee-prejoining-resolved"
          activeSection="onboarding"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <Card>
            <CardHeader className="bg-muted py-3 px-4">
              <CardTitle className="text-base font-medium">Resolved</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#1e88e5] text-white">
                      <th className="px-3 py-3 text-left font-medium">ID</th>
                      <th className="px-3 py-3 text-left font-medium">Department</th>
                      <th className="px-3 py-3 text-left font-medium">Sub Department</th>
                      <th className="px-3 py-3 text-left font-medium">Document Number</th>
                      <th className="px-3 py-3 text-left font-medium">Valid From</th>
                      <th className="px-3 py-3 text-left font-medium">Valid Till</th>
                      <th className="px-3 py-3 text-left font-medium">Work Rights</th>
                      <th className="px-3 py-3 text-left font-medium">Driver License</th>
                      <th className="px-3 py-3 text-left font-medium">WWCC</th>
                      <th className="px-3 py-3 text-left font-medium">Police Check</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resolvedCases.map((caseItem, index) => (
                      <tr key={caseItem.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-3 py-3 text-primary">{caseItem.id}</td>
                        <td className="px-3 py-3">{caseItem.department}</td>
                        <td className="px-3 py-3">{caseItem.subDepartment}</td>
                        <td className="px-3 py-3">{caseItem.documentNumber}</td>
                        <td className="px-3 py-3">{caseItem.validFrom}</td>
                        <td className="px-3 py-3">{caseItem.validTill}</td>
                        <td className="px-3 py-3">{caseItem.workRights}</td>
                        <td className="px-3 py-3">{caseItem.driverLicense || "-"}</td>
                        <td className="px-3 py-3">{caseItem.wwcc || "-"}</td>
                        <td className="px-3 py-3">{caseItem.policeCheck || "-"}</td>
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
