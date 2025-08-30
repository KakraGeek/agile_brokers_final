# ADR-2025-08-30: Stack Lock for Agile Insurance Brokers Website

**Date:** 2025-08-30  
**Status:** Accepted  
**Type:** Technology Stack  

## Context
Need to establish the foundational technology stack for the Agile Insurance Brokers website project. The project requires a modern, responsive SPA with excellent SEO capabilities and static export for cPanel hosting.

## Decision
**Locked Stack:**
- **Project Type:** SPA Website (static, no backend required)
- **Frontend:** Next.js + TypeScript
- **Package Manager:** npm
- **Deployment:** Static export to cPanel

## Rationale

### Next.js Selection
- **SEO Superiority:** Built-in SSR/ISR capabilities for better search engine optimization
- **File-based Routing:** Clean, intuitive routing structure that maps well to content pages
- **Static Export:** `next export` provides optimized static files perfect for cPanel hosting
- **TypeScript Support:** First-class TypeScript support with excellent DX
- **Ecosystem Maturity:** Large community, extensive documentation, proven in production

### npm Selection
- **Universal Compatibility:** Works everywhere without additional setup
- **Windows Support:** Excellent PowerShell/Windows compatibility
- **Team Familiarity:** Most developers are familiar with npm
- **Lockfile Reliability:** `package-lock.json` ensures consistent installations

### Static Export Approach
- **Hosting Compatibility:** Perfect for cPanel shared hosting
- **Performance:** Pre-built static files load faster
- **Cost Effective:** No server costs, just static hosting
- **Future Flexibility:** Can add API routes later if needed

## Alternatives Considered

### Vite + React
- **Pros:** Faster dev server, lighter bundle
- **Cons:** Requires additional setup for SEO, routing complexity
- **Decision:** Next.js provides better out-of-the-box SEO and routing

### pnpm/yarn
- **Pros:** Faster installs, disk efficiency
- **Cons:** Additional tooling required, potential compatibility issues
- **Decision:** npm provides universal compatibility and reliability

## Consequences

### Positive
- Excellent SEO capabilities out of the box
- Clean, maintainable code structure
- Easy deployment to cPanel
- Strong TypeScript support
- Future extensibility with API routes

### Considerations
- Slightly larger bundle size than Vite
- Learning curve for team members new to Next.js
- Need to ensure static export compatibility

## Implementation Notes
- Use `next export` for production builds
- Configure for static generation (`getStaticProps`/`getStaticPaths`)
- Ensure all pages are statically generated
- Test cPanel deployment process early

## Related Decisions
- Content management via Markdown files
- Image optimization using Next.js Image component
- Tailwind CSS for styling
- Framer Motion for animations (transform-only parallax)
