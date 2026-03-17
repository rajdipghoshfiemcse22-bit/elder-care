import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { BlogPreview } from "@/components/blog-preview"
import { ContactCta } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <FAQ />
        <BlogPreview />
        <ContactCta />
      </main>
      <Footer />
    </>
  )
}
