import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          500: '#3b82f6',
          600: '#2563eb'
        }
      }
    }
  },
  plugins: []
};

export default config;
