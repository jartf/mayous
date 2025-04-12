"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import type { Dictionary } from "@/lib/dictionaries"
import type { Product } from "@/lib/products"
import Image from "next/image"
import Link from "next/link"

export default function ProductsClientPage({
  params,
  dictionary,
  initialProducts,
}: {
  params: { lang: string }
  dictionary: Dictionary
  initialProducts: Product[]
}) {
  // Ensure lang parameter is valid
  const lang = params.lang || "en"
  const [products] = useState<Product[]>(initialProducts)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts)
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState("newest")
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check for query parameters
    const queryCategory = searchParams.get("category")
    if (queryCategory) {
      setCategory(queryCategory)
    }

    const querySearch = searchParams.get("search")
    if (querySearch) {
      setSearchQuery(querySearch)
    }
  }, [searchParams])

  useEffect(() => {
    if (products.length > 0) {
      let result = [...products]

      // Apply search filter
      if (searchQuery) {
        const lowercaseQuery = searchQuery.toLowerCase()
        result = result.filter(
          (product) =>
            product.name[lang as keyof typeof product.name]?.toLowerCase().includes(lowercaseQuery) ||
            product.description[lang as keyof typeof product.description]?.toLowerCase().includes(lowercaseQuery) ||
            // Fallback to English if the current language version doesn't exist
            product.name.en
              .toLowerCase()
              .includes(lowercaseQuery) ||
            product.description.en.toLowerCase().includes(lowercaseQuery),
        )
      }

      // Apply category filter
      if (category) {
        result = result.filter((product) => product.category === category)
      }

      // Apply sorting
      switch (sortBy) {
        case "priceAsc":
          result.sort((a, b) => a.price - b.price)
          break
        case "priceDesc":
          result.sort((a, b) => b.price - a.price)
          break
        case "newest":
        default:
          // Keep original order
          break
      }

      setFilteredProducts(result)
    }
  }, [searchQuery, category, sortBy, products, lang])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{dictionary.products.title}</h1>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <form onSubmit={handleSearch} className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={dictionary.products.search}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>

        <div className="flex gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                {dictionary.products.filter}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{dictionary.products.filter}</SheetTitle>
                <SheetDescription>Filter products by category</SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Category</h3>
                  <div className="space-y-1">
                    <Button
                      variant={category === null ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setCategory(null)}
                    >
                      All
                    </Button>
                    <Button
                      variant={category === "formal" ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setCategory("formal")}
                    >
                      Formal
                    </Button>
                    <Button
                      variant={category === "business-casual" ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setCategory("business-casual")}
                    >
                      Business Casual
                    </Button>
                    <Button
                      variant={category === "casual" ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setCategory("casual")}
                    >
                      Casual
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={dictionary.products.sort} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">{dictionary.products.sortOptions.newest}</SelectItem>
              <SelectItem value="priceAsc">{dictionary.products.sortOptions.priceAsc}</SelectItem>
              <SelectItem value="priceDesc">{dictionary.products.sortOptions.priceDesc}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">{dictionary.products.noResults}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link href={`/${lang}/products/${product.id}`} key={product.id} className="group">
              <div className="overflow-hidden rounded-md">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name[lang as keyof typeof product.name] || product.name.en || "Product"}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="font-medium">{product.name[lang as keyof typeof product.name] || product.name.en}</h3>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-primary">
                      {product.price} {dictionary.common.currency}
                    </p>
                    <p className="text-sm text-muted-foreground line-through">
                      {product.originalPrice} {dictionary.common.currency}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
