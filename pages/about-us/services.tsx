import { GetStaticProps } from 'next'
import { PageLayout } from '@/components/content/PageLayout'
import { getContentBySlug } from '@/lib/markdown'
import { ContentPage } from '@/lib/markdown'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { 
  Search, 
  FileText, 
  BarChart3, 
  DollarSign, 
  Users2, 
  Clock,
  Shield,
  TrendingUp,
  AlertTriangle,
  Calculator,
  Users,
  Calendar
} from 'lucide-react'
import { 
  cardStagger, 
  cardItem, 
  cardHoverEnhanced, 
  cardContentReveal,
  cardIconFloat,
  cardBadgePop,
  fadeIn,
  slideUp
} from '@/lib/animations'

interface ServicesPageProps {
  page: ContentPage
}

export default function ServicesPage({ page }: ServicesPageProps) {
  const services = [
    {
      title: 'Risk Assessment & Advisory',
      description: 'We conduct thorough risk evaluations and place coverage with reputable insurers capable of handling claims promptly and efficiently.',
      icon: Shield,
      color: 'primary',
      features: ['Comprehensive risk analysis', 'Insurance placement', 'Claims efficiency optimization']
    },
    {
      title: 'Claims Management',
      description: 'We oversee the entire claims process from the accident scene to full settlement, allowing you to focus on your core business.',
      icon: FileText,
      color: 'accent',
      features: ['End-to-end claims handling', 'Business continuity support', 'Settlement optimization']
    },
    {
      title: 'Insurance Audits & Policy Reviews',
      description: 'We assess your current policies, recommend appropriate coverage, and ensure you\'re adequately covered.',
      icon: BarChart3,
      color: 'secondary',
      features: ['Policy assessment', 'Coverage recommendations', 'Adequacy verification']
    },
    {
      title: 'Claims Pre-financing',
      description: 'In select cases, we facilitate advance claim payments under special terms to ease financial strain.',
      icon: TrendingUp,
      color: 'accent',
      features: ['Advance payments', 'Special terms', 'Financial relief']
    },
    {
      title: 'Premium Negotiations',
      description: 'We secure the most competitive premium rates to help you save on costs.',
      icon: Users,
      color: 'primary',
      features: ['Rate optimization', 'Cost savings', 'Competitive pricing']
    },
    {
      title: 'Policy Renewal & Compliance Alerts',
      description: 'We manage renewals, updates, and compliance for vehicle insurance, roadworthiness certificates, and driver\'s licenses.',
      icon: Calendar,
      color: 'secondary',
      features: ['Renewal management', 'Compliance monitoring', 'Documentation updates']
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
      title="Our Services"
      description="Professional insurance brokerage services designed to enhance your risk management strategies"
      content=""
      hasBanner={true}
      bannerImage="/images/banners/Banner9_0.webp"
      bannerAlt="Professional Insurance Services Banner"
      showNavigation={true}
      prevPage={{ title: 'About Us', href: '/about-us' }}
      nextPage={{ title: 'Our Products', href: '/about-us/products' }}
    >
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Professional Insurance Services
        </h1>
        <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
          We provide peace of mind to our clients through sound insurance and exceptional service. 
          Our comprehensive brokerage services are designed to enhance your risk management strategies.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <motion.div 
              key={service.title} 
              variants={cardItem}
              className="group"
            >
              <motion.div
                variants={cardHoverEnhanced}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Card className={`h-full cursor-pointer ${getColorClasses(service.color)}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <motion.div 
                      className={`p-3 rounded-lg bg-${service.color === 'primary' ? 'primary' : service.color === 'secondary' ? 'secondary' : 'accent'}-100`}
                      variants={cardIconFloat}
                      whileHover="hover"
                    >
                      <IconComponent className={`w-6 h-6 text-${service.color === 'primary' ? 'primary' : service.color === 'secondary' ? 'secondary' : 'accent'}-600`} />
                    </motion.div>
                  </div>
                                      <motion.div variants={cardContentReveal}>
                      <CardTitle className="text-xl text-primary-900">
                        {service.title}
                      </CardTitle>
                    </motion.div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-secondary-700 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary-800 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge 
                          key={featureIndex} 
                          variant="secondary" 
                          className={`bg-${service.color === 'primary' ? 'primary' : service.color === 'secondary' ? 'secondary' : 'accent'}-100 text-${service.color === 'primary' ? 'primary' : service.color === 'secondary' ? 'secondary' : 'accent'}-800 hover:bg-${service.color === 'primary' ? 'primary' : service.color === 'secondary' ? 'secondary' : 'accent'}-200 text-xs px-3 py-1`}
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
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
        <Card className="bg-gradient-to-r from-primary-50 to-accent-50 border-primary-200">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              Ready to Get Protected?
            </h3>
            <p className="text-secondary-700 mb-6 max-w-2xl mx-auto">
              Our team of insurance professionals is ready to assess your needs and provide 
              tailored solutions that protect what matters most to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact-us" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-900 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
              >
                Get Started Today
              </a>
              <a 
                href="/about-us/products" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-900 text-primary-900 font-semibold rounded-lg hover:bg-primary-900 hover:text-white transition-colors"
              >
                View Our Products
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
    const page = await getContentBySlug('our_services')
    
    // Provide fallback content if markdown is not available
    const fallbackPage = {
      slug: 'our_services',
      title: 'Our Services',
      description: 'Professional insurance brokerage services designed to enhance your risk management strategies',
      content: ''
    }

    return {
      props: {
        page: page || fallbackPage
      }
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    // Return fallback content instead of notFound
    return {
      props: {
        page: {
          slug: 'our_services',
          title: 'Our Services',
          description: 'Professional insurance brokerage services designed to enhance your risk management strategies',
          content: ''
        }
      }
    }
  }
}
