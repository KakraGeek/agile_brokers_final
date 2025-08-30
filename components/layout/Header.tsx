'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { navVariants, dropdownVariants } from '@/lib/animations'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface NavigationItem {
  label: string
  href: string
  hasDropdown?: boolean
  dropdownItems?: { label: string; href: string }[]
}

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'About Us', 
    href: '/about-us',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Our Services', href: '/about-us/services' },
      { label: 'Our Products', href: '/about-us/products' },
      { label: 'Our Team', href: '/about-us/team' }
    ]
  },
  { label: 'Partners & Clients', href: '/partners-clients' },
  { label: 'Contact', href: '/contact-us' }
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  
  // Check if current page is Contact page
  const isContactPage = router.pathname === '/contact-us'

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-custom">
        <div className="flex h-32 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="h-28 w-auto">
              <Image
                src="/brand/Logo.png"
                alt="Agile Insurance Brokers Ltd"
                width={400}
                height={112}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={item.href} className="mx-1">
                    {item.hasDropdown ? (
                      <div className="relative group">
                        {/* Main About Us Button - Clickable */}
                        <a
                          href={item.href}
                          className="h-16 px-6 text-foreground hover:text-primary-900 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium flex items-center cursor-pointer group"
                        >
                          {item.label}
                          <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:rotate-180" />
                        </a>
                        
                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                          <motion.ul 
                            className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-xl shadow-lg border border-gray-100"
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            {item.dropdownItems?.map((dropdownItem) => (
                              <li key={dropdownItem.href}>
                                <a
                                  href={dropdownItem.href}
                                  className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-primary-50 hover:text-primary-900 focus:bg-primary-50 focus:text-primary-900 group"
                                >
                                  <div className="text-sm font-semibold leading-none group-hover:text-primary-900">
                                    {dropdownItem.label}
                                  </div>
                                  <div className="text-xs text-muted-foreground group-hover:text-primary-700">
                                    Learn more about our {dropdownItem.label.toLowerCase()}
                                  </div>
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        </div>
                      </div>
                    ) : (
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className="h-16 px-6 text-foreground hover:text-primary-900 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium flex items-center"
                        >
                          {item.label}
                        </a>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Button - Hidden on Contact page */}
          {!isContactPage && (
            <div className="hidden lg:flex">
              <Button asChild size="lg" className="px-8 py-3 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 bg-accent-900 hover:bg-accent-800 h-16">
                <a href="/contact-us">Get Quote</a>
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-5 h-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px] bg-white">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Logo in mobile menu */}
                  <div className="flex items-center space-x-3 pb-6 border-b border-gray-200">
                    <div className="h-16 w-auto">
                      <Image
                        src="/brand/Logo.png"
                        alt="Agile Insurance Brokers Ltd"
                        width={200}
                        height={64}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Navigation Items */}
                  <div className="space-y-4">
                    {navigationItems.map((item) => (
                      <div key={item.href} className="space-y-3">
                        {item.hasDropdown ? (
                          <div className="space-y-3">
                            <a
                              href={item.href}
                              className="font-bold text-lg text-primary-900 border-l-4 border-primary-600 pl-4 py-2 bg-primary-50 rounded-r-lg hover:bg-primary-100 transition-colors duration-200 cursor-pointer"
                            >
                              {item.label}
                            </a>
                            <div className="pl-6 space-y-2">
                              {item.dropdownItems?.map((dropdownItem) => (
                                <a
                                  key={dropdownItem.href}
                                  href={dropdownItem.href}
                                  className={`block text-base transition-all duration-200 py-2 px-3 rounded-lg border-l-4 ${
                                    router.pathname === dropdownItem.href
                                      ? 'text-primary-900 bg-primary-50 border-primary-600 font-semibold'
                                      : 'text-muted-foreground hover:text-primary-900 hover:bg-primary-50 border-transparent hover:border-primary-400'
                                  }`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <div className="flex items-center justify-between">
                                    <span>{dropdownItem.label}</span>
                                    {router.pathname === dropdownItem.href && (
                                      <span className="text-xs bg-primary-600 text-white px-2 py-1 rounded-full">
                                        Current
                                      </span>
                                    )}
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <a
                            href={item.href}
                            className={`block font-semibold text-lg transition-all duration-200 py-3 px-4 rounded-lg border-l-4 ${
                              router.pathname === item.href
                                ? 'text-primary-900 bg-primary-50 border-primary-600'
                                : 'text-foreground hover:text-primary-900 hover:bg-primary-50 border-transparent hover:border-primary-400'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center justify-between">
                              <span>{item.label}</span>
                              {router.pathname === item.href && (
                                <span className="text-xs bg-primary-600 text-white px-2 py-1 rounded-full">
                                  Active
                                </span>
                              )}
                            </div>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Mobile CTA Button - Hidden on Contact page */}
                  {!isContactPage && (
                    <div className="pt-6 border-t border-gray-200">
                      <Button asChild className="w-full h-12 text-base font-semibold bg-accent-900 hover:bg-accent-800 shadow-lg hover:shadow-xl transition-all duration-200">
                        <a href="/contact-us">Get Free Quote</a>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
