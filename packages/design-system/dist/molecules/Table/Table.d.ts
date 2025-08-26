import { ReactNode } from "react";
import { ActionButtonsProps } from "../ActionButtons/ActionButtons";
export interface ColumnDefinition<T> {
    accessorKey: keyof T;
    header: string;
    cell?: (item: T) => ReactNode;
}
export interface TableProps<T> {
    data: T[];
    columns: ColumnDefinition<T>[];
    emptyStateMessage?: string;
    rowActions?: (item: T) => ActionButtonsProps;
}
/**
 * Table یک کامپوننت داده-محور و واکنش‌گرا است که در صفحات کوچک،
 * قابلیت اسکرول افقی را فراهم می‌کند.
 */
export declare const Table: <T extends {
    id?: string | number;
}>({ data, columns, emptyStateMessage, rowActions, }: TableProps<T>) => import("react/jsx-runtime").JSX.Element;
