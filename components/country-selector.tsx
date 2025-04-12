"use client"

import { useState, useEffect } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { getCountries, getCountry } from "@/lib/countries"
import { useCart } from "./cart-provider"
import type { Dictionary } from "@/lib/dictionaries"

export function CountrySelector({ lang, dictionary }: { lang: string; dictionary?: Dictionary }) {
  const [open, setOpen] = useState(false)
  const [countries, setCountries] = useState<Array<{ code: string; name: string; restricted: boolean }>>([])
  const { selectedCountry, setSelectedCountry } = useCart()
  const [displayName, setDisplayName] = useState("Czechia")

  // Load countries when component mounts
  useEffect(() => {
    try {
      const countryList = getCountries(lang)
      setCountries(countryList)

      // Update display name based on selected country
      if (selectedCountry?.code) {
        const country = countryList.find((c) => c.code === selectedCountry.code)
        if (country) {
          setDisplayName(country.name)
        }
      } else {
        // Default to Czechia if no country is selected
        const czechia = countryList.find((c) => c.code === "CZ")
        if (czechia) {
          setDisplayName(czechia.name)
          handleSelectCountry("CZ", czechia.name)
        }
      }
    } catch (error) {
      console.error("Error loading countries:", error)
    }
  }, [lang, selectedCountry?.code])

  const handleSelectCountry = (code: string, name: string) => {
    setOpen(false)
    setDisplayName(name)

    // Get country data from our countries.ts file
    const country = getCountry(code)

    if (country) {
      // Use the shipping data directly from the country object
      setSelectedCountry({
        code,
        name,
        shippingCost: country.shippingCost,
        freeShipping: country.freeShipping,
        discountedShipping: country.discountedShipping,
      })
    } else {
      // Fallback to default values if country not found
      setSelectedCountry({
        code,
        name,
        shippingCost: 300,
        freeShipping: false,
        discountedShipping: false,
      })
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
          {displayName}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup className="max-h-60 overflow-y-auto">
              {countries.map((country) => (
                <CommandItem
                  key={country.code}
                  value={country.name} // Use name for search value instead of code
                  onSelect={() => handleSelectCountry(country.code, country.name)}
                  disabled={country.restricted}
                >
                  <div className="flex items-center">
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedCountry?.code === country.code ? "opacity-100" : "opacity-0",
                      )}
                    />
                    <span>{country.name}</span>
                  </div>
                  {country.restricted && <span className="ml-auto text-xs text-red-500">Restricted</span>}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
