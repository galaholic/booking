import Link from "next/link"

const bookings = [
  {
    id: "b1",
    business: "Coiffure Limmat",
    service: "Haarschnitt + Bart",
    eta: 15,
    status: "Bestaetigung offen"
  },
  {
    id: "b2",
    business: "Atelier Vier",
    service: "Gel Refill",
    eta: 10,
    status: "Bestaetigt"
  }
]

export default function AccountPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 pb-24">
      <section className="rounded-3xl border border-ink/10 bg-white/80 p-8 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
              Kundenkonto
            </p>
            <h1 className="mt-2 text-3xl font-display">Deine aktuellen Buchungen</h1>
          </div>
          <Link
            href="/search"
            className="rounded-full bg-ink px-5 py-2 text-sm text-sand"
          >
            Neue Buchung
          </Link>
        </div>
      </section>

      <section className="mt-8 space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-soft"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-display">{booking.business}</h3>
                <p className="mt-1 text-sm text-ink/70">{booking.service}</p>
              </div>
              <div className="text-sm">
                <p className="text-ink/60">ETA</p>
                <p className="text-lg font-semibold">{booking.eta} Min</p>
              </div>
              <span className="rounded-full bg-moss/10 px-4 py-2 text-xs text-moss">
                {booking.status}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-3xl border border-ink/10 bg-white/70 p-6 text-sm text-ink/70">
        <p className="font-medium text-ink">No-Show Status</p>
        <p className="mt-2">
          Du hast aktuell 1 No-Show in den letzten 90 Tagen. Ab 3 No-Shows wird
          dein Konto fuer 30 Tage automatisch gesperrt.
        </p>
      </section>
    </main>
  )
}
