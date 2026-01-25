"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface CaseTableProps {
  title: string
  filter: "all" | "open" | "resolved" | "assign-to-me"
}

const allCases = [
  {
    id: "101",
    requesterName: "Amit Jain",
    department: "IT",
    shortDescription: "The point of using Lorem Ipsum is that it ...",
    description: "The point of using Lorem Ipsum is that it ...",
    category: "Payroll",
    status: "Open",
    subStatus: "",
    assignmentGroup: "Payroll Team",
    assignTo: "HR",
    impact: "",
    argency: "",
    priority: "",
  },
  {
    id: "102",
    requesterName: "Sumit Jain",
    department: "IT",
    shortDescription: "The point of using Lorem Ipsum is that it ...",
    description: "The point of using Lorem Ipsum is that it ...",
    category: "Tax",
    status: "Open",
    subStatus: "",
    assignmentGroup: "Payroll Team",
    assignTo: "HR",
    impact: "",
    argency: "",
    priority: "",
  },
  {
    id: "103",
    requesterName: "Saumya Singh",
    department: "Operations",
    shortDescription: "The point of using Lorem Ipsum is that it ...",
    description: "The point of using Lorem Ipsum is that it ...",
    category: "Compensation",
    status: "Resolved",
    subStatus: "",
    assignmentGroup: "Recruitment Team",
    assignTo: "HR",
    impact: "",
    argency: "",
    priority: "",
  },
  {
    id: "104",
    requesterName: "Kanak Singh",
    department: "HR",
    shortDescription: "The point of using Lorem Ipsum is that it ...",
    description: "The point of using Lorem Ipsum is that it ...",
    category: "Compensation",
    status: "Resolved",
    subStatus: "",
    assignmentGroup: "Recruitment Team",
    assignTo: "HR",
    impact: "",
    argency: "",
    priority: "",
  },
  {
    id: "105",
    requesterName: "Karan Singh",
    department: "Marketing",
    shortDescription: "The point of using Lorem Ipsum is that it ...",
    description: "The point of using Lorem Ipsum is that it ...",
    category: "Compensation",
    status: "Assign to me",
    subStatus: "",
    assignmentGroup: "Recruitment Team",
    assignTo: "HR",
    impact: "",
    argency: "",
    priority: "",
  },
  {
    id: "106",
    requesterName: "Amit Chaudhary",
    department: "Sales",
    shortDescription: "The point of using Lorem Ipsum is that it ...",
    description: "The point of using Lorem Ipsum is that it ...",
    category: "Compensation",
    status: "Assign to me",
    subStatus: "",
    assignmentGroup: "Recruitment Team",
    assignTo: "HR",
    impact: "",
    argency: "",
    priority: "",
  },
  {
    id: "107",
    requesterName: "Sanjay Singh",
    department: "Finance",
    shortDescription: "The point of using Lorem Ipsum is that it ...",
    description: "The point of using Lorem Ipsum is that it ...",
    category: "Tax",
    status: "On Hold",
    subStatus: "Pending Information",
    assignmentGroup: "Recruitment Team",
    assignTo: "HR",
    impact: "",
    argency: "",
    priority: "",
  },
  {
    id: "108",
    requesterName: "Yogendra Jain",
    department: "IT",
    shortDescription: "The point of using Lorem Ipsum is that it ...",
    description: "The point of using Lorem Ipsum is that it ...",
    category: "Tax",
    status: "On Hold",
    subStatus: "User not responding",
    assignmentGroup: "Payroll Team",
    assignTo: "HR",
    impact: "",
    argency: "",
    priority: "",
  },
]

export function CaseTable({ title, filter }: CaseTableProps) {
  const filteredCases = allCases.filter((c) => {
    if (filter === "all") return true
    if (filter === "open") return c.status === "Open"
    if (filter === "resolved") return c.status === "Resolved"
    if (filter === "assign-to-me") return c.status === "Assign to me"
    return true
  })

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="bg-muted/50 px-4 py-3">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px]">
            <thead>
              <tr className="bg-[#0088cc] text-white">
                <th className="px-3 py-2 text-left text-xs font-medium">Case ID</th>
                <th className="px-3 py-2 text-left text-xs font-medium">Requester Name</th>
                <th className="px-3 py-2 text-left text-xs font-medium">Department</th>
                <th className="px-3 py-2 text-left text-xs font-medium">Short Description</th>
                <th className="px-3 py-2 text-left text-xs font-medium">Description</th>
                <th className="px-3 py-2 text-left text-xs font-medium">Category</th>
                <th className="px-3 py-2 text-left text-xs font-medium">Status</th>
                <th className="px-3 py-2 text-left text-xs font-medium">Sub Status</th>
                <th className="px-3 py-2 text-left text-xs font-medium">Assignment Group</th>
                <th className="px-3 py-2 text-left text-xs font-medium">Assign to</th>
                <th className="px-3 py-2 text-left text-xs font-medium">Impact</th>
                <th className="px-3 py-2 text-left text-xs font-medium">Argency</th>
                <th className="px-3 py-2 text-left text-xs font-medium">Priority</th>
              </tr>
            </thead>
            <tbody>
              {filteredCases.map((caseItem, index) => (
                <tr
                  key={caseItem.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-muted/30"}
                >
                  <td className="px-3 py-2 text-xs">
                    <Link href="#" className="text-primary hover:underline">
                      {caseItem.id}
                    </Link>
                  </td>
                  <td className="px-3 py-2 text-xs">{caseItem.requesterName}</td>
                  <td className="px-3 py-2 text-xs">{caseItem.department}</td>
                  <td className="px-3 py-2 text-xs max-w-[150px] truncate">
                    {caseItem.shortDescription}
                  </td>
                  <td className="px-3 py-2 text-xs max-w-[150px] truncate">
                    {caseItem.description}
                  </td>
                  <td className="px-3 py-2 text-xs">{caseItem.category}</td>
                  <td className="px-3 py-2 text-xs">{caseItem.status}</td>
                  <td className="px-3 py-2 text-xs">{caseItem.subStatus}</td>
                  <td className="px-3 py-2 text-xs">{caseItem.assignmentGroup}</td>
                  <td className="px-3 py-2 text-xs">{caseItem.assignTo}</td>
                  <td className="px-3 py-2 text-xs">{caseItem.impact}</td>
                  <td className="px-3 py-2 text-xs">{caseItem.argency}</td>
                  <td className="px-3 py-2 text-xs">{caseItem.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
