"use client"

import Image from "next/image"
import { ArrowRight, Code2, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/40"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
          <div className="space-y-6">
            <div className="inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              Premium Web Development Services
            </div>
            <div className="space-y-3">
              <h1
                id="hero-heading"
                className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl xl:text-6xl"
              >
                Welcome to
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Zcode
                </span>
              </h1>
              <h2 className="flex items-center gap-1 text-xl font-semibold sm:text-2xl">
                <span className="hero-typing">Web Development Agency</span>
                <span className="hero-cursor text-primary" aria-hidden="true">
                  |
                </span>
              </h2>
              <p className="max-w-xl text-sm text-muted-foreground md:text-base">
                We build exceptional digital experiences with modern technologies. From responsive marketing sites to
                complex web applications, we bring your vision to life with clarity and performance.
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-4 min-[400px]:flex-row">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
              >
                <a href="#services">
                  <span>Our Services</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Get a Quote</a>
              </Button>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl border border-primary/10 bg-gradient-to-r from-primary/5 to-transparent p-3">
                <span className="rounded-full bg-gradient-to-r from-primary to-blue-600 p-2 text-background">
                  <Code2 className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-xs font-medium sm:text-sm">Modern Technologies</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-violet-500/10 bg-gradient-to-r from-violet-500/5 to-transparent p-3">
                <span className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 p-2 text-background">
                  <Zap className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-xs font-medium sm:text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-amber-500/10 bg-gradient-to-r from-amber-500/5 to-transparent p-3">
                <span className="rounded-full bg-gradient-to-r from-amber-500 to-rose-600 p-2 text-background">
                  <Shield className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-xs font-medium sm:text-sm">Quality Guaranteed</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 border-t border-border/40 pt-4">
              <div className="relative h-12 w-12">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-blue-600 opacity-70 blur-sm"
                  aria-hidden="true"
                />
                <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-background">
                  <Image
                    src="/profile-picture.jpg"
                    alt="Founder of Zcode"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Zcode</p>
                <p className="text-xs text-muted-foreground">Founder &amp; Lead Developer</p>
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-md items-center justify-center">
            <div className="relative w-full">
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-blue-600/20 opacity-70 blur-3xl"
                aria-hidden="true"
              />
              <div className="absolute inset-0 overflow-hidden rounded-2xl border-2 border-primary/20">
                <div
                  className="absolute -inset-px bg-gradient-to-r from-primary/30 to-blue-600/30 opacity-60"
                  aria-hidden="true"
                />
              </div>
              <div className="relative z-10 rounded-2xl bg-background/80 p-6 backdrop-blur-sm">
                <div className="mb-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Zcode preview
                </div>
                <div className="aspect-square w-full overflow-hidden rounded-xl border border-border bg-muted/40">
                  <Image
                    src="/images/zCode-1.png"
                    alt="Zcode logomark"
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
