"use client"

import { createContext, useState, useEffect, useContext, type ReactNode } from "react"
import { getCountries, getCountry } from "@/lib/countries"

export type CartItem = {
  id: string
  name: string
  price: number
  originalPrice?: number
  size: string
  quantity: number
  image: string
}

export type ShippingCountry = {
  code: string
  name: string
  shippingCost: number
  freeShipping: boolean
  discountedShipping: boolean
}

type CartContextType = {
  items: CartItem[]
  totalItems: number
  subtotal: number
  shippingCost: number
  total: number
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: string, size: string) => void
  updateQuantity: (id: string, size: string, quantity: number) => void
  clearCart: () => void
  selectedCountry: ShippingCountry | null
  setSelectedCountry: (country: ShippingCountry) => void
  generateOrderNumber: () => string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

type CartProviderProps = {
  children: ReactNode
  lang: string
}

export function CartProvider({ children, lang }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([])
  const [selectedCountry, setSelectedCountry] = useState<ShippingCountry | null>(null)

  // Initialize cart and country from localStorage
  useEffect(() => {
    try {
      // Load cart items
      const storedItems = localStorage.getItem("cartItems")
      if (storedItems) {
        setItems(JSON.parse(storedItems))
      }

      // Load selected country
      const storedCountry = localStorage.getItem("selectedCountry")
      if (storedCountry) {
        const parsedCountry = JSON.parse(storedCountry)

        // Make sure we have the country name in the current language
        const countries = getCountries(lang)
        const countryInCurrentLang = countries.find((c) => c.code === parsedCountry.code)

        // Get the full country data to ensure shipping rates are up to date
        const countryData = getCountry(parsedCountry.code)

        if (countryData && countryInCurrentLang) {
          setSelectedCountry({
            code: parsedCountry.code,
            name: countryInCurrentLang.name, // Update name to current language
            shippingCost: countryData.shippingCost, // Use current shipping cost
            freeShipping: countryData.freeShipping,
            discountedShipping: countryData.discountedShipping,
          })
        } else {
          setSelectedCountry(parsedCountry)
        }
      } else {
        // Set default country to Czechia
        const czechia = getCountry("CZ")
        const countries = getCountries(lang)
        const czechiaName = countries.find((c) => c.code === "CZ")?.name || "Czechia"

        if (czechia) {
          setSelectedCountry({
            code: "CZ",
            name: czechiaName,
            shippingCost: czechia.shippingCost,
            freeShipping: czechia.freeShipping,
            discountedShipping: czechia.discountedShipping,
          })
        }
      }
    } catch (error) {
      console.error("Error loading cart data from localStorage:", error)
    }
  }, [lang])

  // Save cart items to localStorage when they change
  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(items))
    } catch (error) {
      console.error("Error saving cart to localStorage:", error)
    }
  }, [items])

  // Save selected country to localStorage when it changes
  useEffect(() => {
    if (selectedCountry) {
      try {
        localStorage.setItem("selectedCountry", JSON.stringify(selectedCountry))
      } catch (error) {
        console.error("Error saving country to localStorage:", error)
      }
    }
  }, [selectedCountry])

  const addItem = (item: Omit<CartItem, "quantity">) => {
    const existingItem = items.find((i) => i.id === item.id && i.size === item.size)

    if (existingItem) {
      // If the item already exists, update its quantity
      updateQuantity(item.id, item.size, existingItem.quantity + 1)
    } else {
      // Otherwise, add the new item to the cart with a quantity of 1
      setItems([...items, { ...item, quantity: 1 }])
    }
  }

  const removeItem = (id: string, size: string) => {
    setItems(items.filter((item) => !(item.id === id && item.size === size)))
  }

  const updateQuantity = (id: string, size: string, quantity: number) => {
    setItems(
      items.map((item) => {
        if (item.id === id && item.size === size) {
          return { ...item, quantity }
        }
        return item
      }),
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shippingCost = selectedCountry ? selectedCountry.shippingCost : 0
  const total = subtotal + shippingCost

  const generateOrderNumber = () => {
    // Simple order number generation
    return `MAY-${Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0")}`
  }

  const value: CartContextType = {
    items,
    totalItems,
    subtotal,
    shippingCost,
    total,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    selectedCountry,
    setSelectedCountry,
    generateOrderNumber,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
