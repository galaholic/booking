"use client"

import { useRouter } from "next/navigation"
import RoleGate from "@/components/role-gate"
import { clearRole } from "@/lib/mock-auth"

const stats = [
  { label: "Buchungen heute", value: 28 },
  { label: "Aktive Geschaefte", value: 6 },
  { label: "No-Shows (90d)", value: 4 },
  { label: "Werbeplaetze", value: 3 }
]

const flaggedUsers = [
  { name: "Mara S.", noShows: 2, last: "vor 8 Tagen" },
  { name: "Jonas T.", noShows: 3, last: "vor 3 Tagen" }
]

const onlineBusinesses = [
  { name: "Coiffure Limmat", capacity: "2/4", status: "online" },
  { name: "Atelier Vier", capacity: "1/3", status: "online" },
  { name: "Studio Oberhof", capacity: "0/5", status: "offline" }
]

const campaigns = [
  { name: "Aare Spa", reach: "Thun 5km", status: "aktiv" },
  { name: "Bistro Hafen", reach: "Thun Zentrum", status: "aktiv" }
]

export default function AdminPage() {
  const router = useRouter()

  return (
    <RoleGate
      requiredRole="admin"
      title="Adminlogin erforderlich"
      description="Dieses Dashboard ist nur fuer Betreiber sichtbar."
      ctaHref="/admin/login"
      ctaLabel="Zum Adminlogin"
    >
      <main className="mx-auto w-full max-w-6xl px-6 pb-24">
        <section className="rounded-3xl border border-ink/10 bg-white/80 p-8 shadow-soft">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
                Admin
              </p>
              <h1 className="mt-2 text-3xl font-display">Betriebs-Uebersicht</h1>
            </div>
            <button
              type="button"
              onClick={() => {
                clearRole()
                router.push("/")
              }}
              className="rounded-full border border-ink/20 px-5 py-2 text-sm"
            >
              Abmelden
            </button>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-soft"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
                {item.label}
              </p>
              <p className="mt-3 text-2xl font-semibold">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-soft">
            <h2 className="text-lg font-display">Kritische Kunden</h2>
            <p className="mt-2 text-sm text-ink/70">
              No-Show Status aus den letzten 90 Tagen.
            </p>
            <div className="mt-4 space-y-3 text-sm">
              {flaggedUsers.map((user) => (
                <div
                  key={user.name}
                  className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white/60 px-4 py-3"
                >
                  <span>{user.name}</span>
                  <span>{user.noShows} No-Shows</span>
                  <span className="text-ink/60">{user.last}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-soft">
            <h2 className="text-lg font-display">Geschaeftsstatus</h2>
            <p className="mt-2 text-sm text-ink/70">
              Online/Offline + aktuelle Kapazitaet.
            </p>
            <div className="mt-4 space-y-3 text-sm">
              {onlineBusinesses.map((business) => (
                <div
                  key={business.name}
                  className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white/60 px-4 py-3"
                >
                  <span>{business.name}</span>
                  <span>{business.capacity}</span>
                  <span className="text-ink/60">{business.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-soft">
          <h2 className="text-lg font-display">Werbekampagnen</h2>
          <div className="mt-4 space-y-3 text-sm">
            {campaigns.map((campaign) => (
              <div
                key={campaign.name}
                className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white/60 px-4 py-3"
              >
                <span>{campaign.name}</span>
                <span>{campaign.reach}</span>
                <span className="text-ink/60">{campaign.status}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </RoleGate>
  )
}
