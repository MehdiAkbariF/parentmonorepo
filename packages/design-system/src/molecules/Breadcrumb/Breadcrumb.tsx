import React, { ReactNode } from "react";
// برای جداکننده، از یک آیکون استاندارد استفاده می‌کنیم
import { FiChevronLeft } from "react-icons/fi";

// تعریف ساختار هر آیتم در مسیر راهنما
export interface BreadcrumbItem {
  /**
   * محتوای قابل نمایش آیتم (می‌تواند یک رشته یا یک کامپوننت Link باشد)
   */
  label: ReactNode;
  /**
   * آیا این آیتم، آیتم آخر (صفحه فعلی) است؟
   */
  isCurrent?: boolean;
}

export interface BreadcrumbProps {
  /**
   * آرایه‌ای از آیتم‌ها برای نمایش در مسیر راهنما
   */
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb یک مولکول برای نمایش مسیر ناوبری فعلی کاربر است.
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    // برای دسترسی‌پذیری، از تگ nav و aria-label استفاده می‌کنیم
    <nav aria-label="breadcrumb" className="breadcrumb">
      {/* برای معناشناسی صحیح، از لیست مرتب (ol) استفاده می‌کنیم */}
      <ol>
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb__item ${item.isCurrent ? "breadcrumb__item--current" : ""}`}
          >
            {item.label}
            {!item.isCurrent && (
              <span className="breadcrumb__separator" aria-hidden="true">
                <FiChevronLeft />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};