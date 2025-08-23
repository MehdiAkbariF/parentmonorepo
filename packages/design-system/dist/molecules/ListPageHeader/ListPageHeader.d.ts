import React, { ReactNode } from "react";
import { ExportButtonProps } from "../../atoms/ExportButton/ExportButton";
import { SearchInputProps } from "../../atoms/SearchInput/SearchInput";
/**
 * پراپرتی‌های کامپوننت ListPageHeader
 */
export interface ListPageHeaderProps {
    /**
     * عنوان اصلی صفحه لیست
     */
    title: string;
    /**
     * (اختیاری) تعداد کل آیتم‌ها که در کنار عنوان نمایش داده می‌شود
     */
    totalItems?: number;
    /**
     * (اختیاری) پراپرتی‌های مورد نیاز برای دکمه خروجی اکسل.
     * اگر این prop ارائه شود، دکمه نمایش داده می‌شود.
     */
    exportButtonProps?: ExportButtonProps;
    /**
     * (اختیاری) پراپرتی‌های مورد نیاز برای کادر جستجو.
     * اگر این prop ارائه شود، کادر جستجو نمایش داده می‌شود.
     */
    searchInputProps?: SearchInputProps;
    /**
     * (اختیاری) اکشن‌های سفارشی دیگر (مانند دکمه "افزودن جدید")
     */
    actions?: ReactNode;
}
/**
 * ListPageHeader یک هدر استاندارد برای بالای صفحات لیستی (جداول) است
 * که شامل عنوان، تعداد، جستجو و اکشن‌ها می‌باشد.
 */
export declare const ListPageHeader: React.FC<ListPageHeaderProps>;
