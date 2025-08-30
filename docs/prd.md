# Product Requirements Document (PRD)
**Project:** Agile Insurance Brokers Website  
**Version:** 2025-08-30

---

## 1) Product Vision
Build a modern, responsive, and credible online presence (SPA) for Agile Insurance Brokers Ltd that clearly presents services, products, team, partners, and contact options. Prepare the ground for a future “Request a Quote” capability without locking the stack.

**Success Signals**
- More qualified inquiries via contact channels
- Lighthouse: Perf/SEO/A11y ≥ 90; LCP < 2.5s, INP < 200ms, CLS < 0.1
- Bounce rate down; time on site up (post‑launch analytics)

---

## 2) Goals & Non‑Goals
**Goals**
- Deliver a clean, mobile‑first website with professional UX
- Content authored in Markdown (simple, portable)
- Robust baseline security (OWASP Top 10 mindset)
- Clear navigation with About subpages and partner showcase
- Prepare for future quote form (inputs will require sanitization)

**Non‑Goals**
- No headless CMS in MVP
- No backend database, auth, or dashboards in MVP
- No multi‑language in MVP

---

## 3) Users & Use Cases
**Personas**
- **Prospective Clients:** explore services/products; build trust; contact broker
- **Existing Clients:** verify details; find contacts
- **Partners:** confirm credibility, brand association
- **Internal Staff:** reference company info

**Key Journeys**
- Home → About → Services/Products → Contact
- Home → Partners & Clients → Contact
- (Future) Home → Request a Quote → Submit

---

## 4) Scope (MVP)
**Pages**
- Home
- About Us (parent) with embedded sub‑pages:
  - Our Services
  - Our Products
  - Our Team
- Our Partners & Clients
- Contact Us
- *(Deferred)* Request a Quote

**Content Files (Markdown)**
- `homepage.md`
- `about_us.md`
- `our_services.md`
- `our_products.md`
- `our_team.md`
- `our_partners_and_clients.md`
- `contact_us.md`

---

## 5) Content / Domain Model
- Each page is authored in Markdown and mapped to a route
- About Us has internal links to its subpages
- Media/images referenced by relative paths (wired later during KickStart intake)

---

## 6) Stack Selection (LOCKED by KickStart)
- `SelectedProjectType: SPA Website`
- `SelectedFrontendStack: Next.js + TypeScript`
- `SelectedBackendStack: None (static export)`
- `SelectedAuth: None (static content)`
- `SelectedDB: None (static content)`

---

## 7) Architecture & Build
- **Rendering Strategy:** Prefer static generation (SSG). If Next.js is chosen later, SSR/ISR can be selectively enabled per page if needed.
- **Routing:** Next.js file routing *or* React Router (Vite) based on later stack lock.
- **File Layout:** Markdown → page components; shared layout with nav/footer.
- **Dual Deployment Concept:** preview builds → final static export (e.g., upload to cPanel `public_html/`); SPA fallback via `.htaccess` when needed.
- **Images/Perf:** native `<img>` or framework utilities; compress assets; defer offscreen media.

---

## 8) Interaction & Visual
- Clean navigation with dropdown for About subpages
- Subtle entrance reveals with Framer Motion
- **Parallax must be transform‑based only** (no `background-attachment: fixed`); honor `prefers-reduced-motion`
- A11y: focus order, skip links, visible focus, ARIA where appropriate
- Responsive for desktop/tablet/mobile

---

## 9) Non‑Functional Requirements
- **Performance:** LCP < 2.5s; INP < 200ms; CLS < 0.1
- **SEO:** semantic landmarks, titles/meta, sitemap, robots, Open Graph
- **Accessibility:** WCAG 2.2 AA baseline
- **Security:** OWASP Top 10 mitigations; sanitize form inputs; content security policy where applicable

---

## 10) Key Decisions / Risks & Mitigations
1. **Static vs dynamic** — Start static; revisit if quote workflow needs server features
2. **Form security** — Defer quote form; when added, validate server‑side and client‑side; anti‑spam honeypot
3. **Parallax technique** — Transform‑only to avoid paint jank and fixed‑attachment bugs
4. **cPanel SPA fallback** — Ship `.htaccess` rewrite to `index.html`
5. **Future CMS** — Keep Markdown schema simple to ease migration
6. **Image budget** — Guard hero/banner sizes; prefer modern formats (AVIF/WebP) with fallbacks

---

## 11) Acceptance Criteria
- All MVP pages render from Markdown and are reachable from global nav
- Responsive layout passes manual checks across common breakpoints
- Lighthouse Performance/SEO/A11y scores ≥ 90 on Home and one inner page
- Contact path present (email/phone or simple form if included)
- No console errors; no blocked main‑thread long tasks > 250ms on test hardware

---

## 12) Out of Scope (MVP)
- No headless CMS / admin dashboard
- No auth or user accounts
- No payments
- No i18n

---

## 13) Assumptions
- Hosting on cPanel (static upload)
- Final brand assets/images provided later and integrated post‑KickStart
- No backend required for MVP

---

## Appendix A: Stack Decision Matrix (no lock yet)

| Criteria                | Next.js + TS                          | Vite + React + TS                     | Other (placeholder)                  |
|-------------------------|---------------------------------------|---------------------------------------|-------------------------------------|
| Routing                 | File‑based, nested layouts             | `react-router-dom`                    | TBD                                  |
| SEO                     | SSR/ISR available                      | Requires config / prerender            | Varies                               |
| Static Export           | `next export`                          | `vite build`                           | TBD                                  |
| DX / Speed              | Mature ecosystem                       | Ultra‑fast dev server                  | Varies                               |
| Deployment              | Vercel or static upload                | Static upload (`dist/`)                | Varies                               |
| Growth to Web App       | Built‑in API routes / middleware       | Add server (Express/FastAPI) if needed | Varies                               |
