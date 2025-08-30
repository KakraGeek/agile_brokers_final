import Head from 'next/head'
import { seoConfig, generateMetaDescription, generateTitle } from '@/lib/config/seo'

interface SEOHeadProps {
  page: string
  customTitle?: string
  customDescription?: string
  customKeywords?: string[]
  customImage?: string
  canonicalUrl?: string
  noIndex?: boolean
}

export function SEOHead({ 
  page, 
  customTitle, 
  customDescription, 
  customKeywords = [], 
  customImage,
  canonicalUrl,
  noIndex = false
}: SEOHeadProps) {
  const title = customTitle || generateTitle(page, customKeywords)
  const description = customDescription || generateMetaDescription(page, customKeywords)
  const image = customImage || seoConfig.socialMeta.image
  const url = canonicalUrl || `${seoConfig.socialMeta.url}/${page === 'home' ? '' : page}`
  
  // Combine all keywords for comprehensive SEO
  const allKeywords = [
    ...seoConfig.primaryKeywords,
    ...seoConfig.productKeywords.slice(0, 5),
    ...seoConfig.serviceKeywords.slice(0, 5),
    ...seoConfig.locationKeywords.slice(0, 3),
    ...customKeywords
  ].join(', ')

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="Agile Insurance Brokers Ltd" />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${seoConfig.socialMeta.url}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={seoConfig.socialMeta.type} />
      <meta property="og:site_name" content={seoConfig.socialMeta.siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* WhatsApp Specific Meta Tags */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content="Agile Insurance Brokers Ltd - Professional Insurance Services Ghana" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoConfig.socialMeta.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${seoConfig.socialMeta.url}${image}`} />
      <meta name="twitter:image:alt" content="Agile Insurance Brokers Ltd - Professional Insurance Services Ghana" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="GH" />
      <meta name="geo.placename" content="Adenta, Greater Accra, Ghana" />
      <meta name="geo.position" content="5.6870;-0.1645" />
      <meta name="ICBM" content="5.6870, -0.1645" />
      
      {/* Business Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InsuranceAgency",
            "name": "Agile Insurance Brokers Ltd",
            "description": description,
            "url": seoConfig.socialMeta.url,
            "logo": `${seoConfig.socialMeta.url}${image}`,
            "image": `${seoConfig.socialMeta.url}${image}`,
            "telephone": ["+233 244 104 087", "+233 248 290 188"],
            "email": "info@agilebrokersgh.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2 Kweku Boi St",
              "addressLocality": "Adenta",
              "addressRegion": "Greater Accra",
              "addressCountry": "GH",
              "postalCode": "00233"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 5.6870,
              "longitude": -0.1645
            },
            "openingHours": "Mo-Fr 08:00-17:00",
            "priceRange": "$$",
            "sameAs": [
              "https://agile-insurance-brokers.vercel.app/"
            ],
            "serviceArea": {
              "@type": "Country",
              "name": "Ghana"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Insurance Products",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Motor Insurance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Health Insurance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Insurance"
                  }
                }
              ]
            }
          })
        }}
      />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/brand/Logo.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/brand/Logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/brand/Logo.png" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  )
}
