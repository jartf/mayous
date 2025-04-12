"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CountrySelector } from "@/components/country-selector"
import { useCart } from "@/components/cart-provider"
import type { Dictionary } from "@/lib/dictionaries"

export default function CartClientPage({ params, dictionary }: { params: { lang: string }; dictionary: Dictionary }) {
  const { items, removeItem, updateQuantity, subtotal, shippingCost, total, selectedCountry } = useCart()
  const router = useRouter()

  const handleQuantityChange = (id: string, size: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(id, size, newQuantity)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{dictionary.cart.title}</h1>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-muted mb-6">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-4">{dictionary.cart.empty}</h2>
          <Button asChild>
            <Link href={`/${params.lang}/products`}>{dictionary.cart.continueShopping}</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item, index) => (
              <div
                key={`${item.id}-${item.size}-${index}`}
                className="flex flex-col sm:flex-row gap-4 p-4 border border-border rounded-lg"
              >
                <div className="relative h-32 w-32 flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name || `Product ${item.id}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{item.name || `Product ${item.id}`}</h3>
                    <Button variant="ghost" size="icon" onClick={() => removeItem(item.id, item.size)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {dictionary.product.size}: {item.size}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleQuantityChange(item.id, item.size, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-10 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleQuantityChange(item.id, item.size, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="font-medium">
                      {item.price * item.quantity} {dictionary.common.currency}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-24 border border-border rounded-lg p-6 space-y-6">
              <h2 className="text-xl font-bold">{dictionary.cart.summary}</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>{dictionary.cart.subtotal}</span>
                  <span>
                    {subtotal} {dictionary.common.currency}
                  </span>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{dictionary.checkout.shipping.country}</label>
                  <CountrySelector lang={params.lang} dictionary={dictionary} />
                </div>

                <div className="flex justify-between">
                  <span>{dictionary.cart.shipping}</span>
                  <span>
                    {shippingCost === 0 ? (
                      dictionary.cart.free || "Free"
                    ) : selectedCountry?.discountedShipping ? (
                      <span className="flex flex-col items-end">
                        <span>
                          {shippingCost} {dictionary.common.currency}
                        </span>
                        <span className="text-xs text-green-600 dark:text-green-400">
                          {selectedCountry.code === "VN" ? "25% discount" : "Discounted"}
                        </span>
                      </span>
                    ) : (
                      `${shippingCost} ${dictionary.common.currency}`
                    )}
                  </span>
                </div>

                <Separator />

                <div className="flex justify-between font-bold">
                  <span>{dictionary.cart.total}</span>
                  <span>
                    {total} {dictionary.common.currency}
                  </span>
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={() => router.push(`/${params.lang}/checkout`)}>
                {dictionary.cart.checkout}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
