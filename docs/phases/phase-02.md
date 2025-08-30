# Phase 2: Content Integration & Routing

**Phase Goal:** Integrate Markdown content with Next.js routing, creating the foundation for all content pages.

**Duration:** 2-3 days  
**Dependencies:** Phase 1 complete  
**Deliverables:** All content pages rendering from Markdown with proper routing

---

## Overview
This phase focuses on integrating the existing Markdown content with Next.js routing, implementing the content pipeline, and ensuring all pages are accessible and properly structured.

## Key Objectives
- ✅ Implement Markdown parsing and rendering
- ✅ Create dynamic routes for all content pages
- ✅ Establish content metadata structure
- ✅ Implement internal navigation between pages
- ✅ Ensure proper SEO meta tags

## Technical Requirements
- Markdown parsing with gray-matter and remark
- Dynamic route generation with `getStaticProps`/`getStaticPaths`
- Content metadata extraction (title, description, order)
- Internal link resolution and navigation
- SEO optimization for each page

## Success Criteria
- [ ] All 7 content pages render correctly
- [ ] Markdown content displays with proper formatting
- [ ] Internal navigation links work correctly
- [ ] SEO meta tags are present and accurate
- [ ] Static generation works for all pages
- [ ] Content structure matches the manifest

## Content Pages to Implement
1. **Homepage** (`/`) - Company overview, vision, mission
2. **About Us** (`/about-us`) - Company description with sub-navigation
3. **Our Services** (`/about-us/services`) - Service offerings
4. **Our Products** (`/about-us/products`) - Insurance products
5. **Our Team** (`/about-us/team`) - Team information
6. **Partners & Clients** (`/partners-clients`) - Partner showcase
7. **Contact Us** (`/contact`) - Contact information

## Risk Mitigation
- **Content Parsing:** Implement robust error handling
- **Routing:** Test all routes manually and with automated checks
- **SEO:** Validate meta tags and structured data

## Next Phase Dependencies
- Phase 3 requires content structure to be complete
- Navigation components depend on this routing foundation

---

## Slices in This Phase
1. **Slice A:** Markdown parsing and rendering utilities
2. **Slice B:** Dynamic route implementation for content pages
3. **Slice C:** Internal navigation and link resolution
4. **Slice D:** SEO optimization and meta tag implementation

## Quality Gates
- [ ] All content pages render without errors
- [ ] Markdown formatting is preserved correctly
- [ ] Internal navigation works seamlessly
- [ ] SEO meta tags are properly implemented
- [ ] Static generation completes successfully
