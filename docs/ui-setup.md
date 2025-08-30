# UI Setup Documentation

**Complete UI Library Setup for Agile Insurance Brokers Website**

---

## 🎯 **What's Been Set Up**

### ✅ **1. ShadCN UI**
- **Installation:** Complete with New York style and neutral base color
- **Components Added:** Button, Card, Input, Label, Textarea, Select, NavigationMenu, Sheet
- **Configuration:** `components.json` with proper aliases and icon library
- **Theme:** Integrated with our custom Tailwind color palette

### ✅ **2. Framer Motion**
- **Installation:** Already in package.json
- **Configuration:** Comprehensive animation variants in `lib/animations.ts`
- **Features:** Reduced motion support, transform-based parallax, page transitions
- **Accessibility:** Respects `prefers-reduced-motion` preferences

### ✅ **3. Lucide React**
- **Installation:** Already in package.json
- **Configuration:** Centralized icon imports in `lib/icons.ts`
- **Categories:** Navigation, Business, Social, Form, Status, Utility icons
- **Sizing:** Consistent icon size variants (xs, sm, md, lg, xl, 2xl)

### ✅ **4. Custom Components**
- **Header:** Responsive navigation with dropdown, mobile menu
- **Footer:** Company info, links, social media, CTA section
- **Layout:** Page wrapper with header/footer and animations
- **Homepage:** Sample page demonstrating all components

---

## 🛠 **Component Library**

### **ShadCN UI Components**
```tsx
// Available components
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
```

### **Custom Layout Components**
```tsx
import { Layout } from '@/components/layout/Layout'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
```

### **Animation Variants**
```tsx
import { 
  fadeIn, 
  slideUp, 
  slideDown, 
  pageTransition,
  hoverScale,
  parallaxVariants 
} from '@/lib/animations'
```

### **Icon System**
```tsx
import { 
  Shield, 
  Users, 
  Phone, 
  Mail,
  // ... many more
} from '@/lib/icons'
```

---

## 🎨 **Design System**

### **Color Palette**
- **Primary:** Blue variants (50-900) - `#0284c7` as default
- **Secondary:** Gray variants (50-900) - `#64748b` as default
- **CSS Variables:** ShadCN-compatible with our custom colors
- **Accessibility:** WCAG-compliant contrast ratios

### **Typography**
- **Headings:** Large, bold with proper hierarchy
- **Body:** Readable with good line height
- **Responsive:** Scales appropriately across breakpoints

### **Spacing**
- **Container:** `container-custom` class for consistent page widths
- **Sections:** Standardized padding (py-20, py-12, etc.)
- **Components:** Consistent internal spacing

### **Animations**
- **Entrance:** Fade-in, slide-up, slide-down effects
- **Hover:** Scale, lift, and color transitions
- **Parallax:** Transform-based scrolling effects
- **Reduced Motion:** Automatic fallback for accessibility

---

## 📱 **Responsive Design**

### **Breakpoints**
- **Mobile:** `< 640px` - Stacked layout, mobile menu
- **Tablet:** `640px - 1024px` - Two-column layout
- **Desktop:** `> 1024px` - Full navigation, multi-column

### **Mobile-First Approach**
- Base styles for mobile
- Progressive enhancement for larger screens
- Touch-friendly interactions
- Optimized navigation patterns

---

## ♿ **Accessibility Features**

### **WCAG 2.2 AA Compliance**
- **Focus Management:** Clear focus indicators
- **Keyboard Navigation:** Full keyboard support
- **Screen Reader:** Proper ARIA labels and semantic HTML
- **Color Contrast:** Meets accessibility standards

### **Reduced Motion Support**
- **Automatic Detection:** Respects user preferences
- **Fallback Animations:** Minimal motion when preferred
- **Performance:** No motion impact on performance

---

## 🚀 **Usage Examples**

### **Basic Button Usage**
```tsx
import { Button } from '@/components/ui/button'

<Button size="lg" variant="default">
  Get Free Quote
</Button>

<Button variant="outline" size="sm">
  Learn More
</Button>
```

### **Card Component**
```tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

<Card className="hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle>Professional Protection</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Comprehensive coverage tailored to your needs.</p>
  </CardContent>
</Card>
```

### **Animated Section**
```tsx
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'

<motion.section 
  variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <h2>Why Choose Us?</h2>
  <p>Professional insurance solutions...</p>
</motion.section>
```

### **Icon Usage**
```tsx
import { Shield, Users, Award } from '@/lib/icons'

<div className="flex items-center space-x-2">
  <Shield className="w-6 h-6 text-primary-600" />
  <span>Professional Protection</span>
</div>
```

---

## 🔧 **Configuration Files**

### **Tailwind Config**
- **File:** `tailwind.config.ts`
- **Custom Colors:** Primary blue, secondary gray
- **Animations:** Custom keyframes and durations
- **Plugins:** `tailwindcss-animate` for ShadCN

### **ShadCN Config**
- **File:** `components.json`
- **Style:** New York (recommended)
- **Base Color:** Neutral
- **Icon Library:** Lucide
- **Aliases:** Proper path mappings

### **Global CSS**
- **File:** `styles/globals.css`
- **CSS Variables:** ShadCN-compatible
- **Custom Classes:** Container, button, card utilities
- **Reduced Motion:** Media query support

---

## 📚 **Available Utilities**

### **CSS Classes**
```css
.container-custom    /* Consistent page width */
.btn-primary        /* Primary button styles */
.btn-secondary      /* Secondary button styles */
.card               /* Card component styles */
```

### **Animation Variants**
```tsx
fadeIn              /* Simple fade in */
slideUp             /* Slide up from bottom */
slideDown           /* Slide down from top */
pageTransition      /* Page enter/exit */
hoverScale          /* Hover scale effect */
parallaxVariants    /* Transform-based parallax */
```

### **Icon System**
```tsx
iconSizes           /* Consistent sizing (xs, sm, md, lg, xl, 2xl) */
iconColors          /* Predefined color variants */
```

---

## 🧪 **Testing Your Setup**

### **1. Start Development Server**
```bash
npm run dev
```

### **2. Check Components**
- Visit `http://localhost:3000`
- Verify header navigation works
- Test mobile menu functionality
- Check footer links and social icons

### **3. Test Animations**
- Scroll to see entrance animations
- Hover over cards and buttons
- Check reduced motion support

### **4. Validate Responsiveness**
- Test on different screen sizes
- Verify mobile navigation
- Check dropdown functionality

---

## 🔄 **Adding New Components**

### **ShadCN Components**
```bash
npx shadcn@latest add [component-name]
```

### **Custom Components**
1. Create in `components/` directory
2. Export from `components/index.ts`
3. Use consistent naming and structure
4. Include proper TypeScript types

### **New Icons**
1. Add to `lib/icons.ts`
2. Import from `lucide-react`
3. Use consistent sizing and colors

---

## 🎉 **What's Ready to Use**

✅ **Complete UI Library** - ShadCN UI with custom theme  
✅ **Animation System** - Framer Motion with accessibility  
✅ **Icon System** - Lucide React with consistent patterns  
✅ **Layout Components** - Header, Footer, Layout wrapper  
✅ **Responsive Design** - Mobile-first approach  
✅ **Accessibility** - WCAG 2.2 AA compliance  
✅ **Design System** - Consistent colors, typography, spacing  

**Your UI setup is complete and ready for development!** 🚀
