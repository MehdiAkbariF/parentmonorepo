import React, { ElementType, ReactNode } from "react";

export type LabelVariant = "primary" | "secondary" | "error" | "disabled";
export type LabelSize = "xs" | "sm" | "md" | "lg" | "xl" | "2x" | "3x" | "4x";

type LabelOwnProps<E extends ElementType = ElementType> = {
  text: string;
  variant?: LabelVariant;
  size?: LabelSize;
  icon?: ReactNode;
  as?: E;
  /**
   * ✨ پراپرتی جدید ✨
   * اگر true باشد، متن طولانی را با "..." نمایش می‌دهد.
   * @default true
   */
  truncate?: boolean;
};

export type LabelProps<E extends ElementType> = LabelOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof LabelOwnProps<E>>;

export const Label = <E extends ElementType = 'span'>({
  text,
  variant = "primary",
  size = "md",
  icon,
  as,
  className,
  truncate = false, // مقدار پیش‌فرض
  ...props
}: LabelProps<E>) => {
  const Component = as || 'span';

  const labelClasses = [
    'label',
    `label--${variant}`,
    `label--${size}`,
    icon ? 'label--with-icon' : '',
    truncate ? 'label--truncate' : '', // کلاس جدید برای حالت خلاصه‌سازی
    className || ''
  ].filter(Boolean).join(' ');

  return (
    <Component
      className={labelClasses}
      // ✨ برای UX بهتر، متن کامل را در title قرار می‌دهیم تا با هاور نمایش داده شود
      title={truncate ? text : undefined}
      {...props}
    >
      {icon && <span className="label__icon">{icon}</span>}
      {text}
    </Component>
  );
};