import { type FilterTab, type SelectOption } from "@my-ds/design-system";

// فیلترهای زمانی مشترک (بدون تغییر)
export const commonTimeFilters: FilterTab[] = [
  { id: 'newest', label: 'جدیدترین' },
  { id: 'oldest', label: 'قدیمی‌ترین' },
  { id: 'today', label: 'امروز' },
  { id: 'this_week', label: 'این هفته' },
  { id: 'this_month', label: 'این ماه' },
];


// فیلترهای وضعیت اختصاصی برای فروشگاه‌ها
export const shopStatusFilters: SelectOption[] = [
  { value: 'all', label: 'همه وضعیت‌ها' },
  { value: 'Confirmed', label: 'تایید شده' },
  { value: 'InProgress', label: 'در حال بررسی' },
  { value: 'Answered', label: 'پاسخ داده شده' },
  { value: 'Rejected', label: 'رد شده' },
];


export const pageSizeOptions: SelectOption[] = [
  { label: '5', value: 5 },
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
];