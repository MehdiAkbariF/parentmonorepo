// ۱. یک تایپ برای کلیدهای ممکن تعریف می‌کنیم تا از خطاهای تایپی جلوگیری کنیم
export type StatusKey = 'Confirmed' | 'InProgress' | 'Answered' | 'Pending' | 'Rejected' | 'Ok' | string;

// ۲. دیکشنری ترجمه‌ها
const statusTranslations: Record<StatusKey, string> = {
  // وضعیت‌های فروشگاه
  Confirmed: 'تایید شده',
  Pending: 'در انتظار بررسی',
  Rejected: 'رد شده',
  Ok: 'موفق', // این هم در API شما بود
  
  // وضعیت‌های دیگر (که شما اشاره کردید)
  InProgress: 'در حال بررسی',
  Answered: 'پاسخ داده شده',
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