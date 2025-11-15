"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

type Theme = "light" | "dark"

const storageKey = "theme-preference"

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "light"
  const stored = window.localStorage.getItem(storageKey) as Theme | null
  if (stored === "light" || stored === "dark") return stored
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  return prefersDark ? "dark" : "light"
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return
  const root = document.documentElement
  if (theme === "dark") {
    root.classList.add("dark")
  } else {
    root.classList.remove("dark")
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const preferred = getPreferredTheme()
    setTheme(preferred)
    applyTheme(preferred)
  }, [])

  function handleToggle() {
    const next: Theme = theme === "light" ? "dark" : "light"
    setTheme(next)
    window.localStorage.setItem(storageKey, next)
    applyTheme(next)
  }

  const label = theme === "light" ? "Switch to dark mode" : "Switch to light mode"

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={label}
      onClick={handleToggle}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Sun className="h-4 w-4" aria-hidden="true" />
      )}
    </Button>
  )
}

