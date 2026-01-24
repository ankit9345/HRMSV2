"use client"

import { ClipboardList, CalendarDays, CalendarCheck, FileCheck, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  activePage?: string
}

const menuItems = [
  {
    label: "Leave Request",
    href: "/leave-request",
    icon: ClipboardList,
    id: "leave-request",
  },
  {
    label: "Leave Balance",
    href: "/leave-balance",
    icon: CalendarDays,
    id: "leave-balance",
  },
  {
    label: "Leave Calendar",
    href: "/leave-calendar",
    icon: CalendarCheck,
    id: "leave-calendar",
  },
  {
    label: "Leave Status",
    href: "/leave-status",
    icon: FileCheck,
    id: "leave-status",
  },
]

export function Sidebar({ isOpen, onClose, activePage = "leave-request" }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r border-border bg-sidebar transition-transform duration-200 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Mobile close button */}
          <div className="flex items-center justify-end p-2 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Section title */}
          <div className="flex items-center gap-2 px-4 py-3">
            <ClipboardList className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Leave Management
            </span>
          </div>

          {/* Navigation items */}
          <nav className="flex-1 px-3">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={cn(
                      "relative flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                      item.id === activePage
                        ? "bg-sidebar-accent text-primary before:absolute before:left-0 before:top-1/2 before:h-6 before:-translate-y-1/2 before:w-1 before:rounded-r-full before:bg-primary"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}
