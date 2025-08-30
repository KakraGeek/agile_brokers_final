'use client'

import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { MarkdownContent } from './MarkdownContent'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeIn, slideUp } from '@/lib/animations'

interface PageLayoutProps {
  title: string
  description?: string
  content: string
  hasBanner?: boolean
  bannerImage?: string
  bannerAlt?: string
  className?: string
  showNavigation?: boolean
  prevPage?: { title: string; href: string }
  nextPage?: { title: string; href: string }
  children?: React.ReactNode
}

export function PageLayout({
  title,
  description,
  content,
  hasBanner = false,
  bannerImage,
  bannerAlt,
  className,
  showNavigation = false,
  prevPage,
  nextPage,
  children
}: PageLayoutProps) {
  return (
    <Layout>
      {/* Banner Section */}
      {hasBanner && bannerImage && (
        <motion.section 
          className="relative h-64 md:h-80 lg:h-96 overflow-hidden"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${bannerImage})`,
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {title}
              </h1>
              {description && (
                <p className="text-xl md:text-2xl max-w-3xl mx-auto px-4">
                  {description}
                </p>
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/* Content Section */}
      <section className={cn("py-12 md:py-16 lg:py-20", className)}>
        <div className="container-custom">
          {/* Page Header (if no banner) */}
          {!hasBanner && (
            <motion.div 
              className="text-center mb-12 md:mb-16"
              variants={slideUp}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6">
                {title}
              </h1>
              {description && (
                <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </motion.div>
          )}

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <MarkdownContent content={content} />
          </div>

          {/* Children Content */}
          {children}

          {/* Navigation (if enabled) */}
          {showNavigation && (prevPage || nextPage) && (
            <motion.div 
              className="mt-16 pt-8 border-t border-secondary-200"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                {prevPage && (
                  <Button asChild variant="outline" className="group">
                    <a href={prevPage.href} className="flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      {prevPage.title}
                    </a>
                  </Button>
                )}
                
                {nextPage && (
                  <Button asChild variant="outline" className="group">
                    <a href={nextPage.href} className="flex items-center gap-2">
                      {nextPage.title}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  )
}
