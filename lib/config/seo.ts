export const seoConfig = {
  // Primary Keywords (High Priority)
  primaryKeywords: [
    'insurance brokers ghana',
    'insurance brokerage services ghana',
    'agile insurance brokers ltd',
    'ghana insurance brokers',
    'insurance services ghana',
    'professional insurance brokers ghana',
    'insurance advisory ghana',
    'risk management ghana',
    'insurance solutions ghana'
  ],

  // Insurance Product Keywords
  productKeywords: [
    'motor insurance ghana',
    'car insurance ghana',
    'vehicle insurance ghana',
    'health insurance ghana',
    'life insurance ghana',
    'business insurance ghana',
    'commercial insurance ghana',
    'marine insurance ghana',
    'travel insurance ghana',
    'professional indemnity insurance ghana',
    'public liability insurance ghana',
    'workmens compensation ghana',
    'assets all risk insurance ghana',
    'fire and burglary insurance ghana',
    'goods in transit insurance ghana',
    'insurance bonds ghana',
    'performance bonds ghana',
    'bid bonds ghana'
  ],

  // Service Keywords
  serviceKeywords: [
    'insurance advisory services ghana',
    'risk assessment ghana',
    'claims management ghana',
    'insurance audits ghana',
    'policy reviews ghana',
    'premium negotiations ghana',
    'claims pre-financing ghana',
    'policy renewal ghana',
    'compliance alerts ghana',
    'insurance consultation ghana',
    'brokerage services ghana',
    'no cost insurance services ghana'
  ],

  // Location-Based Keywords
  locationKeywords: [
    'insurance brokers adenta ghana',
    'insurance services accra ghana',
    'insurance brokers greater accra',
    'ghana insurance brokerage',
    'insurance brokers west africa',
    'african insurance brokers',
    'ghanaian insurance company'
  ],

  // Industry-Specific Keywords
  industryKeywords: [
    'construction insurance ghana',
    'banking insurance ghana',
    'oil and gas insurance ghana',
    'healthcare insurance ghana',
    'education insurance ghana',
    'transportation insurance ghana',
    'ngo insurance ghana',
    'pharmaceutical insurance ghana',
    'car rental insurance ghana'
  ],

  // Long-tail Keywords
  longTailKeywords: [
    'best insurance brokers in ghana',
    'affordable insurance services ghana',
    'professional insurance consultation ghana',
    'comprehensive insurance coverage ghana',
    'reliable insurance brokers ghana',
    'experienced insurance advisors ghana',
    'trusted insurance partners ghana',
    'no cost insurance brokerage ghana',
    'ghana insurance market experts',
    'insurance risk management consultants ghana'
  ],

  // Meta Descriptions
  metaDescriptions: {
    home: 'Agile Insurance Brokers Ltd - Leading insurance brokerage firm in Ghana. Professional insurance services, risk management, and comprehensive coverage solutions. NO COST TO YOU. Get expert advice today!',
    about: 'Learn about Agile Insurance Brokers Ltd - Ghana\'s trusted insurance brokerage firm since 2019. Professional expertise, comprehensive services, and commitment to client protection.',
    services: 'Professional insurance advisory and risk management services in Ghana. Risk assessment, claims management, policy reviews, and premium negotiations. Expert consultation at NO COST.',
    products: 'Comprehensive insurance products in Ghana: Motor, Health, Life, Business, Marine, Travel, and Professional Indemnity. Tailored coverage solutions for all your needs.',
    team: 'Meet our experienced insurance professionals at Agile Insurance Brokers Ltd. Board members, managing director, and dedicated team committed to your protection.',
    contact: 'Contact Agile Insurance Brokers Ltd in Ghana. Get expert insurance advice, quotes, and support. Located in Adenta, serving nationwide. Call or visit us today!',
    partners: 'Our trusted partners and major clients across Ghana. Collaborating with leading institutions and serving diverse sectors with professional insurance solutions.'
  },

  // Social Media Meta Tags
  socialMeta: {
    title: 'Agile Insurance Brokers Ltd - Professional Insurance Services Ghana',
    description: 'Leading insurance brokerage firm in Ghana providing comprehensive insurance solutions, risk management, and expert advisory services. NO COST TO YOU. Get protected today!',
    image: '/brand/Logo.png',
    url: 'https://agilebrokersgh.com',
    siteName: 'Agile Insurance Brokers Ltd',
    twitterHandle: '@agilebrokersgh',
    type: 'website'
  }
}

// Generate comprehensive meta description with keywords
export const generateMetaDescription = (page: string, customKeywords: string[] = []) => {
  const baseDescription = seoConfig.metaDescriptions[page as keyof typeof seoConfig.metaDescriptions] || seoConfig.metaDescriptions.home
  
  const relevantKeywords = [
    ...seoConfig.primaryKeywords.slice(0, 3),
    ...customKeywords.slice(0, 2)
  ].join(', ')
  
  return `${baseDescription} ${relevantKeywords}.`
}

// Generate title with keywords
export const generateTitle = (page: string, customKeywords: string[] = []) => {
  const baseTitles: Record<string, string> = {
    home: 'Agile Insurance Brokers Ltd - Professional Insurance Services Ghana',
    about: 'About Us - Agile Insurance Brokers Ltd Ghana',
    services: 'Insurance Services - Agile Insurance Brokers Ltd Ghana',
    products: 'Insurance Products - Agile Insurance Brokers Ltd Ghana',
    team: 'Our Team - Agile Insurance Brokers Ltd Ghana',
    contact: 'Contact Us - Agile Insurance Brokers Ltd Ghana',
    partners: 'Partners & Clients - Agile Insurance Brokers Ltd Ghana'
  }
  
  const baseTitle = baseTitles[page] || baseTitles.home
  const keyword = customKeywords[0] || 'Insurance Brokers Ghana'
  
  return `${baseTitle} | ${keyword}`
}
