export const pricing = [
  {
    name: "Basic",
    description: "Perfect for small business websites and personal projects.",
    price: "$120",
    features: [
      "Responsive design",
      "Up to 3 pages",
      "Basic SEO setup",
      "Unlimited revisions during build",
      "1-day delivery for simple scopes"
    ],
    cta: { label: "Start Basic", href: "#contact" },
    highlight: false
  },
  {
    name: "Standard",
    description: "Ideal for growing businesses and small e-commerce sites.",
    price: "$450+",
    features: [
      "Everything in Basic",
      "Up to 5 pages",
      "E-commerce or booking integration",
      "Custom animations and interactions",
      "Simple CMS for content edits",
      "Basic server or hosting setup",
      "Unlimited revisions during build",
      "~3-day delivery for typical projects"
    ],
    cta: { label: "Choose Standard", href: "#contact" },
    highlight: true
  },
  {
    name: "Premium",
    description: "Advanced solutions for complex or custom builds.",
    price: "$700+",
    features: [
      "Everything in Standard",
      "8+ pages or multi-step flows",
      "Custom backend or APIs",
      "Performance and Core Web Vitals tuning",
      "Advanced server and deployment setup",
      "Ongoing support options available",
      "Unlimited revisions during build",
      "5–7 day delivery for full builds"
    ],
    cta: { label: "Plan Premium Build", href: "#contact" },
    highlight: false
  }
]

export const services = [
  { title: "Design", desc: "Minimal, user-first design system." },
  { title: "Development", desc: "Fast, accessible Next.js builds." },
  { title: "Optimization", desc: "SEO, performance, and analytics." }
]

export const portfolio = [
  { title: "Project One", image: "/images/one.jpg", href: "#" },
  { title: "Project Two", image: "/images/two.jpg", href: "#" },
  { title: "Project Three", image: "/images/three.jpg", href: "#" }
]

export const contactLinks = {
  telegram: "https://t.me/yourhandle",
  discord: "https://discord.com/users/yourid",
  email: "mailto:hello@example.com"
}
