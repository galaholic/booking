export type Role = "customer" | "business" | "admin"

const STORAGE_KEY = "thun-role"

export function getRole(): Role | null {
  if (typeof window === "undefined") {
    return null
  }

  const value = window.localStorage.getItem(STORAGE_KEY)
  if (value === "customer" || value === "business" || value === "admin") {
    return value
  }

  return null
}

export function setRole(role: Role) {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.setItem(STORAGE_KEY, role)
}

export function clearRole() {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.removeItem(STORAGE_KEY)
}
