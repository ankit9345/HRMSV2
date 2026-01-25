"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { LeaveFooter } from "@/components/leave-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Save, X } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function EmployeeJoiningCreateNewPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <HrmsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="employee-joining-create-new"
          activeSection="onboarding"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <Card>
            <CardHeader className="bg-muted py-3 px-4">
              <CardTitle className="text-base font-medium">Create New</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input placeholder="Case ID" />
                  <Input placeholder="Requester Name" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">IT</SelectItem>
                      <SelectItem value="hr">HR</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>
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
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                  <Input placeholder="Assign to" />
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input placeholder="Impact" />
                  <Input placeholder="Argency" />
                  <Input placeholder="Priority" />
                </div>

                {/* Short Description */}
                <Textarea placeholder="Short Description" className="min-h-[80px]" />

                {/* Description */}
                <Textarea placeholder="Description" className="min-h-[120px]" />
              </div>
            </CardContent>
            <div className="flex items-center justify-end gap-2 bg-muted px-4 py-3">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button variant="secondary" className="bg-gray-400 hover:bg-gray-500 text-white">
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
