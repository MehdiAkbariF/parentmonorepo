"use client";
import React, { useState, useEffect, useMemo, ReactNode } from "react"; // ۱. useMemo را ایمپورت می‌کنیم
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  YadakchiAdminLayout,
  ListPageLayout,
  Label,
  type ColumnDefinition,
} from "@my-ds/design-system";

// ۲. وارد کردن سرویس API و تایپ‌های مربوط به داده‌ها
import { getShops, type Shop, type PaginatedResponse } from "../../services/shopService";
// ۳. وارد کردن ابزارهای کمکی
import { translateStatus } from "../../utils/translations";
import { exportToExcel } from "../../utils/exportUtils";

export default function ShopsPage() {
  // --- State Management ---
  const [shopData, setShopData] = useState<PaginatedResponse<Shop> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // State برای جستجو
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const pathname = usePathname();
  const renderLink = (href: string, children: ReactNode) => <Link href={href}>{children}</Link>;

  // --- Data Fetching ---
  useEffect(() => {
    const fetchShops = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getShops(1, 30);
        setShopData(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : "یک خطای ناشناخته رخ داد.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchShops();
  }, []);

  // --- Handlers ---
  const handleViewShop = (shopId: string) => alert(`مشاهده: ${shopId}`);
  const handleEditShop = (shopId: string) => alert(`ویرایش: ${shopId}`);
  const handleDeleteShop = (shopId: string) => alert(`حذف: ${shopId}`);

  const handleExport = async () => {
    if (!shopData?.items?.length) return;
    setIsExporting(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    const dataToExport = shopData.items.map(shop => ({
      'نام فروشگاه': shop.shopTitle, 'نام فروشنده': `${shop.name} ${shop.lastname}`,
      'وضعیت': translateStatus(shop.registrationStatus),
      'تاریخ ثبت': new Date(shop.createDate).toLocaleDateString('fa-IR'),
    }));
    exportToExcel(dataToExport, "لیست_فروشگاه‌ها");
    setIsExporting(false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // در آینده، اینجا منطق جستجو و ارسال درخواست API قرار می‌گیرد.
  };

  // --- Column Definitions ---
  const shopColumns: ColumnDefinition<Shop>[] = [
    { accessorKey: 'shopTitle', header: 'نام فروشگاه', cell: (shop) => <Label text={shop.shopTitle} size="md" /> },
    { accessorKey: 'name', header: 'نام فروشنده', cell: (shop) => <Label text={`${shop.name} ${shop.lastname}`} size="md" /> },
    { accessorKey: 'registrationStatus', header: 'وضعیت', cell: (shop) => ( <Label text={translateStatus(shop.registrationStatus)} size="sm" variant={shop.registrationStatus === 'Confirmed' ? 'primary' : 'error'} /> ) },
    { accessorKey: 'createDate', header: 'تاریخ ثبت', cell: (shop) => <Label text={new Date(shop.createDate).toLocaleDateString('fa-IR')} size="md" /> },
  ];
  
  // --- Props Preparation ---
  const listPageProps = {
    listPageHeaderProps: {
      title: "لیست فروشگاه‌ها",
      totalItems: shopData?.totalCount,
      searchInputProps: {
        value: searchTerm,
        onChange: handleSearchChange,
        placeholder: "جستجو در فروشگاه‌ها...",
        isLoading: isSearching,
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