/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontFamily: {
        'signika': 'Signika, sans-serif',
        'black-san': 'Black Han Sans, sans-serif',
      },

      colors: {
        'midnight-purple': '#290B36',
        'light-blue': '#6BA4D9',
      },

      fontSize: {
        's': '12px',
        'sx': '16px',
        'lm': '20px',
        'm': '24px',
        'l': '35px',
        'ml': '40px',
        'xl': '50px',
      },

      letterSpacing: {
        'small': '2px',
        'medium': '5px',
        'large': '8px',
      },

      screens: {
        's': '300px',
        'sm': '430px',
        'md': '560px',
        'm': '768px',
        'l': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}
