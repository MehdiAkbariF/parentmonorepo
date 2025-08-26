import React, { ElementType, ReactNode } from "react";

export type LabelVariant = "primary" | "secondary" | "error" | "disabled";
export type LabelSize = "xs" | "sm" | "md" | "lg" | "xl" | "2x" | "3x" | "4x";

// ۱. ✨ ما از تایپ‌های ژنریک برای ساخت یک کامپوننت پلی‌مورفیک استفاده می‌کنیم
type LabelOwnProps<E extends ElementType = ElementType> = {
  text: string;
  variant?: LabelVariant;
  size?: LabelSize;
  icon?: ReactNode;
  /**
   * تگ HTML یا کامپوننت React که باید رندر شود.
   * @default 'span'
   */
  as?: E;
};

// ۲. ✨ تایپ نهایی، پراپرتی‌های خودمان را با پراپرتی‌های تگ ورودی ترکیب می‌کند
export type LabelProps<E extends ElementType> = LabelOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof LabelOwnProps<E>>;

/**
 * Label یک اتم پلی‌مورفیک برای نمایش متن با استایل‌های از پیش تعریف شده است.
 * می‌تواند به عنوان span, label, p, h1 و ... رندر شود.
 */
export const Label = <E extends ElementType = 'span'>({
  text,
  variant = "primary",
  size = "md",
  icon,
  as,
  className,
  ...props // بقیه props ها (مانند htmlFor, style) در اینجا قرار می‌گیرند
}: LabelProps<E>) => {
  // ۳. ✨ تگ مورد نظر را برای رندر شدن انتخاب می‌کنیم
  const Component = as || 'span';

  const labelClasses = [
    'label',
    `label--${variant}`,
    `label--${size}`,
    icon ? 'label--with-icon' : '',
    className || ''
  ].filter(Boolean).join(' ');

  return (
    // ۴. ✨ از Component برای رندر کردن تگ داینامیک استفاده می‌کنیم
    <Component
      className={labelClasses}
      {...props} // پراپرتی‌های اضافی مانند htmlFor به درستی پاس داده می‌شوند
    >
      {icon && <span className="label__icon">{icon}</span>}
      {text}
    </Component>
  );
};