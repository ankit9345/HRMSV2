"use client"

import { useState } from "react"
import { Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const leaveTypes = [
  { value: "annual", label: "Annual Leave", allocated: 20, consumed: 5 },
  { value: "sick", label: "Sick Leave", allocated: 10, consumed: 2 },
  { value: "casual", label: "Casual Leave", allocated: 7, consumed: 3 },
  { value: "maternity", label: "Maternity Leave", allocated: 90, consumed: 0 },
  { value: "paternity", label: "Paternity Leave", allocated: 14, consumed: 0 },
]

export function LeaveBalanceForm() {
  const [selectedType, setSelectedType] = useState<string>("")
  const [totalAllocated, setTotalAllocated] = useState<string>("")
  const [leaveConsumed, setLeaveConsumed] = useState<string>("")
  const [leaveBalance, setLeaveBalance] = useState<string>("")

  const handleLeaveTypeChange = (value: string) => {
    setSelectedType(value)
    const selected = leaveTypes.find((lt) => lt.value === value)
    if (selected) {
      setTotalAllocated(selected.allocated.toString())
      setLeaveConsumed(selected.consumed.toString())
      setLeaveBalance((selected.allocated - selected.consumed).toString())
    }
  }

  const handleCancel = () => {
    setSelectedType("")
    setTotalAllocated("")
    setLeaveConsumed("")
    setLeaveBalance("")
  }

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-semibold">Leave Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Leave Type */}
          <div className="space-y-2">
            <Label htmlFor="leave-type" className="sr-only">
              Leave Type
            </Label>
            <Select value={selectedType} onValueChange={handleLeaveTypeChange}>
              <SelectTrigger id="leave-type" className="bg-card">
                <SelectValue placeholder="Leave Type" />
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

          {/* Total Leave Allocated */}
          <div className="space-y-2">
            <Label htmlFor="total-allocated" className="sr-only">
              Total leave allocated
            </Label>
            <Input
              id="total-allocated"
              placeholder="Total leave allocated"
              value={totalAllocated}
              readOnly
              className="bg-card"
            />
          </div>

          {/* Leave Consumed */}
          <div className="space-y-2">
            <Label htmlFor="leave-consumed" className="sr-only">
              Leave consumed
            </Label>
            <Input
              id="leave-consumed"
              placeholder="Leave consumed"
              value={leaveConsumed}
              readOnly
              className="bg-card"
            />
          </div>

          {/* Leave Balance */}
          <div className="space-y-2">
            <Label htmlFor="leave-balance" className="sr-only">
              Leave balance
            </Label>
            <Input
              id="leave-balance"
              placeholder="Leave balance"
              value={leaveBalance}
              readOnly
              className="bg-card"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 border-t border-border bg-muted/30 px-6 py-3">
        <Button type="button" className="gap-2">
          <Save className="h-4 w-4" />
          Save
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="gap-2 bg-foreground text-background hover:bg-foreground/90"
          onClick={handleCancel}
        >
          <X className="h-4 w-4" />
          Cancel
        </Button>
      </CardFooter>
    </Card>
  )
}
