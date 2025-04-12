"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { CartPreview } from "@/components/cart-preview"
import { useCart } from "@/components/cart-provider"
import type { Dictionary } from "@/lib/dictionaries"

export default function Header({ lang, dictionary }: { lang: string; dictionary: Dictionary }) {
  // Ensure lang parameter is valid
  const currentLang = lang || "en"
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { totalItems } = useCart()
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsCartOpen(false)
  }, [pathname])

  useEffect(() => {
    // Check if dark mode is enabled
    const isDark = document.documentElement.classList.contains("dark")
    setIsDarkMode(isDark)

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark")
          setIsDarkMode(isDark)
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  // Use the appropriate logo based on the current language and theme
  const logoPath = isDarkMode ? `/${currentLang}/logo.svg` : `/${currentLang}/logo-color.svg`

  return (
    <header
      className={`w-full ${
        isScrolled ? "sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm" : ""
      } transition-all duration-200`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${currentLang}`} className="flex items-center">
            <div className="relative h-10 w-48">
              <Image src={logoPath || "/placeholder.svg"} alt="Mayouš" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href={`/${currentLang}`}
              className={`text-sm font-medium hover:text-primary ${pathname === `/${currentLang}` ? "text-primary" : ""}`}
            >
              {dictionary.navigation.home}
            </Link>
            <Link
              href={`/${currentLang}/products`}
              className={`text-sm font-medium hover:text-primary ${
                pathname.includes("/products") ? "text-primary" : ""
              }`}
            >
              {dictionary.navigation.products}
            </Link>
            <Link
              href={`/${currentLang}/about`}
              className={`text-sm font-medium hover:text-primary ${pathname.includes("/about") ? "text-primary" : ""}`}
            >
              {dictionary.navigation.about}
            </Link>
            <Link
              href={`/${currentLang}/contact`}
              className={`text-sm font-medium hover:text-primary ${
                pathname.includes("/contact") ? "text-primary" : ""
              }`}
            >
              {dictionary.navigation.contact}
            </Link>
            <Link
              href={`/${currentLang}/transparency`}
              className={`text-sm font-medium hover:text-primary ${
                pathname.includes("/transparency") ? "text-primary" : ""
              }`}
            >
              {dictionary.transparency.title}
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <LanguageSwitcher currentLang={currentLang} />

            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setIsCartOpen(!isCartOpen)}
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
              {isCartOpen && (
                <CartPreview lang={currentLang} dictionary={dictionary} onClose={() => setIsCartOpen(false)} />
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
            <Link
              href={`/${currentLang}`}
              className={`text-sm font-medium hover:text-primary ${pathname === `/${currentLang}` ? "text-primary" : ""}`}
            >
              {dictionary.navigation.home}
            </Link>
            <Link
              href={`/${currentLang}/products`}
              className={`text-sm font-medium hover:text-primary ${
                pathname.includes("/products") ? "text-primary" : ""
              }`}
            >
              {dictionary.navigation.products}
            </Link>
            <Link
              href={`/${currentLang}/about`}
              className={`text-sm font-medium hover:text-primary ${pathname.includes("/about") ? "text-primary" : ""}`}
            >
              {dictionary.navigation.about}
            </Link>
            <Link
              href={`/${currentLang}/contact`}
              className={`text-sm font-medium hover:text-primary ${
                pathname.includes("/contact") ? "text-primary" : ""
              }`}
            >
              {dictionary.navigation.contact}
            </Link>
            <Link
              href={`/${currentLang}/transparency`}
              className={`text-sm font-medium hover:text-primary ${
                pathname.includes("/transparency") ? "text-primary" : ""
              }`}
            >
              {dictionary.transparency.title}
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
