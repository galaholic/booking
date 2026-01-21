"use client"

import { useRouter } from "next/navigation"
import { setRole } from "@/lib/mock-auth"

export default function BusinessLoginPage() {
  const router = useRouter()

  return (
    <main className="mx-auto w-full max-w-4xl px-6 pb-24">
      <section className="rounded-3xl border border-ink/10 bg-white/80 p-10 shadow-soft">
        <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
          Geschaeftslogin
        </p>
        <h1 className="mt-3 text-3xl font-display">Tablet-Zugang fuer Betriebe</h1>
        <p className="mt-3 text-sm text-ink/70">
          Nur Geschaefte sehen das Tablet-Dashboard und benoetigen diesen Login.
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
            setRole("business")
            router.push("/tablet")
          }}
          className="mt-6 rounded-full bg-ink px-6 py-3 text-sm text-sand"
        >
          Als Geschaeft anmelden
        </button>
      </section>
    </main>
  )
}
