import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      'animation': {
        'text':'text 10s ease infinite',
      },
      'keyframes': {
        'text': {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        },
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'background-color': '#f8f1e9',
        'borders-color': '#8d7966',
        'excentric-text-color': '#a8a39d',
        'secs-divs-color': '#d8c8b8',
        'light-gray': '#e2ddd9',
      },
    },
  },
  plugins: [],
}
export default config
