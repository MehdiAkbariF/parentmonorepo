import React from "react";
export interface ExportButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * متنی که روی دکمه نمایش داده می‌شود
     * @default 'خروجی اکسل'
     */
    text?: string;
    /**
     * آیا دکمه در حالت لودینگ است؟
     */
    isLoading?: boolean;
}
/**
 * ExportButton یک دکمه استاندارد برای عملیات خروجی گرفتن (مانند اکسل) است.
 */
export declare const ExportButton: React.FC<ExportButtonProps>;
