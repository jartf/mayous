import { getDictionary } from "@/lib/dictionaries"
import SuccessPageClient from "./SuccessPageClient"

export default async function SuccessPage({
  params,
}: {
  params: { lang: string }
}) {
  const dictionary = await getDictionary(params.lang)

  return <SuccessPageClient params={params} dictionary={dictionary} />
}
