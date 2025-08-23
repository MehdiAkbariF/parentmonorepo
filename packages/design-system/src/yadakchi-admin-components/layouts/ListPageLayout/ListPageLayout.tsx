import React, { ReactNode } from "react";
// ۱. ایمپورت کردن Breadcrumb و تایپ‌های آن
import { Breadcrumb, BreadcrumbItem } from "../../../molecules/Breadcrumb/Breadcrumb";
import { ListPageHeader, ListPageHeaderProps } from "../../../molecules/ListPageHeader/ListPageHeader";
import { Table, TableProps } from "../../../molecules/Table/Table";

export interface ListPageLayoutProps<T> {
  // ۲. پراپرتی جدید برای هدر لیست
  listPageHeaderProps: ListPageHeaderProps;
  tableProps: TableProps<T>;
  isLoading?: boolean;
  error?: string | null;
}

/**
 * ListPageLayout یک الگوی ساده برای نمایش یک جدول با Breadcrumb،
 * حالت‌های لودینگ و خطا است.
 */
export const ListPageLayout = <T extends {}>({
  tableProps,
  isLoading = false,
  error = null,
  listPageHeaderProps,

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

  return (
    <div className="list-page-layout">
      {/* ۲. اگر آیتم‌ها وجود داشتند، Breadcrumb را در بالا نمایش بده */}
      <ListPageHeader {...listPageHeaderProps} />
      {renderContent()}
    </div>
  );
};