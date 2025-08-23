import { TableProps } from "../../../molecules/Table/Table";
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
export declare const ListPageLayout: <T extends {}>({ tableProps, isLoading, error, }: ListPageLayoutProps<T>) => import("react/jsx-runtime").JSX.Element;
