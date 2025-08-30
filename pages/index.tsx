import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Shield, 
  Users2, 
  TrendingUp, 
  Heart, 
  Target, 
  Award,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import { 
  fadeIn, 
  slideUp, 
  staggerContainer, 
  cardStagger, 
  cardItem, 
  cardHoverEnhanced, 
  cardContentReveal,
  cardImageHover,
  cardBadgePop,
  cardIconFloat
} from '@/lib/animations'
import { Layout } from '@/components/layout/Layout'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  
  const heroImages = [
    '/images/hero_slider/1_new.webp',
    '/images/hero_slider/2_new.webp',
    '/images/hero_slider/3_new.webp',
    '/images/hero_slider/4_new.webp',
    '/images/hero_slider/5_new.webp'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        )
      }
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [heroImages.length, isPaused])

  const coreValues = [
    { icon: Award, title: 'Excellence', description: 'Delivering the highest quality service' },
    { icon: Shield, title: 'Integrity', description: 'Building trust through honest practices' },
    { icon: Users2, title: 'Teamwork', description: 'Collaborating for better results' },
    { icon: Heart, title: 'Service', description: 'Putting our clients first' },
    { icon: Shield, title: 'Empathy', description: 'Understanding our clients\' needs' },
    { icon: Award, title: 'Ethics', description: 'Maintaining professional standards' }
  ]

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Image Slider */}
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Hero Image ${index + 1}`}
                fill
                className="object-cover w-full h-full"
                priority={index === 0}
                sizes="100vw"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-black/20 z-20">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            key={currentImageIndex}
          />
        </div>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroImages.map((_, index) => (
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

        {/* Pause/Resume Button */}
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

        {/* Navigation Arrows */}
        <button
          onClick={() => goToSlide(currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1)}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 z-20 group"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => goToSlide(currentImageIndex === heroImages.length - 1 ? 0 : currentImageIndex + 1)}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 z-20 group"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Counter */}
        <div className="absolute top-8 right-8 bg-black/30 text-white px-4 py-2 rounded-full text-sm font-medium z-20">
          {currentImageIndex + 1} / {heroImages.length}
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="container-custom text-center text-white z-10">
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              {currentImageIndex === 0 ? (
                // Slide 1 Text
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to AGILE INSURANCE BROKERS LTD
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-gray-100">
                    Protecting what matters most since 2019
                  </p>
                  <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                    Professional insurance solutions tailored to your needs at NO COST TO YOU
                  </p>
                </div>
              ) : currentImageIndex === 1 ? (
                // Slide 2 Text
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Expert Risk Management
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-gray-100">
                    Professional insurance advisory and claims management
                  </p>
                  <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                    We conduct thorough risk evaluations and place coverage with reputable insurers
                  </p>
                </div>
              ) : currentImageIndex === 2 ? (
                // Slide 3 Text
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Professional Insurance Advisory
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-gray-100">
                    Risk assessment and policy reviews
                  </p>
                  <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                    Get expert advice and comprehensive coverage backed by exceptional service
                  </p>
                </div>
              ) : currentImageIndex === 3 ? (
                // Slide 4 Text
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Comprehensive Insurance Solutions
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-gray-100">
                    From motor to marine insurance coverage
                  </p>
                  <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                    We offer a wide range of insurance products to protect your business and assets
                  </p>
                </div>
              ) : currentImageIndex === 4 ? (
                // Slide 5 Text
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Trusted Insurance Partnership
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-gray-100">
                    Building lasting relationships with our clients
                  </p>
                  <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                    Experience the difference of working with a dedicated team committed to your protection and peace of mind
                  </p>
                </div>
              ) : (
                // Fallback Text (should not be reached)
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Professional Insurance Solutions
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                    We provide peace of mind to our clients through sound insurance and exceptional service.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              About Agile Insurance Brokers Ltd
            </h2>
            <div className="space-y-4 text-lg text-secondary-700 leading-relaxed">
              <p>
                Agile Insurance Brokers Limited was incorporated in 2019 under the Companies Act, 2019 (Act 992).
              </p>
              <p>
                The Company aims to be a leader in providing high quality and competitively priced insurance services nationwide.
              </p>
              <p>
                Our mandate allows us to transact business with all registered insurance companies in Ghana.  
                Our brokerage services come to you at "NO COST TO YOU" and are designed to enhance your risk management strategies while ensuring efficiency and cost savings.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              Driving our commitment to excellence and client satisfaction
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Vision Card - Top Line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-8"
            >
              <div className="w-80 h-80">
                <Card className="bg-white shadow-lg border-l-4 border-primary-600 p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <Target className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-900">Our Vision</h3>
                  </div>
                  <p className="text-base text-secondary-700 leading-relaxed">
                    To be everywhere risk exists.
                  </p>
                </Card>
              </div>
              <div className="w-80 h-80 relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/home_images/burned_car_new.webp"
                  alt="Vision - Risk Assessment"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            </motion.div>

            {/* Mission Card - Bottom Line */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-8"
            >
              <div className="w-80 h-80 relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/home_images/flood_cars_new.webp"
                  alt="Mission - Service Excellence"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
              <div className="w-80 h-80">
                <Card className="bg-white shadow-lg border-l-4 border-accent-600 p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent-100 rounded-lg">
                      <Target className="w-6 h-6 text-accent-600" />
                    </div>
                    <h3 className="text-xl font-bold text-accent-900">Our Mission</h3>
                  </div>
                  <p className="text-base text-secondary-700 leading-relaxed">
                    To provide peace of mind to our customers through sound insurance and exceptional service.
                  </p>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Agile Insurance Brokers Ltd
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={cardStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreValues.map((value, index) => (
              <motion.div 
                key={value.title} 
                variants={cardItem}
                className="group"
              >
                <motion.div
                  variants={cardHoverEnhanced}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Card className="h-full cursor-pointer border-primary-100">
                    <CardHeader className="text-center pb-4">
                      <motion.div 
                        className="mx-auto w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors duration-300"
                        variants={cardIconFloat}
                        whileHover="hover"
                      >
                        <value.icon className="w-8 h-8 text-primary-900" />
                      </motion.div>
                      <motion.div variants={cardContentReveal}>
                        <CardTitle className="text-xl text-primary-900">{value.title}</CardTitle>
                      </motion.div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <motion.p 
                        className="text-secondary-600"
                        variants={cardContentReveal}
                      >
                        {value.description}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/banners/Banner4_0.webp)',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="container-custom text-center text-white relative z-10">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Protected?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Our mandate allows us to transact business with all registered insurance companies in Ghana. 
              Our brokerage services come to you at "NO COST TO YOU" and are designed to enhance your risk management strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4 bg-accent-900 hover:bg-accent-800">
                <a href="/contact-us">Get Free Quote</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
