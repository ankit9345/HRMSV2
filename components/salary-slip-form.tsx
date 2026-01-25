"use client"

import { useState } from "react"
import { Calendar, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const years = ["2024", "2025", "2026"]

export function SalarySlipForm() {
  const [selectedMonth, setSelectedMonth] = useState<string>("")
  const [selectedYear, setSelectedYear] = useState<string>("")

  const handleView = () => {
    if (selectedMonth && selectedYear) {
      console.log("Viewing salary slip for:", selectedMonth, selectedYear)
    }
  }

  const handleDownload = () => {
    if (selectedMonth && selectedYear) {
      console.log("Downloading salary slip for:", selectedMonth, selectedYear)
    }
  }

  return (
    <Card className="border border-border shadow-sm">
      <CardHeader className="border-b border-border bg-muted/50 py-3 px-4">
        <CardTitle className="text-base font-semibold text-card-foreground">
          Salary Slip
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex gap-2">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month} value={month.toLowerCase()}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[120px]">
                <div className="flex items-center gap-2">
                  <SelectValue placeholder="Year" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleView}
              disabled={!selectedMonth || !selectedYear}
              className="flex items-center gap-2 bg-transparent"
            >
              <FileText className="h-4 w-4" />
              View
            </Button>
            <Button
              variant="outline"
              onClick={handleDownload}
              disabled={!selectedMonth || !selectedYear}
              className="flex items-center gap-2 bg-transparent"
            >
              <FileText className="h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
