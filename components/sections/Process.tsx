"use client"

import { Search, Code, Rocket, BarChart3 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, memo } from "react"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { Sparkles } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Discovery & Planning",
    description: "We start by understanding your business, goals, and technical requirements. This ensures we build exactly what you need, not what we think you want."
  },
  {
    number: 2,
    icon: Code,
    title: "Design & Development",
    description: "We create custom designs and build your website or IT solution using modern technologies. Every line of code is written with performance and scalability in mind."
  },
  {
    number: 3,
    icon: Rocket,
    title: "Testing & Launch",
    description: "Before launch, we thoroughly test everything—functionality, performance, security, and user experience. Then we deploy your solution and make sure it works perfectly."
  },
  {
    number: 4,
    icon: BarChart3,
    title: "Support & Optimization",
    description: "After launch, we monitor performance, fix any issues, and optimize as needed. We're here to ensure your solution continues to work flawlessly."
  }
]

export const ProcessSection = memo(function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-border/50"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left column - Title and description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary backdrop-blur-sm"
              >
                <Sparkles className="h-3 w-3" />
                <span>Process</span>
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                How We Work Together
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                We don't just build websites—we solve problems. From understanding your needs to delivering a solution that works, we handle every step of the process with transparency and expertise.
              </p>
            </div>
          </motion.div>

          {/* Right column - Steps */}
          <div className="grid gap-6 sm:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="relative h-full rounded-xl border border-border/50 bg-background/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-background/60">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
                        {step.number}
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
})

