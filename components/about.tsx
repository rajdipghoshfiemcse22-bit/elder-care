import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const values = [
  "Personalized care plans tailored to every individual",
  "Trained, verified, and compassionate caregivers",
  "Transparent communication with family members",
  "24/7 emergency medical support and ambulance",
  "Comprehensive well-being: physical, emotional & social",
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            About Us
          </span>
        </div>
        <h2 className="text-balance text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Why Families Choose Ayushman Elder Care Service
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground">
          We are your presence in your absence. Founded with the mission to
          bridge the distance between families and their aging loved ones.
        </p>

        <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image */}
          <div className="relative flex-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/about-family.jpg"
                alt="Caregiver assisting an elderly person at home"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Accent decoration */}
            <div className="absolute -top-3 -right-3 -z-10 h-full w-full rounded-2xl bg-primary/10" />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col">
            <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              A Trusted Partner for Your Family
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              What began as a vision to help families stay connected has grown
              into a trusted support system for over 500 families. We deliver
              love, support, and professional care to ensure your parents live
              with dignity, joy, and independence.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our team of dedicated caregivers acts as your family&apos;s local
              guardian, ensuring your loved ones are never alone in times of
              need. From accompanying them to doctor visits to simply sharing a
              moment of warmth, we are there every step of the way.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {values.map((val) => (
                <li key={val} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-foreground">
                    {val}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button asChild>
                <Link href="#contact">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
