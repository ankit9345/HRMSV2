"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { LeaveFooter } from "@/components/leave-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, X } from "lucide-react"

export default function OffboardingOfferLetterPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <HrmsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="off-offer-letter"
          activeSection="offboarding"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <Card>
            <CardHeader className="bg-muted/50 border-b">
              <CardTitle className="text-lg font-medium">Offer Letter</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Upload Offer Letter
                </label>
                <div className="flex items-center gap-2 rounded border border-input bg-background">
                  <label className="cursor-pointer border-r border-input bg-muted px-4 py-2 text-sm font-medium hover:bg-muted/80">
                    Choose file
                    <input type="file" className="hidden" />
                  </label>
                  <span className="px-3 text-sm text-muted-foreground">No file chosen</span>
                </div>
              </div>
            </CardContent>
            <div className="flex justify-end gap-2 border-t bg-muted/30 px-6 py-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Upload className="mr-2 h-4 w-4" />
                Upload
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
