"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Mitchell",
    relationship: "Daughter",
    location: "New York, NY",
    text: "GoldenCare has been a blessing for our family. Living abroad, I was constantly worried about my mother. Their team treats her like family. From medical checkups to daily companionship, they handle everything with such warmth.",
    rating: 5,
  },
  {
    name: "Robert & Linda Chen",
    relationship: "Son & Daughter-in-law",
    location: "San Francisco, CA",
    text: "We joined the GoldenCare family six months ago. Our assigned caregiver, Maria, is incredibly dependable and hardworking. My father-in-law looks forward to her visits. We couldn't be more satisfied.",
    rating: 5,
  },
  {
    name: "James Thompson",
    relationship: "Son",
    location: "Chicago, IL",
    text: "I am relieved to see my parents happy. The level of care and thoughtfulness from GoldenCare is extraordinary. They helped my father through his recovery after surgery and the physiotherapy support was outstanding.",
    rating: 5,
  },
  {
    name: "Patricia Williams",
    relationship: "Granddaughter",
    location: "Austin, TX",
    text: "Thank you GoldenCare for taking such good care of my grandmother. I highly recommend this organization. They do not treat clients as a number and provide care as if they are family members. Truly special.",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )

  return (
    <section id="testimonials" className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
        </div>
        <h2 className="text-balance text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          What Families Say About Us
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground">
          Real stories from real families who trust GoldenCare to look after
          their loved ones.
        </p>

        {/* Desktop grid */}
        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-2">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="border-border bg-card"
            >
              <CardContent className="flex flex-col p-6">
                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                <p className="flex-1 text-base leading-relaxed text-muted-foreground italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <div className="mt-3 border-t border-border pt-3">
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.relationship} &middot; {t.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="mt-14 md:hidden">
          <Card className="border-border bg-card">
            <CardContent className="flex flex-col p-6">
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              <p className="flex-1 text-base leading-relaxed text-muted-foreground italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  )
                )}
              </div>
              <div className="mt-3 border-t border-border pt-3">
                <p className="font-bold text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].relationship} &middot;{" "}
                  {testimonials[current].location}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Button
              size="icon"
              variant="outline"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <span className="text-sm text-muted-foreground">
              {current + 1} / {testimonials.length}
            </span>
            <Button
              size="icon"
              variant="outline"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
