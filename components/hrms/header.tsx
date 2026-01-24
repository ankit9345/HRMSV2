"use client"

import Link from "next/link"
import { User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">HR</span>
            </div>
            <span className="font-semibold text-foreground text-lg">Enterprise HRMS</span>
          </div>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            HRMS
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            My Task
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            My Tickets
          </Link>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5 text-muted-foreground" />
            <span className="sr-only">User profile</span>
          </Button>
        </nav>
      </div>
    </header>
  )
}
