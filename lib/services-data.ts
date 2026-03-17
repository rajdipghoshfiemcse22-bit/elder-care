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
      "Comprehensive daily companionship, health monitoring, and emotional support tailored to your loved one's needs.",
    longDescription:
      "Our Elder Care Service is designed to provide holistic, person-centered support for seniors who need daily assistance and companionship. We understand that every individual is unique, and our trained caregivers craft personalized care plans that address physical, emotional, and social well-being. From morning routines to evening check-ins, our team ensures your loved ones feel safe, valued, and connected throughout the day.",
    features: [
      "Personalized daily care plans tailored to individual needs",
      "Trained and background-verified companion caregivers",
      "Health vitals monitoring and medication reminders",
      "Social engagement and mental stimulation activities",
      "Regular progress reports and family updates",
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
    title: "Emergency Service",
    slug: "emergency",
    description:
      "24/7 emergency medical support and ambulance services. Immediate response when every second counts.",
    longDescription:
      "When a medical emergency strikes, every second matters. Our Emergency Service provides round-the-clock access to immediate medical response, ensuring your loved ones receive swift, professional care. With our dedicated emergency helpline and network of partnered hospitals and ambulance services, we bridge the gap between the moment of crisis and professional medical intervention.",
    features: [
      "24/7 dedicated emergency helpline with zero wait time",
      "Rapid ambulance dispatch to your location",
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
      "Professional home nursing, post-operative care, ICU setup, physiotherapy, and critical care at your doorstep.",
    longDescription:
      "Our Home Care Service brings hospital-grade medical care directly to the comfort of your home. Whether your loved one is recovering from surgery, managing a chronic illness, or needs specialized nursing attention, our qualified healthcare professionals deliver exceptional care without the stress and cost of prolonged hospital stays. We offer everything from routine nursing visits to fully equipped home ICU setups.",
    features: [
      "Qualified registered nurses for daily and overnight care",
      "Post-surgical recovery management and wound care",
      "Home ICU setup with medical equipment provisioning",
      "Physiotherapy and rehabilitation programs",
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
      "Bill payments, pension management, premium handling, and bank visit assistance for your parents.",
    longDescription:
      "Managing finances can become increasingly challenging for seniors, especially when adult children live far away. Our Financial Management service takes the burden off your family by handling day-to-day financial tasks with integrity and transparency. From paying utility bills on time to managing pension paperwork and insurance premiums, we ensure your parents' financial obligations are met smoothly and securely.",
    features: [
      "Timely utility and household bill payments",
      "Pension collection and documentation management",
      "Insurance premium tracking and renewal reminders",
      "Assisted bank visits for account management",
      "Transparent monthly financial reports to family",
      "Secure handling of sensitive financial documents",
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
      "Relocation assistance, grocery shopping, household help coordination, and everyday logistical tasks.",
    longDescription:
      "Daily logistics can be overwhelming for seniors living independently. Our Remote Logistical Support service handles the practical tasks of everyday life so your loved ones can focus on what matters most -- their health and happiness. From coordinating household help and grocery delivery to managing home repairs and relocation needs, we serve as a reliable local presence for your family.",
    features: [
      "Regular grocery and essential supplies delivery",
      "Household staff coordination and management",
      "Home maintenance and repair scheduling",
      "Relocation planning and execution assistance",
      "Appointment scheduling and transportation",
      "Seasonal home preparation and upkeep",
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
      "Access to experienced legal experts for cybercrime, fraud protection, and any legal matters your family faces.",
    longDescription:
      "Seniors are often targeted by scams, fraud, and cybercrime. Our Legal Advisory service connects your family with experienced legal professionals who specialize in elder law and fraud prevention. Whether it's reviewing important documents, protecting against online threats, or navigating complex legal matters, our team provides trustworthy guidance and representation to keep your loved ones safe and their interests protected.",
    features: [
      "Access to vetted elder law attorneys and legal experts",
      "Cybercrime awareness training and fraud prevention",
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
      "Complete property oversight including maintenance, tenant management, and documentation for your assets.",
    longDescription:
      "Managing property from a distance is one of the biggest challenges for families with aging parents. Our Property Management service provides comprehensive oversight of your family's real estate assets. From routine maintenance and tenant management to documentation handling and property inspections, we ensure your properties are well-maintained, generating income, and fully compliant with local regulations.",
    features: [
      "Regular property inspections and condition reports",
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
    title: "Educational Assistance",
    slug: "educational-assistance",
    description:
      "Transcript retrieval, educational document management, and academic record assistance for family members.",
    longDescription:
      "Educational documentation needs don't stop with graduation. Whether your family needs to retrieve academic transcripts, manage educational records, or navigate institutional paperwork across cities, our Educational Assistance service handles it all. We work directly with schools, colleges, and universities on your behalf to ensure timely retrieval and proper handling of all educational documents.",
    features: [
      "Academic transcript and certificate retrieval",
      "University and college liaison for document processing",
      "Educational record verification and attestation",
      "Application assistance for senior learning programs",
      "Document digitization and secure storage",
      "Multi-city and multi-institution coordination",
    ],
    benefits: [
      "No need to travel for document retrieval",
      "Expert handling of complex institutional bureaucracy",
      "Secure and organized management of important records",
      "Quick turnaround on time-sensitive document needs",
    ],
  },
]
