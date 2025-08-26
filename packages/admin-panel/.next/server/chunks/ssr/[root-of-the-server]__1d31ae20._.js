module.exports = [
"[project]/Frontend-Dev/main-parent/packages/admin-panel/.next-internal/server/app/shops/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/favicon.ico.mjs { IMAGE => \"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/favicon.ico.mjs { IMAGE => \"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Frontend-Dev/main-parent/packages/api-client/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createApiClient = createApiClient;
// ۲. تعریف تابع اصلی
/**
 * یک کلاینت API قابل استفاده مجدد ایجاد می‌کند.
 * @param baseUrl آدرس پایه API (مثلاً 'https://api.example.com/api')
 * @param getToken (اختیاری) یک تابع که توکن احراز هویت را برمی‌گرداند
 */ function createApiClient(baseUrl, getToken) {
    // تابع داخلی و خصوصی برای ارسال درخواست‌ها
    const request = async (method, endpoint, options = {})=>{
        const { params, body, headers = {} } = options;
        // ساخت query string از پارامترها
        const query = params ? `?${new URLSearchParams(params).toString()}` : '';
        const url = `${baseUrl}/${endpoint}${query}`;
        // گرفتن توکن در لحظه ارسال درخواست
        const token = getToken === null || getToken === void 0 ? void 0 : getToken();
        const isFormData = body instanceof FormData;
        // ساخت هدرهای نهایی
        const finalHeaders = Object.assign(Object.assign(Object.assign({}, isFormData ? {} : {
            'Content-Type': 'application/json'
        }), token ? {
            Authorization: `Bearer ${token}`
        } : {}), headers);
        // ارسال درخواست با استفاده از fetch API
        const response = await fetch(url, {
            method,
            headers: finalHeaders,
            body: method !== 'GET' && body ? isFormData ? body : JSON.stringify(body) : undefined
        });
        // مدیریت خطاها
        if (!response.ok) {
            // می‌توانید منطق پیچیده‌تری برای مدیریت خطاها اینجا اضافه کنید
            const errorData = await response.json().catch(()=>({
                    message: response.statusText
                }));
            throw new Error(errorData.message || `Request failed with status ${response.status}`);
        }
        // اگر پاسخ محتوا نداشت (مثلاً در 204 No Content)
        if (response.status === 204) {
            return null;
        }
        return response.json();
    };
    // ۳. برگرداندن آبجکتی با متدهای عمومی
    return {
        get: (endpoint, options)=>request('GET', endpoint, options),
        post: (endpoint, options)=>request('POST', endpoint, options),
        put: (endpoint, options)=>request('PUT', endpoint, options),
        delete: (endpoint, options)=>request('DELETE', endpoint, options)
    };
}
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/services/apiClient.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ۱. وارد کردن تابع createApiClient از پکیج جدیدی که ساختیم
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$api$2d$client$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/api-client/dist/index.js [app-rsc] (ecmascript)");
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
    return "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NTI3MzA1ZS1kYWZiLTRjZjEtYmMyOC1kMTViN2I0ODhjYzUiLCJuYmYiOjE3NTYxOTk1MDMsImV4cCI6MTc2NjE5OTQwMywiaXNzIjoiWWFkYWtjaGkiLCJhdWQiOiJmcm9udC5sb3R0ZXN0LmlyIn0.cnraf4kqlf_imZuhFg6GXoZ3RCJcHIqELJo3vU6VbDPScochuCz1mvLDogc2bJAc32e4Khikd2G08CyTLcDKiQ";
};
// ۳. ایجاد یک نمونه (instance) از کلاینت API با استفاده از متغیر محیطی
//    ما از /api/ به عنوان baseUrl استفاده می‌کنیم تا درخواست‌ها به پروکسی Next.js ارسال شوند
const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$api$2d$client$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createApiClient"])('/api', getToken);
const __TURBOPACK__default__export__ = apiClient;
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getShopById",
    ()=>getShopById,
    "getShops",
    ()=>getShops
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/services/apiClient.ts [app-rsc] (ecmascript)");
;
const getShops = (pageNumber, pageSize)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get('A_Shop/GetShops', {
        params: {
            PageNumber: pageNumber,
            PageSize: pageSize
        }
    });
};
const getShopById = async (shopId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get('A_Shop/GetShops', {
        params: {
            Ids: shopId,
            PageNumber: 1,
            PageSize: 1
        }
    });
    if (response && response.items && response.items.length > 0) {
        return response.items[0];
    }
    throw new Error(`فروشگاهی با شناسه ${shopId} یافت نشد.`);
};
const __TURBOPACK__default__export__ = getShops;
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1d31ae20._.js.map