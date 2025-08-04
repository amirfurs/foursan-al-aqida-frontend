/**
 * إعداد Tailwind CSS بمخطط ألوان وخطوط مخصصة تناسب هوية موقع فرسان العقيدة.
 */
import { defineConfig } from 'tailwindcss/helpers';

export default defineConfig({
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D0D0D',
        accent: '#D62828',
        secondary: '#002B5B',
        lightText: '#F3F3F3',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
});