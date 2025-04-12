"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { AlertCircle, Loader2, CreditCard, Wallet, DollarSign, Building, Truck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CountrySelector } from "@/components/country-selector"
import { useCart } from "@/components/cart-provider"
import type { Dictionary } from "@/lib/dictionaries"

export default function CheckoutClientPage({
  params,
  dictionary,
}: {
  params: { lang: string }
  dictionary: Dictionary
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  })
  const { items, subtotal, shippingCost, total, clearCart, selectedCountry } = useCart()
  const router = useRouter()

  // Update the isPaymentMethodAvailable function to allow cash on delivery for Vietnam
  const isPaymentMethodAvailable = (method: string): boolean => {
    // Cash on delivery is available in both Czechia and Vietnam
    if (method === "cash") {
      return selectedCountry?.code === "CZ" || selectedCountry?.code === "VN"
    }

    // These payment methods are only available in Czechia
    const czechOnlyMethods = ["bank", "twisto"]
    if (czechOnlyMethods.includes(method)) {
      return selectedCountry?.code === "CZ"
    }

    // All other payment methods are available everywhere
    return true
  }

  // Reset payment method when country changes if the method is not available
  useEffect(() => {
    if (!isPaymentMethodAvailable(paymentMethod)) {
      setPaymentMethod("card")
    }
  }, [selectedCountry])

  // Additional fee for cash on delivery
  const cashOnDeliveryFee = paymentMethod === "cash" ? 50 : 0
  const finalTotal = total + cashOnDeliveryFee

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (items.length === 0) {
      return
    }

    setIsSubmitting(true)

    // Simulate processing
    setTimeout(() => {
      setIsSubmitting(false)
      clearCart()
      router.push(`/${params.lang}/success`)
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{dictionary.checkout?.emptyCart || "Your cart is empty"}</AlertDescription>
        </Alert>
        <div className="mt-4">
          <Button onClick={() => router.push(`/${params.lang}/products`)}>
            {dictionary.cart?.continueShopping || "Continue Shopping"}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{dictionary?.checkout?.title || "Checkout"}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">{dictionary?.checkout?.contact || "Contact Information"}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{dictionary?.checkout?.name || "Name"}</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{dictionary?.checkout?.email || "Email"}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">{dictionary?.checkout?.shipping?.title || "Shipping Address"}</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">{dictionary?.checkout?.shipping?.address || "Address"}</Label>
                  <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">{dictionary?.checkout?.shipping?.city || "City"}</Label>
                    <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">{dictionary?.checkout?.shipping?.zip || "ZIP Code"}</Label>
                    <Input id="zip" name="zip" value={formData.zip} onChange={handleInputChange} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">{dictionary?.checkout?.shipping?.country || "Country"}</Label>
                  <CountrySelector lang={params.lang} dictionary={dictionary} />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">{dictionary?.checkout?.payment?.title || "Payment Method"}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Credit/Debit Card */}
                <label
                  className={`flex items-center p-4 border rounded-md cursor-pointer transition-all ${
                    paymentMethod === "card"
                      ? "border-primary ring-1 ring-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                      paymentMethod === "card" ? "border-primary" : "border-gray-400"
                    }`}
                  >
                    {paymentMethod === "card" && <div className="w-3 h-3 rounded-full bg-primary" />}
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{dictionary?.checkout?.payment?.methods?.card || "Debit/Credit Card"}</span>
                  </div>
                </label>

                {/* Revolut */}
                <label
                  className={`flex items-center p-4 border rounded-md cursor-pointer transition-all ${
                    paymentMethod === "revolut"
                      ? "border-primary ring-1 ring-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="revolut"
                    checked={paymentMethod === "revolut"}
                    onChange={() => setPaymentMethod("revolut")}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                      paymentMethod === "revolut" ? "border-primary" : "border-gray-400"
                    }`}
                  >
                    {paymentMethod === "revolut" && <div className="w-3 h-3 rounded-full bg-primary" />}
                  </div>
                  <div className="flex items-center">
                    <Wallet className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{dictionary?.checkout?.payment?.methods?.revolut || "Revolut"}</span>
                  </div>
                </label>

                {/* PayPal */}
                <label
                  className={`flex items-center p-4 border rounded-md cursor-pointer transition-all ${
                    paymentMethod === "paypal"
                      ? "border-primary ring-1 ring-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                      paymentMethod === "paypal" ? "border-primary" : "border-gray-400"
                    }`}
                  >
                    {paymentMethod === "paypal" && <div className="w-3 h-3 rounded-full bg-primary" />}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{dictionary?.checkout?.payment?.methods?.paypal || "PayPal"}</span>
                  </div>
                </label>

                {/* Online Bank Payment */}
                <label
                  className={`flex items-center p-4 border rounded-md cursor-pointer transition-all ${
                    paymentMethod === "bank"
                      ? "border-primary ring-1 ring-primary"
                      : "border-border hover:border-primary/50"
                  } ${!isPaymentMethodAvailable("bank") ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                    className="sr-only"
                    disabled={!isPaymentMethodAvailable("bank")}
                  />
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                      paymentMethod === "bank" ? "border-primary" : "border-gray-400"
                    }`}
                  >
                    {paymentMethod === "bank" && <div className="w-3 h-3 rounded-full bg-primary" />}
                  </div>
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{dictionary?.checkout?.payment?.methods?.bank || "Online Bank Payment"}</span>
                    {!isPaymentMethodAvailable("bank") && (
                      <span className="ml-2 text-xs text-muted-foreground">(Czechia only)</span>
                    )}
                  </div>
                </label>

                {/* Cash on Delivery */}
                <label
                  className={`flex items-center p-4 border rounded-md cursor-pointer transition-all ${
                    paymentMethod === "cash"
                      ? "border-primary ring-1 ring-primary"
                      : "border-border hover:border-primary/50"
                  } ${!isPaymentMethodAvailable("cash") ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={() => setPaymentMethod("cash")}
                    className="sr-only"
                    disabled={!isPaymentMethodAvailable("cash")}
                  />
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                      paymentMethod === "cash" ? "border-primary" : "border-gray-400"
                    }`}
                  >
                    {paymentMethod === "cash" && <div className="w-3 h-3 rounded-full bg-primary" />}
                  </div>
                  <div className="flex items-center">
                    <Truck className="h-4 w-4 mr-2 text-gray-500" />
                    <span>
                      {dictionary?.checkout?.payment?.methods?.cash || "Cash on Delivery"}{" "}
                      {isPaymentMethodAvailable("cash") && (
                        <span className="text-xs text-muted-foreground">
                          (+50 {dictionary.common?.currency || "CZK"})
                        </span>
                      )}
                    </span>
                    {!isPaymentMethodAvailable("cash") && (
                      <span className="ml-2 text-xs text-muted-foreground">(Czechia only)</span>
                    )}
                  </div>
                </label>

                {/* Twisto (Buy Now Pay Later) */}
                <label
                  className={`flex items-center p-4 border rounded-md cursor-pointer transition-all ${
                    paymentMethod === "twisto"
                      ? "border-primary ring-1 ring-primary"
                      : "border-border hover:border-primary/50"
                  } ${!isPaymentMethodAvailable("twisto") ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="twisto"
                    checked={paymentMethod === "twisto"}
                    onChange={() => setPaymentMethod("twisto")}
                    className="sr-only"
                    disabled={!isPaymentMethodAvailable("twisto")}
                  />
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                      paymentMethod === "twisto" ? "border-primary" : "border-gray-400"
                    }`}
                  >
                    {paymentMethod === "twisto" && <div className="w-3 h-3 rounded-full bg-primary" />}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{dictionary?.checkout?.payment?.methods?.twisto || "Buy Now Pay Later (Twisto)"}</span>
                    {!isPaymentMethodAvailable("twisto") && (
                      <span className="ml-2 text-xs text-muted-foreground">(Czechia only)</span>
                    )}
                  </div>
                </label>
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {dictionary?.checkout?.processing || "Processing..."}
                </>
              ) : (
                dictionary?.checkout?.placeOrder || "Place Order"
              )}
            </Button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="sticky top-24 border border-border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-bold">{dictionary.cart?.summary || "Order Summary"}</h2>

            <div className="space-y-4 max-h-80 overflow-y-auto">
              {items.map((item, index) => (
                <div key={`${item.id}-${item.size}-${index}`} className="flex gap-3">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name || "Product"}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{item.name || "Product"}</h4>
                    <p className="text-xs text-muted-foreground">
                      {dictionary.product?.size || "Size"}: {item.size}
                    </p>
                    <p className="text-sm">
                      {item.quantity} × {item.price} {dictionary.common?.currency || "CZK"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>{dictionary.cart?.subtotal || "Subtotal"}</span>
                <span>
                  {subtotal} {dictionary.common?.currency || "CZK"}
                </span>
              </div>

              <div className="flex justify-between">
                <span>{dictionary.cart?.shipping || "Shipping"}</span>
                <span>
                  {shippingCost === 0 ? (
                    dictionary.cart?.free || "Free"
                  ) : selectedCountry?.discountedShipping ? (
                    <span className="flex flex-col items-end">
                      <span>
                        {shippingCost} {dictionary.common?.currency || "CZK"}
                      </span>
                      <span className="text-xs text-green-600 dark:text-green-400">
                        {selectedCountry.code === "VN" ? "25% discount" : "Discounted"}
                      </span>
                    </span>
                  ) : (
                    `${shippingCost} ${dictionary.common?.currency || "CZK"}`
                  )}
                </span>
              </div>

              {paymentMethod === "cash" && (
                <div className="flex justify-between">
                  <span>{dictionary?.checkout?.cashFee || "Cash on Delivery Fee"}</span>
                  <span>
                    {cashOnDeliveryFee} {dictionary.common?.currency || "CZK"}
                  </span>
                </div>
              )}

              <Separator />

              <div className="flex justify-between font-bold">
                <span>{dictionary.cart?.total || "Total"}</span>
                <span>
                  {finalTotal} {dictionary.common?.currency || "CZK"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
