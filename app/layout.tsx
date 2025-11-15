import type { Metadata, Viewport } from "next"
import Script from "next/script"
import "./globals.css"
import { ReactNode } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://zcode.dev"),
  title: {
    default: "Zcode - Modern Web Development Agency",
    template: "%s | Zcode"
  },
  description: "Transform your vision into high-performing websites and web applications. Professional web development services with cutting-edge technology, strategic design, and exceptional results.",
  alternates: { canonical: "/" },
  keywords: ["web development", "web design", "Next.js", "React", "TypeScript", "web agency", "custom websites", "web applications"],
  openGraph: {
    type: "website",
    url: "https://zcode.dev",
    title: "Zcode - Modern Web Development Agency",
    description: "Transform your vision into high-performing websites and web applications. Professional web development services with cutting-edge technology, strategic design, and exceptional results.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zcode - Modern Web Development Agency",
    description: "Transform your vision into high-performing websites and web applications. Professional web development services with cutting-edge technology, strategic design, and exceptional results.",
    images: ["/og.jpg"]
  },
  robots: { index: true, follow: true }
}

export const viewport: Viewport = {
  themeColor: "#000000"
}

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zcode",
  url: "https://zcode.dev",
  logo: "https://zcode.dev/logo.png",
  description: "Modern web development agency specializing in creating exceptional digital experiences",
  sameAs: [
    "https://twitter.com/zcode",
    "https://www.linkedin.com/company/zcode"
  ]
}

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zcode",
  url: "https://zcode.dev",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://zcode.dev/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a
          href="#home"
          className="fixed left-4 top-2 z-50 -translate-y-12 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow transition-transform focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
      </body>
    </html>
  )
}
