import React from "react";
export interface ActionButtonsProps {
    /**
     * تابعی که با کلیک روی دکمه "مشاهده" اجرا می‌شود.
     * اگر این prop ارائه نشود، دکمه نمایش داده نمی‌شود.
     */
    onView?: () => void;
    /**
     * تابعی که با کلیک روی دکمه "ویرایش" اجرا می‌شود.
     * اگر این prop ارائه نشود، دکمه نمایش داده نمی‌شود.
     */
    onEdit?: () => void;
    /**
     * تابعی که با کلیک روی دکمه "حذف" اجرا می‌شود.
     * اگر این prop ارائه نشود، دکمه نمایش داده نمی‌شود.
     */
    onDelete?: () => void;
    /**
     * سایز دکمه‌ها
     * @default 'sm'
     */
    size?: "sm" | "md";
}
/**
 * ActionButtons مجموعه‌ای از دکمه‌های عملیاتی استاندارد (مشاهده، ویرایش، حذف)
 * برای استفاده در جداول یا لیست‌ها است.
 */
export declare const ActionButtons: React.FC<ActionButtonsProps>;
