"use client"

import Link from "next/link"
import { ChevronDown, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <div className="relative">
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded border-2 border-primary">
              <span className="font-serif italic text-lg font-bold tracking-wide">Enhance</span>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[8px] px-2 py-0.5 tracking-widest font-semibold">
              SERVICES
            </div>
          </div>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            href="/leave-request" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            HRMS
          </Link>
          <Link 
            href="#" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            MY TASK
          </Link>
          <Link 
            href="#" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            MY TICKETS
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 outline-none">
              <div className="w-8 h-8 rounded-full border-2 border-muted-foreground flex items-center justify-center">
                <User className="w-5 h-5 text-muted-foreground" />
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}
