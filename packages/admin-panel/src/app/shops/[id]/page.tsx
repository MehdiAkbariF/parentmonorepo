"use client";

import React, { useState, useEffect, ReactNode, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  YadakchiAdminLayout,
  InfoCard,
  Label,
  ActionToolbar,
  EntityHeader,
  Badge,
  ApprovalCard,
  Button,
} from "@my-ds/design-system";

import { getShopById, confirmShopRegistration, confirmFinalShopStatus, } from "../../../services/shopsService";
import { Shop } from "@/services/api/types";
import { translateStatus } from "../../../utils/translations";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

// پارامترهای ورودی صفحه
interface ShopDetailsPageProps {
  params: {
    id: string;
  }
}

export default function ShopDetailsPage({ params }: ShopDetailsPageProps) {
  const { id } = params;
  
  const [shop, setShop] = useState<Shop | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  
  const pathname = usePathname();
  const renderLink = (href: string, children: ReactNode) => <Link href={href}>{children}</Link>;

  // تابع واکشی داده‌ها
  const fetchShop = useCallback(async () => {
    if (!id) return;
    try {
      setIsLoading(true);
      setError(null);
      const shopData = await getShopById(id);
      setShop(shopData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "یک خطای ناشناخته رخ داد.");
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchShop();
  }, [fetchShop]);

  // تابع برای مدیریت تایید/رد مدارک
  const handleConfirmation = async (field: keyof Shop, value: boolean) => {
    if (!shop) return;
    setActionLoading(true);
    try {
      const key = (field.charAt(0).toUpperCase() + field.slice(1)) as keyof any;
      const updatedShop = await confirmShopRegistration({
        ShopId: shop.id,
        [key]: value,
      });
      setShop(updatedShop);
      alert("وضعیت با موفقیت به‌روز شد.");
    } catch (err) {
      console.error(err);
      alert("خطا در به‌روزرسانی وضعیت.");
    } finally {
      setActionLoading(false);
    }
  };

  // تابع برای تایید نهایی فروشگاه
  const handleFinalConfirm = async () => {
    if (!shop) return;
    if (!window.confirm(`آیا از تایید نهایی فروشگاه "${shop.shopTitle}" مطمئن هستید؟`)) {
      return;
    }
    
    setActionLoading(true);
    try {
      const updatedShop = await confirmFinalShopStatus(shop.id);
      setShop(updatedShop);
      alert("فروشگاه با موفقیت تایید نهایی شد.");
    } catch (err) {
      console.error(err);
      alert("خطا در تایید نهایی فروشگاه.");
    } finally {
      setActionLoading(false);
    }
  };

  const renderContent = () => {
    if (isLoading) return <p>در حال بارگذاری اطلاعات فروشگاه...</p>;
    if (error) return <p style={{ color: 'red' }}>خطا: {error}</p>;
    if (!shop) return <p>اطلاعات فروشگاه یافت نشد.</p>;

    // شرط برای غیرفعال کردن دکمه تایید نهایی
    const isConfirmDisabled = shop.registrationStatus === 'Confirmed';

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <EntityHeader
            title={shop.shopTitle}
            avatarSrc={shop.logo ? `https://api.yadakchi.com${shop.logo}` : undefined}
        >
            <Badge 
                label={translateStatus(shop.registrationStatus)} 
                variant={shop.registrationStatus === 'Confirmed' ? 'success' : 'warning'}
            />
        </EntityHeader>

        {/* ۱. ✨ onBackClick از ActionToolbar حذف شد ✨ */}
        <ActionToolbar>
          {/* ۲. ✨ دکمه تایید نهایی به children کامپوننت ActionToolbar پاس داده شد ✨ */}
          <Button 
            variant="primary" 
            onClick={handleFinalConfirm} 
            isLoading={actionLoading}
            disabled={isConfirmDisabled || actionLoading}
          >
            <CheckBadgeIcon style={{width: '1.2rem', height: '1.2rem'}}/>
            <span>{isConfirmDisabled ? 'فروشگاه تایید شده' : 'تایید نهایی فروشگاه'}</span>
          </Button>
        </ActionToolbar>

        <InfoCard 
          title="اطلاعات فروشگاه"
          items={[
            { label: "نام فروشنده", value: `${shop.name} ${shop.lastname}` },
            { label: "تلفن", value: shop.tell || "-" },
            { label: "شماره همراه", value: shop.phoneNumber || "-" },
          ]}
        />
        
        <InfoCard title="بررسی و تایید مدارک">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <ApprovalCard 
              title="لوگو"
              isConfirmed={shop.isLogoConfirmed}
              documentUrl={shop.logo}
              onApprove={() => handleConfirmation('isLogoConfirmed', true)}
              onReject={() => handleConfirmation('isLogoConfirmed', false)}
              isLoading={actionLoading}
            />
            <ApprovalCard 
              title="عنوان فروشگاه"
              isConfirmed={shop.isShopTitleConfirmed}
              onApprove={() => handleConfirmation('isShopTitleConfirmed', true)}
              onReject={() => handleConfirmation('isShopTitleConfirmed', false)}
              isLoading={actionLoading}
            />
            <ApprovalCard 
              title="کارت ملی"
              isConfirmed={shop.isNationalCardConfirmed}
              documentUrl={shop.nationalCard}
              onApprove={() => handleConfirmation('isNationalCardConfirmed', true)}
              onReject={() => handleConfirmation('isNationalCardConfirmed', false)}
              isLoading={actionLoading}
            />
             <ApprovalCard 
              title="جواز کسب"
              isConfirmed={shop.isBusinessLicenseConfirmed}
              documentUrl={shop.businessLicense}
              onApprove={() => handleConfirmation('isBusinessLicenseConfirmed', true)}
              onReject={() => handleConfirmation('isBusinessLicenseConfirmed', false)}
              isLoading={actionLoading}
            />
            <ApprovalCard 
              title="تلفن ثابت"
              isConfirmed={shop.isTellConfirmed}
              onApprove={() => handleConfirmation('isTellConfirmed', true)}
              onReject={() => handleConfirmation('isTellConfirmed', false)}
              isLoading={actionLoading}
            />
          </div>
        </InfoCard>
      </div>
    );
  };

  return (
    <YadakchiAdminLayout currentPath={pathname} renderLink={renderLink}>
      {renderContent()}
    </YadakchiAdminLayout>
  );
}