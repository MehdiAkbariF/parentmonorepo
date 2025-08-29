module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Frontend-Dev/main-parent/packages/api-client/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createApiClient = createApiClient;
function createApiClient(baseUrl, getToken) {
    const request = async (method, endpoint, options = {})=>{
        // ... منطق داخلی request بدون تغییر باقی می‌ماند ...
        const { params, body, headers = {} } = options;
        const query = params ? `?${new URLSearchParams(params).toString()}` : '';
        const url = `${baseUrl}/${endpoint}${query}`;
        const token = getToken === null || getToken === void 0 ? void 0 : getToken();
        const isFormData = body instanceof FormData;
        const finalHeaders = Object.assign(Object.assign(Object.assign({}, isFormData ? {} : {
            'Content-Type': 'application/json'
        }), token ? {
            Authorization: `Bearer ${token}`
        } : {}), headers);
        const response = await fetch(url, {
            method,
            headers: finalHeaders,
            // ✨ حالا body برای DELETE هم ارسال می‌شود
            body: method !== 'GET' && body ? isFormData ? body : JSON.stringify(body) : undefined
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({
                    message: response.statusText
                }));
            throw new Error(errorData.message || `Request failed with status ${response.status}`);
        }
        if (response.status === 204) return null;
        return response.json();
    };
    // ✨ --- تغییر کلیدی در اینجا است ---
    return {
        get: (endpoint, options)=>request('GET', endpoint, options),
        post: (endpoint, options)=>request('POST', endpoint, options),
        put: (endpoint, options)=>request('PUT', endpoint, options),
        delete: (endpoint, options)=>request('DELETE', endpoint, options)
    };
}
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/services/apiClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ۱. وارد کردن تابع createApiClient از پکیج جدیدی که ساختیم
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$api$2d$client$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/api-client/dist/index.js [app-ssr] (ecmascript)");
;
// ۲. تعریف یک تابع برای خواندن توکن احراز هویت
// این تابع مختص اپلیکیشن شماست و می‌تواند در آینده پیچیده‌تر شود
const getToken = ()=>{
    // در یک اپلیکیشن واقعی، توکن از localStorage، sessionStorage یا یک cookie خوانده می‌شود.
    // برای تست، ما می‌توانیم توکن را به صورت ثابت برگردانیم.
    // مطمئن شوید که این توکن معتبر و منقضی نشده باشد.
    if ("undefined" !== 'undefined') {
    // مثال: return localStorage.getItem('authToken');
    }
    // توکن نمونه شما:
    return "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxNDdhZGM4NS00NmEzLTRiNzEtYWEzZi01MWExMjliZmY4NTgiLCJuYmYiOjE3NTY0Njk3ODcsImV4cCI6MTc2NjQ2OTY4NywiaXNzIjoiWWFkYWtjaGkiLCJhdWQiOiJmcm9udC5sb3R0ZXN0LmlyIn0.Mr2MoA4vBcuHtLhfRz59B0IrRPW5dTU5VFtBxQuMhVeYoCUGvXdigCZXnVfWM8UU6svOMUE2FiTJiUaVE00xdA";
};
// ۳. ایجاد یک نمونه (instance) از کلاینت API با استفاده از متغیر محیطی
//    ما از /api/ به عنوان baseUrl استفاده می‌کنیم تا درخواست‌ها به پروکسی Next.js ارسال شوند
const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$api$2d$client$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createApiClient"])('/api', getToken);
const __TURBOPACK__default__export__ = apiClient;
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/services/api/warrantyService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWarranty",
    ()=>createWarranty,
    "deleteWarranty",
    ()=>deleteWarranty,
    "getWarranties",
    ()=>getWarranties,
    "updateWarranty",
    ()=>updateWarranty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/services/apiClient.ts [app-ssr] (ecmascript)");
