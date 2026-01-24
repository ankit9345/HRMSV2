"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative h-[400px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`,
        }}
      >
        {/* Gradient overlay - color on left, grayscale on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-gray-100/90" />
      </div>

      {/* Business professionals overlay on left side */}
      <div className="absolute left-0 bottom-0 h-full w-1/3 flex items-end">
        <div 
          className="w-full h-[95%] bg-contain bg-bottom bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80')`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col items-center justify-center px-4 md:px-6">
        {/* Banner ribbon */}
        <div className="absolute left-1/4 top-16 -translate-x-1/2">
          <div className="relative">
            <div className="bg-[#2d8a9e] text-white px-8 py-3 clip-ribbon">
              <span className="font-serif italic text-2xl font-bold">Enhance</span>
              <div className="text-[10px] tracking-widest text-center mt-0.5">PROPERTY MANAGEMENT</div>
            </div>
          </div>
        </div>

        {/* Quote text on right */}
        <div className="absolute right-16 top-24 text-4xl font-serif italic text-gray-600 hidden lg:block">
          {'"'}...in the details.{'"'}
        </div>

        {/* Search bar */}
        <div className="flex w-full max-w-2xl mt-20">
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
