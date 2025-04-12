import type { Metadata } from "next"
import { Clock, Facebook, Instagram, Mail, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getDictionary } from "@/lib/dictionaries"
import MapEmbed from "@/components/map-embed"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang)
  return {
    title: `${dictionary.contact.title} - Mayouš`,
  }
}

export default async function ContactPage({ params }: { params: { lang: string } }) {
  const dictionary = await getDictionary(params.lang)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{dictionary.contact.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Customer Support */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                {dictionary.contact.support}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href={`mailto:${dictionary.contact.email}`} className="text-lg font-medium hover:text-primary">
                {dictionary.contact.email}
              </a>
            </CardContent>
          </Card>

          {/* Hours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {dictionary.contact.hours.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>{dictionary.contact.hours.business}</p>
              <p>{dictionary.contact.hours.store}</p>
              <p>{dictionary.contact.hours.support}</p>
              <p className="text-sm text-muted-foreground mt-2">{dictionary.contact.hours.timezone}</p>
            </CardContent>
          </Card>
        </div>

        {/* Social Media */}
        <h2 className="text-2xl font-bold mb-6">{dictionary.contact.social.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <a
            href="https://facebook.com/mayous.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-lg border border-border hover:border-primary transition-colors"
          >
            <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <Facebook className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold">{dictionary.contact.social.facebook}</h3>
              <p className="text-sm text-muted-foreground">facebook.com/mayous.cz</p>
            </div>
          </a>
          <a
            href="https://instagram.com/mayous.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-lg border border-border hover:border-primary transition-colors"
          >
            <div className="h-12 w-12 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
              <Instagram className="h-6 w-6 text-pink-600 dark:text-pink-400" />
            </div>
            <div>
              <h3 className="font-bold">{dictionary.contact.social.instagram}</h3>
              <p className="text-sm text-muted-foreground">instagram.com/mayous.cz</p>
            </div>
          </a>
          <a
            href="https://maps.app.goo.gl/QBX5DNL7xUSKgi4t7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-lg border border-border hover:border-primary transition-colors"
          >
            <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-bold">{dictionary.contact.social.maps}</h3>
              <p className="text-sm text-muted-foreground">Google Maps</p>
            </div>
          </a>
        </div>

        {/* Map Placeholder */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <MapEmbed />
        </div>
      </div>
    </div>
  )
}
