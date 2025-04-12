import type { Metadata } from "next"
import { getDictionary } from "@/lib/dictionaries"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang)
  return {
    title: `${dictionary.transparency.title} - Mayouš`,
  }
}

export default async function TransparencyPage({ params }: { params: { lang: string } }) {
  const dictionary = await getDictionary(params.lang)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{dictionary.transparency.title}</h1>

        {/* About Our Company */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{dictionary.transparency.company.title}</h2>
          <div className="space-y-4">
            {dictionary.transparency.company.description.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Our Facilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{dictionary.transparency.facilities.title}</h2>
          <div className="space-y-4">
            {dictionary.transparency.facilities.description.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Production Capacity */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{dictionary.transparency.production.title}</h2>
          <div className="space-y-4">
            {dictionary.transparency.production.description.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Shipping Restrictions */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Shipping Restrictions</h2>
          <p className="text-lg leading-relaxed">{dictionary.transparency.sanctions}</p>
        </section>
      </div>
    </div>
  )
}
