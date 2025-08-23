"use client";

import React, { ReactNode, useMemo } from "react";
import { ActionButtons, ActionButtonsProps } from "../ActionButtons/ActionButtons";

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
export const Table = <T extends { id?: string | number }>({
  data,
  columns,
  emptyStateMessage = "هیچ داده‌ای برای نمایش وجود ندارد.",
  rowActions,
}: TableProps<T>) => {
  
  const tableColumns = useMemo(() => {
    let finalColumns = [...columns];

    if (rowActions) {
      finalColumns.push({
        accessorKey: 'actions' as any,
        header: 'عملیات',
        cell: (item) => {
          const actionProps = rowActions(item);
          return <ActionButtons {...actionProps} />;
        },
      });
    }

    return finalColumns;
  }, [columns, rowActions]);

  if (!data || data.length === 0) {
    return <div className="table-empty-state">{emptyStateMessage}</div>;
  }

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table__head">
          <tr>
            {tableColumns.map((column) => (
              <th key={column.accessorKey as string}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {data.map((item, rowIndex) => (
            <tr key={item.id || rowIndex}>
              {tableColumns.map((column, colIndex) => {
                const cellClasses = [
                  column.accessorKey === 'actions' ? 'table__cell--actions' : ''
                ].filter(Boolean).join(' ');
                
                // کامپوننت دقیقاً همان چیزی را رندر می‌کند که در cell تعریف شده
                // یا مقدار خام داده را اگر cell تعریف نشده باشد.
                const cellContent = column.cell 
                  ? column.cell(item) 
                  : (item[column.accessorKey as keyof T] as ReactNode);
                
                return (
                  <td key={colIndex} data-label={column.header} className={cellClasses}>
                    {cellContent}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};