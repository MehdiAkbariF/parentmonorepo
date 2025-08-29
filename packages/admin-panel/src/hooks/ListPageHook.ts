"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { type PaginatedResponse } from '../services/api/types';
import { isToday, isThisWeek, isThisMonth } from '../utils/dateUtils';

export interface UseListPageOptions<T> {
  fetchData: (page: number, pageSize: number, filters?: any) => Promise<PaginatedResponse<T>>;
  searchKeys: (keyof T)[];
  dateKey: keyof T;
  statusKey: keyof T;
}

export const useListPage = <T extends {}>({
  fetchData,
  searchKeys,
  dateKey,
  statusKey,
}: UseListPageOptions<T>) => {
  const [allData, setAllData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTimeFilter, setActiveTimeFilter] = useState('newest');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // تابع واکشی را با useCallback پایدار می‌کنیم
  const loadData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      // برای فیلتر سمت کلاینت، تمام داده‌ها را می‌گیریم.
      // در آینده می‌توان این را بهینه کرد تا فیلترها را به API پاس دهد.
      const response = await fetchData(1, 1000); 
      setAllData(response.items);
    } catch (err) {
      setError(err instanceof Error ? err.message : "خطا در واکشی داده‌ها");
    } finally {
      setIsLoading(false);
    }
  }, [fetchData]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const filteredAndSortedData = useMemo(() => {
    let filtered = [...allData];
    if (searchTerm) {
      const lowercasedFilter = searchTerm.toLowerCase();
      filtered = filtered.filter(item =>
        searchKeys.some(key => 
          String(item[key]).toLowerCase().includes(lowercasedFilter)
        )
      );
    }
    if (selectedStatus !== 'all') {
      const statusValue = selectedStatus === 'true' ? true : selectedStatus === 'false' ? false : selectedStatus;
      filtered = filtered.filter(item => item[statusKey] === statusValue);
    }
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
  }, [allData, searchTerm, activeTimeFilter, selectedStatus, searchKeys, dateKey, statusKey]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredAndSortedData.slice(startIndex, startIndex + pageSize);
  }, [filteredAndSortedData, currentPage, pageSize]);

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
    selectedStatus,
    handlePageChange,
    handlePageSizeChange,
    handleSearchChange,
    handleTimeFilterChange,
    handleStatusChange,
    // ✨ --- این خط جدید اضافه شد ---
    refreshData: loadData,
  };
};