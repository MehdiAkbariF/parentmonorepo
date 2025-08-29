import apiClient from "../apiClient";
import type { TicketCategory } from './types';

/**
 * لیست تمام دسته‌بندی‌های تیکت را واکشی می‌کند.
 * این API صفحه‌بندی شده نیست و یک آرایه برمی‌گرداند.
 */
export const getTicketCategories = (): Promise<TicketCategory[]> => {
  return apiClient.get('A_Ticket/TicketCategories');
};

/**
 * یک دسته‌بندی تیکت جدید ایجاد می‌کند.
 */
export const createTicketCategory = (data: { Name: string; Description: string }): Promise<TicketCategory> => {
  const formData = new FormData();
  formData.append('Name', data.Name);
  formData.append('Description', data.Description);
  return apiClient.post('A_Ticket/TicketCategory', { body: formData });
};

/**
 * یک دسته‌بندی تیکت موجود را ویرایش می‌کند.
 */
export const updateTicketCategory = (
  id: string, 
  data: { Name?: string; Description?: string; IsActive?: boolean }
): Promise<TicketCategory> => {
  const formData = new FormData();
  formData.append('Id', id);
  if (data.Name !== undefined) formData.append('Name', data.Name);
  if (data.Description !== undefined) formData.append('Description', data.Description);
  if (data.IsActive !== undefined) formData.append('IsActive', String(data.IsActive));
  return apiClient.put('A_Ticket/TicketCategory', { body: formData });
};

// تابع حذف (DELETE) را هم می‌توانید به همین شکل اضافه کنید