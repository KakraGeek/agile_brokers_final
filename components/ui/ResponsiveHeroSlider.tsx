'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ResponsiveHeroSliderProps {
  images: string[]
  autoPlayInterval?: number
  showControls?: boolean
  showProgress?: boolean
  showDots?: boolean
}

export function ResponsiveHeroSlider({ 
  images,
  autoPlayInterval = 5000,
  showControls = true,
  showProgress = true,
  showDots = true
}: ResponsiveHeroSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      }
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [images.length, autoPlayInterval, isPaused])

  // Generate responsive image paths
  const getResponsiveImage = (imagePath: string) => {
    const baseName = imagePath.replace('.webp', '')
    
    if (isMobile && !isMobileLandscape) {
      // Mobile portrait - handle typo in filename
      if (baseName.includes('2_new')) {
        return `${baseName}_mobile_potrait.webp` // Keep the typo as it exists
      }
      return `${baseName}_mobile_portrait.webp`
    } else if (isMobileLandscape) {
      // Mobile landscape
      return `${baseName}_mobile_landscape.webp`
    } else if (isTablet) {
      // Tablet
      return `${baseName}_tablet.webp`
    } else {
      // Desktop (original)
      return imagePath
    }
  }

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index)
  }

  const goToPrevious = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)
  }

  const goToNext = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="relative w-full h-full">
        {images.map((image, index) => {
          const responsiveImage = getResponsiveImage(image)
          
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={responsiveImage}
                alt={`Hero Image ${index + 1}`}
                fill
                className="object-cover w-full h-full"
                priority={index === 0}
                sizes="100vw"
                unoptimized
              />
            </div>
          )
        })}
      </div>

      {/* Progress Bar */}
      {showProgress && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-black/20 z-20">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
            key={currentImageIndex}
          />
        </div>
      )}
      
      {/* Navigation Dots */}
      {showDots && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Pause/Resume Button */}
      {showControls && (
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="absolute bottom-8 left-8 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 z-20 group"
          aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
        >
          {isPaused ? (
            <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      )}

      {/* Navigation Arrows */}
      {showControls && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 z-20 group"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 z-20 group"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Slide Counter */}
      {showControls && (
        <div className="absolute top-8 right-8 bg-black/30 text-white px-4 py-2 rounded-full text-sm font-medium z-20">
          {currentImageIndex + 1} / {images.length}
        </div>
      )}
    </section>
  )
}
