import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ضبط إعدادات Vite لاستخدام React وتفعيل الترجمة الحية (Hot Module Replacement).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});