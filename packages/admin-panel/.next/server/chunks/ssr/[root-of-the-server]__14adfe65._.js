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
    return "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE3NTYxOTE2ODUsImV4cCI6MTc2NjE5MTU4NSwiaXNzIjoiWWFkYWtjaGkiLCJhdWQiOiJmcm9udC5sb3R0ZXN0LmlyIn0.w93hU4ZbbbvHi2desHqbDOcV8Y7x-DtiltLwZKMpqdXxrykgrJiBfXJgK-LqWgwNKy5cXQimsPIBWw8-FSJQug";
};
// ۳. ایجاد یک نمونه (instance) از کلاینت API با استفاده از متغیر محیطی
//    ما از /api/ به عنوان baseUrl استفاده می‌کنیم تا درخواست‌ها به پروکسی Next.js ارسال شوند
const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$api$2d$client$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createApiClient"])('/api', getToken);
const __TURBOPACK__default__export__ = apiClient;
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/services/shopsService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getShopById",
    ()=>getShopById,
    "getShops",
    ()=>getShops
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/services/apiClient.ts [app-ssr] (ecmascript)");
;
const getShops = (pageNumber, pageSize)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('A_Shop/Shop', {
        params: {
            PageNumber: pageNumber,
            PageSize: pageSize
        }
    });
};
const getShopById = async (shopId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('A_Shop/Shop', {
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
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/utils/dateUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfDay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isWithinInterval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfDay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfMonth.js [app-ssr] (ecmascript)");
;
const isToday = (date)=>{
    const dateObj = new Date(date);
    const todayStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(new Date());
    const todayEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfDay"])(new Date());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWithinInterval"])(dateObj, {
        start: todayStart,
        end: todayEnd
    });
};
const isThisWeek = (date)=>{
    const dateObj = new Date(date);
    const weekStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(new Date(), {
        weekStartsOn: 6
    }); // شنبه به عنوان شروع هفته
    const weekEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfWeek"])(new Date(), {
        weekStartsOn: 6
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWithinInterval"])(dateObj, {
        start: weekStart,
        end: weekEnd
    });
};
const isThisMonth = (date)=>{
    const dateObj = new Date(date);
    const monthStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfMonth"])(new Date());
    const monthEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfMonth"])(new Date());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWithinInterval"])(dateObj, {
        start: monthStart,
        end: monthEnd
    });
};
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/hooks/ListPageHook.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useListPage",
    ()=>useListPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/utils/dateUtils.ts [app-ssr] (ecmascript)");
