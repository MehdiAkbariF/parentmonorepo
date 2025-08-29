// ۱. وارد کردن تابع createApiClient از پکیج جدیدی که ساختیم
import { createApiClient } from "@my-app/api-client";

// ۲. تعریف یک تابع برای خواندن توکن احراز هویت
// این تابع مختص اپلیکیشن شماست و می‌تواند در آینده پیچیده‌تر شود
const getToken = (): string | null => {
  // در یک اپلیکیشن واقعی، توکن از localStorage، sessionStorage یا یک cookie خوانده می‌شود.
  // برای تست، ما می‌توانیم توکن را به صورت ثابت برگردانیم.
  // مطمئن شوید که این توکن معتبر و منقضی نشده باشد.
  if (typeof window !== 'undefined') {
    // مثال: return localStorage.getItem('authToken');
  }
  
  // توکن نمونه شما:
  return "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxNDdhZGM4NS00NmEzLTRiNzEtYWEzZi01MWExMjliZmY4NTgiLCJuYmYiOjE3NTY0Njk3ODcsImV4cCI6MTc2NjQ2OTY4NywiaXNzIjoiWWFkYWtjaGkiLCJhdWQiOiJmcm9udC5sb3R0ZXN0LmlyIn0.Mr2MoA4vBcuHtLhfRz59B0IrRPW5dTU5VFtBxQuMhVeYoCUGvXdigCZXnVfWM8UU6svOMUE2FiTJiUaVE00xdA";
};

// ۳. ایجاد یک نمونه (instance) از کلاینت API با استفاده از متغیر محیطی
//    ما از /api/ به عنوان baseUrl استفاده می‌کنیم تا درخواست‌ها به پروکسی Next.js ارسال شوند
const apiClient = createApiClient(
  '/api', // این آدرس به rewrites در next.config.js اشاره می‌کند
  getToken
);

// ۴. export کردن نمونه برای استفاده در سراسر اپلیکیشن
export default apiClient;