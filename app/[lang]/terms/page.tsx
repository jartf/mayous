import type { Metadata } from "next"
import { getDictionary } from "@/lib/dictionaries"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang)
  return {
    title: `${dictionary.terms?.title || "Terms & Conditions"} - Mayouš`,
  }
}

export default async function TermsPage({ params }: { params: { lang: string } }) {
  const dictionary = await getDictionary(params.lang)
  const lang = params.lang || "en"

  // Get translated content
  const title = dictionary.terms?.title || "Terms & Conditions"
  const mockupNotice =
    dictionary.terms?.mockupNotice ||
    "This is a mockup website for demonstration purposes only. These terms are not legally binding."

  // Get language-specific content
  const content = dictionary.terms?.content || {
    intro: {
      title: "Introduction",
      text: "Welcome to Mayouš. These Terms and Conditions govern your use of our website and the purchase of products from our online store. By accessing our website or placing an order, you would agree to these terms if this were a real e-commerce website.",
    },
    definitions: {
      title: "Definitions",
      text: "In these Terms and Conditions:",
      items: [
        '"We", "us", "our", and "Mayouš" refer to Thanh Viet Limited Liability Company',
        '"You" and "your" refer to the user or customer',
        '"Website" refers to mayous.cz and all its subdomains',
        '"Products" refers to the items offered for sale on our website',
      ],
    },
    account: {
      title: "Account Registration",
      text: "If this were a real website, when creating an account, you would be responsible for:",
      items: [
        "Providing accurate and complete information",
        "Maintaining the confidentiality of your account credentials",
        "All activities that occur under your account",
      ],
    },
    products: {
      title: "Products and Pricing",
      text: "In a real implementation:",
      items: [
        "We would make every effort to accurately display product colors, but cannot guarantee that your device's display accurately reflects the actual colors",
        "We would reserve the right to modify prices at any time",
        "All prices would be displayed in Czech Koruna (CZK) and include applicable taxes",
      ],
    },
    orders: {
      title: "Orders and Payment",
      text: "If this were a real website:",
      items: [
        "Placing an order would constitute an offer to purchase products",
        "We would reserve the right to refuse or cancel any order for any reason",
        "Payment would be required at the time of placing an order",
        "We would accept various payment methods as indicated on the checkout page",
      ],
    },
    shipping: {
      title: "Shipping and Delivery",
      text: "In a real implementation:",
      items: [
        "Shipping costs and estimated delivery times would be provided during checkout",
        "We would not be responsible for delays caused by customs, weather conditions, or other factors beyond our control",
        "Risk of loss and title for items purchased would pass to you upon delivery",
      ],
    },
    returns: {
      title: "Returns and Refunds",
      text: "If this were a real website, our return policy would allow you to return products within 14 days of receipt, provided they are in original condition with tags attached and original packaging.",
    },
    intellectual: {
      title: "Intellectual Property",
      text: "All content on this website, including text, graphics, logos, images, and software, would be the property of Mayouš or its content suppliers and protected by international copyright laws.",
    },
    liability: {
      title: "Limitation of Liability",
      text: "In a real implementation, to the maximum extent permitted by law, Mayouš would not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or products.",
    },
    governing: {
      title: "Governing Law",
      text: "These Terms and Conditions would be governed by and construed in accordance with the laws of the Czech Republic, without regard to its conflict of law principles.",
    },
    changes: {
      title: "Changes to Terms",
      text: "We would reserve the right to update these Terms and Conditions at any time. Changes would be effective immediately upon posting on the website.",
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
          <h2 className="text-xl font-bold mt-8 mb-4">1. {content.intro.title}</h2>
          <p className="mb-6">{content.intro.text}</p>

          <h2 className="text-xl font-bold mt-8 mb-4">2. {content.definitions.title}</h2>
          <p className="mb-4">{content.definitions.text}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {content.definitions.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">3. {content.account.title}</h2>
          <p className="mb-4">{content.account.text}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {content.account.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">4. {content.products.title}</h2>
          <p className="mb-4">{content.products.text}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {content.products.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">5. {content.orders.title}</h2>
          <p className="mb-4">{content.orders.text}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {content.orders.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">6. {content.shipping.title}</h2>
          <p className="mb-4">{content.shipping.text}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {content.shipping.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">7. {content.returns.title}</h2>
          <p className="mb-6">{content.returns.text}</p>

          <h2 className="text-xl font-bold mt-8 mb-4">8. {content.intellectual.title}</h2>
          <p className="mb-6">{content.intellectual.text}</p>

          <h2 className="text-xl font-bold mt-8 mb-4">9. {content.liability.title}</h2>
          <p className="mb-6">{content.liability.text}</p>

          <h2 className="text-xl font-bold mt-8 mb-4">10. {content.governing.title}</h2>
          <p className="mb-6">{content.governing.text}</p>

          <h2 className="text-xl font-bold mt-8 mb-4">11. {content.changes.title}</h2>
          <p className="mb-6">{content.changes.text}</p>

          <p className="text-sm text-muted-foreground mt-8">{content.lastUpdated}</p>
        </div>
      </div>
    </div>
  )
}
