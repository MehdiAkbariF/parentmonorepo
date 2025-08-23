"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ۱. وارد کردن الگوهای مورد نیاز
import {
  YadakchiAdminLayout,
  ListPageLayout, // <-- الگوی ساده شده
  Label,
  type ColumnDefinition,
} from "@my-ds/design-system";

import { getShops, type Shop } from "../services/shopService";

export default function HomePage() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const pathname = usePathname();
  const renderLink = (href: string, children: React.ReactNode) => <Link href={href}>{children}</Link>;

  useEffect(() => {
    const fetchShops = async () => {
      try {
        setIsLoading(true);
        const response = await getShops(1, 30);
        setShops(response.items);
      } catch (err) {
        setError(err instanceof Error ? err.message : "یک خطای ناشناخته رخ داد.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchShops();
  }, []);

  const shopColumns: ColumnDefinition<Shop>[] = [
    { accessorKey: 'shopTitle', header: 'نام فروشگاه' },
    { accessorKey: 'name', header: 'نام فروشنده', cell: (shop) => `${shop.name} ${shop.lastname}` },
    { accessorKey: 'registrationStatus', header: 'وضعیت', cell: (shop) => <Label text={shop.registrationStatus} size="sm" variant={shop.registrationStatus === 'Confirmed' ? 'primary' : 'error'} /> },
  ];
  
  // ۲. آماده‌سازی props برای ListPageLayout (ساده شده)
  const listPageProps = {
    tableProps: {
      columns: shopColumns,
      data: shops,
      emptyStateMessage: "هیچ فروشگاهی یافت نشد.",
    },
    isLoading: isLoading,
    error: error,
  };

  return (
    <YadakchiAdminLayout
      currentPath={pathname}
      renderLink={renderLink}
    >
      {/* ۳. استفاده از الگوی ساده شده */}
      ادمین پنل
    </YadakchiAdminLayout>
  );
}