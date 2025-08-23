import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Table, ColumnDefinition } from "./Table";
import { Label } from '../../atoms/Label/Label';

// تعریف یک اینترفیس نمونه برای داده‌ها
interface User {
  id: number;
  fullName: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'فعال' | 'غیرفعال';
}

// تعریف داده‌های نمونه
const sampleData: User[] = [
  { id: 1, fullName: 'علی رضایی', email: 'ali.rezaei@example.com', role: 'Admin', status: 'فعال' },
  { id: 2, fullName: 'زهرا احمدی', email: 'zahra.ahmadi@example.com', role: 'Editor', status: 'فعال' },
  { id: 3, fullName: 'رضا قاسمی', email: 'reza.ghasemi@example.com', role: 'Viewer', status: 'غیرفعال' },
  { id: 4, fullName: 'مریم محمدی', email: 'maryam.mohammadi@example.com', role: 'Editor', status: 'فعال' },
];

// تعریف ستون‌های پایه
const columns: ColumnDefinition<User>[] = [
  { accessorKey: 'fullName', header: 'نام کامل' },
  { accessorKey: 'email', header: 'ایمیل' },
  { accessorKey: 'role', header: 'نقش' },
];

// تعریف ستون‌ها با رندر سفارشی
const columnsWithCustomRender: ColumnDefinition<User>[] = [
  ...columns,
  {
    accessorKey: 'status',
    header: 'وضعیت',
    cell: (user) => (
      <Label 
        text={user.status} 
        size="sm" 
        variant={user.status === 'فعال' ? 'primary' : 'error'} 
        style={{ 
          backgroundColor: user.status === 'فعال' ? 'rgba(52, 211, 153, 0.1)' : 'rgba(255, 59, 48, 0.1)',
          padding: '0.25rem 0.5rem',
          borderRadius: '9999px',
          color: user.status === 'فعال' ? '#10B981' : '#EF4444'
        }}
      />
    )
  },
  {
      accessorKey: 'id',
      header: 'عملیات',
      cell: (user) => <button onClick={() => alert(`در حال ویرایش کاربر ${user.id}`)}>ویرایش</button>
  }
];

// تعریف Meta اطلاعات برای Storybook
const meta: Meta<typeof Table<User>> = {
  title: "Molecules/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table<User>>;

// تعریف استوری‌های مختلف
export const Default: Story = {
  name: "جدول پیش‌فرض",
  args: {
    data: sampleData,
    columns: columns,
  },
};

export const WithCustomCells: Story = {
  name: "با رندر سفارشی سلول‌ها",
  args: {
    data: sampleData,
    columns: columnsWithCustomRender,
  },
};

export const EmptyState: Story = {
  name: "حالت خالی",
  args: {
    data: [],
    columns: columns,
    emptyStateMessage: "هیچ کاربری یافت نشد. می‌توانید یک کاربر جدید اضافه کنید.",
  },
};

export const MobileView: Story = {
  name: "نمایش در موبایل",
  args: {
    data: sampleData,
    columns: columnsWithCustomRender,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};