# Agile Insurance Brokers Website

**Modern, responsive website for Agile Insurance Brokers Ltd**

A professional insurance broker website built with Next.js, TypeScript, and modern UI libraries.

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 20.x LTS or higher
- npm (comes with Node.js)

### **Installation**
```bash
# Clone the repository
git clone [your-repo-url]
cd agile_final

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Build & Export**
```bash
# Build for production
npm run build

# Export static files
npm run export

# Preview static export
npm run preview
```

---

## 🏗 **Project Overview**

**Agile Insurance Brokers** is a modern, responsive website designed to showcase insurance services, products, and build trust with potential clients. The website emphasizes professionalism, accessibility, and user experience.

### **Key Features**
- 📱 **Responsive Design** - Mobile-first approach
- ♿ **Accessibility** - WCAG 2.2 AA compliance
- 🎨 **Modern UI** - ShadCN UI components with custom theme
- ✨ **Smooth Animations** - Framer Motion with reduced motion support
- 🔍 **SEO Optimized** - Static generation for performance
- 🚀 **Fast Performance** - Lighthouse targets: Perf/SEO/A11y ≥ 90

---

## 🛠 **Technology Stack**

### **Frontend**
- **Framework:** Next.js 14 with TypeScript
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** ShadCN UI (New York style)
- **Animations:** Framer Motion with accessibility
- **Icons:** Lucide React with consistent patterns
- **Build:** Static export for cPanel hosting

### **Development Tools**
- **Package Manager:** npm
- **Linting:** ESLint with Next.js config
- **Type Checking:** TypeScript strict mode
- **CSS Processing:** PostCSS with Autoprefixer
- **Cross-platform:** Windows/PowerShell compatible

---

## 📁 **Project Structure**

```
agile_final/
├── components/           # React components
│   ├── ui/              # ShadCN UI components
│   ├── layout/          # Layout components (Header, Footer)
│   └── index.ts         # Component exports
├── lib/                  # Utility libraries
│   ├── animations.ts    # Framer Motion variants
│   ├── icons.ts         # Lucide React icon config
│   └── utils.ts         # Utility functions
├── pages/                # Next.js pages
│   ├── _app.tsx         # App wrapper
│   ├── _document.tsx    # Document wrapper
│   └── index.tsx        # Homepage
├── styles/               # Global styles
│   └── globals.css      # Tailwind + custom CSS
├── docs/                 # Documentation
│   ├── ui-setup.md      # UI library documentation
│   ├── phases/           # Development phases
│   └── slices/           # Development slices
├── content_pages/        # Markdown content
├── images/               # Image assets
└── smart_prompts/        # Development prompts
```

---

## 🎨 **Design System**

### **Color Palette**
- **Primary:** Blue variants (#0284c7) - Trust, professionalism
- **Secondary:** Gray variants (#64748b) - Balance, reliability
- **Accessibility:** WCAG-compliant contrast ratios

### **Typography**
- **Headings:** Large, bold with proper hierarchy
- **Body:** Readable with good line height
- **Responsive:** Scales appropriately across breakpoints

### **Components**
- **ShadCN UI:** Button, Card, Input, Label, Textarea, Select, NavigationMenu, Sheet
- **Custom Layout:** Header, Footer, Layout wrapper
- **Consistent:** Spacing, sizing, and interaction patterns

---

## 📱 **Responsive Breakpoints**

- **Mobile:** `< 640px` - Stacked layout, mobile menu
- **Tablet:** `640px - 1024px` - Two-column layout  
- **Desktop:** `> 1024px` - Full navigation, multi-column

---

## ♿ **Accessibility Features**

- **WCAG 2.2 AA Compliance** - Full accessibility standards
- **Keyboard Navigation** - Complete keyboard support
- **Screen Reader** - Proper ARIA labels and semantic HTML
- **Reduced Motion** - Respects user preferences
- **Focus Management** - Clear focus indicators
- **Color Contrast** - Meets accessibility requirements

---

## 🎬 **Animation System**

### **Framer Motion Integration**
- **Entrance Animations:** Fade-in, slide-up, slide-down
- **Hover Effects:** Scale, lift, color transitions
- **Page Transitions:** Smooth enter/exit animations
- **Parallax Effects:** Transform-based scrolling (no background-attachment: fixed)
- **Reduced Motion:** Automatic fallback for accessibility

### **Performance Optimized**
- Transform-based animations only
- Respects `prefers-reduced-motion`
- No impact on Core Web Vitals

---

## 🚀 **Development Phases**

### **Phase 1: Foundation** ✅
- [x] Project setup and configuration
- [x] UI library setup (ShadCN, Framer Motion, Lucide)
- [x] Basic layout components
- [x] Homepage with sample content

### **Phase 2: Content & Routing** 🔄
- [ ] Markdown page rendering
- [ ] File-based routing
- [ ] Content management system

### **Phase 3: Enhanced UI** 📋
- [ ] Advanced components
- [ ] Interactive elements
- [ ] Form components

### **Phase 4: Performance & SEO** 📋
- [ ] Image optimization
- [ ] Meta tags and sitemap
- [ ] Performance optimization

### **Phase 5: Testing & Deployment** 📋
- [ ] Testing and validation
- [ ] Static export
- [ ] Deployment to cPanel

---

## 📜 **Available Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run export       # Export static files
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
npm run clean        # Clean build artifacts
npm run preview      # Preview static export
npm run test         # Run tests (placeholder)
npm run test:smoke   # Run smoke tests
```

