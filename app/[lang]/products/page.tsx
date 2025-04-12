import type { Metadata } from "next"
import ProductsClientPage from "./ProductsClientPage"
import { getDictionary } from "@/lib/dictionaries"
import { getAllProducts } from "@/lib/products"

export const metadata: Metadata = {
  title: "Products - Mayouš",
}

export default async function ProductsPage({ params }: { params: { lang: string } }) {
  // Ensure lang parameter is valid
  const lang = params.lang || "en"
  const dictionary = await getDictionary(lang)
  const products = getAllProducts()

  return <ProductsClientPage params={{ lang }} dictionary={dictionary} initialProducts={products} />
}
