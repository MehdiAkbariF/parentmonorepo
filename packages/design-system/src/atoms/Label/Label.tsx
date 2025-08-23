import React, { ReactNode } from "react";

// تایپ‌های Variant و Size بدون تغییر باقی می‌مانند
export type LabelVariant = "primary" | "secondary" | "error" | "disabled";
export type LabelSize = "xs" | "sm" | "md" | "lg" | "xl" | "2x" | "3x" | "4x";

/**
 * پراپرتی‌های کامپوننت Label.
 * این اینترفیس تمام پراپرتی‌های استاندارد یک تگ <span> را به ارث می‌برد (مانند style, className, onClick).
 */
export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * متن اصلی که نمایش داده می‌شود.
   */
  
  text: string;
  /**
   * ظاهر رنگی لیبل.
   * @default 'primary'
   */
  variant?: LabelVariant;
  /**
   * اندازه و وزن فونت لیبل.
   * @default 'md'
   */
  size?: LabelSize;
  /**
   * یک آیکون که در کنار متن نمایش داده می‌شود.
   */
  icon?: ReactNode;
}

/**
 * Label یک اتم برای نمایش متن با استایل‌های از پیش تعریف شده است.
 * این کامپوننت برای ثبات در تایپوگرافی در سراسر اپلیکیشن استفاده می‌شود.
 */
export const Label: React.FC<LabelProps> = ({
  text,
  variant = "primary",
  size = "md",
  icon,
  className, // className را از بقیه props جدا می‌کنیم تا به درستی ترکیب شود
  ...props // بقیه props ها (مانند style) در این متغیر قرار می‌گیرند
}) => {
  // کلاس‌های CSS را به صورت داینامیک ایجاد می‌کنیم
  const labelClasses = [
    'label',
    `label--${variant}`,
    `label--${size}`,
    icon ? 'label--with-icon' : '',
    className || '' // کلاس‌های ورودی را اضافه می‌کنیم
  ].filter(Boolean).join(' '); // فیلتر کردن مقادیر خالی و اتصال با فاصله

  return (
    <span
      className={labelClasses}
      {...props} // تمام props های اضافی (مانند style, onClick) را به span پاس می‌دهیم
    >
      {icon && <span className="label__icon">{icon}</span>}
      {text}
    </span>
  );
};