---

## ⚙️ **Configuration Files**

- **`next.config.ts`** - Next.js configuration (static export enabled)
- **`tailwind.config.ts`** - Tailwind CSS with custom theme
- **`tsconfig.json`** - TypeScript configuration
- **`components.json`** - ShadCN UI configuration
- **`postcss.config.js`** - PostCSS plugins
- **`.env.example`** - Environment variables template

---

## 🎯 **Performance Targets**

- **Lighthouse Scores:** Performance ≥ 90, SEO ≥ 90, Accessibility ≥ 90
- **Core Web Vitals:** LCP < 2.5s, INP < 200ms, CLS < 0.1
- **Bundle Size:** Optimized for static hosting
- **Image Optimization:** WebP format with fallbacks

---

## 🔒 **Security Features**

- **OWASP Top 10 Mindset** - Security-first approach
- **Form Validation** - Client and server-side validation
- **Content Security Policy** - Security headers
- **Input Sanitization** - XSS prevention
- **Spam Protection** - Honeypot fields

---

## 📚 **Content Management**

- **Markdown Files** - Easy content editing
- **Static Generation** - Fast page loads
- **Image Assets** - Organized by category
- **SEO Friendly** - Meta tags and structured data

---

## 🚀 **Deployment**

### **Static Export**
```bash
npm run build
npm run export
# Upload /out directory to cPanel public_html
```

### **Hosting**
- **Platform:** cPanel shared hosting
- **Method:** Static file upload
- **Fallback:** SPA routing via .htaccess

---

## 🤝 **Contributing**

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### **Development Guidelines**
- Follow TypeScript best practices
- Use consistent component patterns
- Maintain accessibility standards
- Test across different devices
- Document new features

---

## 📖 **Documentation**

- **`docs/ui-setup.md`** - Complete UI library documentation
- **`docs/phases/`** - Development phase details
- **`docs/slices/`** - Development slice specifications
- **`docs/prd.md`** - Product requirements document
- **`docs/planning.md`** - Execution plan

---

## 🐛 **Troubleshooting**

### **Common Issues**
- **Build Errors:** Check Node.js version (20.x+)
- **Type Errors:** Run `npm run type-check`
- **Lint Errors:** Run `npm run lint`
- **Missing Dependencies:** Run `npm install`

### **Development Tips**
- Use `npm run dev` for development
- Check browser console for errors
- Validate responsive design
- Test accessibility features

---

## 🆘 **Support**

- **Documentation:** Check `docs/` directory first
- **Issues:** Create GitHub issue with details
- **Questions:** Review code comments and examples

---

## 📄 **License**

This project is proprietary software for Agile Insurance Brokers Ltd.

---

## 🎉 **Getting Started**

1. **Install dependencies:** `npm install`
2. **Start development:** `npm run dev`
3. **View website:** `http://localhost:3000`
4. **Check components:** Header, Footer, Layout
5. **Test animations:** Scroll and hover effects
6. **Verify responsiveness:** Test different screen sizes

**Your UI setup is complete and ready for development!** 🚀

The website includes:
- ✅ **ShadCN UI** - Professional component library
- ✅ **Framer Motion** - Smooth animations with accessibility
- ✅ **Lucide React** - Consistent icon system
- ✅ **Custom Theme** - Brand-appropriate colors
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Accessibility** - WCAG 2.2 AA compliance
