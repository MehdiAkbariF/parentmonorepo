import React, { ReactNode } from "react";
export interface PageHeaderProps {
    /**
     * عنوان اصلی صفحه
     */
    title: string;
    /**
     * توضیحات یا زیرعنوان صفحه (اختیاری)
     */
    description?: string;
    /**
     * اکشن‌ها یا دکمه‌هایی که در کنار عنوان قرار می‌گیرند (مانند دکمه "افزودن جدید")
     */
    actions?: ReactNode;
}
/**
 * PageHeader برای نمایش عنوان و توضیحات اصلی در بالای هر صفحه استفاده می‌شود.
 */
export declare const PageHeader: React.FC<PageHeaderProps>;
