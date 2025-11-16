"use client"

import Image from "next/image"
import { ArrowRight, Code2, Shield, Zap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useMemo } from "react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 100])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, prefersReducedMotion ? 1 : 0.3])
  
  // Reduce particle count for performance
  const particleCount = prefersReducedMotion ? 0 : 8

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen overflow-hidden border-b border-border/50"
      aria-labelledby="hero-heading"
    >
      {/* Animated background particles - reduced for performance */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden will-change-contents">
          {useMemo(() => {
            const particles = []
            for (let i = 0; i < particleCount; i++) {
              const initialX = Math.random() * 100
              const initialY = Math.random() * 100
              const duration = 8 + Math.random() * 8
              const offset = Math.random() * 200 - 100
              particles.push(
                <motion.div
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-primary/20 will-change-transform"
                  style={{ left: `${initialX}%`, top: `${initialY}%` }}
                  animate={{
                    y: [0, offset],
                    x: [0, offset * 0.5],
                  }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                />
              )
            }
            return particles
          }, [particleCount])}
        </div>
      )}

      {/* Gradient orbs - simplified for performance */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl will-change-transform"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transform: "translateZ(0)" }}
          />
          <motion.div
            className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl will-change-transform"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transform: "translateZ(0)" }}
          />
        </>
      )}

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-4 py-16 md:py-24"
      >
        <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary backdrop-blur-sm"
            >
              <Sparkles className="h-3 w-3" />
              <span>Expert IT Solutions & Web Development</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
              >
                We Build{" "}
                <span className="relative inline-block bg-gradient-to-r from-[#5865F2] via-[#7289DA] to-[#5865F2] bg-clip-text text-transparent">
                  Websites & IT Solutions
                </span>
                <br />
                That Drive Your Business Forward
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-center gap-2 text-lg font-medium text-muted-foreground sm:text-xl md:text-2xl"
              >
                <span className="hero-typing">Custom Web Development & IT Services</span>
                {!prefersReducedMotion && (
                  <motion.span
                    className="hero-cursor text-primary"
                    aria-hidden="true"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  >
                    |
                  </motion.span>
                )}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="max-w-xl text-base text-muted-foreground md:text-lg"
              >
                Stop settling for generic templates. Get a custom website and IT solutions built specifically for your business. Fast, scalable, and designed to grow with you.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col gap-3 pt-4 min-[400px]:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="group relative gap-2 overflow-hidden bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              >
                <a href="#contact">
                  <motion.span
                    className="relative z-10 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="backdrop-blur-sm border-primary/30 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <motion.a
                  href="#portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Work
                </motion.a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="grid gap-4 pt-6 md:grid-cols-3"
            >
              {[
                { icon: Code2, label: "Cutting-Edge Tech", color: "bg-primary" },
                { icon: Zap, label: "Rapid Delivery", color: "bg-primary" },
                { icon: Shield, label: "Quality Assured", color: "bg-primary" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/10 p-4 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/15 hover:shadow-lg hover:shadow-primary/20"
                >
                  <motion.span
                    className={`rounded-full ${item.color} p-2.5 text-background shadow-lg shadow-primary/30`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </motion.span>
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="mt-8 flex items-center gap-4 border-t border-border/40 pt-6"
            >
              <motion.div
                className="relative h-14 w-14"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary opacity-70 blur-md"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0.5, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-background bg-primary shadow-lg">
                  <div className="flex h-full w-full items-center justify-center text-lg font-bold text-background">
                    Z
                  </div>
                </div>
              </motion.div>
              <div>
                <p className="text-sm font-semibold">Zcode</p>
                <p className="text-xs text-muted-foreground">Founder &amp; Lead Developer</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mx-auto flex w-full max-w-md items-center justify-center"
          >
            <motion.div
              className="relative w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl bg-primary/30 opacity-70 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 0.5, 0.7],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10 rounded-3xl border-2 border-primary/20 bg-background/60 p-8 backdrop-blur-xl shadow-2xl">
                <motion.div
                  className="mb-4 text-xs font-medium uppercase tracking-wide text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Zcode preview
                </motion.div>
                <motion.div
                  className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-muted/40"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/images/zCode-1.png"
                    alt="Zcode logomark"
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="object-cover"
                    priority
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
