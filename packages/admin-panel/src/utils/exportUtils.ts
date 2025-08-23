import * as XLSX from 'xlsx';

/**
 * داده‌ها را به یک فایل اکسل تبدیل کرده و دانلود می‌کند.
 * @param data آرایه‌ای از آبجکت‌ها برای تبدیل
 * @param fileName نام فایل خروجی (بدون پسوند)
 * @param sheetName نام شیت داخل فایل اکسل
 */
export const exportToExcel = <T extends {}>(data: T[], fileName: string, sheetName: string = 'Sheet 1'): void => {
  try {
    // ۱. ساخت یک شیت جدید از داده‌های JSON
    const worksheet = XLSX.utils.json_to_sheet(data);

    // ۲. ساخت یک بوک جدید
    const workbook = XLSX.utils.book_new();

    // ۳. اضافه کردن شیت به بوک
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    // ۴. نوشتن (تولید) فایل و شروع دانلود
    XLSX.writeFile(workbook, `${fileName}.xlsx`);

  } catch (error) {
    console.error("خطا در هنگام تولید فایل اکسل:", error);
    alert("متاسفانه در تولید خروجی اکسل خطایی رخ داد.");
  }
};