import { pricing } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Check, ShoppingCart, Star } from "lucide-react"

const tierStyles = [
  {
    cardBg: "from-blue-500/5 via-transparent to-indigo-500/5",
    iconGlow: "from-blue-500/20 to-purple-500/20",
    accentText: "from-blue-500 to-indigo-600",
    checkBg: "from-blue-500 to-indigo-600",
    buttonBg: "from-blue-500 to-indigo-600"
  },
  {
    cardBg: "from-violet-500/5 via-transparent to-fuchsia-500/5",
    iconGlow: "from-violet-500/20 to-fuchsia-500/20",
    accentText: "from-violet-500 to-fuchsia-600",
    checkBg: "from-violet-500 to-fuchsia-600",
    buttonBg: "from-violet-500 to-fuchsia-600"
  },
  {
    cardBg: "from-amber-500/5 via-transparent to-rose-500/5",
    iconGlow: "from-amber-500/20 to-rose-500/20",
    accentText: "from-amber-500 to-rose-600",
    checkBg: "from-amber-500 to-rose-600",
    buttonBg: "from-amber-500 to-rose-600"
  }
]

export function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mb-10 space-y-3 text-center">
          <h2 id="pricing-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Transparent packages for every project
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Three clear tiers, built for different levels of scope. Choose a package and we&apos;ll tune the details
            together.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {pricing.map((tier, index) => {
            const styles = tierStyles[index] ?? tierStyles[0]

            return (
              <div key={tier.name} className="h-full">
                <div className="relative h-full overflow-hidden rounded-lg border-0 bg-background/40 shadow-lg backdrop-blur-xl">
                  <div className={cn("absolute inset-0 -z-10 bg-gradient-to-b", styles.cardBg)} />
                  <div className="absolute inset-0 rounded-lg border border-primary/20 opacity-0 transition-opacity duration-300 hover:opacity-100" />

                  {tier.highlight && (
                    <div className="absolute top-0 right-0 z-10">
                      <div className="flex items-center gap-1 rounded-bl-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                        <Star className="h-3 w-3" />
                        POPULAR
                      </div>
                    </div>
                  )}

                  <div className="flex h-full flex-col p-6 md:p-8">
                    <div className="relative mx-auto mb-4 h-12 w-12">
                      <div
                        className={cn(
                          "absolute inset-0 rounded-full bg-gradient-to-tr blur-lg",
                          styles.iconGlow
                        )}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-background/80 shadow-sm">
                          <span className="text-sm font-semibold">{index + 1}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6 text-center">
                      <h3 className="mb-1 text-xl font-bold">{tier.name}</h3>
                      {"description" in tier && tier.description && (
                        <p className="text-sm text-muted-foreground">{tier.description}</p>
                      )}
                    </div>

                    <div className="mb-6 text-center">
                      <div className="inline-block rounded-full border border-primary/20 bg-gradient-to-r from-background/80 to-background/60 px-6 py-2 shadow-inner">
                        <span
                          className={cn(
                            "bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent",
                            styles.accentText
                          )}
                        >
                          {tier.price}
                        </span>
                      </div>
                    </div>

                    <div className="mb-8 flex-grow space-y-3">
                      {tier.features.map(feature => (
                        <div key={feature} className="flex items-start gap-2">
                          <div
                            className={cn(
                              "mt-0.5 flex-shrink-0 rounded-full bg-gradient-to-r p-1",
                              styles.checkBg
                            )}
                          >
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto space-y-2">
                      <Button
                        asChild
                        className={cn(
                          "group relative w-full overflow-hidden shadow-lg bg-gradient-to-r text-primary-foreground",
                          styles.buttonBg
                        )}
                      >
                        <a href={tier.cta.href}>
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <ShoppingCart className="h-4 w-4" />
                            <span>{tier.cta.label}</span>
                          </span>
                          <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20 bg-white" />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-primary/20 bg-transparent hover:bg-primary/5"
                      >
                        <a href="#contact">Learn more</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
