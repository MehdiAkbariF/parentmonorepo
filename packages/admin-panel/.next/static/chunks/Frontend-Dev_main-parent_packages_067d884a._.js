(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Frontend-Dev/main-parent/packages/api-client/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createApiClient = createApiClient;
/**
 * یک کلاینت API قابل استفاده مجدد ایجاد می‌کند.
 * @param baseUrl آدرس پایه API (مثلاً '/api')
 * @param getToken (اختیاری) یک تابع که توکن احراز هویت را برمی‌گرداند
 */ function createApiClient(baseUrl, getToken) {
    // تابع داخلی و خصوصی برای ارسال تمام درخواست‌ها
    const request = async function(method, endpoint) {
        let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        const { params, body, headers = {} } = options;
        // ساخت query string از پارامترها
        const query = params ? "?".concat(new URLSearchParams(params).toString()) : '';
        const url = "".concat(baseUrl, "/").concat(endpoint).concat(query);
        // گرفتن توکن در لحظه ارسال درخواست
        const token = getToken === null || getToken === void 0 ? void 0 : getToken();
        const isFormData = body instanceof FormData;
        // ساخت هدرهای نهایی
        const finalHeaders = Object.assign(Object.assign(Object.assign({}, isFormData ? {} : {
            'Content-Type': 'application/json'
        }), token ? {
            Authorization: "Bearer ".concat(token)
        } : {}), headers);
        // ارسال درخواست با استفاده از fetch API
        const response = await fetch(url, {
            method,
            headers: finalHeaders,
            body: method !== 'GET' && body ? isFormData ? body : JSON.stringify(body) : undefined
        });
        // مدیریت خطاهای HTTP (مانند 401, 404, 500)
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({
                    message: response.statusText
                }));
            throw new Error(errorData.message || "Request failed with status ".concat(response.status));
        }
        // ✨ --- منطق هوشمند برای پردازش پاسخ --- ✨
        // ۱. بررسی می‌کنیم که آیا پاسخ بدنه دارد یا نه
        const contentType = response.headers.get("content-type");
        const contentLength = response.headers.get("content-length");
        // اگر پاسخ 204 (No Content) بود یا هیچ محتوایی نداشت، null برگردان
        if (response.status === 204 || contentLength === '0') {
            return null;
        }
        // اگر محتوا از نوع JSON بود، آن را parse کن
        if (contentType && contentType.includes("application/json")) {
            return response.json();
        }
        // برای انواع دیگر محتوا (مانند text/plain)، خود پاسخ را برمی‌گردانیم
        // در غیر این صورت، null برگردان
        return response.text();
    };
    // برگرداندن آبجکتی با متدهای عمومی
    return {
        get: (endpoint, options)=>request('GET', endpoint, options),
        post: (endpoint, options)=>request('POST', endpoint, options),
        put: (endpoint, options)=>request('PUT', endpoint, options),
        delete: (endpoint, options)=>request('DELETE', endpoint, options)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/services/apiClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ۱. وارد کردن تابع createApiClient از پکیج جدیدی که ساختیم
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$api$2d$client$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/api-client/dist/index.js [app-client] (ecmascript)");
;
// ۲. تعریف یک تابع برای خواندن توکن احراز هویت
// این تابع مختص اپلیکیشن شماست و می‌تواند در آینده پیچیده‌تر شود
const getToken = ()=>{
    // در یک اپلیکیشن واقعی، توکن از localStorage، sessionStorage یا یک cookie خوانده می‌شود.
    // برای تست، ما می‌توانیم توکن را به صورت ثابت برگردانیم.
    // مطمئن شوید که این توکن معتبر و منقضی نشده باشد.
    if ("object" !== 'undefined') {
    // مثال: return localStorage.getItem('authToken');
    }
    // توکن نمونه شما:
    return "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxNDdhZGM4NS00NmEzLTRiNzEtYWEzZi01MWExMjliZmY4NTgiLCJuYmYiOjE3NTY0Njk3ODcsImV4cCI6MTc2NjQ2OTY4NywiaXNzIjoiWWFkYWtjaGkiLCJhdWQiOiJmcm9udC5sb3R0ZXN0LmlyIn0.Mr2MoA4vBcuHtLhfRz59B0IrRPW5dTU5VFtBxQuMhVeYoCUGvXdigCZXnVfWM8UU6svOMUE2FiTJiUaVE00xdA";
};
// ۳. ایجاد یک نمونه (instance) از کلاینت API با استفاده از متغیر محیطی
//    ما از /api/ به عنوان baseUrl استفاده می‌کنیم تا درخواست‌ها به پروکسی Next.js ارسال شوند
const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$api$2d$client$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createApiClient"])('/api', getToken);
const __TURBOPACK__default__export__ = apiClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/services/api/warrantyService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWarranty",
    ()=>createWarranty,
    "deleteWarranty",
    ()=>deleteWarranty,
    "getWarranties",
    ()=>getWarranties,
    "getWarrantyById",
    ()=>getWarrantyById,
    "updateWarranty",
    ()=>updateWarranty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/services/apiClient.ts [app-client] (ecmascript)");
;
const getWarrantyById = (warrantyId)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('A_Warranty/Warranty', {
        params: {
            Id: warrantyId
        }
    });
};
const getWarranties = (pageNumber, pageSize)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('A_Warranty/Warrantys', {
        params: {
            PageNumber: pageNumber,
            PageSize: pageSize
        }
    });
};
const createWarranty = (title)=>{
    const formData = new FormData();
    formData.append('Title', title);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('A_Warranty/Warranty', {
        body: formData
    });
};
const updateWarranty = (id, data)=>{
    const formData = new FormData();
    formData.append('Id', String(id));
    if (data.title !== undefined) formData.append('Title', data.title);
    if (data.isActive !== undefined) formData.append('IsActive', String(data.isActive));
    return __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put('A_Warranty/Warranty', {
        body: formData
    });
};
const deleteWarranty = (id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete('A_Warranty/Warranty', {
        body: {
            id
        }
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/utils/dateUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// توابع کمکی برای شروع روز، هفته و ماه
__turbopack_context__.s([
    "isThisMonth",
    ()=>isThisMonth,
    "isThisWeek",
    ()=>isThisWeek,
    "isToday",
    ()=>isToday
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isWithinInterval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfMonth.js [app-client] (ecmascript)");
;
const isToday = (date)=>{
    const dateObj = new Date(date);
    const todayStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(new Date());
    const todayEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(new Date());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithinInterval"])(dateObj, {
        start: todayStart,
        end: todayEnd
    });
};
const isThisWeek = (date)=>{
    const dateObj = new Date(date);
    const weekStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(new Date(), {
        weekStartsOn: 6
    }); // شنبه به عنوان شروع هفته
    const weekEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfWeek"])(new Date(), {
        weekStartsOn: 6
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithinInterval"])(dateObj, {
        start: weekStart,
        end: weekEnd
    });
};
const isThisMonth = (date)=>{
    const dateObj = new Date(date);
    const monthStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(new Date());
    const monthEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfMonth"])(new Date());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithinInterval"])(dateObj, {
        start: monthStart,
        end: monthEnd
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/hooks/ListPageHook.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useListPage",
    ()=>useListPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/utils/dateUtils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const useListPage = (param)=>{
    let { fetchData, searchKeys, dateKey, statusKey } = param;
    _s();
    const [allData, setAllData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeTimeFilter, setActiveTimeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('newest');
    const [selectedStatus, setSelectedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    // تابع واکشی را با useCallback پایدار می‌کنیم
    const loadData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useListPage.useCallback[loadData]": async ()=>{
            try {
                setIsLoading(true);
                setError(null);
                // برای فیلتر سمت کلاینت، تمام داده‌ها را می‌گیریم.
                // در آینده می‌توان این را بهینه کرد تا فیلترها را به API پاس دهد.
                const response = await fetchData(1, 1000);
                setAllData(response.items);
            } catch (err) {
                setError(err instanceof Error ? err.message : "خطا در واکشی داده‌ها");
            } finally{
                setIsLoading(false);
            }
        }
    }["useListPage.useCallback[loadData]"], [
        fetchData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useListPage.useEffect": ()=>{
            loadData();
        }
    }["useListPage.useEffect"], [
        loadData
    ]);
    const filteredAndSortedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useListPage.useMemo[filteredAndSortedData]": ()=>{
            let filtered = [
                ...allData
            ];
            if (searchTerm) {
                const lowercasedFilter = searchTerm.toLowerCase();
                filtered = filtered.filter({
                    "useListPage.useMemo[filteredAndSortedData]": (item)=>searchKeys.some({
                            "useListPage.useMemo[filteredAndSortedData]": (key)=>String(item[key]).toLowerCase().includes(lowercasedFilter)
                        }["useListPage.useMemo[filteredAndSortedData]"])
                }["useListPage.useMemo[filteredAndSortedData]"]);
            }
            if (selectedStatus !== 'all') {
                const statusValue = selectedStatus === 'true' ? true : selectedStatus === 'false' ? false : selectedStatus;
                filtered = filtered.filter({
                    "useListPage.useMemo[filteredAndSortedData]": (item)=>item[statusKey] === statusValue
                }["useListPage.useMemo[filteredAndSortedData]"]);
            }
            switch(activeTimeFilter){
                case 'today':
                    filtered = filtered.filter({
                        "useListPage.useMemo[filteredAndSortedData]": (item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isToday"])(String(item[dateKey]))
                    }["useListPage.useMemo[filteredAndSortedData]"]);
                    break;
                case 'this_week':
                    filtered = filtered.filter({
                        "useListPage.useMemo[filteredAndSortedData]": (item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThisWeek"])(String(item[dateKey]))
                    }["useListPage.useMemo[filteredAndSortedData]"]);
                    break;
                case 'this_month':
                    filtered = filtered.filter({
                        "useListPage.useMemo[filteredAndSortedData]": (item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThisMonth"])(String(item[dateKey]))
                    }["useListPage.useMemo[filteredAndSortedData]"]);
                    break;
                case 'oldest':
                    filtered.sort({
                        "useListPage.useMemo[filteredAndSortedData]": (a, b)=>new Date(String(a[dateKey])).getTime() - new Date(String(b[dateKey])).getTime()
                    }["useListPage.useMemo[filteredAndSortedData]"]);
                    break;
                case 'newest':
                default:
                    filtered.sort({
                        "useListPage.useMemo[filteredAndSortedData]": (a, b)=>new Date(String(b[dateKey])).getTime() - new Date(String(a[dateKey])).getTime()
                    }["useListPage.useMemo[filteredAndSortedData]"]);
                    break;
            }
            return filtered;
        }
    }["useListPage.useMemo[filteredAndSortedData]"], [
        allData,
        searchTerm,
        activeTimeFilter,
        selectedStatus,
        searchKeys,
        dateKey,
        statusKey
    ]);
    const paginatedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useListPage.useMemo[paginatedData]": ()=>{
            const startIndex = (currentPage - 1) * pageSize;
            return filteredAndSortedData.slice(startIndex, startIndex + pageSize);
        }
    }["useListPage.useMemo[paginatedData]"], [
        filteredAndSortedData,
        currentPage,
        pageSize
    ]);
    const handlePageChange = (page)=>setCurrentPage(page);
    const handlePageSizeChange = (size)=>{
        setPageSize(size);
        setCurrentPage(1);
    };
    const handleSearchChange = (event)=>{
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };
    const handleTimeFilterChange = (tabId)=>{
        setActiveTimeFilter(tabId);
        setCurrentPage(1);
    };
    const handleStatusChange = (event)=>{
        setSelectedStatus(event.target.value);
        setCurrentPage(1);
    };
    // --- مقادیر خروجی هوک ---
    return {
        data: paginatedData,
        totalCount: filteredAndSortedData.length,
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
        // ✨ --- این خط جدید اضافه شد ---
        refreshData: loadData
    };
};
_s(useListPage, "CS3/Crlr9CZv20/5v0cPhZNnBfo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/config/filters.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "commonTimeFilters",
    ()=>commonTimeFilters,
    "pageSizeOptions",
    ()=>pageSizeOptions,
    "shopStatusFilters",
    ()=>shopStatusFilters
]);
const commonTimeFilters = [
    {
        id: 'newest',
        label: 'جدیدترین'
    },
    {
        id: 'oldest',
        label: 'قدیمی‌ترین'
    },
    {
        id: 'today',
        label: 'امروز'
    },
    {
        id: 'this_week',
        label: 'این هفته'
    },
    {
        id: 'this_month',
        label: 'این ماه'
    }
];
const shopStatusFilters = [
    {
        value: 'all',
        label: 'همه وضعیت‌ها'
    },
    {
        value: 'Confirmed',
        label: 'تایید شده'
    },
    {
        value: 'InProgress',
        label: 'در حال بررسی'
    },
    {
        value: 'Answered',
        label: 'پاسخ داده شده'
    },
    {
        value: 'Rejected',
        label: 'رد شده'
    }
];
const pageSizeOptions = [
    {
        label: '5',
        value: 5
    },
    {
        label: '10',
        value: 10
    },
    {
        label: '20',
        value: 20
    },
    {
        label: '50',
        value: 50
    },
    {
        label: '100',
        value: 100
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/utils/exportUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportToExcel",
    ()=>exportToExcel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/xlsx@0.18.5/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
;
const exportToExcel = function(data, fileName) {
    let sheetName = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'Sheet 1';
    try {
        // ۱. ساخت یک شیت جدید از داده‌های JSON
        const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(data);
        // ۲. ساخت یک بوک جدید
        const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
        // ۳. اضافه کردن شیت به بوک
        __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, sheetName);
        // ۴. نوشتن (تولید) فایل و شروع دانلود
        __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](workbook, "".concat(fileName, ".xlsx"));
    } catch (error) {
        console.error("خطا در هنگام تولید فایل اکسل:", error);
        alert("متاسفانه در تولید خروجی اکسل خطایی رخ داد.");
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WarrantyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/navigation.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@my-ds/design-system'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$api$2f$warrantyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/services/api/warrantyService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$hooks$2f$ListPageHook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/hooks/ListPageHook.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$config$2f$filters$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/config/filters.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$utils$2f$exportUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/utils/exportUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
// داده‌های فیلتر وضعیت مختص گارانتی
const warrantyStatusFilters = [
    {
        value: 'all',
        label: 'همه وضعیت‌ها'
    },
    {
        value: 'true',
        label: 'فعال'
    },
    {
        value: 'false',
        label: 'غیرفعال'
    }
];
function WarrantyPage() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const renderLink = (href, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            children: children
        }, void 0, false, {
            fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
            lineNumber: 36,
            columnNumber: 61
        }, this);
    // تابع واکشی داده را با useCallback پایدار می‌کنیم
    const fetchWarrantiesData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WarrantyPage.useCallback[fetchWarrantiesData]": (page, size, filters)=>{
            // در آینده می‌توانید فیلترها را به API پاس دهید
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$api$2f$warrantyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWarranties"])(page, size);
        }
    }["WarrantyPage.useCallback[fetchWarrantiesData]"], []);
    // فراخوانی هوک هوشمند با پیکربندی کامل
    const { data: warranties, totalCount, isLoading, error, currentPage, pageSize, searchTerm, activeTimeFilter, selectedStatus, handlePageChange, handlePageSizeChange, handleSearchChange, handleTimeFilterChange, handleStatusChange, // ما به هوک می‌گوییم: "تابع refreshData را بگیر و آن را در متغیری به نام refreshWarranties ذخیره کن"
    refreshData: refreshWarranties } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$hooks$2f$ListPageHook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListPage"])({
        fetchData: fetchWarrantiesData,
        searchKeys: [
            'title'
        ],
        dateKey: 'createDate',
        statusKey: 'isActive'
    });
    // State های مختص مودال و اکشن‌های این صفحه
    const [isFormModalOpen, setIsFormModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingWarranty, setEditingWarranty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ۲. State های جدید برای فیلدهای فرم
    const [formTitle, setFormTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [formIsActive, setFormIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // مقدار پیش‌فرض برای افزودن
    const [actionLoading, setActionLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Handlers ---
    const handleOpenAddModal = ()=>{
        setEditingWarranty(null);
        setFormTitle('');
        setFormIsActive(true); // ریست کردن به حالت پیش‌فرض
        setIsFormModalOpen(true);
    };
    const handleOpenEditModal = (warranty)=>{
        setEditingWarranty(warranty);
        setFormTitle(warranty.title);
        setFormIsActive(warranty.isActive); // مقداردهی اولیه از آیتم در حال ویرایش
        setIsFormModalOpen(true);
    };
    const handleFormSubmit = async ()=>{
        if (!formTitle.trim()) {
            alert("عنوان گارانتی نمی‌تواند خالی باشد.");
            return;
        }
        setActionLoading(true);
        try {
            if (editingWarranty) {
                // ۳. در حالت ویرایش، isActive را هم ارسال می‌کنیم
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$api$2f$warrantyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateWarranty"])(editingWarranty.id, {
                    title: formTitle,
                    isActive: formIsActive
                });
            } else {
                // API شما برای create، فیلد isActive را نمی‌پذیرد، پس فقط title را می‌فرستیم
                // اگر API تغییر کرد، می‌توانید isActive را هم اینجا اضافه کنید
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$api$2f$warrantyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWarranty"])(formTitle);
            }
            setIsFormModalOpen(false);
            await refreshWarranties();
        } catch (err) {
            alert("خطا در ذخیره‌سازی گارانتی.");
        } finally{
            setActionLoading(false);
        }
    };
    const handleViewWarranty = (warrantyId)=>{
        // شما می‌توانید برای مشاهده یک صفحه جداگانه بسازید یا از همان صفحه ویرایش استفاده کنید
        router.push("/warranty/".concat(warrantyId));
    };
    const handleDelete = async (warrantyId)=>{
        if (window.confirm("آیا از حذف این گارانتی مطمئن هستید؟")) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$api$2f$warrantyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteWarranty"])(warrantyId);
                await refreshWarranties();
            } catch (err) {
                alert("خطا در حذف گارانتی.");
            }
        }
    };
    const handleExport = async ()=>{
        // هوک ما در حال حاضر فقط داده‌های صفحه‌بندی شده را برمی‌گرداند.
        // برای خروجی کامل، باید هوک را ارتقا دهیم تا کل لیست فیلتر شده را برگرداند.
        // فعلاً از داده‌های صفحه فعلی خروجی می‌گیریم.
        if (!warranties.length) {
            alert("هیچ داده‌ای برای خروجی گرفتن وجود ندارد.");
            return;
        }
        setIsExporting(true);
        await new Promise((resolve)=>setTimeout(resolve, 500));
        const dataToExport = warranties.map((w)=>({
                'شناسه': w.id,
                'عنوان': w.title,
                'وضعیت': w.isActive ? "فعال" : "غیرفعال",
                'تاریخ ثبت': new Date(w.createDate).toLocaleDateString('fa-IR')
            }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$utils$2f$exportUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportToExcel"])(dataToExport, "لیست_گارانتی‌ها");
        setIsExporting(false);
    };
    // --- Column Definitions ---
    const warrantyColumns = [
        {
            // ۳. ✨ یک ستون جدید برای "ردیف"
            accessorKey: 'id',
            header: 'ردیف',
            // ۴. ✨ از index برای محاسبه شماره ردیف استفاده می‌کنیم
            cell: (warranty, index)=>{
                const rowNumber = (currentPage - 1) * pageSize + index + 1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                    text: String(rowNumber),
                    size: "md"
                }, void 0, false, {
                    fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                    lineNumber: 169,
                    columnNumber: 16
                }, this);
            }
        },
        {
            accessorKey: 'title',
            header: 'عنوان گارانتی',
            cell: (w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                    text: w.title,
                    size: "md"
                }, void 0, false, {
                    fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                    lineNumber: 172,
                    columnNumber: 67
                }, this)
        },
        {
            accessorKey: 'isActive',
            header: 'وضعیت',
            cell: (w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                    label: w.isActive ? "فعال" : "غیرفعال",
                    variant: w.isActive ? "success" : "neutral"
                }, void 0, false, {
                    fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                    lineNumber: 173,
                    columnNumber: 62
                }, this)
        },
        {
            accessorKey: 'createDate',
            header: 'تاریخ ثبت',
            cell: (w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                    text: new Date(w.createDate).toLocaleDateString('fa-IR'),
                    size: "md"
                }, void 0, false, {
                    fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                    lineNumber: 174,
                    columnNumber: 68
                }, this)
        }
    ];
    // --- Props Preparation ---
    const filterSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterTabs, {
                tabs: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$config$2f$filters$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonTimeFilters"],
                activeTab: activeTimeFilter,
                onTabChange: handleTimeFilterChange
            }, void 0, false, {
                fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                options: warrantyStatusFilters,
                value: String(selectedStatus),
                onChange: handleStatusChange,
                "aria-label": "فیلتر بر اساس وضعیت"
            }, void 0, false, {
                fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
    const listPageProps = {
        listPageHeaderProps: {
            title: "مدیریت گارانتی‌ها",
            totalItems: totalCount,
            searchInputProps: {
                value: searchTerm,
                onChange: handleSearchChange,
                placeholder: "جستجو در عناوین..."
            },
            exportButtonProps: {
                onClick: handleExport,
                isLoading: isExporting
            },
            actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                onClick: handleOpenAddModal,
                children: "افزودن گارانتی"
            }, void 0, false, {
                fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                lineNumber: 204,
                columnNumber: 16
            }, this)
        },
        tableProps: {
            columns: warrantyColumns,
            data: warranties,
            emptyStateMessage: "هیچ گارانتی یافت نشد.",
            rowActions: (warranty)=>({
                    onView: ()=>handleViewWarranty(warranty.id),
                    onEdit: ()=>handleOpenEditModal(warranty),
                    onDelete: ()=>handleDelete(warranty.id)
                })
        },
        paginationProps: {
            currentPage: currentPage,
            pageSize: pageSize,
            totalCount: totalCount,
            onPageChange: handlePageChange,
            pageSizeOptions: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$config$2f$filters$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageSizeOptions"],
            onPageSizeChange: handlePageSizeChange
        },
        filterSection: filterSection,
        isLoading: isLoading,
        error: error
    };
    // --- JSX ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YadakchiAdminLayout, {
                currentPath: pathname,
                renderLink: renderLink,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListPageLayout, {
                    ...listPageProps
                }, void 0, false, {
                    fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormModal, {
                isOpen: isFormModalOpen,
                onClose: ()=>setIsFormModalOpen(false),
                title: editingWarranty ? "ویرایش گارانتی" : "افزودن گارانتی جدید",
                onConfirm: handleFormSubmit,
                isLoading: actionLoading,
                confirmText: editingWarranty ? "ذخیره تغییرات" : "ایجاد گارانتی",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: (e)=>{
                        e.preventDefault();
                        handleFormSubmit();
                    },
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                            id: "warranty-title",
                            label: "عنوان گارانتی",
                            value: formTitle,
                            onChange: (e)=>setFormTitle(e.target.value),
                            required: true,
                            autoFocus: true
                        }, void 0, false, {
                            fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        editingWarranty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleSwitch, {
                            label: "گارانتی فعال باشد",
                            enabled: formIsActive,
                            onChange: setFormIsActive
                        }, void 0, false, {
                            fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                            lineNumber: 261,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                    lineNumber: 247,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(WarrantyPage, "5P0ZMJBSX+0qwZpjeO9/bv/iZkc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$hooks$2f$ListPageHook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListPage"]
    ];
});
_c = WarrantyPage;
var _c;
__turbopack_context__.k.register(_c, "WarrantyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Frontend-Dev_main-parent_packages_067d884a._.js.map