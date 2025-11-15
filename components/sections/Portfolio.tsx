"use client"

import Image from "next/image"
import { portfolio } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useRef, memo } from "react"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
}

export const PortfolioSection = memo(function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      ref={ref}
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-muted/10 to-background"
    >
      {/* Background decoration - simplified */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-1/3 top-1/3 h-96 w-96 rounded-full bg-gradient-to-r from-primary/5 via-pink-500/5 to-orange-500/5 blur-3xl will-change-transform"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
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
          <h2
            id="portfolio-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Our Portfolio
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Explore our recent work—from high-converting landing pages to complex web applications. Each project
            showcases our expertise in design, development, and delivering exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {portfolio.map((item, index) => (
            <motion.div key={item.title} variants={itemVariants}>
              <Card className="group relative h-full overflow-hidden border-border/50 bg-background/60 backdrop-blur-xl shadow-lg transition-all duration-500 hover:shadow-2xl">
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 z-10 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  initial={false}
                />

                {/* Shine effect */}
                <div className="absolute inset-0 z-20 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
                </div>

                <CardContent className="relative p-0">
                  <a
                    href={item.href}
                    aria-label={item.title}
                    className="flex h-full flex-col transition-transform duration-300 group-hover:scale-[1.02]"
                  >
                    {/* Image container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-primary/20 via-pink-500/20 to-orange-500/20">
                      {item.image ? (
                        <div className="relative h-full w-full transition-transform duration-700 ease-out group-hover:scale-110">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover"
                          />
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        </div>
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <div className="text-center">
                            <div className="mb-2 text-4xl font-bold text-primary/60">{index + 1}</div>
                            <div className="text-xs font-medium text-muted-foreground">{item.title}</div>
                          </div>
                        </div>
                      )}

                      {/* Floating badge */}
                      <motion.div
                        className="absolute left-4 top-4 z-30 rounded-full border border-background/20 bg-background/80 px-3 py-1.5 text-[10px] font-medium text-foreground backdrop-blur-md shadow-lg"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                          Live Project
                        </span>
                      </motion.div>

                      {/* View project button - appears on hover */}
                      <div className="absolute bottom-4 right-4 z-30 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform duration-300 hover:rotate-45 hover:scale-110 active:scale-95">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                      </div>

                      {/* Project type label */}
                      {item.tags && item.tags.length > 0 && (
                        <motion.div
                          className="absolute bottom-4 left-4 z-30 rounded-full border border-background/20 bg-background/80 px-3 py-1.5 text-[11px] font-medium text-muted-foreground backdrop-blur-md shadow-lg"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          {item.tags[0]} • {item.tags[1] || "Web App"}
                        </motion.div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="relative z-20 px-6 py-5 transition-transform duration-300 group-hover:-translate-y-1">
                      <h3 className="mb-2 text-lg font-bold transition-transform duration-300 group-hover:translate-x-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description || "Designed, built, and optimized by Zcode."}
                      </p>

                      {/* Tech stack tags - appears on hover */}
                      <div className="mt-3 flex flex-wrap gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {(item.tags || ["Next.js", "Tailwind", "TypeScript"]).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[10px] font-medium text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-6 py-3 text-sm font-medium text-primary backdrop-blur-sm transition-all hover:bg-primary/10 hover:border-primary/30"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View all projects</span>
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
})
