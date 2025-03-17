
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk colors
				cyber: {
					black: '#080808',
					darkgray: '#121212',
					blue: '#0072FF',
					cyan: '#00FFFF',
					magenta: '#FF00FF',
					purple: '#9933FF',
					yellow: '#FFFF00',
					red: '#FF0033',
					green: '#00FF66'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5), 0 0 15px rgba(0, 255, 255, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 10px rgba(0, 255, 255, 0.9), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.5)' 
					}
				},
				'border-flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '200% 50%' }
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '-100% 50%' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'background-pan': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'blur-in': {
					'0%': { 
						opacity: '0',
						filter: 'blur(10px)'
					},
					'100%': { 
						opacity: '1',
						filter: 'blur(0)' 
					}
				},
				'rotate-glow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s infinite',
				'border-flow': 'border-flow 3s linear infinite',
				'text-shimmer': 'text-shimmer 3s infinite',
				'float': 'float 6s ease-in-out infinite',
				'background-pan': 'background-pan 3s linear infinite',
				'fade-in': 'fade-in 0.5s ease-out',
				'blur-in': 'blur-in 0.7s cubic-bezier(0.11, 0, 0.5, 0)',
				'rotate-glow': 'rotate-glow 20s linear infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				cyber: ['Orbitron', 'sans-serif'], 
				mono: ['JetBrains Mono', 'monospace']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
