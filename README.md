# DJ PapiCakez - Official Showcase & Merch

A premium, modern website showcasing DJ PapiCakez's music mixes and exclusive merchandise. Built with React, Tailwind CSS, and a dark luxury design aesthetic.

![DJ PapiCakez](https://img.shields.io/badge/DJ%20PapiCakez-Official%20Showcase-gold?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript)

## Features

- **Hero Section**: Eye-catching introduction with DJ branding and premium imagery
- **Featured Mixes**: Showcase of 4 curated DJ mixes with play counts and descriptions
- **Official Merch Store**: Product catalog with Printify integration for affordable made-to-order merchandise
- **Dark Luxury Design**: Sophisticated dark theme with gold accents (#D4AF37)
- **Responsive Layout**: Fully mobile-optimized with smooth animations and transitions
- **Premium Typography**: Bodoni Moda serif headings paired with Lato sans-serif body text
- **Interactive Components**: Hover effects, smooth scrolling, and engaging CTAs

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom theme configuration
- **UI Components**: shadcn/ui component library
- **Routing**: Wouter for client-side navigation
- **Build Tool**: Vite 7
- **Package Manager**: pnpm

## Project Structure

```
dj-papicakez-showcase/
├── client/
│   ├── public/
│   │   └── images/          # Static assets (logo, backgrounds)
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── contexts/        # React contexts
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Global styles & theme
│   └── index.html
├── server/                  # Backend placeholder
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aldochpin92/dj-papicakez-showcase.git
   cd dj-papicakez-showcase
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000` to see the site

### Build for Production

```bash
pnpm build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
pnpm preview
```

## Design System

### Color Palette

- **Primary**: Gold (#D4AF37) - Luxe accent color
- **Background**: Deep Black (#0F0F0F) - Main background
- **Card**: Dark Charcoal (#1A1A1A) - Card backgrounds
- **Foreground**: Champagne (#F8E8D0) - Text color
- **Secondary**: Deep Burgundy (#4A1F1F) - Secondary accent

### Typography

- **Display Font**: Bodoni Moda (serif) - Headings
- **Body Font**: Lato (sans-serif) - Body text and UI

### Spacing & Radius

- Base radius: 0.65rem
- Responsive container padding: 1rem (mobile), 1.5rem (tablet), 2rem (desktop)

## Features Overview

### Hero Section
- Full-screen hero with DJ logo and background imagery
- Compelling headline and call-to-action buttons
- Statistics display (Mixes, Followers, Years Active)
- Smooth scroll indicator

### Featured Mixes
- 2x2 grid layout (responsive)
- Mix cards with:
  - Background waveform visualization
  - Play button with hover effects
  - Mix title, date, and duration
  - Description and play count
  - Listen button CTA

### Official Merch
- 4-column product grid (responsive)
- Product cards featuring:
  - Product image with hover zoom effect
  - Product name and description
  - Pricing (retail + base cost from Printify)
  - Order Now button
- Merch info section with 3 key features
- Affordable & Accessible section with Printify integration details

### Navigation
- Sticky header with DJ branding
- Desktop navigation menu
- Mobile hamburger menu
- Smooth scroll navigation to sections

## Merchandise Integration

All merchandise is produced through **Printify**, one of the most affordable print-on-demand partners available.

### Base Pricing
- **T-Shirts**: Starting at $6.39
- **Hoodies**: Starting at $19.49
- **Mugs**: Starting at $4.25
- **Stickers**: Starting at $2.00

### Benefits
- No upfront inventory costs
- No minimum order quantities
- Competitive pricing with quality assurance
- Made-to-order production

## Future Enhancements

- [ ] Connect Spotify/SoundCloud API for live mix streaming
- [ ] Implement Printify API for direct product ordering
- [ ] Add contact form with email integration
- [ ] Social media feed integration
- [ ] Analytics dashboard
- [ ] Blog section for DJ updates
- [ ] Email newsletter signup

## Development

### Code Quality

```bash
# Type checking
pnpm check

# Format code
pnpm format
```

### Component Guidelines

- Use shadcn/ui components for consistency
- Follow the dark luxury design system
- Maintain responsive design principles
- Add smooth transitions and animations
- Ensure accessibility (WCAG 2.1 AA)

## Deployment

This project is ready to be deployed to any static hosting platform:

- **Manus**: Built-in hosting with custom domain support
- **Vercel**: Optimized for Vite projects
- **Netlify**: Drag-and-drop deployment
- **GitHub Pages**: Free static hosting

## License

This project is proprietary. All rights reserved to DJ PapiCakez.

## Contact

- **GitHub**: [@aldochpin92](https://github.com/aldochpin92)
- **Website**: [DJ PapiCakez Showcase](https://github.com/aldochpin92/dj-papicakez-showcase)

## Acknowledgments

- Built with React 19 and Tailwind CSS 4
- UI components from shadcn/ui
- Icons from Lucide React
- Fonts from Google Fonts (Bodoni Moda, Lato)

---

**Made with ❤️ for DJ PapiCakez**
