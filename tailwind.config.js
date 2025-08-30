/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			// Brand Colors from colour_palette.md
  			primary: {
  				'50': '#f0f0f0',
  				'100': '#e0e0e0',
  				'200': '#c1c1c1',
  				'300': '#a3a3a3',
  				'400': '#848484',
  				'500': '#666666',
  				'600': '#5246A6', // Indigo
  				'700': '#73103E', // Deep Maroon
  				'800': '#5a0d31',
  				'900': '#110273', // Royal Blue
  				DEFAULT: '#110273', // Royal Blue
  				foreground: '#ffffff'
  			},
  			secondary: {
  				'50': '#f8f8f8',
  				'100': '#f2f2f2', // Light Gray
  				'200': '#e6e6e6',
  				'300': '#d9d9d9',
  				'400': '#cccccc',
  				'500': '#bfbfbf',
  				'600': '#8C84BF', // Soft Purple
  				'700': '#5246A6', // Indigo
  				'800': '#3d3577',
  				'900': '#2a2449',
  				DEFAULT: '#8C84BF', // Soft Purple
  				foreground: '#ffffff'
  			},
  			accent: {
  				'50': '#fdf2f8',
  				'100': '#fce7f3',
  				'200': '#fbcfe8',
  				'300': '#f9a8d4',
  				'400': '#f472b6',
  				'500': '#ec4899',
  				'600': '#db2777',
  				'700': '#be185d',
  				'800': '#9d174d',
  				'900': '#73103E', // Deep Maroon
  				DEFAULT: '#73103E', // Deep Maroon
  				foreground: '#ffffff'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-in-out',
  			'slide-up': 'slideUp 0.5s ease-out',
  			'slide-down': 'slideDown 0.3s ease-out'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					opacity: '0',
  					y: '20'
  				},
  				'100%': {
  					opacity: '1',
  					y: '0'
  				}
  			},
  			slideDown: {
  				'0%': {
  					opacity: '0',
  					y: '-20'
  				},
  				'100%': {
  					opacity: '1',
  					y: '0'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			slug: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

module.exports = config
