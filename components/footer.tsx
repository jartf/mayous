import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, InfoIcon } from "lucide-react"
import type { Dictionary } from "@/lib/dictionaries"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Footer({ lang, dictionary }: { lang: string; dictionary: Dictionary }) {
  // Ensure lang parameter is valid
  const currentLang = lang || "en"
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Mayouš</h3>
            <p className="text-sm text-muted-foreground">{dictionary.common.slogan}</p>
            <p className="text-sm text-muted-foreground">© {currentYear} Mayouš - Thanh Viet Ltd.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">{dictionary.navigation.home}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${currentLang}`} className="text-sm hover:text-primary">
                  {dictionary.navigation.home}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLang}/products`} className="text-sm hover:text-primary">
                  {dictionary.navigation.products}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLang}/about`} className="text-sm hover:text-primary">
                  {dictionary.navigation.about}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLang}/contact`} className="text-sm hover:text-primary">
                  {dictionary.navigation.contact}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLang}/transparency`} className="text-sm hover:text-primary">
                  {dictionary.transparency.title}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">{dictionary.contact.support}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${dictionary.contact.email}`} className="text-sm hover:text-primary">
                  {dictionary.contact.email}
                </a>
              </li>
              <li className="text-sm">{dictionary.contact.hours.business}</li>
              <li className="text-sm">{dictionary.contact.hours.timezone}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">{dictionary.contact.social.title}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com/mayous.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary"
                >
                  <Facebook className="h-4 w-4" />
                  {dictionary.contact.social.facebook}
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/mayous.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                  {dictionary.contact.social.instagram}
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/QBX5DNL7xUSKgi4t7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary"
                >
                  <MapPin className="h-4 w-4" />
                  {dictionary.contact.social.maps}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Mayouš. {dictionary.common.slogan}
            </p>
            <div className="flex gap-4">
              <Link href={`/${currentLang}/privacy`} className="text-xs hover:text-primary">
                Privacy Policy
              </Link>
              <Link href={`/${currentLang}/terms`} className="text-xs hover:text-primary">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border">
          <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
            <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertDescription className="text-blue-600 dark:text-blue-400 text-xs">
              {dictionary.privacy?.mockupNotice ||
                "This is a sample website created as part of an International Trade course project at the Diplomatic Academy of Vietnam. All information on this website is fictional and has no legal or reference value. We are committed to not collecting any personal information."}
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </footer>
  )
}
