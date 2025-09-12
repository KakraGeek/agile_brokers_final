'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'
import { useState, useEffect } from 'react'

interface ResponsiveBannerProps {
  bannerImage: string
  bannerAlt?: string
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export function ResponsiveBanner({ 
  bannerImage, 
  bannerAlt, 
  title, 
  description, 
  className,
  children
}: ResponsiveBannerProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isMobileLandscape, setIsMobileLandscape] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      setIsMobile(width <= 768)
      setIsTablet(width > 768 && width <= 1024)
      setIsMobileLandscape(width <= 1024 && height < width)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    window.addEventListener('orientationchange', checkDevice)

    return () => {
      window.removeEventListener('resize', checkDevice)
      window.removeEventListener('orientationchange', checkDevice)
    }
  }, [])

  // Generate responsive image paths
  const getResponsiveImage = () => {
    const baseName = bannerImage.replace('.webp', '')
    
    if (isMobile && !isMobileLandscape) {
      // Mobile portrait
      return `${baseName}_mobile_portrait.webp`
    } else if (isMobileLandscape) {
      // Mobile landscape
      return `${baseName}_mobile_landscape.webp`
    } else if (isTablet) {
      // Tablet
      return `${baseName}_tablet.webp`
    } else {
      // Desktop (original)
      return bannerImage
    }
  }

  const responsiveImage = getResponsiveImage()

  return (
    <motion.section 
      className={`relative h-64 md:h-80 lg:h-96 overflow-hidden ${className || ''}`}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      {/* Responsive Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${responsiveImage})`,
          // ✅ FIXED: Preserve parallax effect on ALL devices
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
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
          {children}
        </div>
      </div>
    </motion.section>
  )
}