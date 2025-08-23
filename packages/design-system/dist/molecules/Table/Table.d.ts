import { ReactNode } from "react";
import { ActionButtonsProps } from "../ActionButtons/ActionButtons";
/**
 * تعریف ساختار یک ستون در جدول.
 * T یک نوع ژنریک برای داده‌های هر سطر است.
 */
export interface ColumnDefinition<T> {
    accessorKey: keyof T;
    header: string;
    cell?: (item: T) => ReactNode;
}
/**
 * پراپرتی‌های کامپوننت Table
 */
export interface TableProps<T> {
    data: T[];
    columns: ColumnDefinition<T>[];
    emptyStateMessage?: string;
    rowActions?: (item: T) => ActionButtonsProps;
}
/**
 * Table یک کامپوننت داده-محور و واکنش‌گرا است که فقط ساختار جدول را فراهم می‌کند.
 * مسئولیت ظاهر محتوای سلول‌ها بر عهده مصرف‌کننده است.
 */
export declare const Table: <T extends {
    id?: string | number;
}>({ data, columns, emptyStateMessage, rowActions, }: TableProps<T>) => import("react/jsx-runtime").JSX.Element;
