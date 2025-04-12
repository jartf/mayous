import type { MetadataRoute } from "next"
import { locales } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mayous.cz"
  const pages = ["", "/products", "/about", "/contact", "/transparency"]

  const routes: MetadataRoute.Sitemap = []

  // Generate routes for each page in each locale
  pages.forEach((page) => {
    const alternates: { languages: Record<string, string> } = {
      languages: {},
    }

    // Create alternates for each locale
    locales.forEach((locale) => {
      alternates.languages[locale] = `${baseUrl}/${locale}${page}`
    })

    // Add the route for each locale
    locales.forEach((locale) => {
      routes.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        alternates,
      })
    })
  })

  return routes
}
