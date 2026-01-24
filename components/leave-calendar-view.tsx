"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

function getMonthName(month: number) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  return months[month]
}

interface CalendarDay {
  date: number
  isCurrentMonth: boolean
  isToday: boolean
}

function generateCalendarDays(year: number, month: number): CalendarDay[] {
  const days: CalendarDay[] = []
  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfMonth = getFirstDayOfMonth(year, month)
  const daysInPrevMonth = getDaysInMonth(year, month - 1)
  
  const today = new Date()
  const isCurrentMonthYear = today.getFullYear() === year && today.getMonth() === month
  const todayDate = today.getDate()

  // Previous month days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push({
      date: daysInPrevMonth - i,
      isCurrentMonth: false,
      isToday: false,
    })
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: i,
      isCurrentMonth: true,
      isToday: isCurrentMonthYear && i === todayDate,
    })
  }

  // Next month days to complete the grid (6 rows × 7 days = 42)
  const remainingDays = 42 - days.length
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      date: i,
      isCurrentMonth: false,
      isToday: false,
    })
  }

  return days
}

export function LeaveCalendarView() {
  const today = new Date()
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())

  const calendarDays = generateCalendarDays(currentYear, currentMonth)

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const goToToday = () => {
    setCurrentYear(today.getFullYear())
    setCurrentMonth(today.getMonth())
  }

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
      {/* Card Header */}
      <div className="bg-muted px-4 py-3 border-b border-border">
        <h2 className="text-base font-semibold text-foreground">Leave Calendar</h2>
      </div>

      {/* Calendar Content */}
      <div className="p-6">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">
            {getMonthName(currentMonth)} {currentYear}
          </h3>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={goToToday}
              className="text-xs px-3 bg-zinc-600 hover:bg-zinc-700 text-white"
            >
              today
            </Button>
            <div className="flex">
              <Button
                variant="secondary"
                size="icon"
                onClick={goToPreviousMonth}
                className="h-8 w-8 rounded-r-none bg-zinc-700 hover:bg-zinc-800 text-white"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous month</span>
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={goToNextMonth}
                className="h-8 w-8 rounded-l-none bg-zinc-700 hover:bg-zinc-800 text-white"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next month</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="border border-border rounded overflow-hidden">
          {/* Days of Week Header */}
          <div className="grid grid-cols-7 bg-zinc-600">
            {DAYS_OF_WEEK.map((day) => (
              <div
                key={day}
                className="py-2 text-center text-sm font-medium text-white border-r border-zinc-500 last:border-r-0"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days Grid */}
          <div className="grid grid-cols-7">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`
                  min-h-[80px] p-2 border-b border-r border-border last:border-r-0
                  ${index >= 35 ? "border-b-0" : ""}
                  ${(index + 1) % 7 === 0 ? "border-r-0" : ""}
                  ${day.isToday ? "bg-amber-50" : "bg-card"}
                `}
              >
                <span
                  className={`
                    text-sm
                    ${day.isCurrentMonth ? "text-foreground" : "text-muted-foreground"}
                  `}
                >
                  {day.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