;
const getWarranties = (pageNumber, pageSize)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('A_Warranty/Warrantys', {
        params: {
            PageNumber: pageNumber,
            PageSize: pageSize
        }
    });
};
const createWarranty = (title)=>{
    const formData = new FormData();
    formData.append('Title', title);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('A_Warranty/Warranty', {
        body: formData
    });
};
const updateWarranty = (id, data)=>{
    const formData = new FormData();
    formData.append('Id', String(id));
    if (data.title !== undefined) formData.append('Title', data.title);
    if (data.isActive !== undefined) formData.append('IsActive', String(data.isActive));
    return __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put('A_Warranty/Warranty', {
        body: formData
    });
};
const deleteWarranty = (id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete('A_Warranty/Warranty', {
        body: {
            id
        }
    });
};
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/config/filters.config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WarrantyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/navigation.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@my-ds/design-system'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$api$2f$warrantyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/services/api/warrantyService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$config$2f$filters$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/config/filters.config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function WarrantyPage() {
    const [warrantyData, setWarrantyData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    // State برای مدیریت مودال (افزودن/ویرایش)
    const [isFormModalOpen, setIsFormModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingWarranty, setEditingWarranty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formTitle, setFormTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [actionLoading, setActionLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const renderLink = (href, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            children: children
        }, void 0, false, {
            fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
            lineNumber: 34,
            columnNumber: 61
        }, this);
    // تابع واکشی داده‌ها با useCallback برای پایداری
    const fetchWarranties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setIsLoading(true);
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$api$2f$warrantyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWarranties"])(currentPage, pageSize);
            setWarrantyData(response);
        } catch (err) {
            setError(err instanceof Error ? err.message : "خطا");
        } finally{
            setIsLoading(false);
        }
    }, [
        currentPage,
        pageSize
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchWarranties();
    }, [
        fetchWarranties
    ]);
    // --- Handlers ---
    const handleOpenAddModal = ()=>{
        setEditingWarranty(null);
        setFormTitle('');
        setIsFormModalOpen(true);
    };
    const handleOpenEditModal = (warranty)=>{
        setEditingWarranty(warranty);
        setFormTitle(warranty.title);
        setIsFormModalOpen(true);
    };
    const handleFormSubmit = async ()=>{
        setActionLoading(true);
        try {
            if (editingWarranty) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$api$2f$warrantyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateWarranty"])(editingWarranty.id, {
                    title: formTitle
                });
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$api$2f$warrantyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWarranty"])(formTitle);
            }
            setIsFormModalOpen(false);
            await fetchWarranties(); // رفرش کردن لیست
        } catch (err) {
            alert("خطا در ذخیره‌سازی گارانتی.");
        } finally{
            setActionLoading(false);
        }
    };
    const handleDelete = async (warrantyId)=>{
        if (window.confirm("آیا از حذف این گارانتی مطمئن هستید؟")) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$api$2f$warrantyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteWarranty"])(warrantyId);
            await fetchWarranties();
        }
    };
    // --- Column Definitions ---
    const warrantyColumns = [
        {
            accessorKey: 'id',
            header: 'شناسه'
        },
        {
            accessorKey: 'title',
            header: 'عنوان گارانتی',
            cell: (w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                    text: w.title,
                    size: "md"
                }, void 0, false, {
                    fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                    lineNumber: 93,
                    columnNumber: 67
                }, this)
        },
        {
            accessorKey: 'isActive',
            header: 'وضعیت',
            cell: (w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                    label: w.isActive ? "فعال" : "غیرفعال",
                    variant: w.isActive ? "success" : "neutral"
                }, void 0, false, {
                    fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                    lineNumber: 94,
                    columnNumber: 62
                }, this)
        },
        {
            accessorKey: 'createDate',
            header: 'تاریخ ثبت',
            cell: (w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                    text: new Date(w.createDate).toLocaleDateString('fa-IR'),
                    size: "md"
                }, void 0, false, {
                    fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                    lineNumber: 95,
                    columnNumber: 68
                }, this)
        }
    ];
    // --- Props Preparation ---
    const listPageProps = {
        listPageHeaderProps: {
            title: "مدیریت گارانتی‌ها",
            totalItems: warrantyData?.totalCount,
            actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                onClick: handleOpenAddModal,
                children: "افزودن گارانتی جدید"
            }, void 0, false, {
                fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                lineNumber: 103,
                columnNumber: 16
            }, this)
        },
        tableProps: {
            columns: warrantyColumns,
            data: warrantyData?.items || [],
            emptyStateMessage: "هیچ گارانتی یافت نشد.",
            rowActions: (warranty)=>({
                    onEdit: ()=>handleOpenEditModal(warranty),
                    onDelete: ()=>handleDelete(warranty.id)
                })
        },
        paginationProps: {
            currentPage: currentPage,
            pageSize: pageSize,
            totalCount: warrantyData?.totalCount || 0,
            onPageChange: (page)=>setCurrentPage(page),
            pageSizeOptions: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$config$2f$filters$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pageSizeOptions"],
            onPageSizeChange: (size)=>{
                setPageSize(size);
                setCurrentPage(1);
            }
        },
        isLoading: isLoading,
        error: error
    };
    // --- JSX ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(YadakchiAdminLayout, {
                currentPath: pathname,
                renderLink: renderLink,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ListPageLayout, {
                    ...listPageProps
                }, void 0, false, {
                    fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormModal, {
                isOpen: isFormModalOpen,
                onClose: ()=>setIsFormModalOpen(false),
                title: editingWarranty ? "ویرایش گارانتی" : "افزودن گارانتی جدید",
                onConfirm: handleFormSubmit,
                isLoading: actionLoading,
                confirmText: editingWarranty ? "ذخیره تغییرات" : "ایجاد گارانتی",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: (e)=>{
                        e.preventDefault();
                        handleFormSubmit();
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        id: "warranty-title",
                        label: "عنوان گارانتی",
                        value: formTitle,
                        onChange: (e)=>setFormTitle(e.target.value),
                        required: true,
                        autoFocus: true
                    }, void 0, false, {
                        fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/warranty/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__348e2a77._.js.map