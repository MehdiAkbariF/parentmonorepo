import { ReactNode } from "react";
import { ListPageHeaderProps } from "../../../molecules/ListPageHeader/ListPageHeader";
import { TableProps } from "../../../molecules/Table/Table";
import { PaginationProps } from "../../../molecules/Pagination/Pagination";
import { BreadcrumbItem } from "../../../molecules/Breadcrumb/Breadcrumb";
import { SelectOption } from "../../../atoms/Select/Select";
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
export declare const ListPageLayout: <T extends {}>({ listPageHeaderProps, tableProps, paginationProps, breadcrumbItems, isLoading, error, filterSection, }: ListPageLayoutProps<T>) => import("react/jsx-runtime").JSX.Element;
