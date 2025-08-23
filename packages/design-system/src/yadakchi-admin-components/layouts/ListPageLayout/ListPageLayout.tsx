"use client";

import React from "react";
// ۱. ایمپورت PageHeader حذف شد.
import { Table, TableProps } from "../../../molecules/Table/Table";

// ۲. این کامپوننت ژنریک است و با هر نوع داده‌ای (T) کار می‌کند
export interface ListPageLayoutProps<T> {
  /**
   * پراپرتی‌های مورد نیاز برای Table (داده‌ها و ستون‌ها)
   */
  tableProps: TableProps<T>;
  /**
   * وضعیت لودینگ صفحه. اگر true باشد، یک حالت لودینگ نمایش داده می‌شود.
   */
  isLoading?: boolean;
  /**
   * پیام خطا. اگر وجود داشته باشد، یک حالت خطا نمایش داده می‌شود.
   */
  error?: string | null;
}

/**
 * ListPageLayout یک الگوی ساده برای نمایش یک جدول با حالت‌های لودینگ و خطا است.
 * این الگو باید داخل یک لی‌آوت اصلی مانند YadakchiAdminLayout قرار بگیرد.
 */
export const ListPageLayout = <T extends {}>({
  tableProps,
  isLoading = false,
  error = null,
}: ListPageLayoutProps<T>) => {
  
  const renderContent = () => {
    if (isLoading) {
      return <div className="list-page-layout__state">در حال بارگذاری داده‌ها...</div>;
    }
    if (error) {
      return <div className="list-page-layout__state list-page-layout__state--error">{error}</div>;
    }
    return (
      <div className="list-page-layout__table-container">
        <Table {...tableProps} />
      </div>
    );
  };

  // ۳. ساختار JSX ساده شد و فقط renderContent را برمی‌گرداند.
  return (
    <div className="list-page-layout">
      {renderContent()}
    </div>
  );
};