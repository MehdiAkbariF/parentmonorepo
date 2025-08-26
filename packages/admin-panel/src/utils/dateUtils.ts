// توابع کمکی برای شروع روز، هفته و ماه
import { startOfDay, startOfWeek, startOfMonth, isWithinInterval, endOfDay, endOfWeek, endOfMonth } from 'date-fns';

/**
 * بررسی می‌کند که آیا یک تاریخ معین، امروز است یا نه.
 * @param date تاریخ ورودی (می‌تواند رشته یا Date باشد)
 */
export const isToday = (date: string | Date): boolean => {
  const dateObj = new Date(date);
  const todayStart = startOfDay(new Date());
  const todayEnd = endOfDay(new Date());
  return isWithinInterval(dateObj, { start: todayStart, end: todayEnd });
};

/**
 * بررسی می‌کند که آیا یک تاریخ معین، در هفته جاری است یا نه.
 * (نکته: date-fns هفته را از یکشنبه شروع می‌کند. برای شنبه، نیاز به تنظیمات locale است)
 */
export const isThisWeek = (date: string | Date): boolean => {
  const dateObj = new Date(date);
  const weekStart = startOfWeek(new Date(), { weekStartsOn: 6 }); // شنبه به عنوان شروع هفته
  const weekEnd = endOfWeek(new Date(), { weekStartsOn: 6 });
  return isWithinInterval(dateObj, { start: weekStart, end: weekEnd });
};

/**
 * بررسی می‌کند که آیا یک تاریخ معین، در ماه جاری است یا نه.
 */
export const isThisMonth = (date: string | Date): boolean => {
  const dateObj = new Date(date);
  const monthStart = startOfMonth(new Date());
  const monthEnd = endOfMonth(new Date());
  return isWithinInterval(dateObj, { start: monthStart, end: monthEnd });
};