"use client";

import React, { ReactNode } from "react";
import { ListPageHeader, ListPageHeaderProps } from "../../../molecules/ListPageHeader/ListPageHeader";
import { Table, TableProps } from "../../../molecules/Table/Table";
import { Pagination, PaginationProps } from "../../../molecules/Pagination/Pagination";
import { Breadcrumb, BreadcrumbItem } from "../../../molecules/Breadcrumb/Breadcrumb";
import { Select, SelectOption } from "../../../atoms/Select/Select";

// ارتقاء تایپ PaginationProps برای شامل شدن گزینه‌های PageSize
export interface EnhancedPaginationProps extends PaginationProps {
  pageSizeOptions?: SelectOption[];
  onPageSizeChange?: (size: number) => void;
}

export interface ListPageLayoutProps<T> {
  listPageHeaderProps: ListPageHeaderProps;
  tableProps: TableProps<T>;
  paginationProps?: EnhancedPaginationProps;
  breadcrumbItems?: BreadcrumbItem[];
  isLoading?: boolean;
  error?: string | null;
  filterSection?: ReactNode;
}

/**
 * ListPageLayout یک الگوی استاندارد برای تمام صفحاتی است که یک لیست از داده‌ها را
 * در قالب یک جدول به همراه فیلتر و پجینیشن کامل نمایش می‌دهają.
 */
export const ListPageLayout = <T extends {}>({
  listPageHeaderProps,
  tableProps,
  paginationProps,
  breadcrumbItems,
  isLoading = false,
  error = null,
  filterSection,
}: ListPageLayoutProps<T>) => {
  
  // ۱. تابع renderContent حالا فقط محتوای اصلی (جدول یا state) را برمی‌گرداند
  const renderMainContent = () => {
    if (isLoading) {
      return <div className="list-page-layout__state">در حال بارگذاری داده‌ها...</div>;
    }
    if (error) {
      return <div className="list-page-layout__state list-page-layout__state--error">{error}</div>;
    }
    return (
      // ۲. Wrapper جدید برای جدول و فوتر
      <div className="list-page-layout__content-wrapper">
        <div className="list-page-layout__table-container">
          <Table {...tableProps} />
        </div>
        {paginationProps && (
          <div className="list-page-layout__footer">
            <div className="list-page-layout__pagination-container">
              <Pagination {...paginationProps} />
            </div>
            <div className="list-page-layout__page-size-selector">
              {paginationProps.pageSizeOptions && paginationProps.onPageSizeChange && (
                <>
                  <span>نمایش</span>
                  <Select
                    options={paginationProps.pageSizeOptions}
                    value={paginationProps.pageSize}
                    onChange={(e) => paginationProps.onPageSizeChange?.(Number(e.target.value))}
                    aria-label="تعداد آیتم در هر صفحه"
                  />
                  <span>مورد</span>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    // ۳. ساختار اصلی که حالا یک Flex container عمودی است
    <div className="list-page-layout">
      {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}
      <ListPageHeader {...listPageHeaderProps} />
      {filterSection && (
        <div className="list-page-layout__filter-section">
          {filterSection}
        </div>
      )}
      {renderMainContent()}
    </div>
  );
};