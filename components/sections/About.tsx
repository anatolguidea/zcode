"use client"

import { motion, useInView } from "framer-motion"
import { useRef, memo } from "react"
import { Sparkles, Code2, Zap, Users, Clock } from "lucide-react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

const stats = [
  { label: "Projects delivered", value: "50+", icon: Code2, color: "bg-primary" },
  { label: "Average response", value: "< 12h", icon: Clock, color: "bg-primary" },
  { label: "Client satisfaction", value: "98%", icon: Users, color: "bg-primary" },
]

const values = [
  {
    title: "Quality First",
    description: "We write clean code, build fast websites, and create solutions that actually work. No shortcuts, no compromises—just quality that lasts.",
  },
  {
    title: "Client Focused",
    description: "Your success is our priority. We communicate clearly, deliver on time, and build exactly what you need. No surprises, just results.",
  },
  {
    title: "Modern Tech",
    description: "We use the latest technologies and best practices to build solutions that are fast, secure, and scalable. Your website won't just work today—it'll work for years to come.",
  },
]

export const AboutSection = memo(function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      ref={ref}
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden border-b border-border/50"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
      </div>

      {/* Floating elements - simplified */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-primary/5 blur-3xl will-change-transform"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
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
            <span>About</span>
          </motion.div>
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            We Build Custom Websites & IT Solutions
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left column - Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.p
                className="text-lg leading-relaxed text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Zcode is an IT agency that builds custom websites and technical solutions. We work with businesses that need more than a template—they need a solution that's built specifically for them.
              </motion.p>
              <motion.p
                className="text-lg leading-relaxed text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Whether you need a simple website, a complex web application, or custom IT infrastructure, we deliver solutions that work. Fast, reliable, and built to scale with your business.
              </motion.p>
            </div>

            {/* Values */}
            <motion.div
              className="space-y-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold">Our values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    className="rounded-xl border border-border/50 bg-background/60 p-4 backdrop-blur-sm"
                  >
                    <h4 className="mb-2 font-semibold text-primary">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Stats and Process */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <motion.div
              className="grid gap-4 sm:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/60 p-6 backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                >
                  <motion.div
                    className={`absolute inset-0 ${stat.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                    initial={false}
                  />
                  <div className="relative z-10">
                    <motion.div
                      className={`mb-3 inline-flex rounded-full ${stat.color} p-2.5 text-background shadow-lg shadow-primary/30`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="h-5 w-5" />
                    </motion.div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {stat.label}
                    </p>
                    <motion.p
                      className="text-2xl font-bold"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Core Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="rounded-2xl border border-border/50 bg-background/60 p-6 backdrop-blur-xl shadow-lg"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Core stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Java",
                  "Spring",
                  "C# .NET",
                  "Node.js",
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Tailwind CSS",
                  "shadcn/ui"
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 + index * 0.05, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* How we work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="rounded-2xl border border-border/50 bg-primary/5 p-6 backdrop-blur-xl"
            >
              <h3 className="mb-3 flex items-center gap-2 text-base font-semibold">
                <Zap className="h-4 w-4 text-primary" />
                Our Process
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We follow a streamlined, collaborative process that keeps you informed every step of the way. From
                initial discovery to final deployment, you&apos;ll always know what&apos;s happening, what&apos;s next,
                and how it aligns with your business objectives.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})
