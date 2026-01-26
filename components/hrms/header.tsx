"use client"

import Link from "next/link"
import { ChevronDown, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout } from "@/components/auth-guard"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b">
      <div className="flex h-14 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="Enhance Services" 
            className="h-10 w-auto"
          />
        </Link>
        
        <nav className="flex items-center gap-6 ml-auto">
          <Link 
            href="/hrms" 
            className="relative text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            HRMS
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
          </Link>
          <Link 
            href="#" 
            className="relative text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            MY TASK
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
          </Link>
          <Link 
            href="#" 
            className="relative text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            MY TICKETS
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
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
              <DropdownMenuItem onClick={logout} className="cursor-pointer">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}
