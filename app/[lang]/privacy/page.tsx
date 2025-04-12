import type { Metadata } from "next"
import { getDictionary } from "@/lib/dictionaries"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang)
  return {
    title: `${dictionary.privacy?.title || "Privacy Policy"} - Mayouš`,
  }
}

export default async function PrivacyPage({ params }: { params: { lang: string } }) {
  const dictionary = await getDictionary(params.lang)
  const lang = params.lang || "en"

  // Get translated content
  const title = dictionary.privacy?.title || "Privacy Policy"
  const mockupNotice =
    dictionary.privacy?.mockupNotice ||
    "This is a mockup website for demonstration purposes only. No real data is collected."

  // Get language-specific content
  const content = dictionary.privacy?.content || {
    intro:
      "Welcome to Mayouš. This Privacy Policy explains how we might collect, use, and share your information if this were a real website. Since this is a mockup example, no actual data collection occurs.",
    collect: {
      title: "Information We Would Collect",
      text: "If this were a real e-commerce website, we might collect the following types of information:",
      items: [
        "Personal information (name, email address, shipping address)",
        "Payment information (processed securely through payment processors)",
        "Order history and preferences",
        "Device information and browsing data",
      ],
    },
    cookies: {
      title: "Cookies",
      text: "In a real implementation, this website would use cookies to enhance your browsing experience. These might include:",
      items: [
        "Essential cookies for site functionality",
        "Analytics cookies to understand site usage",
        "Preference cookies to remember your settings",
        "Marketing cookies for targeted advertising",
      ],
    },
    usage: {
      title: "How We Would Use Your Information",
      text: "If this were a real website, we might use your information to:",
      items: [
        "Process and fulfill your orders",
        "Communicate with you about your orders and account",
        "Improve our products and services",
        "Send marketing communications (with your consent)",
      ],
    },
    security: {
      title: "Data Security",
      text: "In a real implementation, we would implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
    },
    rights: {
      title: "Your Rights",
      text: "Depending on your location, you would have certain rights regarding your personal information, such as:",
      items: [
        "Right to access your personal information",
        "Right to correct inaccurate information",
        "Right to delete your information",
        "Right to object to certain processing",
        "Right to withdraw consent",
      ],
    },
    contact: {
      title: "Contact Information",
      text: "If this were a real website, you could contact us at privacy@mayous.cz with any privacy-related questions.",
    },
    changes: {
      title: "Changes to This Policy",
      text: "We would reserve the right to update this Privacy Policy periodically to reflect changes in our practices or for legal, operational, or regulatory reasons.",
    },
    lastUpdated: "Last updated: April 11, 2025",
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{title}</h1>

        <Alert className="mb-8 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <AlertDescription className="text-blue-600 dark:text-blue-400">{mockupNotice}</AlertDescription>
        </Alert>

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <h2 className="text-xl font-bold mt-8 mb-4">1. {dictionary.privacy?.introTitle || "Introduction"}</h2>
          <p className="mb-6">{content.intro}</p>

          <h2 className="text-xl font-bold mt-8 mb-4">2. {content.collect.title}</h2>
          <p className="mb-4">{content.collect.text}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {content.collect.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">3. {content.cookies.title}</h2>
          <p className="mb-4">{content.cookies.text}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {content.cookies.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">4. {content.usage.title}</h2>
          <p className="mb-4">{content.usage.text}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {content.usage.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">5. {content.security.title}</h2>
          <p className="mb-6">{content.security.text}</p>

          <h2 className="text-xl font-bold mt-8 mb-4">6. {content.rights.title}</h2>
          <p className="mb-4">{content.rights.text}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {content.rights.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">7. {content.contact.title}</h2>
          <p className="mb-6">{content.contact.text}</p>

          <h2 className="text-xl font-bold mt-8 mb-4">8. {content.changes.title}</h2>
          <p className="mb-6">{content.changes.text}</p>

          <p className="text-sm text-muted-foreground mt-8">{content.lastUpdated}</p>
        </div>
      </div>
    </div>
  )
}
