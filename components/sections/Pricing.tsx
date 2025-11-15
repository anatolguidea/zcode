"use client"

import { pricing } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Check, ShoppingCart, Star, Sparkles, ShieldCheck } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, memo } from "react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

const tierStyles = [
  {
    // Starter - Blue/Cyan theme (cool, professional)
    cardBg: "from-blue-500/10 via-transparent to-cyan-500/10",
    iconGlow: "from-blue-500/30 via-cyan-500/30 to-blue-600/30",
    accentText: "from-blue-400 via-cyan-400 to-blue-500",
    checkBg: "from-blue-500 to-cyan-500",
    buttonBg: "from-blue-500 to-cyan-500",
    borderGlow: "from-blue-500/50 via-cyan-500/50 to-blue-600/50",
  },
  {
    // Professional - Purple/Pink theme (vibrant, premium) - Highlighted
    cardBg: "from-primary/10 via-transparent to-pink-500/10",
    iconGlow: "from-primary/30 via-pink-500/30 to-fuchsia-500/30",
    accentText: "from-primary via-pink-500 to-fuchsia-500",
    checkBg: "from-primary via-pink-500 to-fuchsia-500",
    buttonBg: "from-primary via-pink-500 to-fuchsia-500",
    borderGlow: "from-primary/50 via-pink-500/50 to-fuchsia-500/50",
  },
  {
    // Enterprise - Orange/Amber theme (warm, exclusive)
    cardBg: "from-orange-500/10 via-transparent to-amber-500/10",
    iconGlow: "from-orange-500/30 via-amber-500/30 to-orange-600/30",
    accentText: "from-orange-400 via-amber-400 to-orange-500",
    checkBg: "from-orange-500 to-amber-500",
    buttonBg: "from-orange-500 to-amber-500",
    borderGlow: "from-orange-500/50 via-amber-500/50 to-orange-600/50",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
}

export const PricingSection = memo(function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      ref={ref}
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-muted/10 to-background"
    >
      {/* Background decoration - simplified for performance */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-primary/10 via-pink-500/10 to-orange-500/10 blur-3xl will-change-transform"
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
            className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-pink-500/10 via-fuchsia-500/10 to-orange-500/10 blur-3xl will-change-transform"
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
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-4 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary backdrop-blur-sm"
          >
            <Sparkles className="h-3 w-3" />
            <span>Pricing</span>
          </motion.div>
          <h2
            id="pricing-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Transparent Pricing, Tailored Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            From startup launches to enterprise platforms, we offer flexible packages designed to scale with your
            business. All projects include our commitment to quality, performance, and your success.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-3"
        >
          {pricing.map((tier, index) => {
            const styles = tierStyles[index] ?? tierStyles[0]

            return (
              <motion.div
                key={tier.name}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full"
              >
                <motion.div
                  className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-background/60 backdrop-blur-xl shadow-xl transition-all duration-500"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className={cn("absolute inset-0 bg-gradient-to-b", styles.cardBg)}
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Glowing border on hover */}
                  <motion.div
                    className={cn(
                      "absolute -inset-0.5 rounded-2xl bg-gradient-to-r opacity-0 blur transition-opacity duration-500",
                      styles.borderGlow
                    )}
                    whileHover={{ opacity: 1 }}
                  />

                  {/* Popular badge */}
                  {tier.highlight && (
                    <motion.div
                      className="absolute -right-4 top-6 z-20"
                      initial={{ rotate: -12, scale: 0 }}
                      animate={isInView ? { rotate: -12, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                    >
                      <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary via-pink-500 to-fuchsia-500 px-4 py-1.5 text-xs font-bold text-white shadow-xl">
                        <Star className="h-3 w-3 fill-white" />
                        <span>POPULAR</span>
                      </div>
                    </motion.div>
                  )}

                  <div className="relative z-10 flex h-full flex-col p-8">
                    {/* Icon */}
                    <motion.div
                      className="relative mx-auto mb-6 h-16 w-16"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        className={cn(
                          "absolute inset-0 rounded-full bg-gradient-to-tr blur-xl",
                          styles.iconGlow
                        )}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90 shadow-lg backdrop-blur-sm"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="text-lg font-bold">{index + 1}</span>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Title and description */}
                    <div className="mb-6 text-center">
                      <motion.h3
                        className="mb-2 text-2xl font-bold"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tier.name}
                      </motion.h3>
                      {"description" in tier && tier.description && (
                        <p className="text-sm text-muted-foreground">{tier.description}</p>
                      )}
                    </div>

                    {/* Price */}
                    <motion.div
                      className="mb-8 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="inline-block rounded-2xl border border-primary/20 bg-gradient-to-r from-background/90 to-background/70 px-8 py-4 shadow-inner backdrop-blur-sm">
                        <motion.span
                          className={cn(
                            "bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent",
                            styles.accentText
                          )}
                        >
                          {tier.price}
                        </motion.span>
                      </div>
                    </motion.div>

                    {/* Features */}
                    <div className="mb-8 flex-grow space-y-4">
                      {tier.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : {}
                          }
                          transition={{
                            delay: 0.6 + index * 0.2 + featureIndex * 0.05,
                            duration: 0.4,
                          }}
                          className="flex items-start gap-3"
                        >
                          <motion.div
                            className={cn(
                              "mt-0.5 flex-shrink-0 rounded-full bg-gradient-to-r p-1.5 shadow-md",
                              styles.checkBg
                            )}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className="h-3.5 w-3.5 text-white" />
                          </motion.div>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-auto space-y-3">
                      <Button
                        asChild
                        className={cn(
                          "group relative w-full overflow-hidden shadow-lg bg-gradient-to-r text-primary-foreground",
                          styles.buttonBg
                        )}
                      >
                        <a
                          href={tier.cta.href}
                          className="group/button relative block overflow-hidden transition-transform duration-200 active:scale-95"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover/button:translate-x-1">
                            <ShoppingCart className="h-4 w-4" />
                            <span>{tier.cta.label}</span>
                          </span>
                          <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 ease-in-out group-hover/button:translate-x-full" />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-primary/20 bg-transparent backdrop-blur-sm hover:bg-primary/5"
                      >
                        <a
                          href="#contact"
                          className="block transition-transform duration-200 active:scale-95"
                        >
                          Learn more
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Satisfaction Guarantee Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12"
        >
          <div className="group relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-pink-500/10 to-orange-500/10 p-8 backdrop-blur-xl shadow-xl transition-all duration-500 hover:border-primary/50 hover:shadow-2xl">
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-pink-500/5 to-orange-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              initial={false}
            />

            {/* Glowing border */}
            <motion.div
              className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/50 via-pink-500/50 to-orange-500/50 opacity-0 blur transition-opacity duration-500 group-hover:opacity-30"
              initial={false}
            />

            <div className="relative z-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              {/* Icon */}
              <motion.div
                className="flex-shrink-0"
                whileHover={prefersReducedMotion ? {} : { rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-pink-500/30 to-orange-500/30 blur-xl"
                    animate={
                      prefersReducedMotion
                        ? {}
                        : {
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary via-pink-500 to-orange-500 text-background shadow-xl">
                    <ShieldCheck className="h-8 w-8" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <h3 className="text-2xl font-bold">100% Satisfaction Guaranteed</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We stand behind our work. If you&apos;re not completely satisfied with the final result, we&apos;ll
                  work with you to make it right or provide a full refund. Your success is our commitment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})
