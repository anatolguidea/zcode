export function Footer() {
  return (
    <footer className="border-t border-border bg-background/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Zcode</span>
        <span>Built by Zcode with Next.js &amp; shadcn/ui</span>
      </div>
    </footer>
  )
}
