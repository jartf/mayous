export type Product = {
  id: string
  name: {
    en: string
    cs: string
    vi: string
  }
  description: {
    en: string
    cs: string
    vi: string
  }
  price: number
  originalPrice: number
  image: string
  category: string
  material: {
    en: string
    cs: string
    vi: string
  }
  colors: string[]
  sizes: string[]
  featured: boolean
}

// Make sure products are exported as a constant, not a function result
export const products: Product[] = [
  {
    id: "classic-white",
    name: {
      en: "Classic White Office Shirt",
      cs: "Klasická bílá kancelářská košile",
      vi: "Áo sơ mi văn phòng trắng cổ điển",
    },
    description: {
      en: "Our signature classic white shirt made with premium Tencel blend fabric. Perfect for any formal occasion with its timeless design and comfortable fit.",
      cs: "Naše klasická bílá košile vyrobená z prémiové směsi Tencel. Dokonalá pro každou formální příležitost díky svému nadčasovému designu a pohodlnému střihu.",
      vi: "Áo sơ mi trắng cổ điển đặc trưng của chúng tôi được làm từ vải pha Tencel cao cấp. Hoàn hảo cho bất kỳ dịp trang trọng nào với thiết kế vượt thời gian và form dáng thoải mái.",
    },
    price: 1500,
    originalPrice: 1800,
    image: "/products/classic-white.webp",
    category: "formal",
    material: {
      en: "65% Tencel, 25% Cotton, 10% Gracell",
      cs: "65% Tencel, 25% Bavlna, 10% Gracell",
      vi: "65% Tencel, 25% Cotton, 10% Gracell",
    },
    colors: ["white"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
  },
  {
    id: "light-blue-oxford",
    name: {
      en: "Light Blue Oxford Shirt",
      cs: "Světle modrá košile Oxford",
      vi: "Áo sơ mi Oxford xanh nhạt",
    },
    description: {
      en: "A versatile light blue Oxford shirt that transitions seamlessly from office to casual wear. Made with our eco-friendly Tencel blend for all-day comfort.",
      cs: "Univerzální světle modrá košile Oxford, která plynule přechází z kancelářského do neformálního oblečení. Vyrobena z naší ekologické směsi Tencel pro celodenní pohodlí.",
      vi: "Áo sơ mi Oxford màu xanh nhạt linh hoạt chuyển đổi liền mạch từ văn phòng đến trang phục thường ngày. Được làm từ hỗn hợp Tencel thân thiện với môi trường của chúng tôi để thoải mái cả ngày.",
    },
    price: 1500,
    originalPrice: 1800,
    image: "/products/light-blue-oxford.webp",
    category: "business-casual",
    material: {
      en: "65% Tencel, 25% Cotton, 10% Gracell",
      cs: "65% Tencel, 25% Bavlna, 10% Gracell",
      vi: "65% Tencel, 25% Cotton, 10% Gracell",
    },
    colors: ["light-blue"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
  },
  {
    id: "striped-formal",
    name: {
      en: "Striped Formal Shirt",
      cs: "Pruhovaná formální košile",
      vi: "Áo sơ mi kẻ sọc trang trọng",
    },
    description: {
      en: "Elegant striped formal shirt with a modern fit. The subtle pattern adds sophistication to your professional wardrobe while maintaining comfort throughout the day.",
      cs: "Elegantní pruhovaná formální košile s moderním střihem. Jemný vzor dodává sofistikovanost vašemu profesionálnímu šatníku a zároveň zachovává pohodlí po celý den.",
      vi: "Áo sơ mi kẻ sọc trang trọng thanh lịch với form dáng hiện đại. Họa tiết tinh tế tăng thêm sự tinh tế cho tủ quần áo chuyên nghiệp của bạn trong khi vẫn duy trì sự thoải mái suốt cả ngày.",
    },
    price: 1500,
    originalPrice: 1800,
    image: "/products/striped-formal.webp",
    category: "formal",
    material: {
      en: "65% Tencel, 25% Cotton, 10% Gracell",
      cs: "65% Tencel, 25% Bavlna, 10% Gracell",
      vi: "65% Tencel, 25% Cotton, 10% Gracell",
    },
    colors: ["blue-stripe"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
  },
  {
    id: "slim-fit-black",
    name: {
      en: "Slim Fit Black Shirt",
      cs: "Černá košile slim fit",
      vi: "Áo sơ mi đen ôm sát",
    },
    description: {
      en: "A sleek black shirt with a contemporary slim fit design. Perfect for evening events or creating a sharp professional look with maximum comfort.",
      cs: "Elegantní černá košile s moderním designem slim fit. Ideální pro večerní akce nebo vytvoření ostrého profesionálního vzhledu s maximálním pohodlím.",
      vi: "Áo sơ mi đen thanh lịch với thiết kế ôm sát hiện đại. Hoàn hảo cho các sự kiện buổi tối hoặc tạo ra một vẻ ngoài chuyên nghiệp sắc sảo với sự thoải mái tối đa.",
    },
    price: 1500,
    originalPrice: 1800,
    image: "/products/slim-fit-black.webp",
    category: "formal",
    material: {
      en: "65% Tencel, 25% Cotton, 10% Gracell",
      cs: "65% Tencel, 25% Bavlna, 10% Gracell",
      vi: "65% Tencel, 25% Cotton, 10% Gracell",
    },
    colors: ["black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
  },
  {
    id: "checkered-casual",
    name: {
      en: "Checkered Casual Shirt",
      cs: "Kostkovaná neformální košile",
      vi: "Áo sơ mi ca rô thường ngày",
    },
    description: {
      en: "A relaxed checkered shirt that brings style to your casual wardrobe. Made with our sustainable fabric blend for breathability and comfort.",
      cs: "Uvolněná kostkovaná košile, která přináší styl do vašeho neformálního šatníku. Vyrobena z naší udržitelné směsi látek pro prodyšnost a pohodlí.",
      vi: "Áo sơ mi ca rô thoải mái mang phong cách cho tủ quần áo thường ngày của bạn. Được làm từ hỗn hợp vải bền vững của chúng tôi để thoáng khí và thoải mái.",
    },
    price: 1500,
    originalPrice: 1800,
    image: "/products/checkered-casual.webp",
    category: "casual",
    material: {
      en: "65% Tencel, 25% Cotton, 10% Gracell",
      cs: "65% Tencel, 25% Bavlna, 10% Gracell",
      vi: "65% Tencel, 25% Cotton, 10% Gracell",
    },
    colors: ["multi"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
  },
  {
    id: "light-pink-formal",
    name: {
      en: "Light Pink Formal Shirt",
      cs: "Světle růžová formální košile",
      vi: "Áo sơ mi hồng nhạt trang trọng",
    },
    description: {
      en: "Add a subtle touch of color to your formal wardrobe with this light pink shirt. The premium fabric ensures comfort while maintaining a professional appearance.",
      cs: "Přidejte jemný dotek barvy do svého formálního šatníku s touto světle růžovou košilí. Prémiová látka zajišťuje pohodlí při zachování profesionálního vzhledu.",
      vi: "Thêm một chút màu sắc tinh tế vào tủ quần áo trang trọng của bạn với chiếc áo sơ mi hồng nhạt này. Vải cao cấp đảm bảo sự thoải mái trong khi vẫn duy trì vẻ ngoài chuyên nghiệp.",
    },
    price: 1500,
    originalPrice: 1800,
    image: "/products/light-pink-formal.webp",
    category: "formal",
    material: {
      en: "65% Tencel, 25% Cotton, 10% Gracell",
      cs: "65% Tencel, 25% Bavlna, 10% Gracell",
      vi: "65% Tencel, 25% Cotton, 10% Gracell",
    },
    colors: ["pink"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
  },
]

// Simple getter functions that work with the products array
export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getAllProducts(): Product[] {
  return products
}

export function searchProducts(query: string, lang: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name[lang as keyof typeof product.name].toLowerCase().includes(lowercaseQuery) ||
      product.description[lang as keyof typeof product.description].toLowerCase().includes(lowercaseQuery),
  )
}

export function filterProducts(category: string | null): Product[] {
  if (!category) return products
  return products.filter((product) => product.category === category)
}

export function sortProducts(products: Product[], sortBy: string): Product[] {
  const productsCopy = [...products]

  switch (sortBy) {
    case "priceAsc":
      return productsCopy.sort((a, b) => a.price - b.price)
    case "priceDesc":
      return productsCopy.sort((a, b) => b.price - a.price)
    case "newest":
    default:
      return productsCopy
  }
}
