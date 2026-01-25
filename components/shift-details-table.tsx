"use client"

import { useState } from "react"
import { Clock, Calendar, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

interface ShiftRow {
  id: number
  rosterId: number
  location: string
  shiftTime: string
  startDate: string
  endDate: string
  skillSet: string
  status: "Pending" | "Accept" | "Reject"
  selected: boolean
}

const initialShifts: ShiftRow[] = [
  { id: 1, rosterId: 1, location: "India", shiftTime: "", startDate: "", endDate: "", skillSet: "L1", status: "Pending", selected: false },
  { id: 2, rosterId: 2, location: "India", shiftTime: "", startDate: "", endDate: "", skillSet: "L2", status: "Pending", selected: false },
  { id: 3, rosterId: 3, location: "India", shiftTime: "", startDate: "", endDate: "", skillSet: "L3", status: "Pending", selected: false },
  { id: 4, rosterId: 4, location: "India", shiftTime: "", startDate: "", endDate: "", skillSet: "L1", status: "Reject", selected: false },
  { id: 5, rosterId: 5, location: "India", shiftTime: "", startDate: "", endDate: "", skillSet: "L1", status: "Accept", selected: false },
]

export function ShiftDetailsTable() {
  const [shifts, setShifts] = useState<ShiftRow[]>(initialShifts)
  const [selectAll, setSelectAll] = useState(false)

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked)
    setShifts(shifts.map(shift => ({ ...shift, selected: checked })))
  }

  const handleSelectRow = (id: number, checked: boolean) => {
    setShifts(shifts.map(shift => 
      shift.id === id ? { ...shift, selected: checked } : shift
    ))
    if (!checked) setSelectAll(false)
  }

  const handleAcceptSelected = () => {
    setShifts(shifts.map(shift => 
      shift.selected ? { ...shift, status: "Accept", selected: false } : shift
    ))
    setSelectAll(false)
  }

  const handleRejectSelected = () => {
    setShifts(shifts.map(shift => 
      shift.selected ? { ...shift, status: "Reject", selected: false } : shift
    ))
    setSelectAll(false)
  }

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Pending":
        return "text-amber-500 bg-amber-50"
      case "Accept":
        return "text-green-600 bg-green-50"
      case "Reject":
        return "text-red-500 bg-red-50"
      default:
        return ""
    }
  }

  return (
    <Card className="border-border">
      <CardHeader className="bg-muted px-6 py-3">
        <CardTitle className="text-base font-semibold text-foreground">Shift Detail</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-orange-500 text-primary-foreground">
                <th className="w-12 p-3 text-left">
                  <Checkbox 
                    checked={selectAll}
                    onCheckedChange={handleSelectAll}
                    className="border-primary-foreground data-[state=checked]:bg-primary-foreground data-[state=checked]:text-orange-500"
                  />
                </th>
                <th className="p-3 text-left text-sm font-semibold">Roster ID</th>
                <th className="p-3 text-left text-sm font-semibold">Location</th>
                <th className="p-3 text-left text-sm font-semibold">Shift Time</th>
                <th className="p-3 text-left text-sm font-semibold">Start date</th>
                <th className="p-3 text-left text-sm font-semibold">End date</th>
                <th className="p-3 text-left text-sm font-semibold">Skill Set</th>
                <th className="p-3 text-left text-sm font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {shifts.map((shift) => (
                <tr key={shift.id} className="border-b border-border">
                  <td className="p-3">
                    <Checkbox 
                      checked={shift.selected}
                      onCheckedChange={(checked) => handleSelectRow(shift.id, checked as boolean)}
                    />
                  </td>
                  <td className="p-3 text-sm text-foreground">{shift.rosterId}</td>
                  <td className="p-3 text-sm text-foreground">{shift.location}</td>
                  <td className="p-3">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="--:--"
                        value={shift.shiftTime}
                        onChange={(e) => {
                          setShifts(shifts.map(s => 
                            s.id === shift.id ? { ...s, shiftTime: e.target.value } : s
                          ))
                        }}
                        className="h-9 w-28 pr-8 text-sm"
                      />
                      <Clock className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <span className="absolute -top-2 left-2 bg-card px-1 text-[10px] text-muted-foreground">Select Time</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Start Date"
                        value={shift.startDate}
                        onChange={(e) => {
                          setShifts(shifts.map(s => 
                            s.id === shift.id ? { ...s, startDate: e.target.value } : s
                          ))
                        }}
                        className="h-9 w-28 pr-8 text-sm"
                      />
                      <Calendar className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="End Date"
                        value={shift.endDate}
                        onChange={(e) => {
                          setShifts(shifts.map(s => 
                            s.id === shift.id ? { ...s, endDate: e.target.value } : s
                          ))
                        }}
                        className="h-9 w-28 pr-8 text-sm"
                      />
                      <Calendar className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </td>
                  <td className="p-3 text-sm text-foreground">{shift.skillSet}</td>
                  <td className={`p-3 text-sm font-medium ${getStatusStyle(shift.status)}`}>
                    {shift.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex items-center justify-end gap-3 border-t border-border bg-muted p-4">
          <Button 
            variant="outline" 
            onClick={handleAcceptSelected}
            className="gap-2 bg-transparent"
          >
            <Check className="h-4 w-4" />
            Accept
          </Button>
          <Button 
            onClick={handleRejectSelected}
            className="gap-2 bg-red-500 text-primary-foreground hover:bg-red-600"
          >
            <X className="h-4 w-4" />
            Reject
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
