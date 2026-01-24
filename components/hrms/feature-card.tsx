import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  imageSrc: string
  href?: string
}

export function FeatureCard({ title, description, imageSrc, href = "#" }: FeatureCardProps) {
  return (
    <Link href={href} className="block group">
      <Card className="overflow-hidden bg-card border-border transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-36 w-full overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-foreground text-base mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
