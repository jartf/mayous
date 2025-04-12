import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Shield, Wind } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getFeaturedProducts } from "@/lib/products"
import { getDictionary } from "@/lib/dictionaries"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return {
    title: "Mayouš",
  }
}

export default async function Home({ params }: { params: { lang: string } }) {
  const dictionary = await getDictionary(params.lang)
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{dictionary.home.hero.title}</h1>
            <p className="text-xl md:text-2xl font-serif italic">{dictionary.home.hero.subtitle}</p>
            <div className="flex justify-center gap-4 pt-4">
              <Button asChild size="lg">
                <Link href={`/${params.lang}/products`}>{dictionary.home.hero.cta}</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 z-[1]" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.webp"
            alt="Collection of shirts in various colors and patterns"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{dictionary.home.features.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{dictionary.home.features.quality.title}</h3>
              <p className="text-muted-foreground">{dictionary.home.features.quality.description}</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{dictionary.home.features.sustainability.title}</h3>
              <p className="text-muted-foreground">{dictionary.home.features.sustainability.description}</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Wind className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{dictionary.home.features.comfort.title}</h3>
              <p className="text-muted-foreground">{dictionary.home.features.comfort.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{dictionary.home.products.title}</h2>
            <Button asChild variant="outline">
              <Link href={`/${params.lang}/products`}>
                {dictionary.home.products.viewAll}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <Link href={`/${params.lang}/products/${product.id}`}>
                  <div className="overflow-hidden rounded-md">
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name[params.lang as keyof typeof product.name]}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 space-y-1">
                      <h3 className="font-medium">{product.name[params.lang as keyof typeof product.name]}</h3>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-primary">
                          {product.price} {dictionary.common.currency}
                        </p>
                        <p className="text-sm text-muted-foreground line-through">
                          {product.originalPrice} {dictionary.common.currency}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden rounded-lg">
              <Image
                src="/story-shirts.webp"
                alt="Collection of blue and white patterned dress shirts on hangers"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">{dictionary.home.story.title}</h2>
              <p className="text-lg text-muted-foreground">{dictionary.home.story.content}</p>
              <Button asChild variant="outline">
                <Link href={`/${params.lang}/about`}>
                  {dictionary.home.story.readMore}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">{dictionary.home.hero.title}</h2>
            <p className="text-xl">{dictionary.home.hero.subtitle}</p>
            <Button asChild size="lg" variant="secondary">
              <Link href={`/${params.lang}/products`}>{dictionary.home.hero.cta}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
