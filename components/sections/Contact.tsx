"use client"

import { contactLinks } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, Send, Sparkles, ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, memo } from "react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

const contactMethods = [
  {
    name: "Telegram",
    icon: Send,
    href: contactLinks.telegram,
    description: "Quick async communication",
    color: "from-primary via-pink-500 to-orange-500",
    hoverColor: "hover:from-primary/90 hover:via-pink-500/90 hover:to-orange-500/90",
  },
  {
    name: "Discord",
    icon: MessageCircle,
    href: contactLinks.discord,
    description: "Community & support",
    color: "from-pink-500 via-fuchsia-500 to-orange-500",
    hoverColor: "hover:from-pink-500/90 hover:via-fuchsia-500/90 hover:to-orange-500/90",
  },
  {
    name: "Email",
    icon: Mail,
    href: contactLinks.email,
    description: "Formal inquiries",
    color: "from-primary via-pink-500 to-orange-500",
    hoverColor: "hover:from-primary/90 hover:via-pink-500/90 hover:to-orange-500/90",
    primary: true,
  },
]

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
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export const ContactSection = memo(function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      ref={ref}
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background"
    >
      {/* Animated background - simplified */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-primary/10 via-pink-500/10 to-orange-500/10 blur-3xl will-change-transform"
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
          <motion.div
            className="absolute right-1/3 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-pink-500/10 via-fuchsia-500/10 to-orange-500/10 blur-3xl will-change-transform"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transform: "translateZ(0)" }}
          />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:py-28">
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
            <span>Contact</span>
          </motion.div>
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Let&apos;s discuss how we can bring your vision to life. Reach out through your preferred channel, and
            we&apos;ll get back to you with a detailed proposal and timeline tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-3"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon

            return (
              <motion.div
                key={method.name}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full"
              >
                <Card className="group relative h-full overflow-hidden border-border/50 bg-background/60 backdrop-blur-xl shadow-lg transition-all duration-500 hover:shadow-2xl">
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                    initial={false}
                  />

                  {/* Glowing border */}
                  <motion.div
                    className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${method.color} opacity-0 blur transition-opacity duration-500 group-hover:opacity-30`}
                    initial={false}
                  />

                  <CardContent className="relative z-10 flex h-full flex-col p-8">
                    {/* Icon */}
                    <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                      <div
                        className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${method.color} text-background shadow-xl transition-shadow duration-300 group-hover:shadow-2xl`}
                      >
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-6 flex-grow">
                      <h3 className="mb-2 text-xl font-bold">{method.name}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>

                    {/* CTA Button */}
                    <Button
                      asChild
                      size="lg"
                      className={`group relative w-full overflow-hidden bg-gradient-to-r ${method.color} text-background shadow-lg ${method.hoverColor}`}
                    >
                      <a
                        href={method.href}
                        target={method.name !== "Email" ? "_blank" : undefined}
                        rel={method.name !== "Email" ? "noreferrer" : undefined}
                        className="group/button relative block overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover/button:translate-x-1">
                          <span>Get in touch</span>
                          <ArrowRight className="h-4 w-4" />
                        </span>
                        <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-in-out group-hover/button:translate-x-full" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground">
            We typically respond within{" "}
            <span className="font-semibold text-foreground">12 hours</span> on all channels. For urgent inquiries,
            please mention it in your message and we&apos;ll prioritize your request.
          </p>
        </motion.div>
      </div>
    </section>
  )
})
