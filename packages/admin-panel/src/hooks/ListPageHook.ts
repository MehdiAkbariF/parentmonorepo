"use client";

import { useState, useEffect, useMemo } from 'react';
import { type PaginatedResponse } from '../services/shopsService'; // تایپ عمومی را وارد می‌کنیم
import { isToday, isThisWeek, isThisMonth } from '../utils/dateUtils';

// ۱. تعریف ورودی‌های هوک
interface UseListPageOptions<T> {
  // تابعی که داده‌ها را از API واکشی می‌کند
  fetchData: (page: number, pageSize: number) => Promise<PaginatedResponse<T>>;
  // کلیدهایی که در آن‌ها جستجو انجام می‌شود
  searchKeys: (keyof T)[];
  // کلیدی که تاریخ آیتم را مشخص می‌کند
  dateKey: keyof T;

  /**
   * کلیدی از آبجکت T که وضعیت آیتم را مشخص می‌کند.
   */
  statusKey: keyof T;
}

/**
 * یک هوک سفارشی که تمام منطق یک صفحه لیست (واکشی، فیلتر، جستجو، پجینیشن) را مدیریت می‌کند.
 * T نوع داده‌ای آیتم‌های لیست است (مثلاً Shop).
 */
export const useListPage = <T extends {}>({
  fetchData,
  searchKeys,
  dateKey,
  statusKey, // ۱. پراپ جدید را دریافت می‌کنیم
}: UseListPageOptions<T>) => {
  const [allData, setAllData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTimeFilter, setActiveTimeFilter] = useState('newest');
  // ۲. State برای فیلتر وضعیت حالا داخل هوک است
  const [selectedStatus, setSelectedStatus] = useState('all'); 


  // --- واکشی اولیه داده‌ها ---
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        // برای سادگی، فعلاً تمام داده‌ها را می‌گیریم. می‌توان این را هم هوشمند کرد.
        const response = await fetchData(1, 1000);
        setAllData(response.items);
      } catch (err) {
        setError(err instanceof Error ? err.message : "خطا در واکشی داده‌ها");
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [fetchData]); // فقط یک بار اجرا می‌شود

  // --- منطق فیلترینگ و مرتب‌سازی ---
  const filteredAndSortedData = useMemo(() => {
    let filtered = [...allData];

    if (searchTerm) {
      filtered = filtered.filter(item =>
        searchKeys.some(key => 
          String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
     if (selectedStatus !== 'all') {
      filtered = filtered.filter(item => item[statusKey] === selectedStatus);
    }
    
    // اینجا می‌توانید فیلتر وضعیت را هم به صورت ژنریک پیاده‌سازی کنید
    // if (selectedStatus !== 'all') { ... }

    switch (activeTimeFilter) {
      case 'today':
        filtered = filtered.filter(item => isToday(String(item[dateKey])));
        break;
      case 'this_week':
        filtered = filtered.filter(item => isThisWeek(String(item[dateKey])));
        break;
      case 'this_month':
        filtered = filtered.filter(item => isThisMonth(String(item[dateKey])));
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(String(a[dateKey])).getTime() - new Date(String(b[dateKey])).getTime());
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => new Date(String(b[dateKey])).getTime() - new Date(String(a[dateKey])).getTime());
        break;
    }
    
    return filtered;
  }, [allData, searchTerm, activeTimeFilter, searchKeys, dateKey,statusKey]);

  // --- منطق پجینیشن ---
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredAndSortedData.slice(startIndex, startIndex + pageSize);
  }, [filteredAndSortedData, currentPage, pageSize]);

  // --- Handlers ---
  const handlePageChange = (page: number) => setCurrentPage(page);
  const handlePageSizeChange = (size: number) => { setPageSize(size); setCurrentPage(1); };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => { setSearchTerm(event.target.value); setCurrentPage(1); };
  const handleTimeFilterChange = (tabId: string) => { setActiveTimeFilter(tabId); setCurrentPage(1); };
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => { setSelectedStatus(event.target.value); setCurrentPage(1); };
  
  // --- مقادیر خروجی هوک ---
   return {
    data: paginatedData,
    totalCount: filteredAndSortedData.length,
    isLoading,
    error,
    currentPage,
    pageSize,
    searchTerm,
    activeTimeFilter,
    selectedStatus, // ۶. مقدار فعلی فیلتر را برمی‌گردانیم
    handlePageChange,
    handlePageSizeChange,
    handleSearchChange,
    handleTimeFilterChange,
    handleStatusChange, // ۷. handler را برمی‌گردانیم
  };
};