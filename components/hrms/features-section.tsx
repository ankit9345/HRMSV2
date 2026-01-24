import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Leave Management",
    description: "Smart Leave Management for Modern Teams",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
    href: "/leave-request",
  },
  {
    title: "Payrolls",
    description: "Reliable & Accurate Payroll Management",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
    href: "#",
  },
  {
    title: "Roster / Shift",
    description: "Plan Shifts Smarter and Faster",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80",
    href: "#",
  },
  {
    title: "Organization Policies",
    description: "Clear policies for a stronger organization",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80",
    href: "#",
  },
  {
    title: "Ask for IT",
    description: "Report technical issues instantly",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80",
    href: "#",
  },
  {
    title: "Ask for HR",
    description: "A simple way to communicate HR issues",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&q=80",
    href: "#",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden border-0 shadow-md">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-3">
                  <h3 className="font-semibold text-sm text-foreground mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
