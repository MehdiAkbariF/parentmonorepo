import { jsx as _jsx } from "react/jsx-runtime";
import { Table } from "./Table";
import { Label } from '../../atoms/Label/Label';
// تعریف داده‌های نمونه
const sampleData = [
    { id: 1, fullName: 'علی رضایی', email: 'ali.rezaei@example.com', role: 'Admin', status: 'فعال' },
    { id: 2, fullName: 'زهرا احمدی', email: 'zahra.ahmadi@example.com', role: 'Editor', status: 'فعال' },
    { id: 3, fullName: 'رضا قاسمی', email: 'reza.ghasemi@example.com', role: 'Viewer', status: 'غیرفعال' },
    { id: 4, fullName: 'مریم محمدی', email: 'maryam.mohammadi@example.com', role: 'Editor', status: 'فعال' },
];
// تعریف ستون‌های پایه
const columns = [
    { accessorKey: 'fullName', header: 'نام کامل' },
    { accessorKey: 'email', header: 'ایمیل' },
    { accessorKey: 'role', header: 'نقش' },
];
// تعریف ستون‌ها با رندر سفارشی
const columnsWithCustomRender = [
    ...columns,
    {
        accessorKey: 'status',
        header: 'وضعیت',
        cell: (user) => (_jsx(Label, { text: user.status, size: "sm", variant: user.status === 'فعال' ? 'primary' : 'error', style: {
                backgroundColor: user.status === 'فعال' ? 'rgba(52, 211, 153, 0.1)' : 'rgba(255, 59, 48, 0.1)',
                padding: '0.25rem 0.5rem',
                borderRadius: '9999px',
                color: user.status === 'فعال' ? '#10B981' : '#EF4444'
            } }))
    },
    {
        accessorKey: 'id',
        header: 'عملیات',
        cell: (user) => _jsx("button", { onClick: () => alert(`در حال ویرایش کاربر ${user.id}`), children: "\u0648\u06CC\u0631\u0627\u06CC\u0634" })
    }
];
// تعریف Meta اطلاعات برای Storybook
const meta = {
    title: "Molecules/Table",
    component: Table,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};
export default meta;
// تعریف استوری‌های مختلف
export const Default = {
    name: "جدول پیش‌فرض",
    args: {
        data: sampleData,
        columns: columns,
    },
};
export const WithCustomCells = {
    name: "با رندر سفارشی سلول‌ها",
    args: {
        data: sampleData,
        columns: columnsWithCustomRender,
    },
};
export const EmptyState = {
    name: "حالت خالی",
    args: {
        data: [],
        columns: columns,
        emptyStateMessage: "هیچ کاربری یافت نشد. می‌توانید یک کاربر جدید اضافه کنید.",
    },
};
export const MobileView = {
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
