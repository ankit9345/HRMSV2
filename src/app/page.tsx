import { Header } from "@/components/hrms/header"
import { Hero } from "@/components/hrms/hero"
import { FeaturesSection } from "@/components/hrms/features-section"
import { Footer } from "@/components/hrms/footer"

export default function HRMSPortal() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}
