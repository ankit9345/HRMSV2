import { FeatureCard } from "./feature-card"

const features = [
  {
    title: "Leave Management",
    description: "Smart Leave Management for Modern Teams",
    imageSrc: "/images/leave-management.jpg",
    href: "#leave",
  },
  {
    title: "Payrolls",
    description: "Reliable & Accurate Payroll Management",
    imageSrc: "/images/payrolls.jpg",
    href: "#payrolls",
  },
  {
    title: "Roster / Shift",
    description: "Plan Shifts Smarter and Faster",
    imageSrc: "/images/roster-shift.jpg",
    href: "#roster",
  },
  {
    title: "Organization Policies",
    description: "Clear policies for a stronger organization",
    imageSrc: "/images/org-policies.jpg",
    href: "#policies",
  },
  {
    title: "Ask for IT",
    description: "Report technical issues instantly",
    imageSrc: "/images/ask-it.jpg",
    href: "#it-support",
  },
  {
    title: "Ask for HR",
    description: "A simple way to communicate HR issues",
    imageSrc: "/images/ask-hr.jpg",
    href: "#hr-support",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              href={feature.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
