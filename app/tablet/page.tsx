"use client"

import { useState } from "react"
import clsx from "clsx"

const initialBookings = [
  {
    id: "t1",
    customer: "Lina S.",
    service: "Haarschnitt + Bart",
    eta: 15,
    status: "pending"
  },
  {
    id: "t2",
    customer: "Noah K.",
    service: "Haarschnitt",
    eta: 10,
    status: "confirmed"
  }
]

export default function TabletPage() {
  const [isOnline, setIsOnline] = useState(true)
  const [capacity, setCapacity] = useState(3)

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24">
      <section className="grid gap-6 rounded-3xl border border-ink/10 bg-white/80 p-8 shadow-soft md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
            Tablet Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-display">Coiffure Limmat</h1>
          <p className="mt-2 text-sm text-ink/70">
            Online Modus laeuft automatisch nach 60 Minuten ab.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setIsOnline((value) => !value)}
              className={clsx(
                "rounded-full px-6 py-3 text-sm shadow-soft",
                isOnline ? "bg-moss text-white" : "bg-ink text-sand"
              )}
            >
              {isOnline ? "Online" : "Offline"}
            </button>
            <div className="rounded-full border border-ink/20 px-6 py-3 text-sm">
              Auto-Offline in 42 Min
            </div>
          </div>
        </div>
        <div className="space-y-4 rounded-2xl bg-ink/90 p-6 text-sand">
          <p className="text-xs uppercase tracking-[0.3em] text-sand/70">
            Kapazitaet
          </p>
          <p className="text-2xl font-semibold">Freie Plaetze</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setCapacity((value) => Math.max(0, value - 1))}
              className="rounded-full border border-sand/30 px-4 py-2"
            >
              -
            </button>
            <span className="text-3xl font-semibold">{capacity}</span>
            <button
              type="button"
              onClick={() => setCapacity((value) => value + 1)}
              className="rounded-full border border-sand/30 px-4 py-2"
            >
              +
            </button>
          </div>
          <p className="text-xs text-sand/70">
            Buchungen reduzieren diese Zahl automatisch.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <h2 className="text-lg font-display">Eingehende Buchungen</h2>
          {initialBookings.map((booking) => (
            <div
              key={booking.id}
              className={clsx(
                "rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-soft",
                booking.status === "pending" && "ring-2 ring-copper/40"
              )}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
                    {booking.status === "pending" ? "Neu" : "Bestaetigt"}
                  </p>
                  <h3 className="mt-2 text-lg font-display">{booking.customer}</h3>
                  <p className="mt-1 text-sm text-ink/70">{booking.service}</p>
                </div>
                <div className="rounded-full border border-ink/10 px-4 py-2 text-sm">
                  ETA {booking.eta} Min
                </div>
              </div>
              {booking.status === "pending" ? (
                <div className="mt-4 flex gap-3">
                  <button className="rounded-full bg-ink px-4 py-2 text-xs text-sand">
                    Bestaetigen
                  </button>
                  <button className="rounded-full border border-ink/20 px-4 py-2 text-xs">
                    Ablehnen
                  </button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
              Alerts
            </p>
            <h3 className="mt-2 text-lg font-display">Push + Audio aktiv</h3>
            <p className="mt-2 text-sm text-ink/70">
              Bei jeder neuen Buchung erscheint eine visuelle Nachricht und ein
              Audio-Signal. Browser erlaubt Audio bei aktiver Session.
            </p>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-soft">
            <h3 className="text-lg font-display">Aktive Services</h3>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>Haarschnitt</span>
                <span>30 Min</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Haarschnitt + Bart</span>
                <span>45 Min</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Express Styling</span>
                <span>20 Min</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
