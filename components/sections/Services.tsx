"use client"

import { services } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brush, Code2, Gauge, Sparkles, ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, memo } from "react"
import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/hooks/useReducedMotion"

const serviceIcons = {
  "Web Design": Brush,
  "Web Development": Code2,
  "Performance & SEO": Gauge,
}

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
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export const ServicesSection = memo(function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      ref={ref}
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden border-b border-border/50"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Floating orbs - simplified */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl will-change-transform"
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
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
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
            <span>Services</span>
          </motion.div>
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            What We Do
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We're an IT agency specializing in custom websites and technical solutions. From simple landing pages to complex web applications, we build solutions that solve real business problems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = serviceIcons[service.title as keyof typeof serviceIcons] || Code2

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={prefersReducedMotion ? {} : { y: -10 }}
                className="h-full"
              >
                <Card className="group relative h-full overflow-hidden border-border/50 bg-background/60 backdrop-blur-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-primary/30">
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-primary/8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    initial={false}
                  />

                  {/* Enhanced glowing border */}
                  <motion.div
                    className="absolute -inset-0.5 rounded-lg bg-primary/30 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100"
                    initial={false}
                  />
                  {/* Purple shadow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg shadow-[0_0_30px_rgba(139,92,246,0.2)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    initial={false}
                  />

                  <CardHeader className="relative z-10 flex flex-row items-center gap-4 pb-4">
                    <motion.div
                      className="relative flex h-14 w-14 items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.span
                        className="absolute inset-0 rounded-full bg-primary/30 blur-lg"
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
                      <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-background shadow-xl shadow-primary/30">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <div className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      <ArrowRight className="h-5 w-5 text-primary drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-4">
                    <p className="text-sm leading-relaxed text-muted-foreground transition-opacity duration-300 group-hover:opacity-100">
                      {service.desc}
                    </p>

                    {/* Feature list - appears on hover */}
                    <div className="space-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {[
                        service.title === "Web Design" && "UI/UX Design",
                        service.title === "Web Development" && "Full-Stack Development",
                        service.title === "Performance & SEO" && "Performance Tuning",
                      ]
                        .filter((f): f is string => Boolean(f))
                        .map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <div className="h-1 w-1 rounded-full bg-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full border-primary/20 bg-transparent backdrop-blur-sm hover:bg-primary/5"
                      >
                        <a href="#contact" className="flex items-center gap-2">
                          Learn more
                          <ArrowRight className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
})
