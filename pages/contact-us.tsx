import { GetStaticProps } from 'next'
import { motion } from 'framer-motion'
import { PageLayout } from '@/components/content/PageLayout'
import { getContentBySlug } from '@/lib/markdown'
import { ContentPage } from '@/lib/markdown'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle2
} from 'lucide-react'
import { fadeIn, slideUp } from '@/lib/animations'
import { useState } from 'react'
import { SEOHead } from '@/components/seo/SEOHead'

interface ContactUsPageProps {
  page: ContentPage
}

export default function ContactUsPage({ page }: ContactUsPageProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      
      // Reset form after success
      setTimeout(() => {
        setSubmitStatus('idle')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
      }, 3000)
    }, 1000)
  }

  const isBusinessOpen = () => {
    const now = new Date()
    const ghanaTime = new Date(now.toLocaleString("en-US", {timeZone: "Africa/Accra"}))
    const day = ghanaTime.getDay()
    const hour = ghanaTime.getHours()
    
    // Monday to Friday, 8 AM to 5 PM
    return day >= 1 && day <= 5 && hour >= 8 && hour < 17
  }

  return (
    <>
      <SEOHead 
        page="contact"
        customKeywords={[
          'contact agile insurance brokers',
          'insurance consultation ghana',
          'get insurance quote ghana',
          'insurance advice ghana',
          'visit insurance brokers ghana',
          'insurance office adenta ghana',
          'insurance phone numbers ghana',
          'emergency insurance support ghana'
        ]}
        customImage="/brand/Logo.png"
      />
      <PageLayout
        title="Contact Us"
        description="Get in touch with Agile Insurance Brokers Ltd for professional insurance solutions"
        content=""
        hasBanner={true}
        bannerImage="/images/banners/Banner3_0.webp"
        bannerAlt="Contact Us Banner"
        showNavigation={false}
      >
        {/* Contact Form and Information Section */}
        <div className="mt-16 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Side: Contact Info + Map Stacked */}
            <div className="order-2 lg:order-1 space-y-8">
              {/* Contact Information Card */}
              <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-2xl p-8 border-2 border-primary-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full mb-4 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    Contact Us
                  </h2>
                  <p className="text-secondary-600 mt-2">Get in touch with our team</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl border border-primary-100 hover:bg-white/80 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-800 mb-1">Main Office</h3>
                      <p className="text-secondary-700 text-sm">
                        Romick Plaza, Kweku Boi Street, Adenta
                      </p>
                      <p className="text-xs text-primary-600 font-mono bg-primary-50 px-2 py-1 rounded mt-1 inline-block">
                        GPS: GD-009-1766
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl border border-primary-100 hover:bg-white/80 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-800 mb-1">Email</h3>
                      <a 
                        href="mailto:info@agilebrokersgh.com"
                        className="text-accent-700 hover:text-accent-900 font-medium text-sm transition-colors hover:underline"
                      >
                        info@agilebrokersgh.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl border border-primary-100 hover:bg-white/80 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-800 mb-1">Mobile</h3>
                      <div className="space-y-1">
                        <a 
                          href="tel:+233244104087"
                          className="block text-primary-700 hover:text-primary-900 font-medium text-sm transition-colors hover:underline"
                        >
                          +233 244 104 087
                        </a>
                        <a 
                          href="tel:+233248290188"
                          className="block text-primary-700 hover:text-primary-900 font-medium text-sm transition-colors hover:underline"
                        >
                          +233 248 290 188
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl border border-primary-100 hover:bg-white/80 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-secondary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-800 mb-1">Business Hours</h3>
                      <p className="text-secondary-700 text-sm">
                        Monday - Friday: 8:00 AM - 5:00 PM
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        {(() => {
                          const status = isBusinessOpen() ? { isOpen: true, status: "Open Now", color: "green" } : { isOpen: false, status: "Closed Today", color: "red" };
                          return (
                            <>
                              <div 
                                className={`w-2 h-2 rounded-full ${
                                  status.color === 'green' ? 'bg-green-500 animate-pulse' :
                                  'bg-red-500'
                                }`}
                              ></div>
                              <span className={`text-xs font-medium ${
                                status.color === 'green' ? 'text-green-600' :
                                'text-red-600'
                              }`}>
                                {status.status}
                              </span>
                            </>
                          )
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Location */}
              <div className="relative">
                {/* Map title overlay */}
                <div className="absolute -top-3 left-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-2 rounded-lg shadow-lg z-10">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-semibold">Our Location</span>
                  </div>
                </div>
                
                {/* Decorative border frame */}
                <div className="bg-gradient-to-br from-primary-200 via-accent-200 to-secondary-200 rounded-2xl p-1 shadow-lg">
                  <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl p-2">
                    <div className="bg-white rounded-lg p-1">
                      <div style={{position:'relative',paddingBottom:'75%',height:'0',overflow:'hidden',borderRadius:'8px'}}>
                        <iframe
                          title="2 Kweku Boi St, Adenta Municipality"
                          src="https://maps.google.com/maps?ll=5.708582,-0.16538&z=17&t=m&hl=en&q=2%20Kweku%20Boi%20St%2C%20Adenta%20Municipality&output=embed"
                          style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%',border:'0'}}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="order-1 lg:order-2">
              <Card className="border-primary-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-900 text-center">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-secondary-600 text-center">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 text-green-800">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium">Message sent successfully!</span>
                      </div>
                      <p className="text-green-700 text-sm mt-1">
                        Your message has been prepared. Please check your email client to send it to info@agilebrokersgh.com
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2 text-red-800">
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                          <Send className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium">Something went wrong</span>
                      </div>
                      <p className="text-red-700 text-sm mt-1">
                        Please try again or contact us directly at info@agilebrokersgh.com
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="block text-sm font-medium text-primary-900 mb-2">
                          First Name *
                        </Label>
                        <Input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="block text-sm font-medium text-primary-900 mb-2">
                          Last Name *
                        </Label>
                        <Input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                        Email Address *
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="block text-sm font-medium text-primary-900 mb-2">
                        Phone Number
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service" className="block text-sm font-medium text-primary-900 mb-2">
                        Subject *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)} value={formData.service}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                          <SelectItem value="Request a Quote">Request a Quote</SelectItem>
                          <SelectItem value="Claims Support">Claims Support</SelectItem>
                          <SelectItem value="Policy Information">Policy Information</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-2">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                        placeholder="Tell us how we can help you..."
                      ></Textarea>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary-900 hover:bg-primary-800 disabled:bg-primary-400 text-lg py-3 transition-colors"
                    >
                      {isSubmitting ? 'Preparing Message...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const page = await getContentBySlug('contact_us')
    
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
