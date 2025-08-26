import React, { ReactNode } from "react";
import { Label } from "../Label/Label"; // از اتم Label برای نمایش کلید استفاده می‌کنیم

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
export const KeyValueDisplay: React.FC<KeyValueDisplayProps> = ({
  label,
  children,
  orientation = 'horizontal',
  className
}) => {
  return (
    <div className={`key-value-display key-value-display--${orientation} ${className || ''}`}>
      {/* برای کلید، از کامپوننت Label با استایل ثانویه استفاده می‌کنیم */}
      <Label  text={`${label}:`} size="sm" variant="secondary" className="key-value-display__key" />
      
      {/* مقدار می‌تواند هر چیزی باشد */}
      <dd className="key-value-display__value">
        {children}
      </dd>
    </div>
  );
};