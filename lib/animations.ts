import { Variants } from 'framer-motion'

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  return false
}

// Base animation variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.5,
      ease: "easeOut"
    }
  }
}

export const slideUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.5,
      ease: "easeOut"
    }
  }
}

export const slideDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.3,
      ease: "easeOut"
    }
  }
}

export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.4,
      ease: "easeOut"
    }
  }
}

export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.4,
      ease: "easeOut"
    }
  }
}

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.3,
      ease: "easeOut"
    }
  }
}

// Stagger animations for lists
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion() ? 0 : 0.1,
      delayChildren: prefersReducedMotion() ? 0 : 0.2
    }
  }
}

// Page transition variants
export const pageTransition: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.6,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.3,
      ease: "easeIn"
    }
  }
}

// Hover animations
export const hoverScale: Variants = {
  hover: { 
    scale: prefersReducedMotion() ? 1 : 1.05,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.2,
      ease: "easeOut"
    }
  }
}

export const hoverLift: Variants = {
  hover: { 
    y: prefersReducedMotion() ? 0 : -5,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.2,
      ease: "easeOut"
    }
  }
}

// Parallax variants (transform-based only)
export const parallaxVariants: Variants = {
  hidden: { 
    y: 0 
  },
  visible: { 
    y: prefersReducedMotion() ? 0 : -50,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 1,
      ease: "linear"
    }
  }
}

// Navigation variants
export const navVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: -20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.3,
      ease: "easeOut"
    }
  }
}

// Dropdown variants
export const dropdownVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: -10,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.2,
      ease: "easeOut"
    }
  }
}

// Card hover variants
export const cardHover: Variants = {
  hover: { 
    y: prefersReducedMotion() ? 0 : -8,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.3,
      ease: "easeOut"
    }
  }
}

// Enhanced card animations
export const cardEntrance: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
    rotateX: 15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const cardStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion() ? 0 : 0.15,
      delayChildren: prefersReducedMotion() ? 0 : 0.1
    }
  }
}

export const cardItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const cardHoverEnhanced: Variants = {
  initial: { 
    scale: 1,
    y: 0,
    rotateY: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    scale: prefersReducedMotion() ? 1 : 1.01,
    y: prefersReducedMotion() ? 0 : -4,
    rotateY: prefersReducedMotion() ? 0 : 1,
    boxShadow: prefersReducedMotion() ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: prefersReducedMotion() ? 1 : 0.99,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.1
    }
  }
}

export const cardContentReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.4,
      delay: prefersReducedMotion() ? 0 : 0.2,
      ease: "easeOut"
    }
  }
}

export const cardImageHover: Variants = {
  hover: { 
    scale: prefersReducedMotion() ? 1 : 1.02,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.3,
      ease: "easeOut"
    }
  }
}

export const cardBadgePop: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 10
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.3,
      ease: "backOut"
    }
  }
}

export const cardIconFloat: Variants = {
  hover: { 
    y: prefersReducedMotion() ? 0 : -3,
    rotate: prefersReducedMotion() ? 0 : 5,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.3,
      ease: "easeOut"
    }
  }
}

// Button variants
export const buttonVariants: Variants = {
  tap: { 
    scale: prefersReducedMotion() ? 1 : 0.98,
    transition: { 
      duration: prefersReducedMotion() ? 0.01 : 0.1
    }
  }
}
