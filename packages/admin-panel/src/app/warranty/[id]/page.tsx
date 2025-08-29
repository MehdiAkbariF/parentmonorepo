"use client";

import React, { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  YadakchiAdminLayout,
  InfoCard,
  Label,
  ActionToolbar,
  EntityHeader,
  Badge,
} from "@my-ds/design-system";

import { getWarrantyById} from "../../../services/api/warrantyService";
import { Warranty } from "@/services/api/types";

// پارامترهای ورودی صفحه
interface WarrantyDetailsPageProps {
  params: {
    id: string; // ID از URL همیشه به صورت رشته متنی است
  }
}

export default function WarrantyDetailsPage({ params }: WarrantyDetailsPageProps) {
  const { id } = params;
  const router = useRouter();
  
  const [warranty, setWarranty] = useState<Warranty | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const pathname = usePathname();
  const renderLink = (href: string, children: ReactNode) => <Link href={href}>{children}</Link>;
  

  useEffect(() => {
    if (!id) return;

    const fetchWarranty = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // ID را به عدد تبدیل می‌کنیم
        const warrantyData = await getWarrantyById(Number(id));
        setWarranty(warrantyData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "یک خطای ناشناخته رخ داد.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWarranty();
  }, [id]);

  const renderContent = () => {
    if (isLoading) {
      return <p>در حال بارگذاری اطلاعات گارانتی...</p>;
    }
    if (error) {
      return <p style={{ color: 'red' }}>خطا: {error}</p>;
    }
    if (!warranty) {
      return <p>اطلاعات گارانتی یافت نشد.</p>;
    }

    return (
      // ما از الگوی DetailPageLayout که قبلاً طراحی کردیم، به صورت دستی استفاده می‌کنیم
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <EntityHeader
          title={warranty.title}
          // برای گارانتی آواتار نداریم، پس fallback را استفاده می‌کنیم
          avatarFallback={warranty.title.charAt(0)}
        >
          <Badge 
            label={warranty.isActive ? "فعال" : "غیرفعال"}
            variant={warranty.isActive ? "success" : "neutral"}
          />
        </EntityHeader>

    

        <InfoCard
          title="جزئیات گارانتی"
          items={[
            { label: "شناسه", value: String(warranty.id) },
            { label: "عنوان", value: warranty.title },
            { label: "وضعیت", value: warranty.isActive ? "فعال" : "غیرفعال" },
            { label: "تاریخ ایجاد", value: new Date(warranty.createDate).toLocaleString('fa-IR') },
            { label: "آخرین بروزرسانی", value: warranty.updateDate ? new Date(warranty.updateDate).toLocaleString('fa-IR') : "-" },
           
          ]}
        />
      </div>
    );
  };

  return (
    <YadakchiAdminLayout
      currentPath={pathname}
      renderLink={renderLink}
    >
      {/* می‌توانید Breadcrumb را هم اینجا اضافه کنید */}
      {renderContent()}
    </YadakchiAdminLayout>
  );
}