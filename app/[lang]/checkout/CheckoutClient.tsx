"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AlertCircle, CreditCard, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CountrySelector } from "@/components/country-selector"
import { useCart } from "@/components/cart-provider"
import { getDictionary } from "@/lib/dictionaries"

export default function CheckoutClient({ params }: { params: { lang: string } }) {
  const [dictionary, setDictionary] = useState<any>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  })
  const { items, subtotal, shippingCost, total, generateOrderNumber } = useCart()
  const router = useRouter()

  useEffect(() => {
    const loadDictionary = async () => {
      const dict = await getDictionary(params.lang)
      setDictionary(dict)
    }
    loadDictionary()
  }, [params.lang])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (items.length === 0) {
      return
    }

    setIsSubmitting(true)

    // Generate order number
    generateOrderNumber()

    // Simulate processing
    setTimeout(() => {
      setIsSubmitting(false)
      router.push(`/${params.lang}/success`)
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (!dictionary) return null

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{dictionary.checkout.emptyCart}</AlertDescription>
        </Alert>
        <div className="mt-4">
          <Button onClick={() => router.push(`/${params.lang}/products`)}>{dictionary.cart.continueShopping}</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{dictionary.checkout.title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">{dictionary.checkout.contact}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
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
              <h2 className="text-xl font-bold">{dictionary.checkout.shipping.title}</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">{dictionary.checkout.shipping.address}</Label>
                  <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">{dictionary.checkout.shipping.city}</Label>
                    <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">{dictionary.checkout.shipping.zip}</Label>
                    <Input id="zip" name="zip" value={formData.zip} onChange={handleInputChange} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">{dictionary.checkout.shipping.country}</Label>
                  <CountrySelector lang={params.lang} />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">{dictionary.checkout.payment.title}</h2>
              <div className="flex items-center space-x-4">
                <Button
                  variant={paymentMethod === "card" ? "default" : "outline"}
                  onClick={() => setPaymentMethod("card")}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  {dictionary.checkout.payment.card}
                </Button>
                {/* <Button
                  variant={paymentMethod === "paypal" ? "default" : "outline"}
                  onClick={() => setPaymentMethod("paypal")}
                >
                  PayPal
                </Button> */}
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">{dictionary.checkout.payment.cardNumber}</Label>
                  <Input id="cardNumber" type="text" placeholder="0000 0000 0000 0000" />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">{dictionary.checkout.payment.expiry}</Label>
                      <Input id="expiry" type="text" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" type="text" placeholder="123" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Button disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {dictionary.checkout.submit}
            </Button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-gray-50 rounded-md p-4 sticky top-20">
            <h2 className="text-xl font-bold mb-4">{dictionary.checkout.orderSummary}</h2>
            <Separator />
            <div className="flex justify-between py-2">
              <span>{dictionary.checkout.subtotal}</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>{dictionary.checkout.shipping.title}</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between py-2 font-bold">
              <span>{dictionary.checkout.total}</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
