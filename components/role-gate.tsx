"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import type { Role } from "@/lib/mock-auth"
import { getRole } from "@/lib/mock-auth"

type RoleGateProps = {
  requiredRole: Role
  title: string
  description: string
  ctaHref: string
  ctaLabel: string
  children: React.ReactNode
}

export default function RoleGate({
  requiredRole,
  title,
  description,
  ctaHref,
  ctaLabel,
  children
}: RoleGateProps) {
  const [role, setRole] = useState<Role | null>(null)

  useEffect(() => {
    setRole(getRole())
  }, [])

  if (role === requiredRole) {
    return <>{children}</>
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-6 pb-24">
      <section className="rounded-3xl border border-ink/10 bg-white/80 p-10 text-center shadow-soft">
        <p className="text-xs uppercase tracking-[0.3em] text-ink/60">Zugang</p>
        <h1 className="mt-3 text-2xl font-display">{title}</h1>
        <p className="mt-3 text-sm text-ink/70">{description}</p>
        <Link
          href={ctaHref}
          className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm text-sand"
        >
          {ctaLabel}
        </Link>
      </section>
    </main>
  )
}
