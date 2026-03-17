import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  { icon: Shield, label: "Trusted & Verified Caregivers" },
  { icon: Clock, label: "24/7 Emergency Support" },
  { icon: Heart, label: "Compassionate Companionship" },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
    >
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-secondary/40" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Trusted by 500+ Families Nationwide
          </span>

          <h1 className="text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Caring for Those Who{" "}
            <span className="text-primary">Cared for Us</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We are your presence in your absence. GoldenCare provides premium
            elder care services including companionship, medical support, home
            nursing, and complete care management for your loved ones.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2">
              <Link href="/#contact">
                Get Started Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#services">Explore Our Services</Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="relative flex-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-elder-care.jpg"
              alt="Caregiver spending quality time with an elderly person"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card p-4 shadow-lg md:-bottom-6 md:-left-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Happy Families</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
