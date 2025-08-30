'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeIn, slideUp } from '@/lib/animations'

interface MarkdownContentProps {
  content: string
  className?: string
  animate?: boolean
}

export function MarkdownContent({ content, className, animate = true }: MarkdownContentProps) {
  const Wrapper = animate ? motion.div : 'div'
  const wrapperProps = animate ? {
    variants: fadeIn,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true }
  } : {}

  return (
    <Wrapper
      className={cn(
        "prose prose-lg max-w-none",
        "prose-headings:text-secondary-900 prose-headings:font-bold",
        "prose-h1:text-4xl prose-h1:mb-6 prose-h1:text-primary-900",
        "prose-h2:text-3xl prose-h2:mb-4 prose-h2:text-secondary-800",
        "prose-h3:text-2xl prose-h3:mb-3 prose-h3:text-secondary-700",
        "prose-p:text-secondary-700 prose-p:leading-relaxed prose-p:mb-4",
        "prose-strong:text-secondary-900 prose-strong:font-semibold",
        "prose-em:text-secondary-800 prose-em:italic",
        "prose-ul:my-4 prose-ol:my-4",
        "prose-li:text-secondary-700 prose-li:mb-2",
        "prose-blockquote:border-l-4 prose-blockquote:border-primary-700 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-secondary-600",
        "prose-code:bg-secondary-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-secondary-800",
        "prose-a:text-primary-900 prose-a:no-underline prose-a:font-medium hover:prose-a:text-accent-900",
        "prose-img:rounded-lg prose-img:shadow-md",
        "prose-table:border-collapse prose-table:w-full",
        "prose-th:border prose-th:border-secondary-300 prose-th:bg-secondary-50 prose-th:px-4 prose-th:py-2 prose-th:text-left",
        "prose-td:border prose-td:border-secondary-300 prose-td:px-4 prose-td:py-2",
        className
      )}
      {...wrapperProps}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
