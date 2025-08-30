import { GetStaticProps } from 'next'
import { PageLayout } from '@/components/content/PageLayout'
import { getContentBySlug } from '@/lib/markdown'
import { ContentPage } from '@/lib/markdown'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  cardStagger, 
  cardItem, 
  cardHoverEnhanced, 
  cardContentReveal,
  cardImageHover,
  cardBadgePop,
  fadeIn,
  slideUp
} from '@/lib/animations'

interface ProductsPageProps {
  page: ContentPage
}

export default function ProductsPage({ page }: ProductsPageProps) {
  const products = [
    {
      category: 'Motor Insurance',
      items: ['Third Party Only', 'Third Party, Fire & Theft', 'Comprehensive'],
      image: '/images/product_images/motor_insurance.webp',
      color: 'primary',
      description: 'Complete vehicle protection including liability, theft, and comprehensive coverage options.'
    },
    {
      category: 'Marine Insurance',
      description: 'Covers loss or damage to ships, cargo, and transport during shipment.',
      image: '/images/product_images/marine_insurance.webp',
      color: 'secondary',
      features: ['Ship protection', 'Cargo coverage', 'Transport security']
    },
    {
      category: 'Workmen\'s Compensation',
      description: 'Coverage for employer\'s liability due to injury or occupational disease.',
      image: '/images/product_images/workmens_compensation.webp',
      color: 'accent',
      features: ['Employer liability', 'Injury coverage', 'Occupational disease protection']
    },
    {
      category: 'Public Liability',
      description: 'Liability for third-party injury/property damage (mandatory under Act 1061).',
      image: '/images/product_images/public_liability.webp',
      color: 'primary',
      features: ['Third-party protection', 'Legal compliance', 'Comprehensive coverage']
    },
    {
      category: 'Health Insurance',
      description: 'Group and individual plans: OPD, surgery, hospitalization, evacuation, etc.',
      image: '/images/product_images/health_insurance.webp',
      color: 'accent',
      features: ['OPD coverage', 'Surgical benefits', 'Hospitalization', 'Emergency evacuation']
    },
    {
      category: 'Commercial Building Insurance',
      description: 'Mandatory cover for fire, collapse, earthquake, flood, etc.',
      image: '/images/product_images/commercial building_insurance.webp',
      color: 'secondary',
      features: ['Fire protection', 'Natural disaster coverage', 'Structural damage protection']
    },
    {
      category: 'Group Life Comprehensive Plan',
      description: 'Customizable 24-hour coverage for employee benefits.',
      image: '/images/product_images/group_life_comprehensive_plan.webp',
      color: 'primary',
      features: ['24-hour coverage', 'Employee benefits', 'Customizable plans']
    },
    {
      category: 'Assets All-Risk Insurance',
      description: 'Extensive protection against theft, damage, flood, breakdown, etc.',
      image: '/images/product_images/assets_all_risk.webp',
      color: 'accent',
      features: ['Theft protection', 'Damage coverage', 'Flood protection', 'Breakdown coverage']
    },
    {
      category: 'Combined Fire & Burglary',
      description: 'Business protection against both fire and theft.',
      image: '/images/product_images/combined_fire_burglary.webp',
      color: 'secondary',
      features: ['Fire protection', 'Theft coverage', 'Business security']
    },
    {
      category: 'Goods-in-Transit Insurance',
      description: 'Covers cargo in transit against fire, theft, collision, natural disasters.',
      image: '/images/product_images/goods_in_transit.webp',
      color: 'primary',
      features: ['Cargo protection', 'Transit security', 'Natural disaster coverage']
    },
    {
      category: 'Insurance Bonds/Guarantees',
      items: ['Bid Bonds', 'Performance Bonds', 'Advance Mobilization Bonds'],
      image: '/images/product_images/insurance_bonds_guarantees.webp',
      color: 'accent',
      description: 'Financial guarantees for business contracts and project execution.'
    },
    {
      category: 'Travel Insurance',
      description: 'Cover for baggage, delays, missed connections, emergency medical.',
      image: '/images/product_images/travel_insurance.webp',
      color: 'secondary',
      features: ['Baggage protection', 'Travel delays', 'Emergency medical coverage']
    },
    {
      category: 'Professional Indemnity',
      description: 'Covers professionals like doctors, nurses, etc.',
      image: '/images/product_images/professional_indemnity.webp',
      color: 'primary',
      features: ['Professional liability', 'Legal protection', 'Error coverage']
    }
  ]



  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-l-primary-600 bg-gradient-to-r from-primary-50 to-white'
      case 'secondary':
        return 'border-l-secondary-600 bg-gradient-to-r from-secondary-50 to-white'
      case 'accent':
        return 'border-l-accent-600 bg-gradient-to-r from-accent-50 to-white'
      default:
        return 'border-l-primary-600 bg-gradient-to-r from-primary-50 to-white'
    }
  }

  return (
    <PageLayout
      title="Our Products"
      description="Comprehensive insurance products covering all aspects of business and personal protection"
      content=""
      hasBanner={true}
      bannerImage="/images/banners/Banner4_0.webp"
      bannerAlt="Our Products Banner"
      showNavigation={true}
      prevPage={{ title: 'Our Services', href: '/about-us/services' }}
      nextPage={{ title: 'Our Team', href: '/about-us/team' }}
    >
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Comprehensive Insurance Solutions
        </h1>
        <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
          From motor vehicles to professional liability, we offer a complete range of insurance products 
          designed to protect what matters most to you and your business.
        </p>
      </motion.div>

      {/* Products Grid */}
      <motion.div 
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {products.map((product, index) => {
          return (
            <motion.div 
              key={product.category} 
              variants={cardItem}
              className="group relative"
            >
              <motion.div
                variants={cardHoverEnhanced}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="h-full"
              >
                <Card className={`h-full cursor-pointer ${getColorClasses(product.color)}`}>
                {/* Image Section - Top Half */}
                <div className="relative w-full h-56 bg-white border-b border-gray-100 overflow-hidden">
                  <motion.div 
                    className="w-full h-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Image
                      src={product.image}
                      alt={product.category}
                      fill
                      className="object-contain p-3 rounded-lg object-top"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                </div>
                
                {/* Content Section - Below Image */}
                <motion.div className="p-6 pt-8" variants={cardContentReveal}>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">
                    {product.category}
                  </h3>
                  
                  <p className="text-secondary-700 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {product.items ? (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-primary-800 mb-2">Coverage Options:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            variants={cardBadgePop}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: itemIndex * 0.1 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="bg-primary-100 text-primary-800 hover:bg-primary-200 text-xs px-3 py-1"
                            >
                              {item}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-primary-800 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features?.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            variants={cardBadgePop}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: featureIndex * 0.1 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="bg-accent-100 text-accent-800 hover:bg-accent-200 text-xs px-3 py-1"
                            >
                              {feature}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </Card>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <Card className="bg-gradient-to-r from-accent-50 to-primary-50 border-accent-200">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold text-accent-900 mb-4">
              Need a Custom Quote?
            </h3>
            <p className="text-secondary-700 mb-6 max-w-2xl mx-auto">
              Our insurance experts can tailor a package specifically for your needs. 
              Get competitive quotes and comprehensive coverage today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact-us" 
                className="inline-flex items-center justify-center px-6 py-3 bg-accent-900 text-white font-semibold rounded-lg hover:bg-accent-800 transition-colors"
              >
                Get a Quote
              </a>
              <a 
                href="/about-us/services" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent-900 text-accent-900 font-semibold rounded-lg hover:bg-accent-900 hover:text-white transition-colors"
              >
                Learn About Our Services
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const page = await getContentBySlug('our_products')
    
    if (!page) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        page
      }
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return {
      notFound: true
    }
  }
}
