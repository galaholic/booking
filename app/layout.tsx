import type { Metadata } from "next"
import { Fraunces, Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Thun Direktbooking",
  description:
    "Sofort freie Coiffeure und Nagelstudios in Thun finden und direkt buchen."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="bg-atmosphere font-sans">
        <div className="min-h-screen">
          <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-tide text-white">
                T
              </div>
              <div>
                <p className="font-display text-lg">Thun Direkt</p>
                <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
                  Jetzt Frei
                </p>
              </div>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-ink/70 md:flex">
              <a href="/search" className="hover:text-ink">
                Suche
              </a>
              <a href="/tablet" className="hover:text-ink">
                Tablet
              </a>
              <a href="/account" className="hover:text-ink">
                Konto
              </a>
            </nav>
            <a
              href="/search"
              className="rounded-full bg-ink px-5 py-2 text-sm text-sand shadow-soft"
            >
              Jetzt buchen
            </a>
          </header>
          {children}
          <footer className="mx-auto w-full max-w-6xl px-6 py-10 text-xs text-ink/60">
            Lokal in Thun gestartet. Werbung und Kapazitaet sind Mock-Daten.
          </footer>
        </div>
      </body>
    </html>
  )
}
