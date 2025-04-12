"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Dictionary } from "@/lib/dictionaries"

export default function SuccessPageClient({
  params,
  dictionary,
}: {
  params: { lang: string }
  dictionary: Dictionary
}) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold mb-4">{dictionary.success?.title || "Order Successful!"}</h1>
        <p className="text-muted-foreground mb-8">
          {dictionary.success?.message ||
            "Thank you for your order. We've received your payment and will process your order shortly."}
        </p>
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href={`/${params.lang}/products`}>{dictionary.success?.continueShopping || "Continue Shopping"}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
