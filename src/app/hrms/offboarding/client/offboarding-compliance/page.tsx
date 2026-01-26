"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { LeaveFooter } from "@/components/leave-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Save, X } from "lucide-react"

export default function OffboardingClientCompliancePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <HrmsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="off-client-offboarding-compliance"
          activeSection="offboarding"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <Card>
            <CardHeader className="bg-muted/50 border-b">
              <CardTitle className="text-lg font-medium">Joining Compliance</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <Input placeholder="Employee Name" />
                <Input placeholder="Manager Name" />
                <Input placeholder="Training 1" />
                <Input placeholder="Training 2" />
              </div>
              
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Upload Certificate
                  </label>
                  <div className="flex items-center gap-2 rounded border border-input bg-background">
                    <label className="cursor-pointer border-r border-input bg-muted px-4 py-2 text-sm font-medium hover:bg-muted/80">
                      Choose file
                      <input type="file" className="hidden" />
                    </label>
                    <span className="px-3 text-sm text-muted-foreground">No file chosen</span>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Upload Driving Licence
                  </label>
                  <div className="flex items-center gap-2 rounded border border-input bg-background">
                    <label className="cursor-pointer border-r border-input bg-muted px-4 py-2 text-sm font-medium hover:bg-muted/80">
                      Choose file
                      <input type="file" className="hidden" />
                    </label>
                    <span className="px-3 text-sm text-muted-foreground">No file chosen</span>
                  </div>
                </div>
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
