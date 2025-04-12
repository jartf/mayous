import { getDictionary } from "@/lib/dictionaries"
import CheckoutClientPage from "./CheckoutClientPage"

export default async function CheckoutPage({ params }: { params: { lang: string } }) {
  const dictionary = await getDictionary(params.lang)

  return <CheckoutClientPage params={params} dictionary={dictionary} />
}
