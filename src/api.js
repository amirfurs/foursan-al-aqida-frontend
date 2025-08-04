import axios from 'axios';

// ملف موحّد لإنشاء نسخة من axios تستخدم نقطة أساس موحدة عبر البيئة
// يمكن تغيير VITE_API_BASE_URL في ملف .env لتوجيه الطلبات إلى الخادم المناسب
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export default api;