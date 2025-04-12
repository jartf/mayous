import type { Metadata } from "next"
import CartClientPage from "./CartClientPage"
import { getDictionary } from "@/lib/dictionaries"

export const metadata: Metadata = {
  title: "Cart - Mayouš",
}

export default async function CartPage({ params }: { params: { lang: string } }) {
  const dictionary = await getDictionary(params.lang)
  return <CartClientPage params={params} dictionary={dictionary} />
}
