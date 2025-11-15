import Image from "next/image"
import { portfolio } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="border-b border-border bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mb-10 space-y-3 text-center">
          <h2 id="portfolio-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Selected work
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            A snapshot of one-page builds and focused landing pages we&apos;ve shipped for product teams and solo founders.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {portfolio.map(item => (
            <Card
              key={item.title}
              className="group relative overflow-hidden border-border/70 bg-background/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-blue-600/10" />
              </div>
              <CardContent className="relative p-0">
                <a href={item.href} aria-label={item.title} className="flex h-full flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between rounded-full bg-background/80 px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-sm">
                      <span>Landing page • Case study</span>
                      <span className="text-[10px] text-primary">View project</span>
                    </div>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">Designed, built, and optimized by Zcode.</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
