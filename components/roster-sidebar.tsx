"use client"

import Link from "next/link"
import { CalendarDays, Clock, X, CheckSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface RosterSidebarProps {
  isOpen: boolean
  onClose: () => void
  activePage?: string
}

const menuItems = [
  {
    label: "Calendar View",
    href: "/roster",
    icon: CalendarDays,
    id: "calendar-view",
  },
  {
    label: "Shift Details",
    href: "/roster/shift-details",
    icon: Clock,
    id: "shift-details",
  },
]

export function RosterSidebar({ isOpen, onClose, activePage = "calendar-view" }: RosterSidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
          onKeyDown={(e) => e.key === "Escape" && onClose()}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 transform border-r border-border bg-card transition-transform duration-200 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Close button for mobile */}
          <div className="flex items-center justify-end p-2 lg:hidden">
            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close sidebar">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Sidebar header */}
          <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-3">
            <CheckSquare className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">Roster</span>
            <span className="ml-auto text-muted-foreground">-</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-2">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      item.id === activePage
                        ? "text-primary"
                        : "text-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}
