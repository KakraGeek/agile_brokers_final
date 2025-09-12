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
import { SEOHead } from '@/components/seo/SEOHead'
import { ResponsiveBanner } from '@/components/ui/ResponsiveBanner'
import { ResponsiveHeroSlider } from '@/components/ui/ResponsiveHeroSlider'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const heroImages = [
    '/images/hero_slider/1_new.webp',
    '/images/hero_slider/2_new.webp',
    '/images/hero_slider/3_new.webp',
    '/images/hero_slider/4_new.webp',
    '/images/hero_slider/5_new.webp'
  ]

  const coreValues = [
    { icon: Award, title: 'Excellence', description: 'Delivering the highest quality service' },
    { icon: Shield, title: 'Integrity', description: 'Building trust through honest practices' },
    { icon: Users2, title: 'Teamwork', description: 'Collaborating for better results' },
    { icon: Heart, title: 'Service', description: 'Putting our clients first' },
    { icon: Shield, title: 'Empathy', description: 'Understanding our clients\' needs' },
    { icon: Award, title: 'Ethics', description: 'Maintaining professional standards' }
  ]

  return (
    <>
      <SEOHead 
        page="home"
        customKeywords={[
          'insurance brokers ghana',
          'professional insurance services',
          'risk management ghana',
          'insurance advisory ghana',
          'comprehensive insurance solutions',
          'no cost insurance brokerage',
          'ghana insurance market',
          'insurance consultation ghana'
        ]}
        customImage="/brand/Logo.png"
      />
      <Layout>
      {/* Hero Section */}
      <ResponsiveHeroSlider images={heroImages} />

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
      <ResponsiveBanner
        bannerImage="/images/banners/Banner4_0.webp"
        bannerAlt="Ready to Get Protected"
        title="Ready to Get Protected?"
        description="Our mandate allows us to transact business with all registered insurance companies in Ghana. Our brokerage services come to you at 'NO COST TO YOU' and are designed to enhance your risk management strategies."
        className="py-16 lg:py-24"
      >
        <div className="container-custom text-center text-white relative z-10">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4 bg-accent-900 hover:bg-accent-800">
                <a href="/contact-us">Get Free Quote</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </ResponsiveBanner>
    </Layout>
    </>
  )
}