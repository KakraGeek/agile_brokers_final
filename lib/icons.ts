// Lucide React Icon Configuration
// Centralized icon imports for consistent usage across the application

// Navigation & UI Icons
export { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  ChevronLeft,
  Search,
  Filter,
  Settings,
  LogOut,
  Bell,
  Star,
  Heart,
  Share2,
  Download,
  Upload,
  Copy,
  Edit,
  Trash2,
  Plus,
  Minus,
  Check,
  AlertCircle,
  HelpCircle
} from 'lucide-react'

// Business & Insurance Icons
export {
  Building2,
  Shield,
  Car,
  Home,
  Briefcase,
  Users,
  UserCheck,
  FileText,
  FileCheck,
  Calculator,
  TrendingUp,
  Award,
  Target,
  Zap,
  Key,
  CreditCard,
  DollarSign,
  Percent,
  MessageCircle,
  Send
} from 'lucide-react'

// Social & Communication Icons
export {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  ExternalLink,
  Link,
  AtSign,
  Hash
} from 'lucide-react'

// Form & Input Icons
export {
  Eye,
  EyeOff,
  Image,
  Paperclip,
  Camera,
  Video
} from 'lucide-react'

// Status & Feedback Icons
export {
  CheckCircle,
  XCircle,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh
} from 'lucide-react'

// Utility Icons
export {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  RefreshCw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Fullscreen
} from 'lucide-react'

// Common Icons (used in multiple categories)
export {
  User,
  Lock,
  Unlock,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Info
} from 'lucide-react'

// Icon size variants for consistent sizing
export const iconSizes = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48,
  '2xl': 64
} as const

export type IconSize = keyof typeof iconSizes

// Icon color variants
export const iconColors = {
  primary: 'text-primary-600',
  secondary: 'text-secondary-600',
  muted: 'text-muted-foreground',
  white: 'text-white',
  black: 'text-black',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  error: 'text-red-600'
} as const

export type IconColor = keyof typeof iconColors
