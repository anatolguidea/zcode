import Link from "next/link"
import { ThemeToggle } from "@/components/layout/ThemeToggle"

const links = [
  { href: "#home", label: "Home" },
  { href: "#pricing", label: "Pricing" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="#home" className="text-sm font-semibold tracking-tight">
          Zcode
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
