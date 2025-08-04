/**
 * إعداد TailwindCSS للموقع.
 *
 * نفعّل الوضع الليلي عبر إضافة الكلاس `dark` إلى العنصر الجذري.
 * نحدد المسارات التي يفحصها Tailwind للعثور على أصناف CSS المستخدمة.
 * نُمدد الألوان والخطوط لتتناسب مع الهوية البصرية للموقع.
 */
module.exports = {
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
        light: '#F3F3F3',
      },
      fontFamily: {
        sans: ['"Cairo"', 'sans-serif'],
        serif: ['"Amiri"', 'serif'],
      },
    },
  },
  plugins: [],
};