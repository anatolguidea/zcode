import { services } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brush, Code2, Gauge } from "lucide-react"

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mb-10 space-y-3 text-center">
          <h2 id="services-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Services
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            Everything you need for a polished one-page presence, from first sketch to production-ready, performant builds.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map(service => {
            const Icon = service.title === "Design" ? Brush : service.title === "Development" ? Code2 : Gauge
            return (
              <Card
                key={service.title}
                className="group relative h-full overflow-hidden border-border/70 bg-background/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-blue-600/10" />
                </div>
                <CardHeader className="relative flex flex-row items-center gap-3">
                  <span className="relative flex h-10 w-10 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-blue-600/20 blur-sm" />
                    <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-primary shadow-sm">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </span>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="mb-3 text-sm text-muted-foreground">{service.desc}</p>
                  <p className="text-xs font-medium text-muted-foreground">
                    Tailored for your stack, launch goals, and timeline.
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
