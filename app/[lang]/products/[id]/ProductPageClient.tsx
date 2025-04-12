"use client"

import { useState } from "react"
import Image from "next/image"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/components/cart-provider"
import type { Dictionary } from "@/lib/dictionaries"
import type { Product } from "@/lib/products"

export default function ProductPageClient({
  params,
  dictionary,
  product,
}: {
  params: { lang: string; id: string }
  dictionary: Dictionary
  product: Product
}) {
  const [size, setSize] = useState("M")
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const { toast } = useToast()

  // Ensure we're using the correct language key
  const langKey = params.lang as keyof typeof product.name

  // Get localized content with proper fallbacks
  const productName = product.name[langKey] || product.name.en
  const productDescription = product.description[langKey] || product.description.en
  const productMaterial = product.material[langKey] || product.material.en

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: productName,
      price: product.price,
      originalPrice: product.originalPrice,
      size,
      quantity,
      image: product.image,
    })

    toast({
      title: dictionary.product.addedToCart || "Added to cart",
      description: `${productName} (${size}) × ${quantity}`,
    })
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
          <Image src={product.image || "/placeholder.svg"} alt={productName} fill className="object-cover" priority />
        </div>

        {/* Product Details */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">{productName}</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-2xl font-bold text-primary">
                {product.price} {dictionary.common.currency}
              </span>
              <span className="text-muted-foreground line-through">
                {product.originalPrice} {dictionary.common.currency}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="size" className="block text-sm font-medium mb-2">
                {dictionary.product.size}
              </label>
              <Select value={size} onValueChange={setSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((s: string) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                {dictionary.product.quantity}
              </label>
              <div className="flex items-center">
                <Button variant="outline" size="icon" onClick={decreaseQuantity} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={increaseQuantity}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Button className="w-full" size="lg" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            {dictionary.product.addToCart}
          </Button>

          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="description">{dictionary.product.description}</TabsTrigger>
              <TabsTrigger value="shipping">{dictionary.product.shipping.title}</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4 pt-4">
              <p>{productDescription}</p>
              <div>
                <h3 className="font-medium mb-2">{dictionary.product.material}</h3>
                <p>{productMaterial}</p>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>{dictionary.product.shipping.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>{dictionary.product.shipping.free}</p>
                  <p>{dictionary.product.shipping.discounted}</p>
                  <p>{dictionary.product.shipping.international}</p>
                  <p className="text-sm text-muted-foreground mt-4">{dictionary.product.shipping.sanctions}</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
