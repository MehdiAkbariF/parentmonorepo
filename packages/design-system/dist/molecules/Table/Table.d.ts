import { ReactNode } from "react";
export interface ColumnDefinition<T> {
    accessorKey: keyof T;
    header: string;
    cell?: (item: T) => ReactNode;
}
export interface TableProps<T> {
    data: T[];
    columns: ColumnDefinition<T>[];
    emptyStateMessage?: string;
}
/**
 * Table یک کامپوننت داده-محور و واکنش‌گرا برای نمایش اطلاعات جدولی است.
 */
export declare const Table: <T extends {}>({ data, columns, emptyStateMessage, }: TableProps<T>) => import("react/jsx-runtime").JSX.Element;
