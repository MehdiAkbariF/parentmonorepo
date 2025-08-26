import apiClient from "./apiClient";

export interface Shop {
  id: string;
  name: string;
  lastname: string;
  shopTitle: string;
  phoneNumber: string | null;
  description: string;
  website: string;
  tell: string;
  status: string;
  registrationStatus: "Confirmed" | "InProgress" | "Answered" | "Rejected";
  createDate: string;
  updateDate: string;
  logo: string | null;
  isLogoConfirmed: boolean;
  isShopTitleConfirmed: boolean;
  isTellConfirmed: boolean;
  businessLicense: string | null;
  nationalCard: string | null;
  behindNationalCard: string | null;
  isBusinessLicenseConfirmed: boolean;
  isNationalCardConfirmed: boolean;
  isBehindNationalCardConfirmed: boolean;
  isBanned?: boolean;
  isActive?: boolean;
}

export interface PaginatedResponse<T> {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
  items: T[];
}

export type ShopConfirmationData = {
  ShopId: string;
  IsLogoConfirmed?: boolean;
  IsShopTitleConfirmed?: boolean;
  IsBusinessLicenseConfirmed?: boolean;
  IsNationalCardConfirmed?: boolean;
  IsBehindNationalCardConfirmed?: boolean;
  IsTellConfirmed?: boolean;
};

/**
 * لیستی از فروشگاه‌ها را واکشی می‌کند.
 */
export const getShops = (
  pageNumber: number, 
  pageSize: number
): Promise<PaginatedResponse<Shop>> => {
  return apiClient.get('A_Shop/GetShops', {
    params: {
      PageNumber: pageNumber,
      PageSize: pageSize,
    }
  });
};

/**
 * اطلاعات یک فروشگاه خاص را واکشی می‌کند.
 */
export const getShopById = (shopId: string): Promise<Shop> => {
  return apiClient.get('A_Shop/GetShopDetail', {
    params: {
      Id: shopId,
    }
  });
};

/**
 * وضعیت تایید مدارک یک فروشگاه را به‌روز می‌کند.
 */
export const confirmShopRegistration = (confirmationData: ShopConfirmationData): Promise<Shop> => {
  const formData = new FormData();
  Object.keys(confirmationData).forEach((key: any) => {
    const value = confirmationData[key as keyof ShopConfirmationData];
    if (value !== undefined) {
      formData.append(key, String(value));
    }
  });
  return apiClient.put('A_Shop/ShopConfirmRegistration', {
    body: formData,
  });
};

/**
 * وضعیت نهایی یک فروشگاه را به 'Confirmed' تغییر می‌دهد.
 * @param shopId شناسه فروشگاه
 * @returns یک Promise که به آبجکت به‌روز شده Shop حل می‌شود.
 */
export const confirmFinalShopStatus = (shopId: string): Promise<Shop> => {
  return apiClient.put('A_Shop/ConfirmShop', {
    params: {
      ShopId: shopId,
      Status: 'Confirmed',
    }
  });
};