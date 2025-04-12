export type Dictionary = {
  navigation: {
    home: string
    products: string
    about: string
    contact: string
    cart: string
    checkout: string
  }
  home: {
    hero: {
      title: string
      subtitle: string
      cta: string
    }
    features: {
      title: string
      description: string
      quality: {
        title: string
        description: string
      }
      sustainability: {
        title: string
        description: string
      }
      comfort: {
        title: string
        description: string
      }
    }
    products: {
      title: string
      viewAll: string
    }
    story: {
      title: string
      content: string
      readMore: string
    }
  }
  products: {
    title: string
    search: string
    filter: string
    sort: string
    sortOptions: {
      newest: string
      priceAsc: string
      priceDesc: string
    }
    noResults: string
    addToCart: string
  }
  product: {
    addToCart: string
    size: string
    quantity: string
    description: string
    material: string
    shipping: {
      title: string
      free: string
      discounted: string
      international: string
    }
  }
  about: {
    title: string
    pronunciation: string
    story: {
      title: string
      content: string[]
    }
    values: {
      title: string
      sustainability: {
        title: string
        description: string
      }
      quality: {
        title: string
        description: string
      }
      comfort: {
        title: string
        description: string
      }
    }
  }
  contact: {
    title: string
    support: string
    email: string
    hours: {
      title: string
      business: string
      store: string
      support: string
      timezone: string
    }
    social: {
      title: string
      facebook: string
      instagram: string
    }
  }
  transparency: {
    title: string
    company: {
      title: string
      description: string[]
    }
    facilities: {
      title: string
      description: string[]
    }
    production: {
      title: string
      description: string[]
    }
  }
  cart: {
    title: string
    empty: string
    continueShopping: string
    summary: string
    subtotal: string
    shipping: string
    total: string
    checkout: string
    update: string
    remove: string
  }
  checkout: {
    title: string
    contact: string
    shipping: {
      title: string
      address: string
      city: string
      zip: string
      country: string
    }
    payment: {
      title: string
      methods: {
        card: string
        revolut: string
        paypal: string
        bank: string
        cash: string
        twisto: string
      }
    }
    placeOrder: string
    emptyCart: string
  }
  success: {
    title: string
    orderNumber: string
    thankYou: string
    emailConfirmation: string
    continueShopping: string
  }
  common: {
    currency: string
    originalPrice: string
    discountedPrice: string
    slogan: string
  }
}

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  cs: () => import("./dictionaries/cs.json").then((module) => module.default),
  vi: () => import("./dictionaries/vi.json").then((module) => module.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // Ensure we have a valid locale
  const validLocale = locale && locale in dictionaries ? locale : "en"
  return (dictionaries[validLocale as keyof typeof dictionaries] || dictionaries.en)()
}
