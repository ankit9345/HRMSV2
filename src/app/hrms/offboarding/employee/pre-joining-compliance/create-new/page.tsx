"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { LeaveFooter } from "@/components/leave-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Save, X, Upload, Calendar } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

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

export default function OffboardingEmployeePreJoiningCreateNewPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [department, setDepartment] = useState("")
  const [validFrom, setValidFrom] = useState<Date>()
  const [validTill, setValidTill] = useState<Date>()

  const getComplianceFields = () => {
    if (department === "cleaning") {
      return ["Driver License", "Working With Children Check", "White Card", "Police Check"]
    }
    if (department === "gardening") {
      return ["Driver License", "Working With Children Check", "White Card", "Police Check", "Working at Heights"]
    }
    if (department === "security") {
      return ["Nationality", "Work Rights", "Security Credentials", "Security License", "First Aid", "Drivers License", "Working With Children Check", "White Card", "Traffic Management", "Others"]
    }
    if (["it", "accounts", "sales", "marketing", "operations", "compliance", "hr", "admin"].includes(department)) {
      return ["Drivers License", "Working With Children Check", "Police Check"]
    }
    return []
  }

  const complianceFields = getComplianceFields()

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
              <div className="space-y-4">
                {/* Row 1: Department and Sub Department */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
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
                
                {/* Row 2: Document fields */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                  <Input placeholder="Document Number" />
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "justify-start text-left font-normal bg-transparent",
                          !validFrom && "text-muted-foreground"
                        )}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {validFrom ? format(validFrom, "PPP") : "Valid From"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={validFrom}
                        onSelect={setValidFrom}
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
                          !validTill && "text-muted-foreground"
                        )}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {validTill ? format(validTill, "PPP") : "Valid Till"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={validTill}
                        onSelect={setValidTill}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <div className="flex items-center gap-2">
                    <Input type="file" id="upload-doc-off" className="hidden" />
                    <Button
                      variant="outline"
                      className="w-full justify-start text-muted-foreground bg-transparent"
                      onClick={() => document.getElementById("upload-doc-off")?.click()}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Document
                    </Button>
                  </div>
                </div>
                
                {/* Row 3: Work Rights dropdown */}
                {department && (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Work Rights" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="citizen">Citizen</SelectItem>
                        <SelectItem value="pr">PR</SelectItem>
                        <SelectItem value="working-visa">Working Visa</SelectItem>
                        <SelectItem value="student-working-rights">Student Working Rights</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Conditional compliance fields */}
                {complianceFields.length > 0 && (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    {complianceFields.map((field) => (
                      <Input key={field} placeholder={field} />
                    ))}
                  </div>
                )}
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
