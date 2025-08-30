import { GetStaticProps } from 'next'
import { PageLayout } from '@/components/content/PageLayout'
import { getContentBySlug } from '@/lib/markdown'
import { ContentPage } from '@/lib/markdown'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Award,
  Building2,
  Globe,
  Shield,
  TrendingUp
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

interface TeamPageProps {
  page: ContentPage
}

export default function TeamPage({ page }: TeamPageProps) {
  const teamMembers = [
    {
      name: 'Patrick Morttey',
      role: 'Board Chairman',
      description: 'Patrick Morttey is a distinguished finance and banking professional with extensive expertise in credit risk analysis, project financing, and value chain financing. With over three decades of experience in corporate and investment banking, he has successfully led and structured major financial transactions, including syndicated loans and strategic funding for large-scale projects in Ghana.',
      experience: 'As a former Deputy Head of Corporate Banking at GCB Bank PLC, he played a pivotal role in managing key corporate relationships, financing critical sectors like agriculture, oil & gas, and infrastructure. His contributions to financial re-engineering and commodity exchange development have significantly shaped Ghana\'s banking landscape.',
      education: 'He holds an MBA in Finance from the University of Ghana and is a certified ACCA Level 1 professional.',
      icon: User,
      color: 'primary',
      highlights: ['30+ years experience', 'Corporate Banking Expert', 'Project Financing Specialist']
    },
    {
      name: 'Love Aklasi',
      role: 'Board Member',
      description: 'Love Aklasi is a seasoned banking and financial services professional with over 15 years of experience in branch operations, sales, and customer relationship management. She has held key leadership roles in Fidelity Bank Ghana and United Bank for Africa, where she successfully drove profitability, optimized operations, and enhanced customer engagement.',
      education: 'She holds an MBA in Marketing from the University of Leicester and a BA in English from the University of Cape Coast.',
      icon: User,
      color: 'secondary',
      highlights: ['15+ years experience', 'Branch Operations Expert', 'Customer Relationship Specialist']
    },
    {
      name: 'Jemima Dei',
      role: 'Board Member',
      description: 'Jemima Dei is a distinguished legal practitioner with extensive experience in corporate finance, commercial litigation, and regulatory compliance. She is currently a Counsel at Kuenyehia & Nutsukpui, where she specializes in high-stakes commercial disputes, corporate advisory, and arbitration.',
      education: 'She holds an LLM in Corporate Finance & Law from the University of Aberdeen and is a qualified lawyer in Ghana.',
      icon: User,
      color: 'accent',
      highlights: ['Legal Expert', 'Corporate Finance Specialist', 'Regulatory Compliance']
    },
    {
      name: 'Emmanuel Kobla Obey',
      role: 'Managing Director',
      description: 'Mr. Emmanuel Kobla Obey is an insurance practitioner with experience from Trinity Insurance Brokers and Metrix Brokerage Ltd. He has been in the insurance industry for 10 years and has acquired rich experience in diverse fields. He is the Managing Director of Agile Insurance Brokers Ltd and is assisted by an Operations Manager and two senior officers.',
      icon: User,
      color: 'primary',
      highlights: ['10+ years experience', 'Insurance Practitioner', 'Operations Management']
    },
    {
      name: 'Desmond Owusu-Ansah',
      role: 'Marketing Officer',
      description: 'Results-driven insurance professional dedicated to delivering exceptional service and innovative solutions. With a strong work ethic and positive attitude, Desmond is committed to driving success at Agile Insurance Brokers Ltd., providing tailored insurance products and expertise to clients.',
      icon: User,
      color: 'secondary',
      highlights: ['Results-driven', 'Exceptional Service', 'Innovative Solutions']
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
      title="Our Board & Management"
      description="Meet the experienced professionals leading Agile Insurance Brokers Ltd"
      content=""
      hasBanner={true}
      bannerImage="/images/banners/Banner7_0.webp"
      bannerAlt="Our Team Banner"
      showNavigation={true}
      prevPage={{ title: 'Our Products', href: '/about-us/products' }}
      nextPage={{ title: 'Contact Us', href: '/contact-us' }}
    >
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Meet Our Leadership Team
        </h1>
        <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
          Our board and management team brings together decades of combined experience in finance, 
          banking, law, and insurance to provide you with the best possible service.
        </p>
      </motion.div>

      {/* Team Grid */}
      <motion.div 
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {teamMembers.map((member, index) => {
          const IconComponent = member.icon
          return (
            <motion.div 
              key={member.name} 
              variants={cardItem}
              className="group"
            >
              <motion.div
                variants={cardHoverEnhanced}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Card className={`h-full cursor-pointer ${getColorClasses(member.color)}`}>
                <CardHeader className="pb-6">
                  <div className="flex items-start space-x-4 mb-6">
                    <motion.div 
                      className={`p-4 rounded-xl bg-${member.color === 'primary' ? 'primary' : member.color === 'secondary' ? 'secondary' : 'accent'}-100`}
                      variants={cardIconFloat}
                      whileHover="hover"
                    >
                      <IconComponent className={`w-8 h-8 text-${member.color === 'primary' ? 'primary' : member.color === 'secondary' ? 'secondary' : 'accent'}-600`} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-2xl text-primary-900">
                          {member.name}
                        </CardTitle>
                        <motion.div
                          variants={cardBadgePop}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <Badge variant="outline" className="text-xs">
                            Member {index + 1}
                          </Badge>
                        </motion.div>
                      </div>
                      <CardDescription className="text-lg font-semibold text-accent-900">
                        {member.role}
                      </CardDescription>
                    </div>
                  </div>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.highlights.map((highlight, highlightIndex) => (
                      <motion.div
                        key={highlightIndex}
                        variants={cardBadgePop}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: highlightIndex * 0.1 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-xs bg-primary-100 text-primary-800"
                        >
                          {highlight}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-secondary-700 leading-relaxed">
                    <p>{member.description}</p>
                    {member.experience && (
                      <div className="flex items-start space-x-2">
                        <Briefcase className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                        <p className="text-sm">{member.experience}</p>
                      </div>
                    )}
                    <div className="flex items-start space-x-2">
                      <GraduationCap className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                      <p className="text-sm font-medium text-primary-800">{member.education}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Company Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16"
      >
        <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">
              Why Choose Our Team?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-primary-900 mb-2">Corporate Expertise</h4>
                <p className="text-secondary-700 text-sm">Decades of experience in corporate banking and finance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-secondary-600" />
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">Industry Knowledge</h4>
                <p className="text-secondary-700 text-sm">Deep understanding of Ghana's insurance landscape</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent-600" />
                </div>
                <h4 className="text-lg font-semibold text-accent-900 mb-2">Legal Compliance</h4>
                <p className="text-secondary-700 text-sm">Expert guidance on regulatory requirements</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center"
      >
        <Card className="bg-gradient-to-r from-accent-50 to-primary-50 border-accent-200">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold text-accent-900 mb-4">
              Ready to Work with Our Team?
            </h3>
            <p className="text-secondary-700 mb-6 max-w-2xl mx-auto">
              Our experienced professionals are ready to provide you with personalized insurance solutions 
              and exceptional service. Get in touch today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact-us" 
                className="inline-flex items-center justify-center px-6 py-3 bg-accent-900 text-white font-semibold rounded-lg hover:bg-accent-800 transition-colors"
              >
                Contact Our Team
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
    const page = await getContentBySlug('our_team')
    
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
