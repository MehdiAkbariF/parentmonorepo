import apiClient from "../apiClient";
import type { PaginatedResponse,  Ticket } from './types';

export const getTickets = (
  pageNumber: number, 
  pageSize: number
): Promise<PaginatedResponse<Ticket>> => {
  // فرض می‌کنیم endpoint شما به این شکل است
  return apiClient.get('A_Ticket/Tickets', {
    params: { PageNumber: pageNumber, PageSize: pageSize }
  });
};
// ... می‌توانید توابع create, update, delete را هم اضافه کنید