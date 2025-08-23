import React, { ReactNode } from "react";

// تعریف تایپ‌ها (از بخش قبل)
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
export const Table = <T extends {}>({
  data,
  columns,
  emptyStateMessage = "هیچ داده‌ای برای نمایش وجود ندارد.",
}: TableProps<T>) => {
  if (!data || data.length === 0) {
    return <div className="table-empty-state">{emptyStateMessage}</div>;
  }

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table__head">
          <tr>
            {columns.map((column) => (
              <th key={column.accessorKey as string}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} data-label={column.header}>
                  {column.cell ? column.cell(item) : (item[column.accessorKey] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};