'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MessageCircle, X } from 'lucide-react'
import { Button } from './button'
import { contactConfig } from '@/lib/config/contact'

interface FloatingActionButtonProps {
  phoneNumber?: string
  email?: string
  whatsappNumber?: string
}

export function FloatingActionButton({ 
  phoneNumber = contactConfig.phone,
  email = contactConfig.email,
  whatsappNumber = contactConfig.whatsapp
}: FloatingActionButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, '_self')
  }

  const handleEmail = () => {
    const subject = encodeURIComponent('Insurance Inquiry - Agile Insurance Brokers')
    const body = encodeURIComponent(`Hello,\n\nI would like to learn more about your insurance services.\n\nPlease contact me at your earliest convenience.\n\nBest regards,`)
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_self')
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to learn more about your insurance services at Agile Insurance Brokers Ltd.')
    window.open(`https://wa.me/${whatsappNumber.replace(/\s/g, '')}?text=${message}`, '_blank')
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 pointer-events-none">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 space-y-2 md:space-y-3 pointer-events-auto"
          >
            {/* Call Us */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            >
              <Button
                onClick={handleCall}
                className="flex items-center gap-2 md:gap-3 bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-3 md:px-4 py-2 md:py-3 rounded-full text-sm md:text-base"
                size="lg"
                aria-label={`Call us at ${phoneNumber}`}
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium">Call Us</span>
              </Button>
            </motion.div>

            {/* Email Us */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              <Button
                onClick={handleEmail}
                className="flex items-center gap-2 md:gap-3 bg-secondary-600 hover:bg-secondary-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-3 md:px-4 py-2 md:py-3 rounded-full text-sm md:text-base"
                size="lg"
                aria-label={`Email us at ${email}`}
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium">Email Us</span>
              </Button>
            </motion.div>

            {/* WhatsApp Us */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.2 }}
            >
              <Button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 md:gap-3 bg-accent-600 hover:bg-accent-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-3 md:px-4 py-2 md:py-3 rounded-full text-sm md:text-base"
                size="lg"
                aria-label={`WhatsApp us at ${whatsappNumber}`}
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium">WhatsApp Us</span>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="group relative pointer-events-auto"
      >
        <Button
          onClick={toggleExpanded}
          className="w-12 h-20 md:w-14 md:h-24 bg-[#110273] hover:bg-[#0D0159] text-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-full flex items-center justify-center"
          size="icon"
          aria-label={isExpanded ? "Close communication options" : "Open communication options"}
          title={isExpanded ? "Close communication options" : "Open communication options"}
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="icons"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-3 md:gap-4 py-3 md:py-4"
              >
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
            Quick Contact
          </div>
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
        </div>
      </motion.div>
    </div>
  )
}
