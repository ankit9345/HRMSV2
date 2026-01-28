"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { LeaveFooter } from "@/components/leave-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const trainingData = [
  { id: "T001", employeeName: "Amit Jain", department: "IT", trainingType: "Technical", trainingName: "React Advanced", startDate: "2024-01-15", endDate: "2024-01-20", status: "Completed" },
  { id: "T002", employeeName: "Sumit Jain", department: "Security", trainingType: "Compliance", trainingName: "Security Protocols", startDate: "2024-02-01", endDate: "2024-02-05", status: "In Progress" },
  { id: "T003", employeeName: "Saumya Singh", department: "Cleaning", trainingType: "Safety", trainingName: "Workplace Safety", startDate: "2024-02-10", endDate: "2024-02-12", status: "Scheduled" },
  { id: "T004", employeeName: "Kanak Singh", department: "HR", trainingType: "Soft Skills", trainingName: "Leadership Training", startDate: "2024-03-01", endDate: "2024-03-05", status: "Completed" },
  { id: "T005", employeeName: "Karan Singh", department: "Gardening", trainingType: "Technical", trainingName: "Equipment Handling", startDate: "2024-03-15", endDate: "2024-03-17", status: "Scheduled" },
]

export default function TrainingAndDevelopmentPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <HrmsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="training-all"
          activeSection="training-and-development"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <Card>
            <CardHeader className="bg-muted py-3 px-4">
              <CardTitle className="text-base font-medium">All Training Records</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#1e88e5] text-white">
                      <th className="px-3 py-3 text-left font-medium">ID</th>
                      <th className="px-3 py-3 text-left font-medium">Employee Name</th>
                      <th className="px-3 py-3 text-left font-medium">Department</th>
                      <th className="px-3 py-3 text-left font-medium">Training Type</th>
                      <th className="px-3 py-3 text-left font-medium">Training Name</th>
                      <th className="px-3 py-3 text-left font-medium">Start Date</th>
                      <th className="px-3 py-3 text-left font-medium">End Date</th>
                      <th className="px-3 py-3 text-left font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trainingData.map((item, index) => (
                      <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-3 py-3 text-primary">{item.id}</td>
                        <td className="px-3 py-3">{item.employeeName}</td>
                        <td className="px-3 py-3">{item.department}</td>
                        <td className="px-3 py-3">{item.trainingType}</td>
                        <td className="px-3 py-3">{item.trainingName}</td>
                        <td className="px-3 py-3">{item.startDate}</td>
                        <td className="px-3 py-3">{item.endDate}</td>
                        <td className="px-3 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.status === "Completed" ? "bg-green-100 text-green-800" :
                            item.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                            "bg-yellow-100 text-yellow-800"
                          }`}>
                            {item.status}
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
