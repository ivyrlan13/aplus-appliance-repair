# Progress Log

## Session — 2026-03-14

### Accomplished

**Inner Pages — Design Upgrade (match homepage theme)**
- Added Framer Motion blur-in entrance animations to Hero component (title, subtitle, CTAs, trust bar)
- Added sweep hover effect to Hero CTA buttons (white fills up on hover)
- Wrapped ServiceCard in GlowCard with pointer-tracking glow + icon scale on hover
- All 6 inner pages now use AnimatedSection for scroll-triggered blur-in animations
- Alternating dark/light section backgrounds on all inner pages (About, Contact, Services, Service Areas)
- About: LG Authorized section → dark (bg-gray-800), trust signals wrapped in GlowCard
- Contact: left column → dark card, form wrapped in GlowCard, submit button has sweep hover
- Services [slug]: Common Problems → dark section, location cards get hover scale
- Service Areas [slug]: Services Available + ZIP Codes → dark sections, ZIP badges solid red

**Full SEO Optimization (Google-ready)**
- Fixed email inconsistency: business.ts → `info@aplusappliancerepairfl.com` (matches footer)
- Added Open Graph image + Twitter card image to layout metadata
- Added canonical URL to layout metadata
- Added Google Search Console verification placeholder in layout
- Added FAQ schema (FAQPage JSON-LD) to all 6 service detail pages for rich snippets
- Added Review schema generator in seo.ts (ready for real reviews)
- Converted all raw `<img>` tags to Next.js `<Image>` (ScrollingImages, ServicesGallery, homepage brand logos) for better Core Web Vitals
- Created `/public/manifest.json` for PWA/mobile support
- Created `/public/apple-touch-icon.png`
- Created Privacy Policy page (`/privacy-policy`)
- Created Terms of Service page (`/terms`)
- Updated sitemap.ts with new pages (28 total pages now)
- Added Google Business Profile link in footer ("Find Us on Google")
- Added Privacy Policy, Terms, Sitemap links in footer bottom bar
- Updated copyright year to 2026

**Not pushed** — all changes are local only.

### Next Steps
- Push to GitHub / deploy to Vercel
- Disable Vercel Deployment Protection so dad can view without login
- Replace `GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE` placeholder with actual code after registering
- Get dad's feedback on the demo
- Copy real Google reviews into testimonials (replace sample reviews in schema)
- Connect custom domain + update domain references in sitemap/robots
- Resolve domain mismatch (sitemap/robots use `aplus-appliancerepair.com` vs layout uses `aplusappliancerepairbradenton.com`)

---

## Session — 2026-03-13

### Accomplished
- Fixed 3 lint errors blocking Vercel build (unused vars in `page.tsx`, `let` → `const` in `GlowingEffect.tsx`)
- Created GitHub repo: `ivyrlan13/aplus-appliance-repair`
- Pushed all code to GitHub `main` branch
- Deployed to Vercel (Hobby plan, auto-deploys on push)
- Live URL: `aplus-appliance-repair-ivyrlan-3382s-projects.vercel.app`
- Sent link to dad for review
