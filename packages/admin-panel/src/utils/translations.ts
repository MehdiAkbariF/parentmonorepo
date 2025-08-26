// ۱. تایپ StatusKey را با مقادیر جدید به‌روز می‌کنیم
export type StatusKey = 
  'Confirmed' | 
  'InProgress' | 
  'Answered' | 
  'Rejected' | 
  'Pending' | 
  'Ok' | 
  string;

// ۲. دیکشنری ترجمه‌ها را با مقادیر جدید کامل می‌کنیم
const statusTranslations: Record<StatusKey, string> = {
  // وضعیت‌های فروشگاه
  'Confirmed': 'تایید شده',
  'Pending': 'در انتظار بررسی',
  'Rejected': 'رد شده',
  'Ok': 'موفق',
  
  // ✨ --- وضعیت‌های جدید اضافه شدند ---
  'InProgress': 'در حال بررسی',
  'Answered': 'پاسخ داده شده',
};

/**
 * یک کلید وضعیت (مانند 'Confirmed') را می‌گیرد و معادل فارسی آن را برمی‌گرداند.
 * اگر ترجمه‌ای پیدا نشود، خود کلید را برمی‌گرداند.
 * @param status - کلید وضعیت برای ترجمه
 * @returns رشته ترجمه شده
 */
export const translateStatus = (status: StatusKey): string => {
  return statusTranslations[status] || status;
};