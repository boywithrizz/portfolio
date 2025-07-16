# Portfolio Website

A modern, responsive portfolio website for a freelance web developer built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark/Light theme toggle
- 📱 Mobile-first approach
- ✨ Smooth animations with Framer Motion
- 📧 Working contact form with FormSubmit.io
- 🚀 Fast performance and SEO optimized
- 💬 WhatsApp integration for lead generation
- ♿ Accessibility compliant

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Form Handling**: FormSubmit.io

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## Customization

### Contact Form

The contact form uses FormSubmit.io. To set it up:

1. Replace `hello@yourwebdev.com` in `components/ContactSection.tsx` with your email
2. The form will automatically work without any backend setup

### WhatsApp Integration

Update the WhatsApp number in:
- `components/HeroSection.tsx`
- `components/SpecialOfferSection.tsx`
- `components/ContactSection.tsx`

Replace `15551234567` with your WhatsApp number (include country code).

### Content

Update the following files with your information:
- `components/HeroSection.tsx` - Hero content
- `components/AboutSection.tsx` - About information
- `components/SkillsSection.tsx` - Your skills
- `components/ServicesSection.tsx` - Services you offer
- `components/PortfolioSection.tsx` - Your projects
- `components/TestimonialsSection.tsx` - Client testimonials

### SEO

Update meta tags in `index.html`:
- Title, description, keywords
- Open Graph tags
- Structured data

## Performance

The website is optimized for performance with:
- Code splitting
- Image optimization
- Minimal bundle size
- Fast loading times

## License

MIT License - feel free to use this template for your own portfolio!