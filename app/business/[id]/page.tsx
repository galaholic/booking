import Link from "next/link"
import { ads, businesses } from "@/lib/mock-data"

type BusinessPageProps = {
  params: { id: string }
}

export default function BusinessPage({ params }: BusinessPageProps) {
  const business = businesses.find((item) => item.id === params.id)
  const ad = ads.find((item) => item.placement === "detail")

  if (!business) {
    return (
      <main className="mx-auto w-full max-w-4xl px-6 pb-24">
        <div className="rounded-3xl border border-ink/10 bg-white/80 p-10 text-center">
          <h1 className="text-2xl font-display">Geschaeft nicht gefunden</h1>
          <p className="mt-3 text-sm text-ink/70">
            Bitte kehre zur Suche zurueck.
          </p>
          <Link
            href="/search"
            className="mt-6 inline-flex rounded-full bg-ink px-5 py-2 text-sm text-sand"
          >
            Zur Suche
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-6 pb-24">
      <section className="grid gap-8 rounded-3xl border border-ink/10 bg-white/80 p-8 shadow-soft md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
            {business.category}
          </p>
          <h1 className="mt-2 text-3xl font-display">{business.name}</h1>
          <p className="mt-2 text-sm text-ink/70">{business.address}</p>
          <p className="mt-4 text-sm text-ink/70">{business.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs">
            <span className="chip">Rating {business.rating}</span>
            <span className="chip">
              Frei {business.capacityFree}/{business.capacityTotal}
            </span>
            <span className="chip">
              Ankunft {business.etaSlots.join("/")} Min
            </span>
          </div>
        </div>
        <div className="rounded-2xl bg-ink/90 p-6 text-sand">
          <p className="text-xs uppercase tracking-[0.3em] text-sand/70">
            Sofort buchen
          </p>
          <h2 className="mt-2 text-2xl font-display">Jetzt freie Slots</h2>
          <p className="mt-3 text-sm text-sand/70">
            Waehle deinen Service und gib deine Ankunftszeit an. Das Geschaeft
            bestaetigt innerhalb von 5 Minuten.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            {business.etaSlots.map((eta) => (
              <span key={eta} className="rounded-full bg-white/10 px-3 py-1">
                ETA {eta} Min
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {business.services.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-soft"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-display">{service.name}</h3>
                  <p className="mt-1 text-sm text-ink/70">
                    Dauer {service.duration} Min
                  </p>
                </div>
                <div className="text-sm font-semibold">CHF {service.price}</div>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
                <p className="text-ink/60">
                  ETA: {business.etaSlots.join(" / ")} Min
                </p>
                <button className="rounded-full bg-ink px-4 py-2 text-sand">
                  Jetzt buchen
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-soft">
            <h3 className="text-lg font-display">Deine Buchung</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span>Status</span>
                <span className="rounded-full bg-moss/10 px-3 py-1 text-xs text-moss">
                  Wartet auf Bestaetigung
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>ETA</span>
                <span>15 Min</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Service</span>
                <span>{business.services[0]?.name}</span>
              </div>
            </div>
          </div>
          {ad ? (
            <div className="rounded-3xl border border-copper/40 bg-copper/10 p-5 text-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-copper">
                {ad.title}
              </p>
              <p className="mt-2 font-medium text-ink">{ad.company}</p>
              <p className="mt-1 text-ink/70">{ad.message}</p>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  )
}
