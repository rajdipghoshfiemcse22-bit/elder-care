import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const navigation = {
  services: [
    { name: "Elder Care", href: "/services/elder-care" },
    { name: "Emergency Support", href: "/services/emergency" },
    { name: "Home Nursing", href: "/services/home-care" },
    { name: "Financial Management", href: "/services/financial-management" },
    { name: "Legal Advisory", href: "/services/legal-advisory" },
    { name: "Property Management", href: "/services/property-management" },
  ],
  company: [
    { name: "About Us", href: "/#about" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Blog", href: "/#blog" },
    { name: "Careers", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "/#faq" },
    { name: "Contact Us", href: "/#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">
                  G
                </span>
              </div>
              <span className="text-xl font-bold text-foreground font-serif">
                GoldenCare
              </span>
            </Link>
            <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
              We are your presence in your absence. Providing trusted,
              compassionate elder care services so your loved ones are never
              alone.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:+1800555CARE"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                1-800-555-CARE
              </a>
              <a
                href="mailto:hello@goldencare.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                hello@goldencare.com
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                123 Care Street, Suite 200
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Services
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Support
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GoldenCare. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
