"use client"

import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import type { Dictionary } from "@/lib/dictionaries"

export function CartPreview({
  lang,
  dictionary,
  onClose,
}: {
  lang: string
  dictionary: Dictionary
  onClose: () => void
}) {
  // Ensure lang parameter is valid
  const currentLang = lang || "en"
  const { items, removeItem, subtotal } = useCart()

  return (
    <div className="absolute right-0 top-10 z-50 w-80 md:w-96 bg-background border border-border rounded-md shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">{dictionary.cart.title}</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {items.length === 0 ? (
        <p className="text-sm text-muted-foreground py-4">{dictionary.cart.empty}</p>
      ) : (
        <>
          <div className="space-y-4 max-h-60 overflow-y-auto">
            {items.map((item, index) => (
              <div key={`${item.id}-${item.size}-${index}`} className="flex gap-3">
                <div className="relative h-16 w-16 flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name || `Product ${item.id}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{item.name || `Product ${item.id}`}</h4>
                  <p className="text-xs text-muted-foreground">
                    {dictionary.product.size}: {item.size}
                  </p>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm">
                      {item.quantity} × {item.price} {dictionary.common.currency}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => removeItem(item.id, item.size)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex justify-between mb-4">
              <span className="font-medium">{dictionary.cart.subtotal}:</span>
              <span>
                {subtotal} {dictionary.common.currency}
              </span>
            </div>
            <div className="flex gap-2">
              <Button asChild variant="outline" className="w-1/2">
                <Link href={`/${currentLang}/cart`}>{dictionary.cart.title}</Link>
              </Button>
              <Button asChild className="w-1/2">
                <Link href={`/${currentLang}/checkout`}>{dictionary.navigation.checkout}</Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
