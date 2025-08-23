module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Frontend-Dev/main-parent/packages/design-system/dist/molecules/Table/Table.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
const Table = ({ data, columns, emptyStateMessage = "هیچ داده‌ای برای نمایش وجود ندارد." })=>{
    if (!data || data.length === 0) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "table-empty-state",
            children: emptyStateMessage
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "table-wrapper",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("table", {
            className: "table",
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("thead", {
                    className: "table__head",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("tr", {
                        children: columns.map((column)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("th", {
                                children: column.header
                            }, column.accessorKey))
                    })
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("tbody", {
                    className: "table__body",
                    children: data.map((item, rowIndex)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("tr", {
                            children: columns.map((column, colIndex)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("td", {
                                    "data-label": column.header,
                                    children: column.cell ? column.cell(item) : item[column.accessorKey]
                                }, colIndex))
                        }, rowIndex))
                })
            ]
        })
    });
};
}),
"[project]/Frontend-Dev/main-parent/packages/design-system/dist/yadakchi-admin-components/layouts/ListPageLayout/ListPageLayout.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListPageLayout",
    ()=>ListPageLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
// ۱. ایمپورت PageHeader حذف شد.
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$design$2d$system$2f$dist$2f$molecules$2f$Table$2f$Table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/design-system/dist/molecules/Table/Table.js [app-ssr] (ecmascript)");
"use client";
;
;
const ListPageLayout = ({ tableProps, isLoading = false, error = null })=>{
    const renderContent = ()=>{
        if (isLoading) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "list-page-layout__state",
                children: "\u062F\u0631 \u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u062F\u0627\u062F\u0647\u200C\u0647\u0627..."
            });
        }
        if (error) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "list-page-layout__state list-page-layout__state--error",
                children: error
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "list-page-layout__table-container",
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$design$2d$system$2f$dist$2f$molecules$2f$Table$2f$Table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                ...tableProps
            })
        });
    };
    // ۳. ساختار JSX ساده شد و فقط renderContent را برمی‌گرداند.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "list-page-layout",
        children: renderContent()
    });
};
}),
"[project]/Frontend-Dev/main-parent/packages/design-system/dist/atoms/Label/Label.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
const Label = ({ text, variant = "primary", size = "md", icon, className, ...props // بقیه props ها (مانند style) در این متغیر قرار می‌گیرند
 })=>{
    // کلاس‌های CSS را به صورت داینامیک ایجاد می‌کنیم
    const labelClasses = [
        'label',
        `label--${variant}`,
        `label--${size}`,
        icon ? 'label--with-icon' : '',
        className || '' // کلاس‌های ورودی را اضافه می‌کنیم
    ].filter(Boolean).join(' '); // فیلتر کردن مقادیر خالی و اتصال با فاصله
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
        className: labelClasses,
        ...props,
        children: [
            icon && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: "label__icon",
                children: icon
            }),
            text
        ]
    });
};
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/services/shopService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// اینترفیس‌ها از بخش قبل
__turbopack_context__.s([
    "getShops",
    ()=>getShops
]);
// یک تابع کمکی برای گرفتن توکن احراز هویت
// در یک اپلیکیشن واقعی، این تابع توکن را از Local Storage, Cookie یا State Management می‌خواند
const getAuthToken = ()=>{
    // این توکن یک توکن نمونه است و باید با توکن واقعی شما جایگزین شود
    return "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIzNjAxZWY2YS02MTU5LTQ0ODEtYWYzYi1kZjU4ZGFmZWJlNWEiLCJSb2xlIjoiQW5vbnltb3VzIiwibmJmIjoxNzU1OTQ1NzA5LCJleHAiOjE3NjU5NDU2MDksImlzcyI6IllhZGFrY2hpIiwiYXVkIjoiZnJvbnQubG90dGVzdC5pciJ9.fnRQ5ClhnF1wih3LJ_sFLpjr5aqm6ftOaOJfF1LfKLdDBd4E1hucPPdQ4kIeyFXvpb7CV-aav6P887MZW7NiGg";
};
const getShops = async (pageNumber, pageSize)=>{
    const token = getAuthToken();
    const apiUrl = `/api/A_Shop/Shop?PageNumber=${pageNumber}&PageSize=${pageSize}`;
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Authorization': `Bearer ${token}`
        }
    });
    // بررسی خطا در پاسخ
    if (!response.ok) {
        throw new Error(`خطا در واکشی داده‌ها: ${response.statusText}`);
    }
    // پاسخ را به صورت JSON برمی‌گردانیم و تایپ آن را مشخص می‌کنیم
    const data = await response.json();
    return data;
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
// ۱. وارد کردن الگوی لیست و تایپ‌های لازم از سیستم طراحی
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$design$2d$system$2f$dist$2f$yadakchi$2d$admin$2d$components$2f$layouts$2f$ListPageLayout$2f$ListPageLayout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/design-system/dist/yadakchi-admin-components/layouts/ListPageLayout/ListPageLayout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$design$2d$system$2f$dist$2f$atoms$2f$Label$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/design-system/dist/atoms/Label/Label.js [app-ssr] (ecmascript)");
// ۲. وارد کردن سرویس API و تایپ‌ها
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$shopService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/packages/admin-panel/src/services/shopService.ts [app-ssr] (ecmascript)");
"use client"; // چون از هوک‌ها (useState, useEffect) استفاده می‌کنیم
;
;
;
;
function ShopsPage() {
    // ۳. State برای نگه داشتن داده‌ها، وضعیت لودینگ و خطا
    const [shops, setShops] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // ۴. واکشی داده‌ها در اولین رندر کامپوننت
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchShops = async ()=>{
            try {
                setIsLoading(true);
                setError(null); // ریست کردن خطا قبل از هر درخواست
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$admin$2d$panel$2f$src$2f$services$2f$shopService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShops"])(1, 30); // صفحه ۱، ۳۰ آیتم
                setShops(response.items);
            } catch (err) {
                setError(err instanceof Error ? err.message : "یک خطای ناشناخته رخ داد.");
            } finally{
                setIsLoading(false);
            }
        };
        fetchShops();
    }, []); // [] یعنی این افکت فقط یک بار در اولین رندر اجرا می‌شود
    // ۵. تعریف ساختار ستون‌ها برای کامپوننت Table
    const shopColumns = [
        {
            accessorKey: 'shopTitle',
            header: 'نام فروشگاه'
        },
        {
            accessorKey: 'name',
            header: 'نام فروشنده',
            cell: (shop)=>`${shop.name} ${shop.lastname}`
        },
        {
            accessorKey: 'registrationStatus',
            header: 'وضعیت',
            cell: (shop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$design$2d$system$2f$dist$2f$atoms$2f$Label$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                    text: shop.registrationStatus,
                    size: "sm",
                    variant: shop.registrationStatus === 'Confirmed' ? 'primary' : 'error'
                }, void 0, false, {
                    fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/page.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
        },
        {
            accessorKey: 'createDate',
            header: 'تاریخ ثبت',
            // فرمت کردن تاریخ برای نمایش بهتر
            cell: (shop)=>new Date(shop.createDate).toLocaleDateString('fa-IR')
        }
    ];
    // ۶. آماده‌سازی props برای الگوی ListPageLayout
    const listPageProps = {
        pageHeaderProps: {
            title: "لیست فروشگاه‌ها",
            description: "در این بخش می‌توانید فروشگاه‌های ثبت شده در سیستم را مشاهده و مدیریت کنید.",
            // در آینده می‌توانید دکمه "افزودن فروشگاه جدید" را اینجا قرار دهید
            actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                children: "افزودن فروشگاه"
            }, void 0, false, {
                fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/page.tsx",
                lineNumber: 76,
                columnNumber: 16
            }, this)
        },
        tableProps: {
            columns: shopColumns,
            data: shops,
            emptyStateMessage: "هیچ فروشگاهی برای نمایش یافت نشد."
        },
        isLoading: isLoading,
        error: error
    };
    // ۷. رندر کردن فقط محتوای اصلی با استفاده از الگوی ListPageLayout
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$packages$2f$design$2d$system$2f$dist$2f$yadakchi$2d$admin$2d$components$2f$layouts$2f$ListPageLayout$2f$ListPageLayout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListPageLayout"], {
        ...listPageProps
    }, void 0, false, {
        fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/app/shops/page.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
}),
"[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8e5d5f1b._.js.map