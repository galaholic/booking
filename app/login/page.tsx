"use client"

import { useRouter } from "next/navigation"
import { setRole } from "@/lib/mock-auth"

export default function LoginPage() {
  const router = useRouter()

  return (
    <main className="mx-auto w-full max-w-4xl px-6 pb-24">
      <section className="rounded-3xl border border-ink/10 bg-white/80 p-10 shadow-soft">
        <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
          Kundenlogin
        </p>
        <h1 className="mt-3 text-3xl font-display">Willkommen zur Sofortbuchung</h1>
        <p className="mt-3 text-sm text-ink/70">
          Logge dich ein, um deine Buchungen zu sehen und ETA auszuwahlen.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <input
            className="rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 text-sm"
            placeholder="E-Mail"
            type="email"
          />
          <input
            className="rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 text-sm"
            placeholder="Passwort"
            type="password"
          />
        </div>
        <button
          type="button"
          onClick={() => {
            setRole("customer")
            router.push("/account")
          }}
          className="mt-6 rounded-full bg-ink px-6 py-3 text-sm text-sand"
        >
          Als Kunde anmelden
        </button>
      </section>
    </main>
  )
}
