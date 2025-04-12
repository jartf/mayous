export type Country = {
  code: string
  name: {
    en: string
    cs: string
    vi: string
  }
  shippingCost: number
  freeShipping: boolean
  discountedShipping: boolean
  restricted: boolean
}

export const countries: Country[] = [
  // Czech Republic
  {
    code: "CZ",
    name: {
      en: "Czechia",
      cs: "Česká republika",
      vi: "Cộng hòa Séc",
    },
    shippingCost: 0,
    freeShipping: true,
    discountedShipping: false,
    restricted: false,
  },
  // EU Countries
  {
    code: "AT",
    name: {
      en: "Austria",
      cs: "Rakousko",
      vi: "Áo",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "BE",
    name: {
      en: "Belgium",
      cs: "Belgie",
      vi: "Bỉ",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "BG",
    name: {
      en: "Bulgaria",
      cs: "Bulharsko",
      vi: "Bulgaria",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "HR",
    name: {
      en: "Croatia",
      cs: "Chorvatsko",
      vi: "Croatia",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "CY",
    name: {
      en: "Cyprus",
      cs: "Kypr",
      vi: "Síp",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "DK",
    name: {
      en: "Denmark",
      cs: "Dánsko",
      vi: "Đan Mạch",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "EE",
    name: {
      en: "Estonia",
      cs: "Estonsko",
      vi: "Estonia",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "FI",
    name: {
      en: "Finland",
      cs: "Finsko",
      vi: "Phần Lan",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "FR",
    name: {
      en: "France",
      cs: "Francie",
      vi: "Pháp",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "DE",
    name: {
      en: "Germany",
      cs: "Německo",
      vi: "Đức",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "GR",
    name: {
      en: "Greece",
      cs: "Řecko",
      vi: "Hy Lạp",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "HU",
    name: {
      en: "Hungary",
      cs: "Maďarsko",
      vi: "Hungary",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "IE",
    name: {
      en: "Ireland",
      cs: "Irsko",
      vi: "Ireland",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "IT",
    name: {
      en: "Italy",
      cs: "Itálie",
      vi: "Ý",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "LV",
    name: {
      en: "Latvia",
      cs: "Lotyšsko",
      vi: "Latvia",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "LT",
    name: {
      en: "Lithuania",
      cs: "Litva",
      vi: "Lithuania",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "LU",
    name: {
      en: "Luxembourg",
      cs: "Lucembursko",
      vi: "Luxembourg",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "MT",
    name: {
      en: "Malta",
      cs: "Malta",
      vi: "Malta",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "NL",
    name: {
      en: "Netherlands",
      cs: "Nizozemsko",
      vi: "Hà Lan",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "PL",
    name: {
      en: "Poland",
      cs: "Polsko",
      vi: "Ba Lan",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "PT",
    name: {
      en: "Portugal",
      cs: "Portugalsko",
      vi: "Bồ Đào Nha",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "RO",
    name: {
      en: "Romania",
      cs: "Rumunsko",
      vi: "Romania",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "SK",
    name: {
      en: "Slovakia",
      cs: "Slovensko",
      vi: "Slovakia",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "SI",
    name: {
      en: "Slovenia",
      cs: "Slovinsko",
      vi: "Slovenia",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "ES",
    name: {
      en: "Spain",
      cs: "Španělsko",
      vi: "Tây Ban Nha",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "SE",
    name: {
      en: "Sweden",
      cs: "Švédsko",
      vi: "Thụy Điển",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  // Non-EU European Countries
  {
    code: "AL",
    name: {
      en: "Albania",
      cs: "Albánie",
      vi: "Albania",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "AD",
    name: {
      en: "Andorra",
      cs: "Andorra",
      vi: "Andorra",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "BY",
    name: {
      en: "Belarus",
      cs: "Bělorusko",
      vi: "Belarus",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "BA",
    name: {
      en: "Bosnia and Herzegovina",
      cs: "Bosna a Hercegovina",
      vi: "Bosnia và Herzegovina",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "GE",
    name: {
      en: "Georgia",
      cs: "Gruzie",
      vi: "Georgia",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "IS",
    name: {
      en: "Iceland",
      cs: "Island",
      vi: "Iceland",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "LI",
    name: {
      en: "Liechtenstein",
      cs: "Lichtenštejnsko",
      vi: "Liechtenstein",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "MC",
    name: {
      en: "Monaco",
      cs: "Monako",
      vi: "Monaco",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "ME",
    name: {
      en: "Montenegro",
      cs: "Černá Hora",
      vi: "Montenegro",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "MK",
    name: {
      en: "North Macedonia",
      cs: "Severní Makedonie",
      vi: "Bắc Macedonia",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "NO",
    name: {
      en: "Norway",
      cs: "Norsko",
      vi: "Na Uy",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "RU",
    name: {
      en: "Russia",
      cs: "Rusko",
      vi: "Nga",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "SM",
    name: {
      en: "San Marino",
      cs: "San Marino",
      vi: "San Marino",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "RS",
    name: {
      en: "Serbia",
      cs: "Srbsko",
      vi: "Serbia",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "CH",
    name: {
      en: "Switzerland",
      cs: "Švýcarsko",
      vi: "Thụy Sĩ",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "UA",
    name: {
      en: "Ukraine",
      cs: "Ukrajina",
      vi: "Ukraine",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "GB",
    name: {
      en: "United Kingdom",
      cs: "Spojené království",
      vi: "Vương quốc Anh",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "VA",
    name: {
      en: "Vatican City",
      cs: "Vatikán",
      vi: "Vatican",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  {
    code: "MD",
    name: {
      en: "Moldova",
      cs: "Moldavsko",
      vi: "Moldova",
    },
    shippingCost: 150,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  // Vietnam (with 25% discount)
  {
    code: "VN",
    name: {
      en: "Vietnam",
      cs: "Vietnam",
      vi: "Việt Nam",
    },
    shippingCost: 225,
    freeShipping: false,
    discountedShipping: true,
    restricted: false,
  },
  // Other countries
  {
    code: "US",
    name: {
      en: "United States",
      cs: "Spojené státy",
      vi: "Hoa Kỳ",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "CA",
    name: {
      en: "Canada",
      cs: "Kanada",
      vi: "Canada",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "AU",
    name: {
      en: "Australia",
      cs: "Austrálie",
      vi: "Úc",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "JP",
    name: {
      en: "Japan",
      cs: "Japonsko",
      vi: "Nhật Bản",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  // Additional countries - Asia
  {
    code: "CN",
    name: {
      en: "China",
      cs: "Čína",
      vi: "Trung Quốc",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "HK",
    name: {
      en: "Hong Kong",
      cs: "Hongkong",
      vi: "Hồng Kông",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "ID",
    name: {
      en: "Indonesia",
      cs: "Indonésie",
      vi: "Indonesia",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "IN",
    name: {
      en: "India",
      cs: "Indie",
      vi: "Ấn Độ",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "KR",
    name: {
      en: "South Korea",
      cs: "Jižní Korea",
      vi: "Hàn Quốc",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "MY",
    name: {
      en: "Malaysia",
      cs: "Malajsie",
      vi: "Malaysia",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "PH",
    name: {
      en: "Philippines",
      cs: "Filipíny",
      vi: "Philippines",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "SG",
    name: {
      en: "Singapore",
      cs: "Singapur",
      vi: "Singapore",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "TH",
    name: {
      en: "Thailand",
      cs: "Thajsko",
      vi: "Thái Lan",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "TW",
    name: {
      en: "Taiwan",
      cs: "Tchaj-wan",
      vi: "Đài Loan",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  // Additional countries - Americas
  {
    code: "AR",
    name: {
      en: "Argentina",
      cs: "Argentina",
      vi: "Argentina",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "BR",
    name: {
      en: "Brazil",
      cs: "Brazílie",
      vi: "Brazil",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "CL",
    name: {
      en: "Chile",
      cs: "Chile",
      vi: "Chile",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "CO",
    name: {
      en: "Colombia",
      cs: "Kolumbie",
      vi: "Colombia",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "MX",
    name: {
      en: "Mexico",
      cs: "Mexiko",
      vi: "Mexico",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "PE",
    name: {
      en: "Peru",
      cs: "Peru",
      vi: "Peru",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  // Additional countries - Africa
  {
    code: "EG",
    name: {
      en: "Egypt",
      cs: "Egypt",
      vi: "Ai Cập",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "GH",
    name: {
      en: "Ghana",
      cs: "Ghana",
      vi: "Ghana",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "KE",
    name: {
      en: "Kenya",
      cs: "Keňa",
      vi: "Kenya",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "MA",
    name: {
      en: "Morocco",
      cs: "Maroko",
      vi: "Ma Rốc",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "NG",
    name: {
      en: "Nigeria",
      cs: "Nigérie",
      vi: "Nigeria",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "ZA",
    name: {
      en: "South Africa",
      cs: "Jihoafrická republika",
      vi: "Nam Phi",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  // Additional countries - Middle East
  {
    code: "AE",
    name: {
      en: "United Arab Emirates",
      cs: "Spojené arabské emiráty",
      vi: "Các Tiểu vương quốc Ả Rập Thống nhất",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "IL",
    name: {
      en: "Israel",
      cs: "Izrael",
      vi: "Israel",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "QA",
    name: {
      en: "Qatar",
      cs: "Katar",
      vi: "Qatar",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "SA",
    name: {
      en: "Saudi Arabia",
      cs: "Saúdská Arábie",
      vi: "Ả Rập Saudi",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "TR",
    name: {
      en: "Turkey",
      cs: "Turecko",
      vi: "Thổ Nhĩ Kỳ",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  // Additional countries - Oceania
  {
    code: "NZ",
    name: {
      en: "New Zealand",
      cs: "Nový Zéland",
      vi: "New Zealand",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  {
    code: "FJ",
    name: {
      en: "Fiji",
      cs: "Fidži",
      vi: "Fiji",
    },
    shippingCost: 300,
    freeShipping: false,
    discountedShipping: false,
    restricted: false,
  },
  // Restricted countries
  {
    code: "AF",
    name: {
      en: "Afghanistan",
      cs: "Afghánistán",
      vi: "Afghanistan",
    },
    shippingCost: 0,
    freeShipping: false,
    discountedShipping: false,
    restricted: true,
  },
  {
    code: "MM",
    name: {
      en: "Myanmar",
      cs: "Myanmar",
      vi: "Myanmar",
    },
    shippingCost: 0,
    freeShipping: false,
    discountedShipping: false,
    restricted: true,
  },
  {
    code: "KP",
    name: {
      en: "North Korea (DPRK)",
      cs: "Severní Korea (KLDR)",
      vi: "Triều Tiên (CHDCND)",
    },
    shippingCost: 0,
    freeShipping: false,
    discountedShipping: false,
    restricted: true,
  },
  {
    code: "SD",
    name: {
      en: "Sudan",
      cs: "Súdán",
      vi: "Sudan",
    },
    shippingCost: 0,
    freeShipping: false,
    discountedShipping: false,
    restricted: true,
  },
  {
    code: "SS",
    name: {
      en: "South Sudan",
      cs: "Jižní Súdán",
      vi: "Nam Sudan",
    },
    shippingCost: 0,
    freeShipping: false,
    discountedShipping: false,
    restricted: true,
  },
  {
    code: "SY",
    name: {
      en: "Syria",
      cs: "Sýrie",
      vi: "Syria",
    },
    shippingCost: 0,
    freeShipping: false,
    discountedShipping: false,
    restricted: true,
  },
  {
    code: "DNLR",
    name: {
      en: "Donetsk and Luhansk regions",
      cs: "Doněcká a Luhanská oblast",
      vi: "Khu vực Donetsk và Luhansk",
    },
    shippingCost: 0,
    freeShipping: false,
    discountedShipping: false,
    restricted: true,
  },
]

export function getCountries(lang: string): { code: string; name: string; restricted: boolean }[] {
  // Make sure lang is one of the supported languages, default to 'en'
  const validLang = ["en", "cs", "vi"].includes(lang) ? lang : "en"

  return countries.map((country) => ({
    code: country.code,
    name: country.name[validLang as keyof typeof country.name] || country.name.en,
    restricted: country.restricted,
  }))
}

export function getCountry(code: string): Country | undefined {
  return countries.find((country) => country.code === code)
}

export function getEUCountries(): Country[] {
  return countries.filter((country) => country.discountedShipping && !country.restricted)
}

export function getRestrictedCountries(lang: string): string[] {
  return countries
    .filter((country) => country.restricted)
    .map((country) => country.name[lang as keyof typeof country.name])
}
