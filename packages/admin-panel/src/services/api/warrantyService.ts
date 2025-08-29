import apiClient from "../apiClient";
import type { PaginatedResponse, Warranty } from './types';

// ✨ --- کلمه کلیدی export قبل از هر تابع اضافه شد --- ✨
/**
 * ✨ --- تابع جدید --- ✨
 * اطلاعات یک گارانتی خاص را بر اساس شناسه (ID) واکشی می‌کند.
 * @param warrantyId شناسه گارانتی مورد نظر
 * @returns یک Promise که به آبجکت Warranty حل می‌شود.
 */
export const getWarrantyById = (warrantyId: number): Promise<Warranty> => {
  return apiClient.get('A_Warranty/Warranty', {
    params: {
      Id: warrantyId,
    }
  });
};
export const getWarranties = (
  pageNumber: number, 
  pageSize: number
): Promise<PaginatedResponse<Warranty>> => {
  return apiClient.get('A_Warranty/Warrantys', {
    params: { PageNumber: pageNumber, PageSize: pageSize }
  });
};

export const createWarranty = (title: string): Promise<Warranty> => {
  const formData = new FormData();
  formData.append('Title', title);
  return apiClient.post('A_Warranty/Warranty', { body: formData });
};

export const updateWarranty = (
  id: number, 
  data: { title?: string; isActive?: boolean }
): Promise<Warranty> => {
  const formData = new FormData();
  formData.append('Id', String(id));
  if (data.title !== undefined) formData.append('Title', data.title);
  if (data.isActive !== undefined) formData.append('IsActive', String(data.isActive));
  return apiClient.put('A_Warranty/Warranty', { body: formData });
};

export const deleteWarranty = (id: number): Promise<null> => {
  return apiClient.delete('A_Warranty/Warranty', { body: { id } });
};