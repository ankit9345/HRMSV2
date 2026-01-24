"use client"

import { useState, useEffect } from "react"
import { CalendarIcon } from "lucide-react"
import { format, differenceInCalendarDays } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

const leaveTypes = [
  { value: "annual", label: "Annual Leave" },
  { value: "sick", label: "Sick Leave" },
  { value: "personal", label: "Personal Leave" },
  { value: "maternity", label: "Maternity Leave" },
  { value: "paternity", label: "Paternity Leave" },
  { value: "unpaid", label: "Unpaid Leave" },
]

export function LeaveRequestForm() {
  const [leaveType, setLeaveType] = useState<string>("")
  const [startDate, setStartDate] = useState<Date | undefined>()
  const [endDate, setEndDate] = useState<Date | undefined>()
  const [totalLeave, setTotalLeave] = useState<string>("")
  const [reason, setReason] = useState<string>("")

  useEffect(() => {
    if (startDate && endDate) {
      const days = differenceInCalendarDays(endDate, startDate) + 1
      if (days > 0) {
        setTotalLeave(`${days} day${days > 1 ? "s" : ""}`)
      } else {
        setTotalLeave("")
      }
    } else {
      setTotalLeave("")
    }
  }, [startDate, endDate])

  const handleSave = () => {
    // Placeholder for save functionality
  }

  const handleCancel = () => {
    setLeaveType("")
    setStartDate(undefined)
    setEndDate(undefined)
    setTotalLeave("")
    setReason("")
  }

  return (
    <Card className="shadow-sm">
      <CardHeader className="border-b border-border pb-4">
        <CardTitle className="text-lg font-semibold text-card-foreground">
          Leave Request
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          {/* First row - 4 inputs */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Leave Type */}
            <div className="space-y-2">
              <Label htmlFor="leave-type" className="text-sm font-medium text-card-foreground">
                Leave Type
              </Label>
              <Select value={leaveType} onValueChange={setLeaveType}>
                <SelectTrigger id="leave-type" className="w-full">
                  <SelectValue placeholder="Select leave type" />
                </SelectTrigger>
                <SelectContent>
                  {leaveTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Start Date */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-card-foreground">Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "dd/MM/yyyy") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* End Date */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-card-foreground">End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "dd/MM/yyyy") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    disabled={(date) => startDate ? date < startDate : false}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Total Leave */}
            <div className="space-y-2">
              <Label htmlFor="total-leave" className="text-sm font-medium text-card-foreground">
                Total Leave
              </Label>
              <Input
                id="total-leave"
                value={totalLeave}
                readOnly
                placeholder="Auto-calculated"
                className="bg-muted"
              />
            </div>
          </div>

          {/* Second row - Textarea */}
          <div className="space-y-2">
            <Label htmlFor="reason" className="text-sm font-medium text-card-foreground">
              Reason
            </Label>
            <Textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Reason for Leave"
              className="min-h-[120px] resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              Save
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
