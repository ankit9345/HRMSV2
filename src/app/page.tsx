"use client"

import { Header } from "@/components/hrms/header"
import { Hero } from "@/components/hrms/hero"
import { FeaturesSection } from "@/components/hrms/features-section"
import { Footer } from "@/components/hrms/footer"
import { AuthGuard } from "@/components/auth-guard"

export default function HRMSPortal() {
  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Hero />
          <FeaturesSection />
        </main>
        <Footer />
      </div>
    </AuthGuard>
  )
}
