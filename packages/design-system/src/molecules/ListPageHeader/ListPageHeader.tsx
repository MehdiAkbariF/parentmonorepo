"use client";

import React, { ReactNode } from "react";
import { Label } from "../../atoms/Label/Label";
import { ExportButton, ExportButtonProps } from "../../atoms/ExportButton/ExportButton";
import { SearchInput, SearchInputProps } from "../../atoms/SearchInput/SearchInput"; // ایمپورت کامپوننت جدید

/**
 * پراپرتی‌های کامپوننت ListPageHeader
 */
export interface ListPageHeaderProps {
  /**
   * عنوان اصلی صفحه لیست
   */
  title: string;
  /**
   * (اختیاری) تعداد کل آیتم‌ها که در کنار عنوان نمایش داده می‌شود
   */
  totalItems?: number;
  /**
   * (اختیاری) پراپرتی‌های مورد نیاز برای دکمه خروجی اکسل.
   * اگر این prop ارائه شود، دکمه نمایش داده می‌شود.
   */
  exportButtonProps?: ExportButtonProps;
  /**
   * (اختیاری) پراپرتی‌های مورد نیاز برای کادر جستجو.
   * اگر این prop ارائه شود، کادر جستجو نمایش داده می‌شود.
   */
  searchInputProps?: SearchInputProps;
  /**
   * (اختیاری) اکشن‌های سفارشی دیگر (مانند دکمه "افزودن جدید")
   */
  actions?: ReactNode;
}

/**
 * ListPageHeader یک هدر استاندارد برای بالای صفحات لیستی (جداول) است
 * که شامل عنوان، تعداد، جستجو و اکشن‌ها می‌باشد.
 */
export const ListPageHeader: React.FC<ListPageHeaderProps> = ({
  title,
  totalItems,
  exportButtonProps,
  searchInputProps,
  actions,
}) => {
  return (
    <div className="list-page-header">
      {/* بخش عنوان و تعداد */}
      <div className="list-page-header__title-section">
        <Label  text={title} size="2x" />
        {totalItems !== undefined && (
          <span className="list-page-header__count">({totalItems} مورد)</span>
        )}
      </div>

      {/* بخش اکشن‌ها (بدون جستجو) */}
      <div className="list-page-header__actions-section">
        {actions}
        {exportButtonProps && <ExportButton {...exportButtonProps} />}
      </div>
      
      {/* کادر جستجو به صورت یک عنصر جداگانه در flex container اصلی قرار می‌گیرد */}
      {searchInputProps && <SearchInput {...searchInputProps} />}
    </div>
  );
};