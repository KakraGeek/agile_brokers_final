import { GetStaticProps } from 'next'
import { PageLayout } from '@/components/content/PageLayout'
import { getContentBySlug } from '@/lib/markdown'
import { ContentPage } from '@/lib/markdown'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
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

interface PartnersClientsPageProps {
  page: ContentPage
}

export default function PartnersClientsPage({ page }: PartnersClientsPageProps) {
  const partners = [
    {
      name: 'Ghana Police Service',
      logo: '/images/partner_logos/ghana-police-logo-removebg-preview.png'
    },
    {
      name: 'Ghana National Fire Service', 
      logo: '/images/partner_logos/fire_service-removebg-preview.png'
    },
    {
      name: 'State Transport Company',
      logo: '/images/partner_logos/state_transport_company-preview.png'
    },
    {
      name: 'Driver and Vehicle Licensing Authority (DVLA)',
      logo: '/images/partner_logos/DVLA-removebg-preview.png'
    }
  ]

  const clientSectors = [
    {
      sector: 'Construction/Civil Engineering',
      clients: ['ZDI Limited', 'Providence Ltd']
    },
    {
      sector: 'Banking & Finance',
      clients: ['Fiaseman Rural Bank Plc', 'Consolidated Bank Ghana Ltd']
    },
    {
      sector: 'Printing & Publishing',
      clients: ['Ideaz Printhouse Limited']
    },
    {
      sector: 'Car Rentals',
      clients: ['Dzakay Car Rentals', 'Jeken Car Rentals', 'Oliver Car Rentals']
    },
    {
      sector: 'Health/Pharmaceuticals',
      clients: ['Royale E&E Medicals Ltd', 'Barnor Hospital', 'Mediport Fertility']
    },
    {
      sector: 'Oil & Gas',
      clients: ['Magnify Petroleum Ltd', 'Energy Links Ltd']
    },
    {
      sector: 'Education',
      clients: ['Country Int School', 'Goshen Community School']
    },
    {
      sector: 'NGOs',
      clients: ['Rainforest Alliance']
    }
  ]



  return (
    <PageLayout
      title="Our Partners & Clients"
      description="Building strong relationships with leading institutions and serving diverse sectors across Ghana"
      content=""
      hasBanner={true}
      bannerImage="/images/banners/Banner2_0.webp"
      bannerAlt="Our Partners & Clients Banner"
      showNavigation={false}
    >
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Our Partners & Clients
        </h1>
        <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
          Building strong relationships with leading institutions and serving diverse sectors across Ghana. 
          Our partnerships enable us to deliver professional, compliant, and client-focused insurance services nationwide.
        </p>
      </motion.div>

      {/* Partners Section */}
      <motion.div 
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-primary-900 mb-6 text-center">
            Our Partners
          </h2>
          <p className="text-lg text-secondary-700 mb-8 text-center max-w-3xl mx-auto">
            Agile Insurance Brokers partners with all registered insurance companies in Ghana to offer the broadest and most competitive insurance solutions.
          </p>
          <p className="text-lg text-secondary-700 mb-8 text-center">
            We also maintain strong working relationships with the following key institutions:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div 
                key={partner.name} 
                variants={cardItem}
                className="group"
              >
                <motion.div
                  variants={cardHoverEnhanced}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Card className="bg-white rounded-lg p-6 text-center cursor-pointer shadow-md border border-primary-100">
                    <motion.div 
                      className="flex items-center justify-center mb-4"
                      variants={cardImageHover}
                      whileHover="hover"
                    >
                      <div className="relative w-20 h-20">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          fill
                          className="object-contain"
                          sizes="80px"
                        />
                      </div>
                    </motion.div>
                    <motion.div variants={cardContentReveal}>
                      <h3 className="font-semibold text-primary-900 text-sm leading-tight">
                        {partner.name}
                      </h3>
                    </motion.div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Clients Section */}
      <motion.div 
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-accent-900 mb-8 text-center">
          Some Major Clients
        </h2>
        <p className="text-lg text-secondary-700 mb-12 text-center max-w-3xl mx-auto">
          Since our inception, we have successfully provided top-tier broking services across various sectors of the Ghanaian economy. 
          Our clientele includes corporations, renowned local businesses, corporate groups, informal associations, and private individuals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientSectors.map((sector, index) => (
            <motion.div 
              key={sector.sector} 
              variants={cardItem}
              className="group"
            >
              <motion.div
                variants={cardHoverEnhanced}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Card className="bg-white rounded-lg shadow-md p-6 cursor-pointer border-l-4 border-accent-700">
                  <motion.div variants={cardContentReveal}>
                    <h3 className="text-xl font-semibold text-accent-900 mb-4">
                      {sector.sector}
                    </h3>
                  </motion.div>
                  <motion.ul 
                    className="space-y-2"
                    variants={cardContentReveal}
                  >
                    {sector.clients.map((client, clientIndex) => (
                      <motion.li 
                        key={clientIndex} 
                        className="flex items-center text-secondary-700"
                        variants={cardBadgePop}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: clientIndex * 0.1 }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent-600 mr-3" />
                        {client}
                      </motion.li>
                    ))}
                  </motion.ul>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const page = await getContentBySlug('our_partners_and_clients')
    
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
