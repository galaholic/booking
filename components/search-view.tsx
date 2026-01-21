"use client"

import { useMemo, useState } from "react"
import clsx from "clsx"
import Link from "next/link"
import { ads, businesses, Category } from "@/lib/mock-data"

const categories: (Category | "Alle")[] = ["Alle", "Coiffeur", "Nagelstudio"]
const radiusOptions = [1, 3, 5, 10]

export default function SearchView() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Alle")
  const [radius, setRadius] = useState(3)
  const [onlyOnline, setOnlyOnline] = useState(true)

  const visible = useMemo(() => {
    return businesses.filter((business) => {
      const categoryMatch = category === "Alle" || business.category === category
      const radiusMatch = business.distanceKm <= radius
      const onlineMatch = !onlyOnline || business.isOnline
      return categoryMatch && radiusMatch && onlineMatch
    })
  }, [category, radius, onlyOnline])

  const ad = ads.find((item) => item.placement === "search")

  return (
    <div className="space-y-8">
      <section className="grid gap-6 rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-soft md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
            Suche in Thun
          </p>
          <h1 className="mt-2 text-3xl font-display">
            Wer ist jetzt frei in deinem Umkreis?
          </h1>
          <p className="mt-3 text-sm text-ink/70">
            Filtere nach Kategorie und Umkreis. Geschaefte schalten sich aktiv
            online, wenn Kapazitaet vorhanden ist.
          </p>
        </div>
        <div className="rounded-2xl bg-ink/90 p-5 text-sand">
          <p className="text-xs uppercase tracking-[0.3em] text-sand/70">Status</p>
          <p className="mt-2 text-2xl font-semibold">{visible.length} frei</p>
          <p className="mt-1 text-sm text-sand/70">
            Durchschn. Ankunft: 12 Min
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <div className="space-y-4 rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-soft">
          <h2 className="text-lg font-display">Filter</h2>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
              Kategorie
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={clsx(
                    "rounded-full px-4 py-2 text-xs",
                    item === category
                      ? "bg-ink text-sand"
                      : "border border-ink/20 text-ink"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60">Umkreis</p>
            <div className="flex flex-wrap gap-2">
              {radiusOptions.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRadius(value)}
                  className={clsx(
                    "rounded-full px-4 py-2 text-xs",
                    value === radius
                      ? "bg-copper text-white"
                      : "border border-ink/20 text-ink"
                  )}
                >
                  {value} km
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white/60 px-4 py-3">
            <div>
              <p className="text-sm font-medium">Nur freie Geschaefte</p>
              <p className="text-xs text-ink/60">Online & Kapazitaet</p>
            </div>
            <button
              type="button"
              onClick={() => setOnlyOnline((value) => !value)}
              className={clsx(
                "rounded-full px-4 py-2 text-xs",
                onlyOnline ? "bg-moss text-white" : "border border-ink/20"
              )}
            >
              {onlyOnline ? "Aktiv" : "Alle"}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {ad ? (
            <div className="rounded-3xl border border-copper/40 bg-copper/10 p-4 text-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-copper">
                {ad.title}
              </p>
              <p className="mt-2 font-medium text-ink">{ad.company}</p>
              <p className="mt-1 text-ink/70">{ad.message}</p>
            </div>
          ) : null}

          {visible.map((business) => (
            <Link
              key={business.id}
              href={`/business/${business.id}`}
              className="group block rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-soft transition hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
                    {business.category}
                  </p>
                  <h3 className="mt-2 text-xl font-display text-ink group-hover:text-tide">
                    {business.name}
                  </h3>
                </div>
                <div className="rounded-full border border-ink/10 px-3 py-1 text-xs">
                  {business.distanceKm} km
                </div>
              </div>
              <p className="mt-2 text-sm text-ink/70">{business.tagline}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
                <span className="chip">Rating {business.rating}</span>
                <span className="chip">
                  Frei {business.capacityFree}/{business.capacityTotal}
                </span>
                {business.isOnline ? (
                  <span className="chip">Online</span>
                ) : (
                  <span className="chip">Offline</span>
                )}
              </div>
              <div className="mt-4 text-xs text-ink/60">
                Ankunft moeglich: {business.etaSlots.join(" / ")} Min
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
