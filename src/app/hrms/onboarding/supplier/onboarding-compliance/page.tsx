"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { LeaveFooter } from "@/components/leave-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Save, X, Calendar } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function SupplierOnboardingCompliancePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [contractStartDate, setContractStartDate] = useState<Date>()
  const [contractEndDate, setContractEndDate] = useState<Date>()

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
              <CardTitle className="text-base font-medium">Onboarding Compliance</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input placeholder="Company Name" />
                  <Input placeholder="ABN" />
                  <Input placeholder="ACN" />
                  <Input placeholder="Address" />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input placeholder="Client SPOC Name" />
                  <Input placeholder="SPOC Number" />
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Company Address" />
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input placeholder="Company Phone Number" />
                  <Input placeholder="Contract Number" />
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "justify-start text-left font-normal bg-transparent",
                          !contractStartDate && "text-muted-foreground"
                        )}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {contractStartDate ? format(contractStartDate, "PPP") : "Contract Start Date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={contractStartDate}
                        onSelect={setContractStartDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "justify-start text-left font-normal bg-transparent",
                          !contractEndDate && "text-muted-foreground"
                        )}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {contractEndDate ? format(contractEndDate, "PPP") : "Contract End Date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={contractEndDate}
                        onSelect={setContractEndDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Row 4 - Type of Contract */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Type of Contract" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="adhoc">Adhoc</SelectItem>
                      <SelectItem value="contractual">Contractual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Row 5 - Business and License fields */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input placeholder="Business Registration" />
                  <Input placeholder="GST Registration" />
                  <Input placeholder="Labour Hire License" />
                  <Input placeholder="Security Provider Business License" />
                </div>

                {/* Row 6 - Insurance fields */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input placeholder="Public Liability" />
                  <Input placeholder="Work Cover" />
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
