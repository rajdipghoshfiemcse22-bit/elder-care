import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services-data"

export function Services() {
  return (
    <section id="services" className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Services
          </span>
        </div>
        <h2 className="text-balance text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Comprehensive Care Solutions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground">
          From daily companionship to emergency medical support, we cover every
          aspect of your loved one&apos;s well-being.
        </p>

        {/* Service cards grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.slug}
              className="group border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex flex-col p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Learn More
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    {"->"}
                  </span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/#contact">Discuss Your Care Needs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
