"use client"

import Link from "next/link"
import { X, FileText, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PayrollSidebarProps {
  isOpen: boolean
  onClose: () => void
  activePage?: string
}

const menuItems = [
  {
    label: "Salary Slip",
    href: "/payroll",
    icon: FileText,
    id: "salary-slip",
  },
]

export function PayrollSidebar({ isOpen, onClose, activePage = "salary-slip" }: PayrollSidebarProps) {
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
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 transform border-r border-border bg-sidebar transition-transform duration-200 ease-in-out lg:translate-x-0",
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
              aria-label="Close sidebar"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Section Header */}
          <div className="flex items-center gap-2 bg-muted px-4 py-3">
            <Wallet className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">Payroll</span>
            <span className="ml-auto text-muted-foreground">-</span>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 py-2">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors",
                      item.id === activePage
                        ? "text-primary"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
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
