"use client"

import React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Task {
  id: string
  date: string
  title: string
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function RosterCalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1))
  const [viewMode, setViewMode] = useState<"month" | "week" | "day">("month")
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", date: "2026-01-01", title: "meeting" }
  ])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [newTaskTitle, setNewTaskTitle] = useState("")

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const startingDayOfWeek = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()

  const prevMonthLastDay = new Date(year, month, 0).getDate()

  const goToToday = () => setCurrentDate(new Date(2026, 0, 25))
  const goToPrevMonth = () => setCurrentDate(new Date(year, month - 1, 1))
  const goToNextMonth = () => setCurrentDate(new Date(year, month + 1, 1))

  const monthName = currentDate.toLocaleString("default", { month: "long" })

  const formatDateKey = (y: number, m: number, d: number) => {
    return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`
  }

  const getTasksForDate = (dateKey: string) => {
    return tasks.filter((task) => task.date === dateKey)
  }

  const handleDateClick = (dateKey: string) => {
    setSelectedDate(dateKey)
    setNewTaskTitle("")
    setIsDialogOpen(true)
  }

  const handleAddTask = () => {
    if (newTaskTitle.trim() && selectedDate) {
      const newTask: Task = {
        id: Date.now().toString(),
        date: selectedDate,
        title: newTaskTitle.trim(),
      }
      setTasks([...tasks, newTask])
      setIsDialogOpen(false)
      setNewTaskTitle("")
    }
  }

  const handleDeleteTask = (taskId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const calendarDays = []

  // Previous month days
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    const day = prevMonthLastDay - i
    const dateKey = formatDateKey(year, month - 1, day)
    calendarDays.push({
      day,
      isCurrentMonth: false,
      dateKey,
      isToday: false,
    })
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = formatDateKey(year, month, day)
    const isToday = day === 25 && month === 0 && year === 2026
    calendarDays.push({
      day,
      isCurrentMonth: true,
      dateKey,
      isToday,
    })
  }

  // Next month days
  const remainingDays = 42 - calendarDays.length
  for (let day = 1; day <= remainingDays; day++) {
    const dateKey = formatDateKey(year, month + 1, day)
    calendarDays.push({
      day,
      isCurrentMonth: false,
      dateKey,
      isToday: false,
    })
  }

  return (
    <>
      <Card className="border-border">
        <CardHeader className="border-b border-border bg-muted py-3">
          <CardTitle className="text-base font-semibold">Calendar View</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          {/* Calendar controls */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex">
                <Button
                  variant="default"
                  size="sm"
                  onClick={goToPrevMonth}
                  className="rounded-r-none bg-[#4a5568] hover:bg-[#3d4655]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={goToNextMonth}
                  className="rounded-l-none bg-[#4a5568] hover:bg-[#3d4655]"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Button
                variant="default"
                size="sm"
                onClick={goToToday}
                className="bg-[#4a5568] hover:bg-[#3d4655]"
              >
                today
              </Button>
            </div>

            <h2 className="text-lg font-semibold text-foreground">
              {monthName} {year}
            </h2>

            <div className="flex">
              <Button
                variant={viewMode === "month" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("month")}
                className={`rounded-r-none ${viewMode === "month" ? "bg-[#4a5568] hover:bg-[#3d4655]" : ""}`}
              >
                month
              </Button>
              <Button
                variant={viewMode === "week" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("week")}
                className={`rounded-none border-x-0 ${viewMode === "week" ? "bg-[#4a5568] hover:bg-[#3d4655]" : ""}`}
              >
                week
              </Button>
              <Button
                variant={viewMode === "day" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("day")}
                className={`rounded-l-none ${viewMode === "day" ? "bg-[#4a5568] hover:bg-[#3d4655]" : ""}`}
              >
                day
              </Button>
            </div>
          </div>

          {/* Calendar grid */}
          <div className="border border-border">
            {/* Day headers */}
            <div className="grid grid-cols-7 bg-[#4a5568]">
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="border-r border-[#5a6578] py-2 text-center text-sm font-medium text-white last:border-r-0"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7">
              {calendarDays.map((dayInfo, index) => {
                const dayTasks = getTasksForDate(dayInfo.dateKey)
                return (
                  <div
                    key={index}
                    onClick={() => dayInfo.isCurrentMonth && handleDateClick(dayInfo.dateKey)}
                    onKeyDown={(e) => e.key === "Enter" && dayInfo.isCurrentMonth && handleDateClick(dayInfo.dateKey)}
                    role="button"
                    tabIndex={dayInfo.isCurrentMonth ? 0 : -1}
                    className={`min-h-[80px] border-b border-r border-border p-1 transition-colors ${
                      dayInfo.isCurrentMonth ? "cursor-pointer hover:bg-muted/50" : ""
                    } ${dayInfo.isToday ? "bg-[#fef9e7]" : "bg-card"}`}
                  >
                    <div
                      className={`text-right text-sm ${
                        dayInfo.isCurrentMonth
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {dayInfo.day}
                    </div>
                    <div className="mt-1 space-y-1">
                      {dayTasks.map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center justify-between rounded bg-[#3788d8] px-1 py-0.5 text-xs text-white"
                        >
                          <span className="truncate">{task.title}</span>
                          <button
                            type="button"
                            onClick={(e) => handleDeleteTask(task.id, e)}
                            className="ml-1 flex-shrink-0 hover:text-red-200"
                            aria-label={`Delete ${task.title}`}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add Task Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="task-date">Date</Label>
              <Input id="task-date" value={selectedDate} disabled />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="task-title">Task</Label>
              <Input
                id="task-title"
                placeholder="Enter task name"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddTask} className="bg-primary hover:bg-primary/90">
              Add Task
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
