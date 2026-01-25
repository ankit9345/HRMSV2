"use client"

import Link from "next/link"
import { CheckSquare, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface OrganizationPoliciesSidebarProps {
  isOpen: boolean
  onClose: () => void
  activePage?: string
}

const menuItems = [
  {
    label: "Knowledge base IT",
    href: "/organization-policies",
    id: "knowledge-base-it",
  },
  {
    label: "Knowledge base HR",
    href: "/organization-policies/knowledge-base-hr",
    id: "knowledge-base-hr",
  },
  {
    label: "Knowledge base Operations",
    href: "/organization-policies/knowledge-base-operations",
    id: "knowledge-base-operations",
  },
]

export function OrganizationPoliciesSidebar({
  isOpen,
  onClose,
  activePage = "knowledge-base-it",
}: OrganizationPoliciesSidebarProps) {
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
          <div className="flex items-center justify-between border-b border-border bg-muted px-4 py-3">
            <div className="flex items-center gap-2">
              <CheckSquare className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">Organization Policies</span>
            </div>
            <span className="text-muted-foreground">-</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-2">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  item.id === activePage
                    ? "text-primary"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}
