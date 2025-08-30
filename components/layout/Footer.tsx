'use client'

import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  Building2, 
  Users,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { fadeIn, slideUp } from '@/lib/animations'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about-us' },
        { label: 'Our Services', href: '/about-us/services' },
        { label: 'Our Products', href: '/about-us/products' },
        { label: 'Our Team', href: '/about-us/team' }
      ]
    },
    {
      title: 'Products',
      links: [
        { label: 'Motor Insurance', href: '/about-us/products' },
        { label: 'Health Insurance', href: '/about-us/products' },
        { label: 'Business Insurance', href: '/about-us/products' },
        { label: 'Life Insurance', href: '/about-us/products' }
      ]
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ]

  return (
    <motion.footer 
      className="bg-[#73103E] text-white"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Main Footer Content */}
      <div className="container-custom py-16">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-1"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-auto">
                <Image
                  src="/brand/footer_logo.jpg"
                  alt="Agile Insurance Brokers Ltd"
                  width={120}
                  height={48}
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Protecting businesses, people, and assets across Ghana with professional insurance solutions.
            </p>
            <div className="space-y-3 text-sm text-secondary-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <div className="space-y-1">
                  <div>+233 244 104 087</div>
                  <div>+233 248 290 188</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span>info@agilebrokersgh.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <div>
                  <div>Romick Plaza, Kweku Boi Street</div>
                  <div>Adenta, Ghana</div>
                  <div className="text-xs">GPS: GD-009-1766</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div 
              key={section.title}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-bold text-xl mb-6 text-white border-b border-[#8C84BF] pb-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-secondary-300 hover:text-primary-400 transition-all duration-200 text-base hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#8C84BF]">
        <div className="container-custom py-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="text-sm text-secondary-400 text-center">
              © {currentYear} Agile Insurance Brokers Ltd. All rights reserved. | Powered by The Geek Toolbox.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-secondary-400 hover:text-primary-400 transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
