# Kappa Chakka Kandhari – React Website

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Pages
| URL | File |
|---|---|
| / (The Journey) | src/pages/Home.jsx |
| /menu (Menu → Restaurant) | src/pages/Menu.jsx |
| /about-kck | src/pages/AboutKCK.jsx |
| /about-chef | src/pages/AboutChef.jsx |
| /about-team | src/pages/AboutTeam.jsx |
| /awards-accolades | src/pages/Awards.jsx |
| /banquets | src/pages/Banquets.jsx |
| /catering-service | src/pages/Catering.jsx |
| /media | src/pages/Media.jsx |
| /contact-us | src/pages/Contact.jsx |

## Where to change things
- **Phones, email, WhatsApp, booking links, menus, navbar items** → `src/data/site.js`
- **Restaurant menu** → `public/menus/kck-restaurant-menu.pdf` (PDF) + `public/menus/pages/page-01…18.webp` (flipbook pages)
- **Instagram posts (Home page)** → paste 6 post links into `INSTAGRAM_POSTS` in `src/data/site.js`
- **Media articles** → `src/data/media.js`
- **Home hero slides** → `SLIDES` in `src/components/HomeHero.jsx`
- **Grand Sunday menu image** → `public/menus/grand-sunday-breakfast.webp`
- **Promo banner images** → `src/assets/images/promo-desktop.webp` / `promo-mobile.webp`
- **Scroll animations (GSAP)** → `src/hooks/useScrollAnimations.js`

## Contact forms
Forms send to info@kappachakkakandhari.com through FormSubmit (formsubmit.co).
The very first submission sends an "Activate form" email to that inbox – click the
link once and all future enquiries arrive directly.

## Build for production
```bash
npm run build
```
Upload the `dist/` folder (Netlify: `public/_redirects` is already included).
