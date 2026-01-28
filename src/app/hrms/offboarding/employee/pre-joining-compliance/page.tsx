"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { LeaveFooter } from "@/components/leave-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const allCases = [
  { id: "101", department: "Cleaning", subDepartment: "Supervisor", documentNumber: "DOC-001", validFrom: "2024-01-01", validTill: "2025-01-01", workRights: "Citizen", driverLicense: "Yes", wwcc: "Yes", whiteCard: "Yes", policeCheck: "Yes" },
  { id: "102", department: "Security", subDepartment: "Static Guarding", documentNumber: "DOC-002", validFrom: "2024-02-15", validTill: "2025-02-15", workRights: "PR", securityLicense: "SL-12345", firstAid: "Yes", driverLicense: "Yes", wwcc: "Yes" },
  { id: "103", department: "Gardening", subDepartment: "Garden Hand", documentNumber: "DOC-003", validFrom: "2024-03-01", validTill: "2025-03-01", workRights: "Working Visa", driverLicense: "Yes", wwcc: "Yes", whiteCard: "Yes", workingAtHeights: "Yes" },
  { id: "104", department: "IT", subDepartment: "", documentNumber: "DOC-004", validFrom: "2024-04-01", validTill: "2025-04-01", workRights: "Citizen", driverLicense: "Yes", wwcc: "Yes", policeCheck: "Yes" },
  { id: "105", department: "HR", subDepartment: "", documentNumber: "DOC-005", validFrom: "2024-05-01", validTill: "2025-05-01", workRights: "PR", driverLicense: "Yes", wwcc: "Yes", policeCheck: "Yes" },
]

export default function OffboardingEmployeePreJoiningAllPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <HrmsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="off-employee-prejoining-all"
          activeSection="offboarding"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <Card>
            <CardHeader className="bg-muted/50 border-b">
              <CardTitle className="text-lg font-medium">All</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#1e88e5] text-white">
                      <th className="px-3 py-3 text-left text-xs font-medium">ID</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Department</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Sub Department</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Document Number</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Valid From</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Valid Till</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Work Rights</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Driver License</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">WWCC</th>
                      <th className="px-3 py-3 text-left text-xs font-medium">Police Check</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allCases.map((caseItem, index) => (
                      <tr key={caseItem.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-3 py-3 text-xs text-blue-600">{caseItem.id}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.department}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.subDepartment}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.documentNumber}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.validFrom}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.validTill}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.workRights}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.driverLicense || "-"}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.wwcc || "-"}</td>
                        <td className="px-3 py-3 text-xs">{caseItem.policeCheck || "-"}</td>
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
