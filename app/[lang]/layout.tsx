import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/cart-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getDictionary } from "@/lib/dictionaries"
import { locales, defaultLocale } from "@/lib/constants"
import "./globals.css"

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return {
    title: "Mayouš",
    description: "Premium quality shirts for officewear",
    icons: {
      icon: `/${params.lang}/favicon.ico`,
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  // Ensure lang parameter is valid
  const lang = params.lang && locales.includes(params.lang) ? params.lang : defaultLocale
  const dictionary = await getDictionary(lang)

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CartProvider lang={lang}>
            <div className="flex min-h-screen flex-col">
              <Header lang={lang} dictionary={dictionary} />
              <main className="flex-1">{children}</main>
              <Footer lang={lang} dictionary={dictionary} />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
