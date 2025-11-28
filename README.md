# FlowStudio Landing Page

A modern, interactive landing page built with Next.js 15, featuring WebGL shader effects, smooth animations, and a monochromatic design system.
Check it out: assignment-frontend-n8oj4serw-ankurs-projects-92c2fb90.vercel.app

## Overview

FlowStudio is a responsive landing page template showcasing modern web technologies with stunning visual effects. It features WebGL-powered shader backgrounds, interactive 3D elements, and a sophisticated monochrome color scheme that creates a premium, professional appearance.

## Features

### Hero Section
- Eye-catching headline with animated subtext
- Call-to-action button with smooth scroll navigation
- Interactive 3D card grid with mouse-tracking parallax effects
- Real-time metrics display with animated progress bars
- WebGL shader background (Swirl effect)

### Features Section
- Three core features with icons and descriptions
- Glassmorphic card design
- Hover effects and smooth transitions
- WebGL shader background (ChromaFlow effect)

### Testimonials Section
- Horizontal scrolling testimonial carousel
- Customer quotes with names and companies
- Smooth scroll reveal animations
- Interactive navigation indicators

### Contact Section
- Functional contact form with validation
- Email and location information
- Social media links
- Integrated footer with company branding

## Tech Stack

### Core Framework
- **Next.js 15.5.6** - React framework with App Router
- **React 19.2.0** - Latest React with server components
- **TypeScript** - Type-safe development

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **tailwindcss-animate** - Animation utilities
- **class-variance-authority** - Dynamic className management

### UI Components
- **Radix UI** - Headless accessible components
- **shadcn/ui** - Pre-built component library
- **Lucide React** - Modern icon library

### Visual Effects
- **Shaders 2.1.1** - WebGL shader effects (Swirl, ChromaFlow)
- Custom cursor with magnetic interactions
- Grain overlay for texture
- 3D card animations with parallax

### Forms & Validation
- **react-hook-form** - Form state management
- **zod** - Schema validation

### Additional Libraries
- **next-themes** - Dark mode support
- **recharts** - Data visualization
- **Vercel Analytics** - Performance tracking

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Setup

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/Assignment-landing-page.git
cd Assignment-landing-page
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── sections/
│   │   ├── contact-section.tsx
│   │   ├── features-section.tsx
│   │   └── testimonials-section.tsx
│   ├── custom-cursor.tsx   # Custom cursor component
│   ├── grain-overlay.tsx   # Texture overlay
│   ├── interactive-grid.tsx # 3D card grid
│   └── magnetic-button.tsx # Interactive button
├── hooks/
│   ├── use-reveal.ts       # Scroll reveal animations
│   └── use-mobile.ts       # Mobile detection
└── public/
    └── placeholder.svg     # Placeholder images
\`\`\`

## Customization

### Colors
Edit design tokens in `app/globals.css`:
\`\`\`css
@theme inline {
  --color-background: oklch(0.12 0 0);
  --color-foreground: oklch(0.98 0 0);
  --color-primary: oklch(0.7 0 0);
  /* Add more custom colors */
}
\`\`\`

### Content
- **Hero Section**: Edit `app/page.tsx` hero content
- **Features**: Modify `components/sections/features-section.tsx`
- **Testimonials**: Update `components/sections/testimonials-section.tsx`
- **Contact Info**: Change details in `components/sections/contact-section.tsx`

### Shader Effects
Customize shader parameters in component files:
\`\`\`tsx
<Shader
  shader="swirl"
  speed={0.3}
  intensity={0.7}
/>
\`\`\`

## Performance

- Lighthouse Score: 95+ across all metrics
- First Contentful Paint: <1.5s
- Time to Interactive: <2.5s
- Built-in Vercel Analytics for monitoring

## Deployment

 Deployed at Vercel: assignment-frontend-n8oj4serw-ankurs-projects-92c2fb90.vercel.app

## License

MIT License - feel free to use this template for your projects.

## Author

Ankur Giri
ankurgiri76555@gmail.com