"use client";
;
;
const useListPage = ({ fetchData, searchKeys, dateKey, statusKey })=>{
    const [allData, setAllData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeTimeFilter, setActiveTimeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('newest');
    // ۲. State برای فیلتر وضعیت حالا داخل هوک است
    const [selectedStatus, setSelectedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    // --- واکشی اولیه داده‌ها ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadData = async ()=>{
            try {
                setIsLoading(true);
                // برای سادگی، فعلاً تمام داده‌ها را می‌گیریم. می‌توان این را هم هوشمند کرد.
                const response = await fetchData(1, 1000);
                setAllData(response.items);
            } catch (err) {
                setError(err instanceof Error ? err.message : "خطا در واکشی داده‌ها");
            } finally{
                setIsLoading(false);
            }
        };
        loadData();
    }, [
        fetchData
    ]); // فقط یک بار اجرا می‌شود
    // --- منطق فیلترینگ و مرتب‌سازی ---
    const filteredAndSortedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let filtered = [
            ...allData
        ];
        if (searchTerm) {
            filtered = filtered.filter((item)=>searchKeys.some((key)=>String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())));
        }
        if (selectedStatus !== 'all') {
            filtered = filtered.filter((item)=>item[statusKey] === selectedStatus);
        }
        // اینجا می‌توانید فیلتر وضعیت را هم به صورت ژنریک پیاده‌سازی کنید
        // if (selectedStatus !== 'all') { ... }
        switch(activeTimeFilter){
            case 'today':
                filtered = filtered.filter((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isToday"])(String(item[dateKey])));
                break;
            case 'this_week':
                filtered = filtered.filter((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isThisWeek"])(String(item[dateKey])));
                break;
            case 'this_month':
                filtered = filtered.filter((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isThisMonth"])(String(item[dateKey])));
                break;
            case 'oldest':
                filtered.sort((a, b)=>new Date(String(a[dateKey])).getTime() - new Date(String(b[dateKey])).getTime());
                break;
            case 'newest':
            default:
                filtered.sort((a, b)=>new Date(String(b[dateKey])).getTime() - new Date(String(a[dateKey])).getTime());
                break;
        }
        return filtered;
    }, [
        allData,
        searchTerm,
        activeTimeFilter,
        searchKeys,
        dateKey,
        statusKey
    ]);
    // --- منطق پجینیشن ---
    const paginatedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const startIndex = (currentPage - 1) * pageSize;
        return filteredAndSortedData.slice(startIndex, startIndex + pageSize);
    }, [
        filteredAndSortedData,
        currentPage,
        pageSize
    ]);
    // --- Handlers ---
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
        handleStatusChange
    };
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
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/utils/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ۱. تایپ StatusKey را با مقادیر جدید به‌روز می‌کنیم
__turbopack_context__.s([
    "translateStatus",
    ()=>translateStatus
]);
// ۲. دیکشنری ترجمه‌ها را با مقادیر جدید کامل می‌کنیم
const statusTranslations = {
    // وضعیت‌های فروشگاه
    'Confirmed': 'تایید شده',
    'Pending': 'در انتظار بررسی',
    'Rejected': 'رد شده',
    'Ok': 'موفق',
    // ✨ --- وضعیت‌های جدید اضافه شدند ---
    'InProgress': 'در حال بررسی',
    'Answered': 'پاسخ داده شده'
};
const translateStatus = (status)=>{
    return statusTranslations[status] || status;
};
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/utils/exportUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportToExcel",
    ()=>exportToExcel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/xlsx@0.18.5/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
;
const exportToExcel = (data, fileName, sheetName = 'Sheet 1')=>{
    try {
        // ۱. ساخت یک شیت جدید از داده‌های JSON
        const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(data);
        // ۲. ساخت یک بوک جدید
        const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
        // ۳. اضافه کردن شیت به بوک
        __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, sheetName);
        // ۴. نوشتن (تولید) فایل و شروع دانلود
        __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](workbook, `${fileName}.xlsx`);
    } catch (error) {
        console.error("خطا در هنگام تولید فایل اکسل:", error);
        alert("متاسفانه در تولید خروجی اکسل خطایی رخ داد.");
    }
};
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopsPage
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$shopsService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/services/shopsService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$hooks$2f$ListPageHook$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/hooks/ListPageHook.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$config$2f$filters$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/config/filters.config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$utils$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/utils/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$utils$2f$exportUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/utils/exportUtils.ts [app-ssr] (ecmascript)");
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
;
;
function ShopsPage() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const renderLink = (href, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            children: children
        }, void 0, false, {
            fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/page.tsx",
            lineNumber: 24,
            columnNumber: 61
        }, this);
    // تابع واکشی داده را با useCallback پایدار می‌کنیم تا از رندرهای اضافی جلوگیری شود
    const fetchShopsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((page, size)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$shopsService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShops"])(page, size);
    }, []);
    // فراخوانی هوک هوشمند با پیکربندی کامل
    const { data: shops, totalCount, isLoading, error, currentPage, pageSize, searchTerm, activeTimeFilter, selectedStatus, handlePageChange, handlePageSizeChange, handleSearchChange, handleTimeFilterChange, handleStatusChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$hooks$2f$ListPageHook$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useListPage"])({
        fetchData: fetchShopsData,
        searchKeys: [
            'shopTitle',
            'name',
            'lastname'
        ],
        dateKey: 'createDate',
        statusKey: 'registrationStatus'
    });
    // State های مختص این صفحه (مانند isExporting)
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handlers مختص این صفحه
    const handleViewShop = (shopId)=>{
        // به جای alert، به صفحه جزئیات navigate می‌کنیم
        router.push(`/shops/${shopId}`);
    };
    const handleEditShop = (shopId)=>alert(`ویرایش: ${shopId}`);
    const handleDeleteShop = (shopId)=>alert(`حذف: ${shopId}`);
    const handleExport = async ()=>{
        // نکته: ما باید از داده‌های فیلتر شده خروجی بگیریم، که هوک آن‌ها را به ما نمی‌دهد.
        // برای سادگی، فعلاً از داده‌های صفحه‌بندی شده فعلی خروجی می‌گیریم.
        if (!shops.length) {
            alert("هیچ داده‌ای برای خروجی گرفتن وجود ندارد.");
            return;
        }
        setIsExporting(true);
        await new Promise((resolve)=>setTimeout(resolve, 500));
        const dataToExport = shops.map((shop)=>({
                'نام فروشگاه': shop.shopTitle,
                'نام فروشنده': `${shop.name} ${shop.lastname}`,
                'وضعیت': (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$utils$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translateStatus"])(shop.registrationStatus),
                'تاریخ ثبت': new Date(shop.createDate).toLocaleDateString('fa-IR')
            }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$utils$2f$exportUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportToExcel"])(dataToExport, "لیست_فروشگاه‌ها");
        setIsExporting(false);
    };
    // Column Definitions
    const shopColumns = [
        {
            accessorKey: 'shopTitle',
            header: 'نام فروشگاه',
            cell: (shop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                    text: shop.shopTitle,
                    size: "md"
                }, void 0, false, {
                    fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/page.tsx",
                    lineNumber: 86,
                    columnNumber: 72
                }, this)
        },
        {
            accessorKey: 'name',
            header: 'نام فروشنده',
            cell: (shop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                    text: `${shop.name} ${shop.lastname}`,
                    size: "md"
                }, void 0, false, {
                    fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/page.tsx",
                    lineNumber: 87,
                    columnNumber: 67
                }, this)
        },
        {
            accessorKey: 'registrationStatus',
            header: 'وضعیت',
            cell: (shop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                    text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$utils$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translateStatus"])(shop.registrationStatus),
                    size: "sm",
                    variant: shop.registrationStatus === 'Confirmed' ? 'primary' : 'error'
                }, void 0, false, {
                    fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/page.tsx",
                    lineNumber: 88,
                    columnNumber: 75
                }, this)
        },
        {
            accessorKey: 'createDate',
            header: 'تاریخ ثبت',
            cell: (shop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                    text: new Date(shop.createDate).toLocaleDateString('fa-IR'),
                    size: "md"
                }, void 0, false, {
                    fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/page.tsx",
                    lineNumber: 89,
                    columnNumber: 71
                }, this)
        }
    ];
    // Props Preparation
    const filterSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterTabs, {
                tabs: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$config$2f$filters$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commonTimeFilters"],
                activeTab: activeTimeFilter,
                onTabChange: handleTimeFilterChange
            }, void 0, false, {
                fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                options: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$config$2f$filters$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shopStatusFilters"],
                value: selectedStatus,
                onChange: handleStatusChange,
                "aria-label": "فیلتر بر اساس وضعیت"
            }, void 0, false, {
                fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/page.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
    const listPageProps = {
        listPageHeaderProps: {
            title: "لیست فروشگاه‌ها",
            totalItems: totalCount,
            searchInputProps: {
                value: searchTerm,
                onChange: handleSearchChange,
                placeholder: "جستجو..."
            },
            exportButtonProps: {
                onClick: handleExport,
                isLoading: isExporting
            },
            actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                children: "افزودن فروشگاه"
            }, void 0, false, {
                fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/page.tsx",
                lineNumber: 119,
                columnNumber: 16
            }, this)
        },
        tableProps: {
            columns: shopColumns,
            data: shops,
            emptyStateMessage: searchTerm ? "موردی یافت نشد." : "هیچ فروشگاهی ثبت نشده است.",
            rowActions: (shop)=>({
                    onView: ()=>handleViewShop(shop.id),
                    onEdit: ()=>handleEditShop(shop.id),
                    onDelete: ()=>handleDeleteShop(shop.id)
                })
        },
        paginationProps: {
            currentPage: currentPage,
            pageSize: pageSize,
            totalCount: totalCount,
            onPageChange: handlePageChange,
            pageSizeOptions: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$config$2f$filters$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pageSizeOptions"],
            onPageSizeChange: handlePageSizeChange
        },
        filterSection: filterSection,
        isLoading: isLoading,
        error: error
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(YadakchiAdminLayout, {
        currentPath: pathname,
        renderLink: renderLink,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ListPageLayout, {
            ...listPageProps
        }, void 0, false, {
            fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/page.tsx",
            lineNumber: 149,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/page.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__14adfe65._.js.map