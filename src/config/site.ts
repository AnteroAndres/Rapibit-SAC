export const siteConfig = {
  name: "Rapibit SAC",
  description: "Soluciones de tecnología para entidades públicas, empresas y emprendimientos",
  url: "https://rapibit.com",
  ogImage: "/og-image.png",
  links: {
    twitter: "",
    linkedin: "",
    github: "",
  },
  contact: {
    email: "contacto@rapibit.com",
    phone: "+51 999 999 999",
    whatsapp: "+51999999999",
    address: "Lima, Perú",
    ruc: "20XXXXXXXXX",
  },
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
