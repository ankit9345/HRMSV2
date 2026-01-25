"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative h-[350px] overflow-hidden">
      {/* Background Banner Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/banner1.jpg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col items-center justify-end pb-16 px-4 md:px-6">
        {/* Search bar */}
        <div className="flex w-full max-w-2xl">
          <div className="flex w-full bg-white rounded-sm shadow-lg overflow-hidden">
            <Input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-0 h-12 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button 
              className="h-12 px-6 rounded-none bg-primary hover:bg-primary/90"
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}
