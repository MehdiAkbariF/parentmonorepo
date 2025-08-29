"use client";
import React, { useState, useCallback, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  YadakchiAdminLayout,
  ListPageLayout,
  Label,
  Badge,
  Button,
  FilterTabs,
  Select,
  type ColumnDefinition,
  type SelectOption,
} from "@my-ds/design-system";

import { getTickets, } from "../../services/api/ticketService";
import { Ticket } from "@/services/api/types";
import { useListPage } from "../../hooks/ListPageHook";
import { pageSizeOptions, commonTimeFilters } from "../../config/filters.config";
import { exportToExcel } from "../../utils/exportUtils";

// داده‌های فیلتر وضعیت مختص تیکت‌ها
const ticketStatusFilters: SelectOption[] = [
    { value: 'all', label: 'همه وضعیت‌ها' },
    { value: 'Open', label: 'باز' },
    { value: 'Answered', label: 'پاسخ داده شده' },
    { value: 'Closed', label: 'بسته شده' },
];

export default function TicketsPage() {
  const pathname = usePathname();
  const renderLink = (href: string, children: ReactNode) => <Link href={href}>{children}</Link>;

  // تابع واکشی داده را با useCallback پایدار می‌کنیم
  const fetchTicketsData = useCallback((page: number, size: number, filters?: any) => {
    return getTickets(page, size);
  }, []);

  // فراخوانی هوک هوشمند با پیکربندی برای تیکت‌ها
  const {
    data: tickets,
    totalCount,
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
    refreshData: refreshTickets,
  } = useListPage<Ticket>({
    fetchData: fetchTicketsData,
    searchKeys: ['title'],
    dateKey: 'createDate',
    statusKey: 'status',
  });
  
  // State های مختص اکشن‌های این صفحه
  const [isExporting, setIsExporting] = useState(false);

  // --- Handlers ---
  const handleViewTicket = (ticketId: number) => alert(`مشاهده تیکت: ${ticketId}`);
  const handleEditTicket = (ticketId: number) => alert(`ویرایش تیکت: ${ticketId}`);
  const handleDeleteTicket = (ticketId: number) => alert(`حذف تیکت: ${ticketId}`);
  
  const handleExport = async () => {
    if (!tickets.length) return;
    setIsExporting(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    const dataToExport = tickets.map(t => ({
      'شناسه': t.id,
      'موضوع': t.title,
      'وضعیت': t.status,
      'اولویت': t.priority,
      'تاریخ ثبت': new Date(t.createDate).toLocaleDateString('fa-IR'),
    }));
    exportToExcel(dataToExport, "لیست_تیکت‌ها");
    setIsExporting(false);
  };

  // --- Column Definitions ---
  const ticketColumns: ColumnDefinition<Ticket>[] = [
    {
      accessorKey: 'id',
      header: 'ردیف',
      cell: (ticket, index) => <Label text={String((currentPage - 1) * pageSize + index + 1)} size="md" />,
    },
    { accessorKey: 'title', header: 'موضوع تیکت', cell: (t) => <Label text={t.title} size="md" /> },
    { 
      accessorKey: 'status', 
      header: 'وضعیت', 
      cell: (t) => <Badge label={t.status} variant={t.status === 'Open' ? 'success' : (t.status === 'Answered' ? 'info' : 'neutral')} /> 
    },
    { 
      accessorKey: 'priority', 
      header: 'اولویت', 
      cell: (t) => <Label text={t.priority} size="md" /> 
    },
  ];
  
  // --- Props Preparation ---
  const filterSection = (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
      <FilterTabs
        tabs={commonTimeFilters}
        activeTab={activeTimeFilter}
        onTabChange={handleTimeFilterChange}
      />
      <Select
        options={ticketStatusFilters}
        value={String(selectedStatus)}
        onChange={handleStatusChange}
        aria-label="فیلتر بر اساس وضعیت"
      />
    </div>
  );
  
  const listPageProps = {
    listPageHeaderProps: {
      title: "مدیریت تیکت‌ها",
      totalItems: totalCount,
      searchInputProps: {
        value: searchTerm,
        onChange: handleSearchChange,
        placeholder: "جستجو در موضوعات...",
      },
      exportButtonProps: { onClick: handleExport, isLoading: isExporting },
      
    },
    tableProps: {
      columns: ticketColumns,
      data: tickets,
      emptyStateMessage: "هیچ تیکتی یافت نشد.",
      rowActions: (ticket: Ticket) => ({
        onView: () => handleViewTicket(ticket.id),
      
      }),
    },
    paginationProps: {
      currentPage: currentPage,
      pageSize: pageSize,
      totalCount: totalCount,
      onPageChange: handlePageChange,
      pageSizeOptions: pageSizeOptions,
      onPageSizeChange: handlePageSizeChange,
    },
    filterSection: filterSection,
    isLoading: isLoading,
    error: error,
  };

  // --- JSX ---
  return (
    <YadakchiAdminLayout
      currentPath={pathname}
      renderLink={renderLink}
    >
      <ListPageLayout {...listPageProps} />
    </YadakchiAdminLayout>
  );
}