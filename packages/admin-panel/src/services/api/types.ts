
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

export interface Warranty {
  id: number;
  title: string;
  createDate: string;
  updateDate: string | null;
  isActive: boolean;
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

export interface Ticket {
  id: number;
  title: string;
  status: 'Open' | 'Answered' | 'Closed';
  priority: 'Low' | 'Medium' | 'High';
  createDate: string;
}

export interface TicketCategory {
  id: string; // ID به صورت رشته است
  name: string;
  description: string;
  isActive: boolean;
  createDate: string;
}