import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    q: "Do you provide emergency support any time of day?",
    a: "Yes. Our Medical Exigency Support includes 24/7 emergency buddy assistance and ambulance coordination so your family can get immediate help during urgent situations.",
  },
  {
    q: "Can you help with long-term treatment like dialysis or cancer care?",
    a: "Yes. We support long-term treatment journeys including dialysis and cancer treatment coordination, hospital visit support, and continuity of care at home.",
  },
  {
    q: "Do you offer palliative and emotional support at home?",
    a: "Absolutely. We provide compassionate palliative support at home along with regular emotional support and monitoring to improve comfort and dignity.",
  },
  {
    q: "Can you arrange medical equipment and home assistants?",
    a: "Yes. We help arrange medical equipment on rent and coordinate trained home assistants based on your loved one’s condition and care plan.",
  },
  {
    q: "Can you assist with Mediclaim, Aadhaar, PAN, and legal paperwork?",
    a: "Yes. We provide practical support for Mediclaim workflows, Aadhaar/PAN documentation, and legal advisory needs so families can avoid delays and confusion.",
  },
  {
    q: "Do you maintain records of each visit and care task?",
    a: "Yes. We maintain service sheets for each visit, keep records updated, and share structured updates with family members for transparency and continuity.",
  },
  {
    q: "Can you manage home logistics and special occasions?",
    a: "Yes. We support relocation, home logistics, wage support for home staff, and special-occasion arrangements like birthdays and anniversaries.",
  },
  {
    q: "Do you provide technology hand-holding for seniors?",
    a: "Yes. We offer step-by-step technology troubleshooting help for calls, apps, digital payments, and basic device usage so seniors can stay connected and safe.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        {/* Heading */}
        <div className="mb-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>
        </div>
        <h2 className="text-balance text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-center text-lg leading-relaxed text-muted-foreground">
          {"Can't find what you're looking for? Reach out and we'll be happy to help."}
        </p>

        {/* Accordion */}
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <Button asChild>
            <Link href="#contact">Still Have Questions? Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
