# ☕ Rang Sài Gòn — Web Project

A 8-page coffee shop website built for a Web Development course (HTML5 / CSS3 / JS).

## 🗺️ Site Map

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, featured drinks, story teaser |
| About | `about.html` | Founders story, values, team |
| Menu | `menu.html` | Full menu with categories and pricing |
| Gallery | `gallery.html` | Masonry photo gallery |
| Blog List | `blog.html` | Blog post cards |
| Blog Post | `post-1.html` | Sample article: How to brew cà phê sữa đá |
| Visit Us | `map.html` | Google Maps iframe + YouTube video + info |
| Contact / Book | `contact.html` | **Full reservation form** (all 4.2 input types) |
| Policy | `policy.html` | Privacy policy & image credits |

## 🛠️ Technical Features

### HTML & Structure
- 9 semantic HTML5 files
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`, `<footer>` used throughout
- Consistent navigation bar and footer across all pages
- Internal links (nav, CTAs) and external links (Unsplash, Google, YouTube)
- 20+ images, all with `alt` text; multiple `<figure>/<figcaption>` pairs
- Google Maps iframe (`map.html`) + YouTube iframe (`map.html`)

### Form (contact.html) — All 4.2 types covered
| Type | Field |
|------|-------|
| `text` | Full Name |
| `email` | Email Address |
| `tel` | Phone Number |
| `password` | Account Password |
| `number` | Party Size |
| `date` | Reservation Date |
| `range` | Ambiance Preference (1–10) |
| `color` | Favourite Colour |
| `file` | Occasion Photo upload |
| `radio` | Seating Preference |
| `checkbox` | Dietary Notes, Newsletter, Privacy Consent |
| `select` + `<optgroup>` | Time Slot |
| `textarea` | Special Requests |
| `datalist` | Referral Source |
| `hidden` | Form version + source page |
| `submit` / `reset` | Submit Reservation / Clear Form |

**Attributes used:** `required`, `pattern`, `min`, `max`, `step`, `minlength`, `maxlength`, `accept`

**Bonus elements:** `<progress>` (form completion), `<meter>` (occupancy), `<output>` (range value display)

### CSS & Styling
- External `assets/css/styles.css` with CSS custom properties (variables)
- Flexbox and CSS Grid layouts
- Responsive at 768px breakpoint (mobile nav, single-column layouts)
- Hover/focus states on all interactive elements
- Visible focus rings for keyboard navigation
- Font size ≥ 16px base

### Accessibility
- ARIA labels on nav, iframes, form fields
- `aria-required`, `aria-describedby`, `role="alert"` for form errors
- `aria-live="polite"` for dynamic output
- Logical heading order (h1 → h2 → h3)
- Keyboard-navigable (tab order, focus rings)
- Color contrast: espresso (#2C1A0E) on cream (#F5EFE0) — ratio >9:1 ✅

### Optimization
- Images served from Unsplash CDN (no local large files)
- `loading="lazy"` on below-fold images
- Favicon via emoji (fav.farm, lightweight)
- `meta viewport`, `meta description`, unique `<title>` on every page

## 📁 Folder Structure

```
rang-sai-gon/
├── index.html
├── about.html
├── menu.html
├── gallery.html
├── blog.html
├── post-1.html
├── contact.html
├── map.html
├── policy.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── img/
        └── (local images go here)
```

## 🚀 How to Run

**Locally:** Open `index.html` in any modern browser. No build step required.

**Deploy to GitHub Pages:**
1. Push repo to GitHub
2. Go to Settings → Pages → Source: `main` branch, `/ (root)` folder
3. Live URL will be: `https://<username>.github.io/<repo-name>/`

**Deploy to Netlify:**
1. Drag the `rang-sai-gon/` folder into [netlify.com/drop](https://app.netlify.com/drop)
2. Or connect GitHub repo for continuous deployment

## 🖼️ Credits

- **Photography:** All images from [Unsplash](https://unsplash.com) (free commercial use)
- **Fonts:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) + [Lora](https://fonts.google.com/specimen/Lora) via Google Fonts
- **Favicon:** [fav.farm](https://fav.farm) (☕ emoji favicon)
- **Map:** Google Maps Embed API (free tier)

## 🤖 AI Usage Log

| Tool | Prompt Used | How I Modified |
|------|-------------|----------------|
| Claude (Anthropic) | "Build a coffee shop website with all 4.2 form requirements, HTML5 semantics, and responsive CSS" | Reviewed all code, adjusted content to fit fictional HCMC brand "Rang Sài Gòn", verified form field types, checked semantic structure, customised colour scheme and typography choices |

> All code was reviewed, understood, and intentionally customised. No template was copied without comprehension.
