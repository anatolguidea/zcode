"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, memo, useState } from "react"
import { Sparkles, ChevronDown } from "lucide-react"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We specialize in custom website development, web applications, and IT solutions. This includes frontend and backend development, database design, API integrations, performance optimization, and ongoing technical support."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Absolutely. We work with businesses of all sizes—from startups launching their first website to established companies needing complex IT solutions. Our Starter package is perfect for small businesses getting started online."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Timelines depend on project complexity. Simple websites take 7-10 business days, while more complex projects with custom features typically take 14-21 days. Enterprise solutions have flexible timelines based on scope."
  },
  {
    question: "What technologies do you use?",
    answer: "We build with modern, proven technologies: Next.js for websites, TypeScript for type safety, and industry-standard tools. This ensures your solution is fast, secure, and maintainable for years to come."
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes. All packages include post-launch support: Starter (1 month), Professional (3 months), and Enterprise (6+ months). We fix issues, make updates, and ensure everything continues working perfectly."
  },
  {
    question: "Can you integrate with existing systems?",
    answer: "Yes. We can integrate your website with payment processors, CRM systems, databases, APIs, and other third-party services. We'll work with your existing infrastructure to create seamless solutions."
  }
]

export const FAQSection = memo(function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      ref={ref}
      id="faq"
      className="relative overflow-hidden border-b border-border/50"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 sm:py-20 lg:py-24">
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
            <span>FAQ</span>
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Got questions? We've got answers. Here's everything you need to know about working with us and what to expect from your project.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="group"
              >
                <div
                  className={cn(
                    "overflow-hidden rounded-xl border border-border/50 bg-background/40 backdrop-blur-sm transition-all duration-300",
                    isOpen ? "border-primary/40 bg-background/60" : "hover:border-primary/30 hover:bg-background/50"
                  )}
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:text-primary"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

