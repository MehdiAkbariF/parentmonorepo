import { ReactNode } from "react";
import { ActionButtonsProps } from "../ActionButtons/ActionButtons";
type MobileDisplayPosition = 'primary' | 'secondary' | 'status';
export interface ColumnDefinition<T> {
    accessorKey: keyof T;
    header: string;
    cell?: (item: T) => ReactNode;
    mobileDisplay?: MobileDisplayPosition;
}
export interface TableProps<T> {
    data: T[];
    columns: ColumnDefinition<T>[];
    emptyStateMessage?: string;
    rowActions?: (item: T) => ActionButtonsProps;
}
export declare const Table: <T extends {
    id?: string | number;
}>({ data, columns, emptyStateMessage, rowActions, }: TableProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
