"use client"

import Link from "next/link"
import { Monitor, AlertCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface AskForItSidebarProps {
  isOpen: boolean
  onClose: () => void
  activePage?: string
}

const menuItems = [
  {
    label: "Incident",
    href: "/ask-for-it",
    icon: AlertCircle,
    id: "incident",
  },
]

export function AskForItSidebar({ isOpen, onClose, activePage = "incident" }: AskForItSidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
          onKeyDown={(e) => e.key === "Escape" && onClose()}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 transform border-r border-border bg-sidebar transition-transform duration-200 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-sidebar-border bg-muted px-4 py-3">
            <div className="flex items-center gap-2">
              <Monitor className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">Ask for IT</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">-</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 lg:hidden"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
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
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                    onClick={onClose}
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
