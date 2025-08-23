import { ListPageHeaderProps } from "../../../molecules/ListPageHeader/ListPageHeader";
import { TableProps } from "../../../molecules/Table/Table";
export interface ListPageLayoutProps<T> {
    listPageHeaderProps: ListPageHeaderProps;
    tableProps: TableProps<T>;
    isLoading?: boolean;
    error?: string | null;
}
/**
 * ListPageLayout یک الگوی ساده برای نمایش یک جدول با Breadcrumb،
 * حالت‌های لودینگ و خطا است.
 */
export declare const ListPageLayout: <T extends {}>({ tableProps, isLoading, error, listPageHeaderProps, }: ListPageLayoutProps<T>) => import("react/jsx-runtime").JSX.Element;
