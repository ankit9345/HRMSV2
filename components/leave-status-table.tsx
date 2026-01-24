"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface LeaveRecord {
  id: number
  leaveType: string
  startDate: string
  endDate: string
  totalLeaveCount: number
  status: "Withdrawn" | "Pending approval" | "Approved" | "Cancelled" | "Registered"
}

const leaveRecords: LeaveRecord[] = [
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

function getStatusStyle(status: LeaveRecord["status"]) {
  switch (status) {
    case "Withdrawn":
      return "text-gray-500"
    case "Pending approval":
      return "text-orange-600 bg-orange-50 px-2 py-1 rounded"
    case "Approved":
      return "text-green-600 bg-green-50 px-2 py-1 rounded"
    case "Cancelled":
      return "text-red-600"
    case "Registered":
      return "text-green-600 bg-green-50 px-2 py-1 rounded"
    default:
      return ""
  }
}

export function LeaveStatusTable() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="bg-muted/50 border-b px-6 py-4">
        <CardTitle className="text-base font-medium text-foreground">
          Leave Status
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#2c5282] hover:bg-[#2c5282]">
                <TableHead className="text-white font-medium py-3 px-4">
                  Leave ID
                </TableHead>
                <TableHead className="text-white font-medium py-3 px-4">
                  Leave type
                </TableHead>
                <TableHead className="text-white font-medium py-3 px-4">
                  Start date
                </TableHead>
                <TableHead className="text-white font-medium py-3 px-4">
                  End date
                </TableHead>
                <TableHead className="text-white font-medium py-3 px-4">
                  Total leave count
                </TableHead>
                <TableHead className="text-white font-medium py-3 px-4">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaveRecords.map((record) => (
                <TableRow
                  key={record.id}
                  className="border-b hover:bg-muted/30"
                >
                  <TableCell className="py-3 px-4 text-foreground">
                    {record.id}
                  </TableCell>
                  <TableCell className="py-3 px-4 text-foreground">
                    {record.leaveType}
                  </TableCell>
                  <TableCell className="py-3 px-4 text-foreground">
                    {record.startDate}
                  </TableCell>
                  <TableCell className="py-3 px-4 text-foreground">
                    {record.endDate}
                  </TableCell>
                  <TableCell className="py-3 px-4 text-foreground">
                    {record.totalLeaveCount}
                  </TableCell>
                  <TableCell className="py-3 px-4">
                    <span className={getStatusStyle(record.status)}>
                      {record.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
