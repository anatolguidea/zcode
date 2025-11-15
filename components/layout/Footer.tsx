"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code2,
  Mail,
  MessageCircle,
  Send,
  ArrowUp,
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
} from "lucide-react"
import { contactLinks } from "@/lib/data"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { cn } from "@/lib/utils"

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#pricing", label: "Pricing" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/zcode",
    color: "hover:text-blue-400",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/zcode",
    color: "hover:text-pink-500",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/zcode",
    color: "hover:text-gray-300",
  },
]

const contactQuickLinks = [
  {
    name: "Email",
    icon: Mail,
    href: contactLinks.email,
    color: "hover:text-primary",
  },
  {
    name: "Telegram",
    icon: Send,
    href: contactLinks.telegram,
    color: "hover:text-blue-400",
  },
  {
    name: "Discord",
    icon: MessageCircle,
    href: contactLinks.discord,
    color: "hover:text-indigo-400",
  },
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
      },
    },
  }

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden border-t border-border bg-gradient-to-b from-background via-background to-muted/10"
    >
      {/* Background decoration */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-1/4 bottom-0 h-96 w-96 rounded-full bg-gradient-to-r from-primary/5 via-pink-500/5 to-orange-500/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-gradient-to-r from-pink-500/5 via-fuchsia-500/5 to-orange-500/5 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link
              href="#home"
              className="group inline-flex items-center gap-2 text-xl font-bold tracking-tight transition-colors hover:text-primary"
            >
              <motion.div
                className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-primary via-pink-500 to-orange-500 text-background shadow-lg"
                whileHover={{ rotate: prefersReducedMotion ? 0 : 360 }}
                transition={{ duration: 0.6 }}
              >
                <Code2 className="h-6 w-6" aria-hidden="true" />
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-pink-500 to-orange-500 opacity-0 blur-md transition-opacity group-hover:opacity-50"
                  initial={false}
                />
              </motion.div>
              <span>Zcode</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Modern web development agency creating exceptional digital experiences that drive results.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm transition-all",
                      social.color,
                      "hover:border-primary/50 hover:bg-primary/5"
                    )}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: prefersReducedMotion ? 0 : index * 0.1,
                      duration: 0.3,
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: prefersReducedMotion ? 0 : index * 0.05,
                    duration: 0.3,
                  }}
                >
                  <Link
                    href={link.href}
                    className="group relative inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span>{link.label}</span>
                    <motion.span
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                      initial={false}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </motion.span>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary via-pink-500 to-orange-500 transition-all group-hover:w-full"
                      initial={false}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h3>
            <div className="flex flex-col space-y-3">
              {contactQuickLinks.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <motion.a
                    key={contact.name}
                    href={contact.href}
                    target={contact.name !== "Email" ? "_blank" : undefined}
                    rel={contact.name !== "Email" ? "noreferrer" : undefined}
                    className={cn(
                      "group flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 px-3 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-all",
                      contact.color,
                      "hover:border-primary/50 hover:bg-primary/5 hover:text-foreground"
                    )}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: prefersReducedMotion ? 0 : index * 0.1,
                      duration: 0.3,
                    }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{contact.name}</span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Tech Stack & Back to Top */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Built With
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind", "shadcn/ui"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: prefersReducedMotion ? 0 : index * 0.05,
                    duration: 0.3,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <motion.button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="group mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-border/50 bg-background/50 px-4 py-2.5 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-foreground"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowUp className="h-4 w-4" />
              <span>Back to top</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: prefersReducedMotion ? 0 : 0.4, duration: 0.5 }}
          className="mt-12 border-t border-border/50 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-xs text-muted-foreground sm:text-left">
              © {new Date().getFullYear()} Zcode. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <Link
                href="#privacy"
                className="transition-colors hover:text-foreground"
                onClick={(e) => {
                  e.preventDefault()
                  // Add privacy policy link when available
                }}
              >
                Privacy
              </Link>
              <span className="text-border">•</span>
              <Link
                href="#terms"
                className="transition-colors hover:text-foreground"
                onClick={(e) => {
                  e.preventDefault()
                  // Add terms link when available
                }}
              >
                Terms
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
