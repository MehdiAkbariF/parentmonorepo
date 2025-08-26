import React, { ReactNode } from "react";
export interface InfoCardItem {
    label: string;
    value: ReactNode;
}
export interface InfoCardProps {
    /**
     * عنوان کارت اطلاعاتی
     */
    title: string;
    /**
     * (اختیاری) آرایه‌ای از آیتم‌های کلید-مقدار برای نمایش در گرید.
     * اگر children ارائه شود، این پراپرتی نادیده گرفته می‌شود.
     */
    items?: InfoCardItem[];
    /**
     * (اختیاری) محتوای سفارشی که به جای گرید آیتم‌ها نمایش داده می‌شود.
     */
    children?: ReactNode;
    /**
     * (اختیاری) کلاس‌های CSS اضافی
     */
    className?: string;
}
/**
 * InfoCard یک مولکول برای نمایش مجموعه‌ای از اطلاعات مرتبط
 * در یک کارت با چیدمان گرید یا محتوای سفارشی است.
 */
export declare const InfoCard: React.FC<InfoCardProps>;
