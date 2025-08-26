import React, { ReactNode } from "react";
export interface KeyValueDisplayProps {
    /**
     * متنی که به عنوان کلید یا لیبل نمایش داده می‌شود.
     */
    label: string;
    /**
     * مقداری که در مقابل کلید نمایش داده می‌شود. می‌تواند هر عنصر React باشد.
     */
    children: ReactNode;
    /**
     * (اختیاری) جهت چیدمان. عمودی برای موبایل و افقی برای دسکتاپ مناسب است.
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * (اختیاری) کلاس‌های CSS اضافی.
     */
    className?: string;
}
/**
 * KeyValueDisplay یک کامپوننت پایه‌ای برای نمایش یک جفت کلید-مقدار است.
 */
export declare const KeyValueDisplay: React.FC<KeyValueDisplayProps>;
