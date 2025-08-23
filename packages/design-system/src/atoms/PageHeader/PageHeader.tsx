import React, { ReactNode } from "react";
import { Label } from "../../atoms/Label/Label";

export interface PageHeaderProps {
  /**
   * عنوان اصلی صفحه
   */
  title: string;
  /**
   * توضیحات یا زیرعنوان صفحه (اختیاری)
   */
  description?: string;
  /**
   * اکشن‌ها یا دکمه‌هایی که در کنار عنوان قرار می‌گیرند (مانند دکمه "افزودن جدید")
   */
  actions?: ReactNode;
}

/**
 * PageHeader برای نمایش عنوان و توضیحات اصلی در بالای هر صفحه استفاده می‌شود.
 */
export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, actions }) => {
  return (
    <div className="page-header">
      <div className="page-header__main">
        {/* از کامپوننت Label برای عنوان اصلی استفاده می‌کنیم */}
        <Label  text={title} size="3x" />
        {description && (
          <p className="page-header__description">
            {description}
          </p>
        )}
      </div>
      {actions && (
        <div className="page-header__actions">
          {actions}
        </div>
      )}
    </div>
  );
};