export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-border bg-gradient-to-b from-muted/20 via-background to-muted/20"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-start">
          <div>
            <h2 id="about-heading" className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              About us
            </h2>
            <p className="mb-4 text-sm text-muted-foreground sm:text-base">
              We&apos;re a small, focused studio that designs and ships opinionated one-page sites for teams who care about
              clarity, speed, and craft.
            </p>
            <p className="text-sm text-muted-foreground sm:text-base">
              Our work blends minimal UI, strong typography, and thoughtful motion with pragmatic engineering. Each
              project ships with performance, accessibility, and SEO considered from the first commit, not as an add-on.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-border/70 bg-background/60 p-4 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Snapshot</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-muted/60 px-3 py-3">
                  <p className="text-xs text-muted-foreground">Projects shipped</p>
                  <p className="text-lg font-semibold">10+</p>
                </div>
                <div className="rounded-lg bg-muted/60 px-3 py-3">
                  <p className="text-xs text-muted-foreground">Core stack</p>
                  <p className="text-xs font-medium">Next.js · Tailwind · shadcn/ui</p>
                </div>
                <div className="rounded-lg bg-muted/60 px-3 py-3">
                  <p className="text-xs text-muted-foreground">Response time</p>
                  <p className="text-lg font-semibold">&lt; 24h</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border/70 bg-background/60 p-4 text-xs text-muted-foreground shadow-sm">
              <p className="font-medium text-foreground">How we work</p>
              <p className="mt-2">
                Lightweight process, direct communication, and clear checkpoints. You always know what&apos;s shipped,
                what&apos;s next, and how it maps to your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
