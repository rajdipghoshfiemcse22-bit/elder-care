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
    q: "Can I request a different caregiver if needed?",
    a: "Absolutely. Your comfort matters to us. If you're not satisfied with your assigned caregiver, simply let us know and we'll promptly arrange a replacement. We also do our best to assign the same caregiver for each visit to build a consistent, trusting relationship.",
  },
  {
    q: "Are services only available for plan members?",
    a: "Once you sign up for any of our care plans, you gain access to all facilities. However, services like property management, financial management, and legal advisory can be booked anytime without a membership via phone or email.",
  },
  {
    q: "How do I choose the right care plan?",
    a: "Our plans are designed based on different stages of aging, mobility, and emotional needs. What works for a 65-year-old may differ from what's suitable for an 85-year-old. Our team will help you assess the right level of support during your initial consultation.",
  },
  {
    q: "Are you available 24/7 for emergencies?",
    a: "Yes, we are available 24/7, rain or storm. Every membership includes a dedicated emergency contact number. Anyone can call us during a medical emergency, and we'll be there to assist your loved one immediately.",
  },
  {
    q: "Can you assist with technology issues or fraud prevention?",
    a: "Every plan includes technology troubleshooting assistance. If your parents encounter cybercrime or fraud, our team of legal experts is available to handle the situation while we provide emotional support throughout the process.",
  },
  {
    q: "Do you offer support during medical procedures like dialysis?",
    a: "Yes, we provide companionship and support during doctor visits, dialysis, chemotherapy, and more. For post-operative care, our caregivers offer daily visits and are trained to monitor vital parameters, just like a family member would.",
  },
  {
    q: "Can you help if my parents want to relocate?",
    a: "We handle everything from packing and moving to setting up the new home with essentials like utilities, hiring household help, and making the transition as smooth and stress-free as possible.",
  },
  {
    q: "What if my parent has dementia and needs daily assistance?",
    a: "We provide complete daily support including bill payments, grocery shopping, bank visits, and household organization. Our trained caregivers are experienced in working with dementia patients and provide compassionate, patient assistance.",
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
