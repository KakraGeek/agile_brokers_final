# Execution Plan – Agile Insurance Brokers Website

> Windows/PowerShell environment. Use forward slashes. Prefer `cross-env` and `rimraf` for portability.

---

## Phase 0 — Project Setup
- Initialize repo; set Node version (`.nvmrc` optional).
- Detect package manager: `pnpm-lock.yaml` → pnpm; `package-lock.json` → npm; else ask.
- Install core deps: Tailwind, Framer Motion, Lucide React; ShadCN UI if desired.
- Add scripts: `clean`, `build`, `preview`.

---

## Phase 1 — Markdown Pages & Routing
- Map Markdown files → routes; render via MD/MDX pipeline.
- Global Layout with Header/Nav/Footer; About has dropdown to subpages.

- Use static generation (`getStaticProps`/`getStaticPaths`) to load Markdown.
- File structure: `app/` or `pages/` with nested routes.

---

## Phase 2 — Navigation, Layout & Styles
- Responsive header with dropdown, footer with contacts, container widths.
- Tailwind config; base typography.

---

## Phase 3 — Motion & A11y
- Entrance reveals with Framer Motion.
- **Parallax (transform‑only).** Feature‑flag motion and honor `prefers-reduced-motion`.
- Add skip link, focus styles, accessible nav semantics.

---

## Phase 4 — Forms & Security
- Contact path (mail link or simple form).
- Sanitize/validate inputs; spam honeypot.
- Security headers where applicable during deployment.

---

## Phase 5 — Build & Deploy
```powershell
npm run build
npx next export
# Upload /out to cPanel public_html
```

---

## Phase 6 — Content & Assets Intake (Deferred)
- After KickStart: discover `/content_pages` and `/images`, wire brand assets, banners, partners, team photos.

---

## Slices (each shippable/testable)
- **Slice A:** Repo setup + one sample page from Markdown
- **Slice B:** Remaining pages + internal links
- **Slice C:** Global nav + dropdown + footer
- **Slice D:** Styling + motion + reduced‑motion compliance
- **Slice E:** Contact path + validation
- **Slice F:** Static export + deployment

---

## Backend Options (for Web App/Hybrid later)
- **DB:** Neon Postgres + Drizzle ORM (alt: SQLite for prototypes)
- **Auth:** Clerk or NextAuth; or none
- **Server:** Next API routes / Express.js / FastAPI (Python)
