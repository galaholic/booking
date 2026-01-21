export type Category = "Coiffeur" | "Nagelstudio"

export type Service = {
  id: string
  name: string
  duration: number
  price: number
}

export type Business = {
  id: string
  name: string
  category: Category
  address: string
  distanceKm: number
  isOnline: boolean
  capacityFree: number
  capacityTotal: number
  rating: number
  tagline: string
  etaSlots: number[]
  services: Service[]
}

export type AdCampaign = {
  id: string
  title: string
  company: string
  placement: "search" | "detail"
  message: string
}

export const businesses: Business[] = [
  {
    id: "coiffure-limmat",
    name: "Coiffure Limmat",
    category: "Coiffeur",
    address: "Burgstrasse 18, Thun",
    distanceKm: 0.8,
    isOnline: true,
    capacityFree: 2,
    capacityTotal: 4,
    rating: 4.8,
    tagline: "Schnelle Schnitte ohne Wartezeit",
    etaSlots: [10, 15, 20],
    services: [
      { id: "s1", name: "Haarschnitt", duration: 30, price: 38 },
      { id: "s2", name: "Haarschnitt + Bart", duration: 45, price: 52 },
      { id: "s3", name: "Express Styling", duration: 20, price: 28 }
    ]
  },
  {
    id: "atelier-vier",
    name: "Atelier Vier",
    category: "Nagelstudio",
    address: "Aarequai 9, Thun",
    distanceKm: 1.4,
    isOnline: true,
    capacityFree: 1,
    capacityTotal: 3,
    rating: 4.9,
    tagline: "Signature Nails in 60 Minuten",
    etaSlots: [10, 20],
    services: [
      { id: "s4", name: "Gel Refill", duration: 60, price: 74 },
      { id: "s5", name: "Manikure", duration: 45, price: 55 }
    ]
  },
  {
    id: "studio-oberhof",
    name: "Studio Oberhof",
    category: "Coiffeur",
    address: "Panoramaweg 31, Thun",
    distanceKm: 2.6,
    isOnline: false,
    capacityFree: 0,
    capacityTotal: 5,
    rating: 4.6,
    tagline: "Premium Cuts mit Blick auf die Alpen",
    etaSlots: [15, 20],
    services: [
      { id: "s6", name: "Haarschnitt", duration: 30, price: 42 },
      { id: "s7", name: "Color & Cut", duration: 90, price: 120 }
    ]
  }
]

export const ads: AdCampaign[] = [
  {
    id: "ad1",
    title: "Regionale Empfehlung",
    company: "Aare Spa",
    placement: "search",
    message: "20% auf Express-Massagen fuer Thun. Heute frei ab 14:00."
  },
  {
    id: "ad2",
    title: "Lokaler Partner",
    company: "Bistro Hafen",
    placement: "detail",
    message: "Nach dem Termin einen Kaffee? 2 fuer 1 bis 16:00."
  }
]
