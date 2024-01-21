import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      backgroundColor: {
        1: '#8678F9',
        2: '#E2CBFF',
        3: '#393BB2'
      },
      animation: {
        'background-shine': 'background-shine 2s linear infinite',
        'border-width': 'border-width 3s infinite alternate',
        'text-gradient': 'text-gradient 1.5s linear infinite'
      },
      keyframes: {
        'background-shine': {
          from: {
            backgroundPosition: '0 0'
          },
          to: {
            backgroundPosition: '-200% 0'
          }
        },
        'border-width': {
          from: {
            width: '10px',
            opacity: '0'
          },
          to: {
            width: '100px',
            opacity: '1'
          }
        },
        'text-gradient': {
          to: {
            backgroundPosition: '200% center'
          }
        }
      }
    }
  },
  plugins: []
}
export default config
