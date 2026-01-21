import Link from "next/link"

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24">
      <section className="grid gap-12 rounded-[32px] border border-ink/10 bg-white/70 p-10 shadow-soft backdrop-blur md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="chip">Thun Launch</p>
          <h1 className="text-4xl font-display leading-tight md:text-5xl">
            Finde jetzt freie Coiffeure und Nagelstudios in deiner Naehe.
          </h1>
          <p className="text-base text-ink/70 md:text-lg">
            Wir zeigen nur Geschaefte, die gerade Kapazitaet haben. Du buchst
            sofort, waehlt eine Ankunftszeit in 10, 15 oder 20 Minuten und bist
            direkt dran.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/search"
              className="rounded-full bg-ink px-6 py-3 text-sm text-sand shadow-soft"
            >
              Jetzt freie Termine finden
            </Link>
            <Link
              href="/tablet"
              className="rounded-full border border-ink/20 px-6 py-3 text-sm text-ink"
            >
              Tablet-Dashboard ansehen
            </Link>
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-tide/90 to-moss/70 p-6 text-sand">
          <p className="text-sm uppercase tracking-[0.3em] text-sand/70">
            Live Status
          </p>
          <h2 className="mt-4 text-2xl font-display">Heute in Thun</h2>
          <div className="mt-6 space-y-4 text-sm">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sand/70">Geschaefte online</p>
              <p className="text-2xl font-semibold">2</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sand/70">Sofort freie Slots</p>
              <p className="text-2xl font-semibold">3</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sand/70">Durchschnittliche Wartezeit</p>
              <p className="text-2xl font-semibold">12 Min</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Online geht in 1 Tap",
            text: "Geschaefte schalten sich auf dem Tablet fuer 60 Minuten frei."
          },
          {
            title: "Ankunftszeit angeben",
            text: "Kunden markieren 10, 15 oder 20 Minuten und sparen Wartezeit."
          },
          {
            title: "No-Show Schutz",
            text: "Nach 3 No-Shows in 90 Tagen sperren wir 30 Tage automatisch."
          }
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-soft"
          >
            <h3 className="text-lg font-display">{card.title}</h3>
            <p className="mt-3 text-sm text-ink/70">{card.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-ink/10 bg-white/75 p-8 shadow-soft">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
              Regionale Werbung
            </p>
            <h2 className="mt-2 text-2xl font-display">
              Lokale Partner direkt in der Suche sichtbar machen.
            </h2>
            <p className="mt-3 text-sm text-ink/70">
              Werbeplaetze sind regional buchbar und erscheinen in der Umkreissuche
              sowie auf Detailseiten.
            </p>
          </div>
          <Link
            href="/search"
            className="rounded-full bg-copper px-6 py-3 text-sm text-white"
          >
            Werbeflaeche sehen
          </Link>
        </div>
      </section>
    </main>
  )
}
