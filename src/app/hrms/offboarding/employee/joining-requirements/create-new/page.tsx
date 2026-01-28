"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { LeaveFooter } from "@/components/leave-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Save, X } from "lucide-react"

const subDepartmentOptions: Record<string, string[]> = {
  cleaning: ["Supervisor", "Cleaner L1", "Cleaner L2"],
  security: ["Static Guarding", "Mobile Patrol", "Concierge", "Crowd Control"],
  gardening: ["Supervisor", "Garden Hand", "Land Scaper", "Arborist"],
  it: [],
  accounts: [],
  sales: [],
  marketing: [],
  operations: [],
  compliance: [],
  hr: [],
  admin: [],
}

export default function OffboardingEmployeeJoiningCreateNewPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [department, setDepartment] = useState("")

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <HrmsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="off-employee-joining-create-new"
          activeSection="offboarding"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <Card>
            <CardHeader className="bg-muted/50 border-b">
              <CardTitle className="text-lg font-medium">Create New</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <Input placeholder="Case ID" />
                <Input placeholder="Requester Name" />
                <Select onValueChange={setDepartment}>
                  <SelectTrigger>
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cleaning">Cleaning</SelectItem>
                    <SelectItem value="security">Security</SelectItem>
                    <SelectItem value="gardening">Gardening</SelectItem>
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="accounts">Accounts</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                    <SelectItem value="compliance">Compliance</SelectItem>
                    <SelectItem value="hr">HR</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
                <Select disabled={!department || subDepartmentOptions[department]?.length === 0}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sub Department" />
                  </SelectTrigger>
                  <SelectContent>
                    {department && subDepartmentOptions[department]?.map((subDept) => (
                      <SelectItem key={subDept} value={subDept.toLowerCase().replace(/\s+/g, "-")}>
                        {subDept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="payroll">Payroll</SelectItem>
                    <SelectItem value="tax">Tax</SelectItem>
                    <SelectItem value="compensation">Compensation</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="on-hold">On Hold</SelectItem>
                    <SelectItem value="assign-to-me">Assign to me</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sub Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending Information</SelectItem>
                    <SelectItem value="user-not-responding">User not responding</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Assignment Group" />
              </div>
              
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
                <Input placeholder="Assign to" />
                <Input placeholder="Impact" />
              </div>
              
              <div className="mt-4">
                <Textarea placeholder="Comment" className="min-h-[80px]" />
              </div>
            </CardContent>
            <div className="flex justify-end gap-2 border-t bg-muted/30 px-6 py-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button variant="secondary" className="bg-gray-500 text-white hover:bg-gray-600">
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
            </div>
          </Card>
        </main>
      </div>
      <LeaveFooter />
    </div>
  )
}
