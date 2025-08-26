import React, { ReactNode } from "react";
export interface DetailPageLayoutProps {
    /**
     * عنصری که در بالای صفحه به عنوان هدر اصلی نمایش داده می‌شود
     * (معمولاً کامپوننت EntityHeader).
     */
    header: ReactNode;
    /**
     * عنصری که به عنوان نوار ابزار اصلی نمایش داده می‌شود
     * (معمولاً کامپوننت ActionToolbar).
     */
    toolbar: ReactNode;
    /**
     * محتوای اصلی صفحه که در ستون بزرگتر قرار می‌گیرد (معمولاً چند InfoCard).
     */
    children: ReactNode;
    /**
     * (اختیاری) محتوایی که در ستون فرعی (سایدبار) نمایش داده می‌شود.
     */
    aside?: ReactNode;
}
/**
 * DetailPageLayout یک الگوی استاندارد برای صفحات نمایش جزئیات یک موجودیت است.
 * این الگو یک چیدمان دو ستونی واکنش‌گرا را برای محتوا فراهم می‌کند.
 */
export declare const DetailPageLayout: React.FC<DetailPageLayoutProps>;
