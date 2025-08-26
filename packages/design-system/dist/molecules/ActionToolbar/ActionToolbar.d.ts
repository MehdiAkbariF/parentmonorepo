import React, { ReactNode } from 'react';
export interface ActionToolbarProps {
    /**
     * (اختیاری) اگر این تابع ارائه شود، دکمه بازگشت نمایش داده می‌شود
     */
    onBackClick?: () => void;
    /**
     * فرزندان این کامپوننت، دکمه‌های اکشن اصلی (مانند مسدودسازی، تایید و ...) هستند
     */
    children?: ReactNode;
}
/**
 * ActionToolbar یک نوار ابزار استاندارد برای نمایش دکمه‌های عملیاتی اصلی یک صفحه است.
 */
export declare const ActionToolbar: React.FC<ActionToolbarProps>;
