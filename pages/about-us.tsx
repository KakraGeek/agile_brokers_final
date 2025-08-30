import { GetStaticProps } from 'next'
import { motion } from 'framer-motion'
import { PageLayout } from '@/components/content/PageLayout'
import { getContentBySlug, getAllContentPages } from '@/lib/markdown'
import { ContentPage } from '@/lib/markdown'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  fadeIn, 
  slideUp, 
  staggerContainer,
  cardStagger,
  cardItem,
  cardHoverEnhanced,
  cardContentReveal
} from '@/lib/animations'
import { 
  Shield, 
  Users, 
  Target, 
  Award,
  Building,
  Globe,
  CheckCircle2
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'

interface AboutUsPageProps {
  page: ContentPage
  subPages: ContentPage[]
}

export default function AboutUsPage({ page, subPages }: AboutUsPageProps) {
  const companyFeatures = [
    {
      icon: Shield,
      title: "Professional Expertise",
      description: "Authorized to transact business with all registered insurance companies in Ghana",
      color: "primary"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Committed to protecting businesses, people, and assets across Ghana",
      color: "secondary"
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Provide customized, affordable insurance solutions for your specific needs",
      color: "accent"
    },
    {
      icon: Award,
      title: "Exceptional Service",
      description: "Backed by professional advice and dedicated support team",
      color: "primary"
    },
    {
      icon: Building,
      title: "Ghanaian-Owned",
      description: "Local expertise with deep understanding of Ghana's business environment",
      color: "secondary"
    },
    {
      icon: Globe,
      title: "Nationwide Coverage",
      description: "Serving clients across all regions of Ghana with comprehensive protection",
      color: "accent"
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary-200 hover:border-primary-300'
      case 'secondary':
        return 'border-secondary-200 hover:border-secondary-300'
      case 'accent':
        return 'border-accent-200 hover:border-accent-300'
      default:
        return 'border-gray-200 hover:border-gray-300'
    }
  }

  return (
    <>
      <SEOHead 
        page="about"
        customKeywords={[
          'about agile insurance brokers',
          'ghanaian insurance company',
          'insurance brokerage firm ghana',
          'professional insurance expertise',
          'authorized insurance brokers',
          'local insurance experts ghana',
          'insurance company history ghana',
          'trusted insurance partners'
        ]}
        customImage="/brand/Logo.png"
      />
      <PageLayout
        title={page.title}
        description={page.description}
        content=""
        hasBanner={true}
        bannerImage="/images/banners/Banner11_0.webp"
        bannerAlt="About Us Banner"
        showNavigation={false}
      >
        {/* Company Overview Card */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-primary-900 mb-4">
                Our Story
              </CardTitle>
              <CardDescription className="text-lg text-secondary-700 max-w-3xl mx-auto">
                We were incorporated in 2019 and are authorized to transact business with all 
                registered insurance companies in the country. Our focus is to provide tailored, 
                affordable insurance solutions backed by professional advice and support.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary-600">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">Authorized Insurance Broker</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Company Features Grid */}
        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Why Choose Agile Insurance Brokers?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Discover what makes us the trusted choice for insurance solutions in Ghana
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={cardItem}
                  className="group"
                >
                  <motion.div
                    variants={cardHoverEnhanced}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Card className={`h-full cursor-pointer ${getColorClasses(feature.color)}`}>
                      <CardHeader className="text-center pb-4">
                        <motion.div
                          className={`mx-auto w-16 h-16 bg-${feature.color === 'primary' ? 'primary' : feature.color === 'secondary' ? 'secondary' : 'accent'}-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-${feature.color === 'primary' ? 'primary' : feature.color === 'secondary' ? 'secondary' : 'accent'}-100 transition-colors duration-300`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className={`w-8 h-8 text-${feature.color === 'primary' ? 'primary' : feature.color === 'secondary' ? 'secondary' : 'accent'}-600`} />
                        </motion.div>
                        <motion.div variants={cardContentReveal}>
                          <CardTitle className="text-xl text-primary-900">{feature.title}</CardTitle>
                        </motion.div>
                      </CardHeader>
                      <CardContent className="text-center">
                        <motion.p
                          className="text-secondary-600"
                          variants={cardContentReveal}
                        >
                          {feature.description}
                        </motion.p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Sub-pages Navigation */}
        {subPages.length > 0 && (
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16"
          >
            <motion.div
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Explore More About Us
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                Dive deeper into our services, products, and team
              </p>
            </motion.div>

            <motion.div
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {subPages.map((subPage, index) => (
                <motion.div
                  key={subPage.slug}
                  variants={cardItem}
                  className="group"
                >
                  <motion.div
                    variants={cardHoverEnhanced}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Card className="h-full cursor-pointer border-2 border-gray-200 hover:border-primary-300 transition-all duration-300 group">
                      <a href={subPage.slug === 'our_services' ? '/about-us/services' : 
                                subPage.slug === 'our_products' ? '/about-us/products' : 
                                subPage.slug === 'our_team' ? '/about-us/team' : '#'} 
                         className="block h-full">
                        <CardHeader className="text-center pb-4">
                          <motion.div
                            className="mx-auto w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {subPage.slug === 'our_services' && <Shield className="w-8 h-8 text-primary-600" />}
                            {subPage.slug === 'our_products' && <Target className="w-8 h-8 text-primary-600" />}
                            {subPage.slug === 'our_team' && <Users className="w-8 h-8 text-primary-600" />}
                          </motion.div>
                          <motion.div variants={cardContentReveal}>
                            <CardTitle className="text-xl text-primary-900">
                              {subPage.title}
                            </CardTitle>
                          </motion.div>
                        </CardHeader>
                        <CardContent className="text-center">
                          <motion.div variants={cardContentReveal}>
                            {subPage.description && (
                              <p className="text-secondary-600 mb-6 leading-relaxed">
                                {subPage.description}
                              </p>
                            )}
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
                                Learn More
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </motion.div>
                          </motion.div>
                        </CardContent>
                      </a>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </PageLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Get the main About Us page
    const page = await getContentBySlug('about_us')
    
    if (!page) {
      return {
        notFound: true
      }
    }

    // Get sub-pages
    const allPages = await getAllContentPages()
    const subPages = allPages.filter(p => 
      ['our_services', 'our_products', 'our_team'].includes(p.slug)
    )

    return {
      props: {
        page,
        subPages
      }
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return {
      notFound: true
    }
  }
}
