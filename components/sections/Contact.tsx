import { contactLinks } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <div className="mb-8 text-center">
          <h2 id="contact-heading" className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Let&apos;s work together
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Share a short brief and preferred channel. We&apos;ll reply with next steps and an estimated timeline.
          </p>
        </div>
        <Card className="border-border/70 bg-background/70 shadow-sm">
          <CardContent className="flex flex-col gap-6 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2 text-left">
              <p className="text-sm font-medium">Preferred channels</p>
              <p className="text-xs text-muted-foreground">
                Choose the platform that fits your workflow. We keep everything async, clear, and documented.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="group border-primary/30 bg-background/80 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <a href={contactLinks.telegram} target="_blank" rel="noreferrer">
                  <Send className="mr-2 h-3 w-3 group-hover:scale-110" aria-hidden="true" /> Telegram
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="group border-primary/30 bg-background/80 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <a href={contactLinks.discord} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-3 w-3 group-hover:scale-110" aria-hidden="true" /> Discord
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                className="group bg-gradient-to-r from-primary to-blue-600 text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:from-primary/90 hover:to-blue-600/90"
              >
                <a href={contactLinks.email}>
                  <Mail className="mr-2 h-3 w-3 group-hover:scale-110" aria-hidden="true" /> Email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
