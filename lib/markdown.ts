import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Types for our content
export interface MarkdownContent {
  slug: string
  title: string
  description?: string
  content: string
  frontMatter: Record<string, any>
  filePath: string
}

export interface ContentPage {
  slug: string
  title: string
  description?: string
  content: string
  order?: number
  hasBanner?: boolean
  sections?: string[]
  subPages?: ContentPage[]
}

// Get all Markdown files from a directory
export function getMarkdownFiles(dirPath: string): string[] {
  const files: string[] = []
  
  function scanDirectory(currentPath: string) {
    const items = fs.readdirSync(currentPath)
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath)
      } else if (item.endsWith('.md')) {
        files.push(fullPath)
      }
    }
  }
  
  scanDirectory(dirPath)
  return files
}

// Parse a single Markdown file
export async function parseMarkdownFile(filePath: string): Promise<MarkdownContent> {
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  
  // Convert Markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(content)
  
  const htmlContent = processedContent.toString()
  
  // Generate slug from file path
  const relativePath = path.relative(process.cwd(), filePath)
  const slug = relativePath
    .replace(/\.md$/, '')
    .replace(/\\/g, '/') // Windows path fix
    .split('/')
    .pop() || 'index'
  
  return {
    slug,
    title: data.title || slug,
    description: data.description,
    content: htmlContent,
    frontMatter: data,
    filePath
  }
}

// Get all content pages from content_pages directory
export async function getAllContentPages(): Promise<ContentPage[]> {
  const contentDir = path.join(process.cwd(), 'content_pages')
  const files = getMarkdownFiles(contentDir)
  
  const pages: ContentPage[] = []
  
  for (const file of files) {
    try {
      const parsed = await parseMarkdownFile(file)
      
      // Extract additional metadata
      const order = parsed.frontMatter.order || 999
      const hasBanner = parsed.frontMatter.hasBanner || false
      const sections = parsed.frontMatter.sections || []
      
      pages.push({
        slug: parsed.slug,
        title: parsed.title || parsed.slug,
        description: parsed.description || `Learn more about ${parsed.title || parsed.slug}`,
        content: parsed.content,
        order,
        hasBanner,
        sections
      })
    } catch (error) {
      console.error(`Error parsing ${file}:`, error)
    }
  }
  
  // Sort by order
  return pages.sort((a, b) => (a.order || 999) - (b.order || 999))
}

// Get content for a specific page by slug
export async function getContentBySlug(slug: string): Promise<ContentPage | null> {
  const contentDir = path.join(process.cwd(), 'content_pages')
  const files = getMarkdownFiles(contentDir)
  
  for (const file of files) {
    try {
      const parsed = await parseMarkdownFile(file)
      if (parsed.slug === slug) {
        return {
          slug: parsed.slug,
          title: parsed.title || slug,
          description: parsed.description || `Learn more about ${parsed.title || slug}`,
          content: parsed.content,
          order: parsed.frontMatter.order || 999,
          hasBanner: parsed.frontMatter.hasBanner || false,
          sections: parsed.frontMatter.sections || []
        }
      }
    } catch (error) {
      console.error(`Error parsing ${file}:`, error)
    }
  }
  
  return null
}

// Get content structure for navigation
export async function getContentStructure(): Promise<{
  pages: ContentPage[]
  navigation: Record<string, any>
}> {
  const pages = await getAllContentPages()
  
  // Build navigation structure
  const navigation: Record<string, any> = {
    main: [],
    about: {
      label: 'About Us',
      href: '/about-us',
      subPages: []
    }
  }
  
  // Organize pages by category
  for (const page of pages) {
    if (page.slug === 'homepage') {
      navigation.main.unshift({ label: 'Home', href: '/' })
    } else if (page.slug === 'about_us') {
      navigation.about.href = `/${page.slug}`
    } else if (page.slug === 'our_services' || page.slug === 'our_products' || page.slug === 'our_team') {
      navigation.about.subPages.push({
        label: page.title,
        href: `/about-us/${page.slug}`
      })
    } else if (page.slug === 'our_partners_and_clients') {
      navigation.main.push({
        label: 'Partners & Clients',
        href: `/${page.slug}`
      })
    } else if (page.slug === 'contact_us') {
      navigation.main.push({
        label: 'Contact',
        href: `/${page.slug}`
      })
    }
  }
  
  return { pages, navigation }
}
