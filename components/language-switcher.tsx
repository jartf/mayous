"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Check, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", name: "English" },
  { code: "cs", name: "Čeština" },
  { code: "vi", name: "Tiếng Việt" },
]

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  // Ensure currentLang parameter is valid
  const lang = currentLang || "en"
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const switchLanguage = (newLang: string) => {
    // Get the path without the language prefix
    const segments = pathname.split("/")
    segments[1] = newLang // Replace the language segment
    const newPath = segments.join("/")
    router.push(newPath)
    setOpen(false)
  }

  const currentLanguage = languages.find((l) => l.code === lang) || languages[0]

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="flex items-center gap-1">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLanguage(language.code)}
            className="flex items-center justify-between"
          >
            {language.name}
            {language.code === lang && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
