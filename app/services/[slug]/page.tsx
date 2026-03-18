import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Phone,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { services } from "@/lib/services-data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return { title: "Service Not Found" }
  return {
    title: `${service.title} | GoldenCare`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) notFound()

  const currentIndex = services.findIndex((s) => s.slug === slug)
  const otherServices = services.filter((s) => s.slug !== slug)

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero banner */}
        <section className="bg-primary py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Link
              href="/#services"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Services
            </Link>
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/15 backdrop-blur-sm">
                <service.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-balance font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
                  {service.description}
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                asChild
              >
                <Link href="/#contact">Schedule a Consultation</Link>
              </Button>
              <Link
                href="tel:+919883608282"
                className="flex items-center gap-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                9883608282 / 6290601110
              </Link>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-3">
              {/* Left content */}
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  About This Service
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  {service.longDescription}
                </p>

                {/* Features */}
                <div className="mt-12">
                  <h3 className="font-serif text-xl font-bold text-foreground md:text-2xl">
                    What We Provide
                  </h3>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm leading-relaxed text-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mt-12">
                  <h3 className="font-serif text-xl font-bold text-foreground md:text-2xl">
                    Key Benefits
                  </h3>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <Card key={benefit} className="border-border bg-secondary/40">
                        <CardContent className="flex items-start gap-3 p-4">
                          <Star className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          <span className="text-sm leading-relaxed text-foreground">
                            {benefit}
                          </span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* CTA Card */}
                <Card className="sticky top-28 border-border bg-card shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-serif text-lg font-bold text-foreground">
                      Ready to Get Started?
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Our care coordinators are available to discuss your
                      family&apos;s specific needs and create a personalized care
                      plan.
                    </p>
                    <Button asChild className="mt-6 w-full">
                      <Link href="/#contact">Book a Free Consultation</Link>
                    </Button>
                    <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 text-primary" />
                      <a
                        href="tel:+919883608282"
                        className="font-medium text-foreground hover:text-primary"
                      >
                        9883608282 / 6290601110
                      </a>
                    </div>
                    <p className="mt-4 text-center text-xs text-muted-foreground">
                      No commitment required. Free initial assessment.
                    </p>
                  </CardContent>
                </Card>

                {/* Trust indicators */}
                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Background Verified
                      </p>
                      <p className="text-xs text-muted-foreground">
                        All staff thoroughly vetted
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        4.9/5 Rating
                      </p>
                      <p className="text-xs text-muted-foreground">
                        From 500+ families served
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="border-t border-border bg-secondary/50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              Explore Other Services
            </h2>
            <p className="mt-2 text-muted-foreground">
              Discover our complete range of elder care solutions.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {otherServices.slice(0, 4).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-start gap-3 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground">
                      {s.title}
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {s.description}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      Learn More
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
