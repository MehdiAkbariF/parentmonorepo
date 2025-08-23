import React, { ReactNode } from "react";
export interface ContentContainerProps {
    /**
     * محتوایی که داخل کانتینر قرار می‌گیرد.
     */
    children: ReactNode;
    /**
     * کلاس‌های CSS اضافی برای استایل‌دهی سفارشی.
     */
    className?: string;
}
/**
 * ContentContainer یک کانتینر واکنش‌گرا و مرکزی برای قرار دادن محتوای اصلی صفحات است.
 * این کامپوننت عرض محتوا را محدود کرده و پدینگ‌های استاندارد را اعمال می‌کند.
 */
export declare const ContentContainer: React.FC<ContentContainerProps>;
