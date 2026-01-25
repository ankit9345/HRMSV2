"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HrmsSidebar } from "@/components/hrms-sidebar"
import { LeaveFooter } from "@/components/leave-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function LeavePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1))

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay()

    const days = []

    // Previous month days
    const prevMonth = new Date(year, month, 0)
    const prevMonthDays = prevMonth.getDate()
    for (let i = startingDay - 1; i >= 0; i--) {
      days.push({
        date: prevMonthDays - i,
        isCurrentMonth: false,
        isToday: false,
      })
    }

    // Current month days
    const today = new Date()
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday =
        i === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      days.push({
        date: i,
        isCurrentMonth: true,
        isToday,
      })
    }

    // Next month days
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

  const goToPrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const days = getDaysInMonth(currentDate)
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <HrmsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage="leave"
          activeSection="leave-management"
        />
        <main className="flex-1 p-6 lg:ml-64">
          <Card>
            <CardHeader className="bg-muted py-3">
              <CardTitle className="text-lg font-medium">Leave Calendar</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {/* Calendar Header */}
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <div className="flex items-center gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={goToToday}
                    className="bg-zinc-700 text-white hover:bg-zinc-600"
                  >
                    today
                  </Button>
                  <div className="flex">
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={goToPrevMonth}
                      className="rounded-r-none bg-zinc-700 text-white hover:bg-zinc-600"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={goToNextMonth}
                      className="rounded-l-none bg-zinc-700 text-white hover:bg-zinc-600"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="border border-border">
                {/* Day Headers */}
                <div className="grid grid-cols-7 bg-zinc-600 text-white">
                  {dayNames.map((day) => (
                    <div
                      key={day}
                      className="border-r border-zinc-500 px-2 py-2 text-center text-sm font-medium last:border-r-0"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7">
                  {days.map((day, index) => (
                    <div
                      key={index}
                      className={`min-h-[80px] border-b border-r border-border p-2 ${
                        day.isToday ? "bg-yellow-100" : ""
                      } ${!day.isCurrentMonth ? "text-muted-foreground" : ""}`}
                    >
                      <span className="text-sm">{day.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
      <LeaveFooter />
    </div>
  )
}
