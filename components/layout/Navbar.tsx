"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Code2 } from "lucide-react"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { cn } from "@/lib/utils"

const links = [
  { href: "#home", label: "Home" },
  { href: "#pricing", label: "Pricing" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")
  const [scrolled, setScrolled] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()

  // Handle scroll-based background opacity
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20)
  })

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => link.href.slice(1))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 100) {
            setActiveSection(`#${sections[i]}`)
            break
          }
        }
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border/50 bg-background/95 backdrop-blur-md shadow-sm"
          : "border-border/30 bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="#home"
            className="group flex items-center gap-2 text-lg font-bold tracking-tight transition-colors hover:text-primary"
            onClick={handleLinkClick}
          >
            <motion.div
              className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-primary via-pink-500 to-orange-500 text-background shadow-lg"
              whileHover={{ rotate: prefersReducedMotion ? 0 : 360 }}
              transition={{ duration: 0.6 }}
            >
              <Code2 className="h-5 w-5" aria-hidden="true" />
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-pink-500 to-orange-500 opacity-0 blur-md transition-opacity group-hover:opacity-50"
                initial={false}
              />
            </motion.div>
            <span className="hidden sm:inline-block">Zcode</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link, index) => {
            const isActive = activeSection === link.href
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: prefersReducedMotion ? 0 : index * 0.05,
                  duration: prefersReducedMotion ? 0 : 0.3,
                }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={handleLinkClick}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-pink-500 to-orange-500"
                      layoutId="activeSection"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {!isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-primary via-pink-500 to-orange-500"
                      whileHover={{
                        width: "100%",
                        left: 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            )
          })}
        </nav>

        {/* Right side - Mobile menu button */}
        <div className="flex items-center gap-2">
          {/* Mobile menu button */}
          <motion.button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="relative z-50 flex h-11 w-11 min-w-[44px] items-center justify-center rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm transition-colors active:bg-muted/50 active:scale-95 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
              style={{ WebkitTapHighlightColor: "transparent" }}
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
              className="fixed right-0 top-0 z-50 h-full w-[280px] max-w-[90vw] border-l border-border bg-background/98 backdrop-blur-xl shadow-2xl md:hidden"
              style={{ WebkitTapHighlightColor: "transparent" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-full flex-col">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Menu
                  </span>
                  <motion.button
                    type="button"
                    aria-label="Close menu"
                    className="flex h-10 w-10 min-w-[44px] items-center justify-center rounded-lg transition-colors active:bg-muted active:scale-95"
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.9 }}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    <X className="h-5 w-5" />
                  </motion.button>
                </div>

                {/* Mobile menu links - column layout */}
                <div className="flex-1 px-4 py-4">
                  <div className="flex flex-col space-y-1.5">
                    {links.map((link, index) => {
                      const isActive = activeSection === link.href
                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: prefersReducedMotion ? 0 : index * 0.05,
                            duration: prefersReducedMotion ? 0 : 0.3,
                          }}
                        >
                          <Link
                            href={link.href}
                            className={cn(
                              "group relative flex min-h-[44px] items-center gap-3 rounded-xl px-4 py-2.5 text-base font-medium transition-all active:scale-[0.98]",
                              isActive
                                ? "bg-gradient-to-r from-primary/10 via-pink-500/10 to-orange-500/10 text-foreground"
                                : "text-muted-foreground active:bg-muted/50"
                            )}
                            onClick={handleLinkClick}
                            style={{ WebkitTapHighlightColor: "transparent" }}
                          >
                            {isActive && (
                              <motion.div
                                className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-primary via-pink-500 to-orange-500"
                                layoutId="mobileActiveSection"
                                initial={false}
                                transition={{
                                  type: "spring",
                                  stiffness: 380,
                                  damping: 30,
                                }}
                              />
                            )}
                            <span className="relative z-10 flex-1">{link.label}</span>
                            {isActive && (
                              <motion.div
                                className="h-2 w-2 rounded-full bg-primary"
                                animate={{
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />
                            )}
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Mobile menu footer */}
                <div className="border-t border-border p-3">
                  <div className="rounded-xl border border-border/50 bg-gradient-to-r from-primary/5 via-pink-500/5 to-orange-500/5 p-3 text-center">
                    <p className="text-xs font-medium text-muted-foreground">
                      Ready to start your project?
                    </p>
                    <Link
                      href="#contact"
                      className="mt-2 inline-block min-h-[44px] px-4 py-2 text-sm font-semibold text-primary transition-colors active:text-primary/80 active:scale-95"
                      onClick={handleLinkClick}
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      Get in touch →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
