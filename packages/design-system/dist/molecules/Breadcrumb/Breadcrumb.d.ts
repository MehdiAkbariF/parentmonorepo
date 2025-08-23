import React, { ReactNode } from "react";
export interface BreadcrumbItem {
    /**
     * محتوای قابل نمایش آیتم (می‌تواند یک رشته یا یک کامپوننت Link باشد)
     */
    label: ReactNode;
    /**
     * آیا این آیتم، آیتم آخر (صفحه فعلی) است؟
     */
    isCurrent?: boolean;
}
export interface BreadcrumbProps {
    /**
     * آرایه‌ای از آیتم‌ها برای نمایش در مسیر راهنما
     */
    items: BreadcrumbItem[];
}
/**
 * Breadcrumb یک مولکول برای نمایش مسیر ناوبری فعلی کاربر است.
 */
export declare const Breadcrumb: React.FC<BreadcrumbProps>;
