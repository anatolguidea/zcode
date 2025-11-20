# Zcode - IT Solutions & Web Development

A modern, one-page website for an IT agency specializing in custom web development and IT solutions. Built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations, responsive design, and a professional UI.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations and transitions
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Performance Optimized**: Built with Next.js for fast loading times and excellent Lighthouse scores
- **Accessible**: WCAG compliant with reduced motion support
- **SEO Ready**: Optimized meta tags, sitemap, and robots.txt
- **Interactive Sections**:
  - Hero section with animated background particles
  - Features showcase
  - Pricing tiers (Starter, Professional, Enterprise)
  - Portfolio gallery with clickable project links
  - Services overview
  - Process workflow
  - About section with stats and core stack
  - FAQ accordion
  - Contact section with multiple communication channels

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Core Development Stack
- **Next.js** - Full-stack React framework
- **React** - Frontend library
- **TypeScript** - Type-safe JavaScript
- **Java** - Backend development
- **Spring** - Java framework
- **C# .NET** - Microsoft stack
- **Node.js** - JavaScript runtime
- **PostgreSQL** - Relational database
- **MySQL** - Relational database
- **MongoDB** - NoSQL database
- **shadcn/ui** - UI component library

## 📁 Project Structure

```
zcode2/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap generation
├── components/
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx     # Navigation bar
│   │   └── Footer.tsx     # Footer component
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Features.tsx   # Features section
│   │   ├── Pricing.tsx    # Pricing section
│   │   ├── Portfolio.tsx # Portfolio section
│   │   ├── Services.tsx   # Services section
│   │   ├── Process.tsx    # Process section
│   │   ├── About.tsx      # About section
│   │   ├── FAQ.tsx        # FAQ section
│   │   └── Contact.tsx    # Contact section
│   └── ui/                # Reusable UI components
│       ├── button.tsx     # Button component
│       └── card.tsx       # Card component
├── lib/
│   ├── data.ts            # Centralized content data
│   └── utils.ts           # Utility functions
├── hooks/
│   └── useReducedMotion.ts # Accessibility hook
└── public/
    └── images/            # Static images
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zcode2
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Updating Content

Most content is centralized in `lib/data.ts`. Update the following:

- **Pricing tiers**: Modify the `pricing` array
- **Services**: Update the `services` array
- **Portfolio projects**: Edit the `portfolio` array
- **Contact links**: Change the `contactLinks` object

### Styling

- **Colors**: Modify CSS variables in `app/globals.css`
- **Components**: Edit individual component files in `components/sections/`
- **Global styles**: Update `app/globals.css`

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and add it to `app/page.tsx`
3. Update navigation links in `components/layout/Navbar.tsx` if needed

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

The `out` directory will contain the static export (if configured) or use `npm start` for Node.js hosting.

## 📱 Contact

- **Telegram**: [@whydk1](https://t.me/whydk1)
- **Discord**: [whydk2](https://discord.com/users/whydk2)
- **Email**: guidea.anatol@gmail.com

## 👤 About

**Guidea Anatol** - Founder & Lead Developer

Zcode is an IT agency specializing in:
- Custom web development
- IT solutions and backend systems
- Modern, scalable applications
- Fast delivery and quality assurance

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Next.js and TypeScript

