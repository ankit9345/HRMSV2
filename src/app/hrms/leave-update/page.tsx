"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { LeaveFooter } from "@/components/leave-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const leaveData = [
  {
    id: 1,
    leaveType: "Casual leave",
    startDate: "11/01/2025",
    endDate: "11/04/2025",
    totalLeaveCount: 4,
    status: "Withdrawn",
  },
  {
    id: 2,
    leaveType: "Maternity leave",
    startDate: "12/16/2025",
    endDate: "12/22/2025",
    totalLeaveCount: 7,
    status: "Pending approval",
  },
  {
    id: 3,
    leaveType: "Unpaid leave",
    startDate: "12/15/2025",
    endDate: "12/15/2025",
    totalLeaveCount: 1,
    status: "Approved",
  },
  {
    id: 4,
    leaveType: "Unpaid leave",
    startDate: "12/06/2025",
    endDate: "12/06/2025",
    totalLeaveCount: 1,
    status: "Cancelled",
  },
  {
    id: 5,
    leaveType: "Comp-off",
    startDate: "12/10/2025",
    endDate: "12/11/2025",
    totalLeaveCount: 2,
    status: "Registered",
  },
]

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Withdrawn":
      return "bg-muted text-muted-foreground"
    case "Pending approval":
      return "bg-orange-100 text-orange-600"
    case "Approved":
      return "bg-green-100 text-green-600"
    case "Cancelled":
      return "bg-red-100 text-red-600"
    case "Registered":
      return "bg-green-100 text-green-600"
    default:
      return "text-foreground"
  }
}

export default function LeaveUpdatePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <HrmsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="leave-update"
          activeSection="leave-management"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <Card>
            <CardHeader className="bg-muted py-3">
              <CardTitle className="text-lg font-medium">Leave Status</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="px-4 py-3 text-left text-sm font-medium">Leave ID</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Leave type</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Start date</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">End date</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Total leave count</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaveData.map((leave) => (
                      <tr key={leave.id} className="border-b border-border">
                        <td className="px-4 py-3 text-sm">{leave.id}</td>
                        <td className="px-4 py-3 text-sm">{leave.leaveType}</td>
                        <td className="px-4 py-3 text-sm">{leave.startDate}</td>
                        <td className="px-4 py-3 text-sm">{leave.endDate}</td>
                        <td className="px-4 py-3 text-sm">{leave.totalLeaveCount}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`inline-block px-3 py-1 ${getStatusStyle(leave.status)}`}>
                            {leave.status}
                          </span>
                        </td>
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
