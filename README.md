# DIFC Duplex Penthouse — Park Towers

Single-page investment landing site for **Dubai Rapid Properties (DRP)**.

It is the destination for Meta lead-form leads: they submit the form, then receive this link on
WhatsApp. The visitor is therefore already warm — the page sells the *investment case* rather than
capturing a lead again, and the single conversion action throughout is a WhatsApp message to the
agent, with the enquiry pre-written.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion. No backend, no CMS,
no forms.

---

## Running it

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:3000>.

Other scripts:

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build **and** static export into `out/` |
| `npm run start` | Serves the production build (Node) |
| `npm run lint` | ESLint (`next/core-web-vitals`) |
| `npm run typecheck` | `tsc --noEmit` |

---

## Editing the content

**Everything editable lives in [`data/property.ts`](data/property.ts)** — prices, feasibility
figures, rental scenarios, drive times, agent contact details, SEO copy and the gallery captions.
Nothing is hard-coded in the components.

Money is stored as the **exact display string** (`'AED 3,300,000'`), never as a number to be
formatted. This is deliberate: the figures come from a feasibility study and must render exactly as
written, so nothing can be re-rounded by a formatter. Raw numbers appear only in the `seo` object,
where the JSON-LD schema needs them.

To change the WhatsApp number or the pre-filled message, edit `WHATSAPP_NUMBER` and
`WHATSAPP_MESSAGE` at the top of that file — the URL is encoded automatically and every CTA on the
page picks it up.

---

## Deploying

The build is a **fully static export** (`output: 'export'` in `next.config.mjs`), so `npm run build`
writes a self-contained site to `out/`.

Set the deploy URL first so the canonical tag and the Open Graph image resolve absolutely — this
matters, because WhatsApp needs an absolute image URL to render the premium link preview leads see:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run build
```

It defaults to `https://www.dubairapidproperties.com` if unset.

### Vercel
Import the repo; the defaults work. To use Vercel's on-demand image optimisation instead of the
pre-compressed files, remove `output: 'export'` and `images.unoptimized` from `next.config.mjs`.

### Netlify
Build command `npm run build`, publish directory `out`.

### cPanel / any static host
Run the build locally, then upload the **contents** of `out/` to `public_html`. No Node runtime is
needed. `trailingSlash: true` is already set so every route resolves to an `index.html`.

---

## Images

Source photography and the logo lockups were compressed to their final display sizes by
[`scripts/prepare-images.py`](scripts/prepare-images.py). Because a static export disables Next's
image optimiser, compression happens once, up front, rather than per request.

The script also crops the branded **location map** out of page 14 of the original investment deck
(`DIFC Duplex Penthouse Katarina.pdf`), dropping that slide's heading and logo so the page supplies
its own, and generates the 1200×630 Open Graph card from the hero shot.

To regenerate after replacing the source files:

```bash
pip install pillow pymupdf && python scripts/prepare-images.py
```

Paths to the source folders are constants at the top of the script. Every image is referenced
through `next/image` with explicit `width`/`height` (no layout shift) and is lazy-loaded except the
hero and the header logo.

---

## Structure

```
app/
  layout.tsx        fonts, SEO metadata, RealEstateListing JSON-LD
  page.tsx          section composition
  globals.css       design tokens, .eyebrow / .btn / .rise primitives
components/
  Header.tsx        sticky; transparent over hero, charcoal + blur on scroll
  Hero.tsx          full-viewport, CSS entrance (never JS-gated)
  QuickFacts.tsx    charcoal band, five stats
  Opportunity.tsx   editorial intro + portrait
  Gallery.tsx       CSS-columns masonry -> Lightbox
  ScenarioResale.tsx    Scenario A: renovate & resell
  ScenarioRental.tsx    Scenario B: rental income & ROI
  Location.tsx      branded DRP map + Google embed + drive times
  FinalCta.tsx      agent, WhatsApp, contact details
  MobileCtaBar.tsx  fixed WhatsApp + Call bar under 768px
  Footer.tsx        logo, copyright, disclaimer
  ui/               Reveal, SectionHeading, Lightbox, ScrollableMap, buttons
data/property.ts    all copy, numbers and contact details
lib/site.ts         absolute URL helper for canonical + OG tags
```

---

## Design notes

**Brand orange is `#F16622`**, sampled from the star in the DRP wordmark and confirmed against the
investment deck. It is exposed as a three-step ramp so the accent stays on-brand without failing
contrast:

| Token | Hex | Used for | Contrast |
| --- | --- | --- | --- |
| `orange` | `#F16622` | accents and figures on charcoal | 5.99:1 on `#111111` |
| `orange-deep` | `#C0511B` | CTA fills and the profit bar (white label) | 4.74:1 |
| `orange-ink` | `#A84717` | small orange text on light grounds | 5.30:1 on bone |

Body text is `#4A4A4A` on bone (8:1) and on sand (7:1). Headings are Playfair Display — chosen to
match the Didone serif of the DRP wordmark — with Inter for body and UI.

**Accessibility:** every image carries alt text (the one decorative background is `alt=""` and
`aria-hidden`), the lightbox traps Tab, closes on Escape, steps with the arrow keys and returns
focus to the thumbnail that opened it, and focus rings are visible throughout.

**Motion:** scroll reveals are a 20px rise and fade, once, via Framer Motion. Two deliberate
exceptions — the hero animates with CSS so above-the-fold copy never depends on JavaScript, and a
`<noscript>` rule reveals everything else if JavaScript does not run at all. All motion is disabled
under `prefers-reduced-motion`.

---

## Disclaimer

All figures, projections and returns on the page are estimates based on current market data,
provided for information only. They are not financial advice or a guarantee of future performance.
Market comparables are sourced from DXB Interact.
