"use client"

import React from "react"

import { useState, useRef } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { LeaveFooter } from "@/components/leave-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Save, X } from "lucide-react"

export default function SupplierOnboardingCompliancePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [certificateFileName, setCertificateFileName] = useState("")
  const [licenceFileName, setLicenceFileName] = useState("")
  const certificateInputRef = useRef<HTMLInputElement>(null)
  const licenceInputRef = useRef<HTMLInputElement>(null)

  const handleCertificateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setCertificateFileName(file.name)
    }
  }

  const handleLicenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setLicenceFileName(file.name)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <HrmsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="supplier-onboarding-compliance"
          activeSection="onboarding"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <Card>
            <CardHeader className="bg-muted py-3 px-4">
              <CardTitle className="text-base font-medium">Joining Compliance</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Row 1 - Input fields */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input placeholder="Employee Name" />
                  <Input placeholder="Manager Name" />
                  <Input placeholder="Training 1" />
                  <Input placeholder="Training 2" />
                </div>

                {/* Row 2 - File uploads */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Upload Certificate</label>
                    <div className="flex items-center">
                      <input
                        type="file"
                        ref={certificateInputRef}
                        onChange={handleCertificateChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.jpg,.png"
                      />
                      <Button
                        variant="outline"
                        onClick={() => certificateInputRef.current?.click()}
                        className="rounded-r-none border-r-0"
                      >
                        Choose file
                      </Button>
                      <div className="flex-1 px-4 py-2 border border-input rounded-r-md bg-background text-sm text-muted-foreground">
                        {certificateFileName || "No file chosen"}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Upload Driving Licence</label>
                    <div className="flex items-center">
                      <input
                        type="file"
                        ref={licenceInputRef}
                        onChange={handleLicenceChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.jpg,.png"
                      />
                      <Button
                        variant="outline"
                        onClick={() => licenceInputRef.current?.click()}
                        className="rounded-r-none border-r-0"
                      >
                        Choose file
                      </Button>
                      <div className="flex-1 px-4 py-2 border border-input rounded-r-md bg-background text-sm text-muted-foreground">
                        {licenceFileName || "No file chosen"}
                      </div>
                    </div>
                  </div>
                </div>
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
