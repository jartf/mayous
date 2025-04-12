import type { Metadata } from "next"
import Image from "next/image"
import { Leaf, Shield, Wind } from "lucide-react"
import { getDictionary } from "@/lib/dictionaries"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang)
  return {
    title: `${dictionary.about.title} - Mayouš`,
  }
}

export default async function AboutPage({ params }: { params: { lang: string } }) {
  const dictionary = await getDictionary(params.lang)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{dictionary.about.title}</h1>
        <p className="text-lg text-muted-foreground mb-8 italic">{dictionary.about.pronunciation}</p>

        {/* Our Journey */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{dictionary.about.story.title}</h2>

          {/* Brand Label Image */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-2xl overflow-hidden rounded-lg">
              <Image
                src={`/${params.lang}/brand-label.png`}
                alt="Mayouš brand label"
                width={800}
                height={450}
                className="w-full"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            {dictionary.about.story.content.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{dictionary.about.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{dictionary.about.values.sustainability.title}</h3>
              <p className="text-muted-foreground">{dictionary.about.values.sustainability.description}</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{dictionary.about.values.quality.title}</h3>
              <p className="text-muted-foreground">{dictionary.about.values.quality.description}</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Wind className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{dictionary.about.values.comfort.title}</h3>
              <p className="text-muted-foreground">{dictionary.about.values.comfort.description}</p>
            </div>
          </div>
        </section>

        {/* Team Image */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Team</h2>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image src="/placeholder.svg?height=720&width=1280" alt="Mayouš team" fill className="object-cover" />
          </div>
        </section>
      </div>
    </div>
  )
}
