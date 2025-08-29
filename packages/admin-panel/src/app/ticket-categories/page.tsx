"use client";
import React, { useState, useEffect, ReactNode, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  YadakchiAdminLayout,
  ListPageLayout,
  Label,
  Badge,
  FormModal,
  Input,
  Button,
  ToggleSwitch,
  Select, // ایمپورت Select
  type ColumnDefinition,
  type SelectOption,
} from "@my-ds/design-system";

import {
  getTicketCategories,
  createTicketCategory,
  updateTicketCategory,
} from "../../services/api/ticketCategoryService";
import { TicketCategory } from "@/services/api/types";
import { exportToExcel } from "../../utils/exportUtils";

// داده‌های فیلتر وضعیت مختص دسته‌بندی تیکت
const categoryStatusFilters: SelectOption[] = [
  { value: "all", label: "همه وضعیت‌ها" },
  { value: "true", label: "فعال" },
  { value: "false", label: "غیرفعال" },
];

export default function TicketCategoryPage() {
  const [allCategories, setAllCategories] = useState<TicketCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<TicketCategory | null>(
    null
  );
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    isActive: true,
  });
  const [actionLoading, setActionLoading] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // State برای فیلتر وضعیت
  const [selectedStatus, setSelectedStatus] = useState("all");

  const pathname = usePathname();
  const renderLink = (href: string, children: ReactNode) => (
    <Link href={href}>{children}</Link>
  );

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const response = await getTicketCategories();
      setAllCategories(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "خطا");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // منطق فیلتر کردن سمت کلاینت
  const filteredCategories = useMemo(() => {
    if (selectedStatus === "all") {
      return allCategories;
    }
    const isActive = selectedStatus === "true";
    return allCategories.filter((category) => category.isActive === isActive);
  }, [allCategories, selectedStatus]);

  // --- Handlers ---
  const handleOpenAddModal = () => {
    setEditingCategory(null);
    setFormData({ name: "", description: "", isActive: true });
    setIsFormModalOpen(true);
  };

  const handleOpenEditModal = (category: TicketCategory) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description,
      isActive: category.isActive,
    });
    setIsFormModalOpen(true);
  };

  const handleFormSubmit = async () => {
    if (!formData.name.trim()) {
      alert("نام دسته‌بندی نمی‌تواند خالی باشد.");
      return;
    }
    setActionLoading(true);
    try {
      if (editingCategory) {
        await updateTicketCategory(editingCategory.id, {
          Name: formData.name,
          Description: formData.description,
          IsActive: formData.isActive,
        });
      } else {
        await createTicketCategory({
          Name: formData.name,
          Description: formData.description,
        });
      }
      setIsFormModalOpen(false);
      await fetchCategories();
    } catch (err) {
      alert("خطا در ذخیره‌سازی.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (categoryId: string) => {
    if (window.confirm("آیا از حذف این دسته‌بندی مطمئن هستید؟")) {
      // await deleteTicketCategory(categoryId); // تابع API باید ساخته شود
      await fetchCategories();
    }
  };

  const handleExport = async () => {
    if (!filteredCategories.length) return;
    setIsExporting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const dataToExport = filteredCategories.map((c) => ({
      شناسه: c.id,
      نام: c.name,
      توضیحات: c.description,
      وضعیت: c.isActive ? "فعال" : "غیرفعال",
    }));
    exportToExcel(dataToExport, "لیست_دسته‌بندی‌ها");
    setIsExporting(false);
  };

  const categoryColumns: ColumnDefinition<TicketCategory>[] = [
    {
      accessorKey: "id",
      header: "ردیف",
      cell: (category, index) => <Label text={String(index + 1)} size="md" />,
    },
    {
      accessorKey: "name",
      header: "نام دسته‌بندی",
      cell: (c) => <Label text={c.name} size="md" />,
    },
   { 
      accessorKey: 'description', 
      header: 'توضیحات', 
      // ✨ --- تغییر کلیدی اینجاست ---
      cell: (c) => <Label text={c.description} size="md" variant="secondary" truncate /> 
    },
    {
      accessorKey: "isActive",
      header: "وضعیت",
      cell: (c) => (
        <Badge
          label={c.isActive ? "فعال" : "غیرفعال"}
          variant={c.isActive ? "success" : "neutral"}
        />
      ),
    },
  ];

  const filterSection = (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <Select
        options={categoryStatusFilters}
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        aria-label="فیلتر بر اساس وضعیت"
      />
    </div>
  );

  const listPageProps = {
    listPageHeaderProps: {
      title: "مدیریت دسته‌بندی تیکت‌ها",
      totalItems: filteredCategories.length,
      exportButtonProps: {
        onClick: handleExport,
        isLoading: isExporting,
      },
      actions: <Button onClick={handleOpenAddModal}>افزودن دسته‌بندی</Button>,
    },
    tableProps: {
      columns: categoryColumns,
      data: filteredCategories,
      emptyStateMessage: "هیچ دسته‌بندی یافت نشد.",
      rowActions: (category: TicketCategory) => ({
        onEdit: () => handleOpenEditModal(category),
        // onDelete: () => handleDelete(category.id),
      }),
    },
    filterSection: filterSection,
    isLoading: isLoading,
    error: error,
  };

  return (
    <>
      <YadakchiAdminLayout currentPath={pathname} renderLink={renderLink}>
        <ListPageLayout {...listPageProps} />
      </YadakchiAdminLayout>

      <FormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        title={editingCategory ? "ویرایش دسته‌بندی" : "افزودن دسته‌بندی جدید"}
        onConfirm={handleFormSubmit}
        isLoading={actionLoading}
        confirmText={editingCategory ? "ذخیره" : "ایجاد"}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit();
          }}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <Input
            id="category-name"
            label="نام دسته‌بندی"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
            autoFocus
          />
          <Input
            id="category-description"
            label="توضیحات"
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
          />
          {editingCategory && (
            <ToggleSwitch
              label="دسته‌بندی فعال باشد"
              enabled={formData.isActive}
              onChange={(enabled) =>
                setFormData((prev) => ({ ...prev, isActive: enabled }))
              }
            />
          )}
        </form>
      </FormModal>
    </>
  );
}
