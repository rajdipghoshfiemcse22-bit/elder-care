import { PhoneCall, ClipboardCheck, UserCheck, HeartHandshake } from "lucide-react"

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Get in Touch",
    description:
      "Reach out to us via phone, email, or our contact form. Share your family's specific needs and concerns.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Personalized Assessment",
    description:
      "Our team conducts a thorough assessment to understand your loved one's physical, emotional, and social needs.",
  },
  {
    icon: UserCheck,
    step: "03",
    title: "Matched with a Caregiver",
    description:
      "We assign a trained, verified caregiver who matches your parent's personality and care requirements.",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "Ongoing Care & Updates",
    description:
      "Regular visits, health monitoring, and transparent communication so you always know your parents are safe.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            How It Works
          </span>
        </div>
        <h2 className="text-balance text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Simple Steps to Peace of Mind
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground">
          Getting started with Ayushman Elder Care Service is easy. Here&apos;s how we bring
          trusted care to your family.
        </p>

        {/* Steps */}
        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute top-12 right-0 left-0 hidden h-px bg-border lg:block" />

          {steps.map((item) => (
            <div key={item.step} className="relative flex flex-col items-center text-center">
              {/* Step circle */}
              <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-primary bg-card shadow-md">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <span className="mt-2 text-xs font-bold uppercase tracking-widest text-primary">
                Step {item.step}
              </span>
              <h3 className="mt-3 text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
