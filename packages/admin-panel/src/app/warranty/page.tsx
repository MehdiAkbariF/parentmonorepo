"use client";
import React, { useState, useCallback, ReactNode } from "react";
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
  FilterTabs,
  Select,
  ToggleSwitch,
  type ColumnDefinition,
  type SelectOption,
} from "@my-ds/design-system";
import { useRouter } from 'next/navigation';
import { getWarranties, updateWarranty, deleteWarranty, createWarranty, } from "../../services/api/warrantyService";
import { useListPage } from "../../hooks/ListPageHook";
import { pageSizeOptions, commonTimeFilters } from "../../config/filters.config";
import { exportToExcel } from "../../utils/exportUtils";
import { Warranty } from "@/services/api/types";
// داده‌های فیلتر وضعیت مختص گارانتی
const warrantyStatusFilters: SelectOption[] = [
    { value: 'all', label: 'همه وضعیت‌ها' },
    { value: 'true', label: 'فعال' },
    { value: 'false', label: 'غیرفعال' },
];

export default function WarrantyPage() {
  const pathname = usePathname();
  const router = useRouter();
  const renderLink = (href: string, children: ReactNode) => <Link href={href}>{children}</Link>;

  // تابع واکشی داده را با useCallback پایدار می‌کنیم
  const fetchWarrantiesData = useCallback((page: number, size: number, filters?: any) => {
    // در آینده می‌توانید فیلترها را به API پاس دهید
    return getWarranties(page, size);
  }, []);

  // فراخوانی هوک هوشمند با پیکربندی کامل
  const {
    data: warranties,
    totalCount,
    isLoading,
    error,
    currentPage,
    pageSize,
    searchTerm,
    activeTimeFilter,
    selectedStatus,
    handlePageChange,
    handlePageSizeChange,
    handleSearchChange,
    handleTimeFilterChange,
    handleStatusChange,
    // ما به هوک می‌گوییم: "تابع refreshData را بگیر و آن را در متغیری به نام refreshWarranties ذخیره کن"
    refreshData: refreshWarranties, 
  } = useListPage<Warranty>({
    fetchData: fetchWarrantiesData,
    searchKeys: ['title'],
    dateKey: 'createDate',
    statusKey: 'isActive',
  });
  
  // State های مختص مودال و اکشن‌های این صفحه
 const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingWarranty, setEditingWarranty] = useState<Warranty | null>(null);
  
  // ۲. State های جدید برای فیلدهای فرم
  const [formTitle, setFormTitle] = useState('');
  const [formIsActive, setFormIsActive] = useState(true); // مقدار پیش‌فرض برای افزودن

  const [actionLoading, setActionLoading] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // --- Handlers ---
  const handleOpenAddModal = () => {
    setEditingWarranty(null);
    setFormTitle('');
    setFormIsActive(true); // ریست کردن به حالت پیش‌فرض
    setIsFormModalOpen(true);
  };

  const handleOpenEditModal = (warranty: Warranty) => {
    setEditingWarranty(warranty);
    setFormTitle(warranty.title);
    setFormIsActive(warranty.isActive); // مقداردهی اولیه از آیتم در حال ویرایش
    setIsFormModalOpen(true);
  };

  const handleFormSubmit = async () => {
    if (!formTitle.trim()) {
      alert("عنوان گارانتی نمی‌تواند خالی باشد.");
      return;
    }
    setActionLoading(true);
    try {
      if (editingWarranty) {
        // ۳. در حالت ویرایش، isActive را هم ارسال می‌کنیم
        await updateWarranty(editingWarranty.id, { 
          title: formTitle, 
          isActive: formIsActive 
        });
      } else {
        // API شما برای create، فیلد isActive را نمی‌پذیرد، پس فقط title را می‌فرستیم
        // اگر API تغییر کرد، می‌توانید isActive را هم اینجا اضافه کنید
        await createWarranty(formTitle);
      }
      setIsFormModalOpen(false);
      await refreshWarranties();
    } catch (err) {
      alert("خطا در ذخیره‌سازی گارانتی.");
    } finally {
      setActionLoading(false);
    }
  };


  const handleViewWarranty = (warrantyId: number) => {
    // شما می‌توانید برای مشاهده یک صفحه جداگانه بسازید یا از همان صفحه ویرایش استفاده کنید
    router.push(`/warranty/${warrantyId}`);
  };

  const handleDelete = async (warrantyId: number) => {
    if (window.confirm("آیا از حذف این گارانتی مطمئن هستید؟")) {
      try {
        await deleteWarranty(warrantyId);
        await refreshWarranties(); 
        
      } catch (err) {
        alert("خطا در حذف گارانتی.");
      }
    }
  };

  const handleExport = async () => {
    // هوک ما در حال حاضر فقط داده‌های صفحه‌بندی شده را برمی‌گرداند.
    // برای خروجی کامل، باید هوک را ارتقا دهیم تا کل لیست فیلتر شده را برگرداند.
    // فعلاً از داده‌های صفحه فعلی خروجی می‌گیریم.
    if (!warranties.length) {
      alert("هیچ داده‌ای برای خروجی گرفتن وجود ندارد.");
      return;
    }
    setIsExporting(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    const dataToExport = warranties.map(w => ({
      'شناسه': w.id,
      'عنوان': w.title,
      'وضعیت': w.isActive ? "فعال" : "غیرفعال",
      'تاریخ ثبت': new Date(w.createDate).toLocaleDateString('fa-IR'),
    }));
    exportToExcel(dataToExport, "لیست_گارانتی‌ها");
    setIsExporting(false);
  };

  // --- Column Definitions ---
 const warrantyColumns: ColumnDefinition<Warranty>[] = [
    {
      // ۳. ✨ یک ستون جدید برای "ردیف"
      accessorKey: 'id', // می‌توانیم از id استفاده کنیم چون منحصر به فرد است
      header: 'ردیف',
      // ۴. ✨ از index برای محاسبه شماره ردیف استفاده می‌کنیم
      cell: (warranty, index) => {
        const rowNumber = (currentPage - 1) * pageSize + index + 1;
        return <Label text={String(rowNumber)} size="md" />;
      },
    },
    { accessorKey: 'title', header: 'عنوان گارانتی', cell: (w) => <Label text={w.title} size="md" /> },
    { accessorKey: 'isActive', header: 'وضعیت', cell: (w) => <Badge label={w.isActive ? "فعال" : "غیرفعال"} variant={w.isActive ? "success" : "neutral"} /> },
    { accessorKey: 'createDate', header: 'تاریخ ثبت', cell: (w) => <Label text={new Date(w.createDate).toLocaleDateString('fa-IR')} size="md" /> },
  ];
  
  // --- Props Preparation ---
  const filterSection = (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
      <FilterTabs
        tabs={commonTimeFilters}
        activeTab={activeTimeFilter}
        onTabChange={handleTimeFilterChange}
      />
      <Select
        options={warrantyStatusFilters}
        value={String(selectedStatus)}
        onChange={handleStatusChange}
        aria-label="فیلتر بر اساس وضعیت"
      />
    </div>
  );
  
  const listPageProps = {
    listPageHeaderProps: {
      title: "مدیریت گارانتی‌ها",
      totalItems: totalCount,
      searchInputProps: {
        value: searchTerm,
        onChange: handleSearchChange,
        placeholder: "جستجو در عناوین...",
      },
      exportButtonProps: { onClick: handleExport, isLoading: isExporting },
      actions: <Button onClick={handleOpenAddModal}>افزودن گارانتی</Button> 
    },
    tableProps: {
      columns: warrantyColumns,
      data: warranties,
      emptyStateMessage: "هیچ گارانتی یافت نشد.",
      rowActions: (warranty: Warranty) => ({
      onView: () => handleViewWarranty(warranty.id), // <-- این خط اضافه شد
      onEdit: () => handleOpenEditModal(warranty),
      onDelete: () => handleDelete(warranty.id),
    }),
    },
    paginationProps: {
      currentPage: currentPage,
      pageSize: pageSize,
      totalCount: totalCount,
      onPageChange: handlePageChange,
      pageSizeOptions: pageSizeOptions,
      onPageSizeChange: handlePageSizeChange,
    },
    filterSection: filterSection,
    isLoading: isLoading,
    error: error,
  };

  // --- JSX ---
  return (
    <>
      <YadakchiAdminLayout
        currentPath={pathname}
        renderLink={renderLink}
      >
        <ListPageLayout {...listPageProps} />
      </YadakchiAdminLayout>

      <FormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        title={editingWarranty ? "ویرایش گارانتی" : "افزودن گارانتی جدید"}
        onConfirm={handleFormSubmit}
        isLoading={actionLoading}
        confirmText={editingWarranty ? "ذخیره تغییرات" : "ایجاد گارانتی"}
      >
        <form 
          onSubmit={(e) => { e.preventDefault(); handleFormSubmit(); }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <Input
            id="warranty-title"
            label="عنوان گارانتی"
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            required
            autoFocus
          />
          {/* فقط در حالت ویرایش، ToggleSwitch را نمایش می‌دهیم (چون API create آن را نمی‌پذیرد) */}
          {editingWarranty && (
            <ToggleSwitch
              label="گارانتی فعال باشد"
              enabled={formIsActive}
              onChange={setFormIsActive}
            />
          )}
        </form>
      </FormModal>
    </>
  );
}