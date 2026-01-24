"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative h-[320px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          <div className="flex overflow-hidden rounded-lg bg-card shadow-lg">
            <Input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-0 bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-0 h-14 text-base px-5"
            />
            <Button
              className="h-14 rounded-none px-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
