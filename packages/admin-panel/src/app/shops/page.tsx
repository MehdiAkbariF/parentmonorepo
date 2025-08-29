"use client";
import React, { useState, useEffect, ReactNode, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// ۱. وارد کردن تمام کامپوننت‌ها و تایپ‌های لازم از سیستم طراحی
import {
  YadakchiAdminLayout,
  ListPageLayout,
  Label,
  FilterTabs,
  Select,
  type ColumnDefinition,
  type SelectOption,
} from "@my-ds/design-system";

import { type Shop, type PaginatedResponse } from "../../services/api/types";
import { getShops } from "@/services/shopsService";

// ۳. وارد کردن ابزارهای کمکی و داده‌های فیلتر
import { translateStatus } from "../../utils/translations";
import { exportToExcel } from "../../utils/exportUtils";
import { commonTimeFilters, shopStatusFilters, pageSizeOptions } from "../../config/filters.config";

export default function ShopsPage() {
  // --- State Management ---
  const [shopData, setShopData] = useState<PaginatedResponse<Shop> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // State های پجینیشن و فیلتر
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTimeFilter, setActiveTimeFilter] = useState('newest');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const pathname = usePathname();
  const router = useRouter();
  const renderLink = (href: string, children: ReactNode) => <Link href={href}>{children}</Link>;

  // --- Data Fetching ---
  // این useEffect به تمام فیلترها و پجینیشن وابسته است
  useEffect(() => {
    const fetchShops = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // در آینده، می‌توان پارامترهای فیلتر را به getShops پاس داد
        const response = await getShops(currentPage, pageSize);
        setShopData(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : "یک خطای ناشناخته رخ داد.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchShops();
  }, [currentPage, pageSize, activeTimeFilter, selectedStatus, searchTerm]);

  // --- Handlers ---
  const handleViewShop = (shopId: string) => {
    router.push(`/shops/${shopId}`);
  };
  const handleEditShop = (shopId: string) => alert(`ویرایش: ${shopId}`);
  const handleDeleteShop = (shopId: string) => alert(`حذف: ${shopId}`);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };
  const handleExport = async () => {
    if (!shopData?.items?.length) {
      alert("هیچ داده‌ای برای خروجی گرفتن وجود ندارد.");
      return;
    }
    setIsExporting(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    const dataToExport = shopData.items.map(shop => ({
      'نام فروشگاه': shop.shopTitle,
      'نام فروشنده': `${shop.name} ${shop.lastname}`,
      'وضعیت': translateStatus(shop.registrationStatus),
      'تاریخ ثبت': new Date(shop.createDate).toLocaleDateString('fa-IR'),
    }));
    exportToExcel(dataToExport, "لیست_فروشگاه‌ها");
    setIsExporting(false);
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };
  const handleTimeFilterChange = (tabId: string) => {
    setActiveTimeFilter(tabId);
    setCurrentPage(1);
  };
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
    setCurrentPage(1);
  };

  // --- Column Definitions ---
  const shopColumns: ColumnDefinition<Shop>[] = [
    { accessorKey: 'shopTitle', header: 'نام فروشگاه', cell: (shop) => <Label text={shop.shopTitle} size="md" /> },
    { accessorKey: 'name', header: 'نام فروشنده', cell: (shop) => <Label text={`${shop.name} ${shop.lastname}`} size="md" /> },
    { accessorKey: 'registrationStatus', header: 'وضعیت', cell: (shop) => ( <Label text={translateStatus(shop.registrationStatus)} size="sm" variant={shop.registrationStatus === 'Confirmed' ? 'primary' : 'error'} /> ) },
    { accessorKey: 'createDate', header: 'تاریخ ثبت', cell: (shop) => <Label text={new Date(shop.createDate).toLocaleDateString('fa-IR')} size="md" /> },
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
        options={shopStatusFilters}
        value={selectedStatus}
        onChange={handleStatusChange}
        aria-label="فیلتر بر اساس وضعیت"
      />
    </div>
  );
  
  const listPageProps = {
    listPageHeaderProps: {
      title: "لیست فروشگاه‌ها",
      totalItems: shopData?.totalCount,
      searchInputProps: {
        value: searchTerm,
        onChange: handleSearchChange,
        placeholder: "جستجو در فروشگاه‌ها...",
      },
      exportButtonProps: {
        onClick: handleExport,
        isLoading: isExporting,
      },
      actions: <button>افزودن فروشگاه</button> 
    },
    tableProps: {
      columns: shopColumns,
      data: shopData?.items || [],
      emptyStateMessage: "هیچ فروشگاهی یافت نشد.",
      rowActions: (shop: Shop) => ({
        onView: () => handleViewShop(shop.id),
        onEdit: () => handleEditShop(shop.id),
        onDelete: () => handleDeleteShop(shop.id),
      }),
    },
    paginationProps: {
      currentPage: currentPage,
      pageSize: pageSize,
      totalCount: shopData?.totalCount || 0,
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