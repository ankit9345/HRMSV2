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

export default function OffboardingEmployeePreJoiningCreateNewPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <HrmsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="off-employee-prejoining-create-new"
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
              
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
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
              
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                <Input placeholder="Impact" />
                <Input placeholder="Argency" />
                <Input placeholder="Priority" />
              </div>
              
              <div className="mt-4">
                <Textarea placeholder="Short Description" className="min-h-[80px]" />
              </div>
              
              <div className="mt-4">
                <Textarea placeholder="Description" className="min-h-[120px]" />
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
