// اینترفیس‌ها از بخش قبل
export interface Shop {
  id: string;
  name: string;
  lastname: string;
  shopTitle: string;
  status: "Ok" | "Pending" | "Rejected";
  registrationStatus: "Confirmed" | "Pending" | "Rejected";
  createDate: string;
}

export interface PaginatedResponse<T> {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
  items: T[];
}

// یک تابع کمکی برای گرفتن توکن احراز هویت
// در یک اپلیکیشن واقعی، این تابع توکن را از Local Storage, Cookie یا State Management می‌خواند
const getAuthToken = (): string => {
  // این توکن یک توکن نمونه است و باید با توکن واقعی شما جایگزین شود
  return "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIzNjAxZWY2YS02MTU5LTQ0ODEtYWYzYi1kZjU4ZGFmZWJlNWEiLCJSb2xlIjoiQW5vbnltb3VzIiwibmJmIjoxNzU1OTQ1NzA5LCJleHAiOjE3NjU5NDU2MDksImlzcyI6IllhZGFrY2hpIiwiYXVkIjoiZnJvbnQubG90dGVzdC5pciJ9.fnRQ5ClhnF1wih3LJ_sFLpjr5aqm6ftOaOJfF1LfKLdDBd4E1hucPPdQ4kIeyFXvpb7CV-aav6P887MZW7NiGg";
};


/**
 * لیستی از فروشگاه‌ها را به صورت صفحه‌بندی شده از API واکشی می‌کند.
 * @param pageNumber شماره صفحه
 * @param pageSize تعداد آیتم در هر صفحه
 * @returns یک Promise که به PaginatedResponse<Shop> حل می‌شود
 */
export const getShops = async (pageNumber: number, pageSize: number): Promise<PaginatedResponse<Shop>> => {
  const token = getAuthToken();
 const apiUrl = `/api/A_Shop/Shop?PageNumber=${pageNumber}&PageSize=${pageSize}`;

  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Accept': '*/*',
      'Authorization': `Bearer ${token}`,
    },
  });

  // بررسی خطا در پاسخ
  if (!response.ok) {
    throw new Error(`خطا در واکشی داده‌ها: ${response.statusText}`);
  }

  // پاسخ را به صورت JSON برمی‌گردانیم و تایپ آن را مشخص می‌کنیم
  const data: PaginatedResponse<Shop> = await response.json();
  return data;
};