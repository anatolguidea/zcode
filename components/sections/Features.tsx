"use client"

import { Target, Zap, BarChart3 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, memo } from "react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

const features = [
  {
    icon: Target,
    title: "Custom Solutions",
    description: "Every project is tailored to your specific needs. No cookie-cutter templates—just solutions that fit your business perfectly."
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We build fast without cutting corners. Get your website or IT solution live quickly, so you can start seeing results sooner."
  },
  {
    icon: BarChart3,
    title: "Performance Focused",
    description: "We build for speed, scalability, and results. Your website will load fast, rank well, and convert visitors into customers."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export const FeaturesSection = memo(function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-border/50"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group"
              >
                <div className="flex h-full flex-col items-start gap-4 rounded-xl border border-border/50 bg-background/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-background/60">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
})

