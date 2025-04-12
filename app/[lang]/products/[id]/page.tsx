import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProduct } from "@/lib/products"
import { getDictionary } from "@/lib/dictionaries"
import ProductPageClient from "./ProductPageClient"

export async function generateMetadata({ params }: { params: { lang: string; id: string } }): Promise<Metadata> {
  const product = getProduct(params.id)
  if (!product) {
    return {
      title: "Product Not Found - Mayouš",
    }
  }

  // Use the correct language key with fallback
  const langKey = params.lang as keyof typeof product.name
  const productName = product.name[langKey] || product.name.en

  return {
    title: `${productName} - Mayouš`,
  }
}

export default async function ProductPage({ params }: { params: { lang: string; id: string } }) {
  const dictionary = await getDictionary(params.lang)
  const product = getProduct(params.id)

  // If product not found, return 404
  if (!product) {
    notFound()
  }

  return <ProductPageClient params={params} dictionary={dictionary} product={product} />
}
