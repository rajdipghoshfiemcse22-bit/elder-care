import {
  Heart,
  Siren,
  Home,
  Landmark,
  Truck,
  Scale,
  Building2,
  GraduationCap,
  type LucideIcon,
} from "lucide-react"

export interface ServiceItem {
  icon: LucideIcon
  title: string
  slug: string
  description: string
  longDescription: string
  features: string[]
  benefits: string[]
}

export const services: ServiceItem[] = [
  {
    icon: Heart,
    title: "Elder Care Service",
    slug: "elder-care",
    description:
      "Comprehensive companionship, emotional support, visit records, and day-to-day elder assistance tailored to your loved one's needs.",
    longDescription:
      "Our Elder Care Service is designed to provide holistic, person-centered support for seniors who need daily assistance and companionship. Every care plan is tailored and includes regular emotional support, progress tracking, and dependable hand-holding for everyday needs. From morning routines to evening check-ins, our team ensures your loved ones feel safe, valued, and connected throughout the day.",
    features: [
      "Personalized daily care plans tailored to individual needs",
      "Trained and background-verified companion caregivers",
      "Health vitals monitoring and medication reminders",
      "Social engagement and mental stimulation activities",
      "Service sheet preparation with regular records",
      "Coordination with physicians and specialists",
    ],
    benefits: [
      "Peace of mind knowing your loved ones are in caring hands",
      "Reduced hospital readmissions through proactive monitoring",
      "Improved quality of life and emotional well-being",
      "Flexible scheduling including weekends and holidays",
    ],
  },
  {
    icon: Siren,
    title: "Medical Exigency Support",
    slug: "emergency",
    description:
      "24/7 emergency buddy assistance with ambulance coordination and rapid escalation support.",
    longDescription:
      "When a medical emergency strikes, every second matters. Our Medical Exigency Support service provides round-the-clock immediate response, including emergency buddy assistance, ambulance support, and family notifications. We bridge the gap between the moment of crisis and professional medical intervention.",
    features: [
      "Emergency buddy assistance available 24/7",
      "Rapid ambulance coordination and dispatch support",
      "Coordination with nearby hospitals for immediate admission",
      "On-call medical professionals for remote triage",
      "Post-emergency follow-up care and documentation",
      "Family notification and real-time status updates",
    ],
    benefits: [
      "Instant access to emergency support anytime, anywhere",
      "Reduced response time through established hospital partnerships",
      "Complete family coordination during critical situations",
      "Documented medical history shared with responders for better outcomes",
    ],
  },
  {
    icon: Home,
    title: "Home Care Service",
    slug: "home-care",
    description:
      "Home-based long-term treatment support including dialysis/cancer assistance, palliative care, and equipment support.",
    longDescription:
      "Our Home Care Service brings structured medical support to the comfort of home for families managing long-term treatment. Whether your loved one needs dialysis support, cancer treatment assistance, palliative care, or post-procedure recovery, our care teams coordinate dependable support with compassion and consistency.",
    features: [
      "Qualified registered nurses for daily and overnight care",
      "Long-term treatment support for chronic medical conditions",
      "Dialysis and cancer treatment support coordination",
      "Medical equipment on rent and home setup support",
      "Home dental and eye checkup coordination",
      "Chronic disease management and monitoring",
      "Palliative and end-of-life comfort care",
    ],
    benefits: [
      "Hospital-quality care in the comfort of home",
      "Faster recovery times in familiar surroundings",
      "Significant cost savings compared to extended hospital stays",
      "One-on-one dedicated attention from medical professionals",
    ],
  },
  {
    icon: Landmark,
    title: "Financial Management",
    slug: "financial-management",
    description:
      "Bill payments, pension handling, Mediclaim support, Aadhaar/PAN assistance, and bank visit support.",
    longDescription:
      "Our Financial Management service is built for families who need reliable on-ground support for routine and compliance-related tasks. We handle utility payments, pension workflows, Mediclaim documentation, Aadhaar/PAN paperwork, and assisted bank visits with transparent reporting and record keeping.",
    features: [
      "Timely utility and household bill payments",
      "Pension collection and documentation management",
      "Insurance premium tracking and renewal reminders",
      "Mediclaim documentation and claim process support",
      "Aadhaar/PAN paperwork and update assistance",
      "Assisted bank visits for account management",
      "Transparent monthly financial reports to family",
    ],
    benefits: [
      "No missed payments or financial lapses",
      "Complete transparency with detailed monthly reports",
      "Reduced stress and confusion for elderly parents",
      "Secure and trustworthy handling of all financial matters",
    ],
  },
  {
    icon: Truck,
    title: "Remote Logistical Support",
    slug: "logistical-support",
    description:
      "Relocation, household logistics, staff wage support, appointment movement, and special occasion assistance.",
    longDescription:
      "Our Remote Logistical Support service manages the practical ground-level tasks that families often struggle to coordinate from a distance. This includes groceries and essentials, household staff coordination, wage management, relocation support, appointments and transportation, and event support for birthdays/anniversaries.",
    features: [
      "Regular grocery and essential supplies delivery",
      "Household staff coordination and management",
      "Wage management support for home staff",
      "Home maintenance and repair scheduling",
      "Relocation planning and execution assistance",
      "Special occasion support (birthdays/anniversaries)",
      "Appointment scheduling and transportation",
    ],
    benefits: [
      "Seamless daily life without logistical worries",
      "Trustworthy local support acting on your behalf",
      "Time saved for families living far away",
      "Improved living conditions through proactive maintenance",
    ],
  },
  {
    icon: Scale,
    title: "Legal Advisory",
    slug: "legal-advisory",
    description:
      "Legal guidance for fraud/cyber incidents, document review, Mediclaim disputes, and senior-focused legal issues.",
    longDescription:
      "Our Legal Advisory service connects families with vetted legal professionals for senior-focused matters. We support fraud and cybercrime response, legal-document review, Mediclaim/legal issue handling, and regulatory paperwork so families can act quickly and correctly.",
    features: [
      "Access to vetted elder law attorneys and legal experts",
      "Cybercrime awareness training and fraud prevention",
      "Guidance for mediclaim/legal documentation issues",
      "Document review for contracts, wills, and agreements",
      "Legal representation for disputes and claims",
      "Assistance with government and regulatory paperwork",
      "Regular legal health check-ups and consultations",
    ],
    benefits: [
      "Protection against fraud, scams, and exploitation",
      "Expert legal guidance tailored to senior needs",
      "Peace of mind knowing documents are properly managed",
      "Proactive prevention rather than reactive damage control",
    ],
  },
  {
    icon: Building2,
    title: "Property Management",
    slug: "property-management",
    description:
      "Property oversight including inspection, maintenance, tenant handling, renovation, and documentation support.",
    longDescription:
      "Our Property Management service offers end-to-end oversight for families managing assets remotely. We handle routine inspections, tenant workflows, maintenance execution, emergency repairs, property documentation, and home renovation/interior coordination through trusted local partners.",
    features: [
      "Regular property inspections and condition reports",
      "Home renovation and interior design coordination",
      "Tenant screening, rent collection, and lease management",
      "Maintenance coordination with trusted local vendors",
      "Property tax filing and documentation management",
      "Emergency repair and crisis response coordination",
      "Detailed photographic and written property reports",
    ],
    benefits: [
      "Properties maintained to high standards in your absence",
      "Steady rental income with professional tenant management",
      "No surprise maintenance issues with regular inspections",
      "Complete documentation trail for all property activities",
    ],
  },
  {
    icon: GraduationCap,
    title: "Documentation & Technology Assistance",
    slug: "educational-assistance",
    description:
      "Service-sheet records, document handling, and hand-holding support for technology troubleshooting.",
    longDescription:
      "This service focuses on practical execution: maintaining service sheets, organizing records, and helping seniors with day-to-day technology use. We provide hand-holding support for phones, apps, and digital tasks so families can maintain continuity and transparency.",
    features: [
      "Service sheet maintenance and family-facing updates",
      "Hand-holding support for technology troubleshooting",
      "Digital payment and app-use guidance for seniors",
      "Document collection, verification, and safe organization",
      "Document digitization and secure storage",
      "Multi-city and multi-institution coordination",
    ],
    benefits: [
      "Less stress for seniors during digital and paperwork tasks",
      "Secure and organized management of important records",
      "Reduced dependency on unknown third parties",
      "Faster resolution of time-sensitive documentation needs",
    ],
  },
]
