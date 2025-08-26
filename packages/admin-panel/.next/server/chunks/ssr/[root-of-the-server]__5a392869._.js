module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Frontend-Dev/main-parent/packages/admin-panel/src/context/SettingsContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsProvider",
    ()=>SettingsProvider,
    "useSettings",
    ()=>useSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend-Dev/main-parent/node_modules/.pnpm/next@15.5.0_react-dom@19.1._b13a0a4285dbe16cf3c4aa2d431c8eb3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
// ۲. ایجاد Context با مقدار اولیه null (برای بررسی اینکه آیا Provider وجود دارد)
const SettingsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const SettingsProvider = ({ children })=>{
    // ۳. تمام State های سراسری UI در اینجا تعریف می‌شوند
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('light');
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('rtl');
    const [isSidebarPinned, setIsSidebarPinned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true); // پیش‌فرض پین شده
    const [isMobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // ۴. تعریف توابع (Actions) برای تغییر State ها
    const toggleTheme = ()=>setTheme((prev)=>prev === 'light' ? 'dark' : 'light');
    const toggleDirection = ()=>setDirection((prev)=>prev === 'rtl' ? 'ltr' : 'rtl');
    const toggleSidebarPin = ()=>setIsSidebarPinned((prev)=>!prev);
    const openMobileMenu = ()=>setMobileMenuOpen(true);
    const closeMobileMenu = ()=>setMobileMenuOpen(false);
    // ۵. افکت‌های جانبی برای اعمال تغییرات به DOM
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.dir = direction;
        document.documentElement.lang = direction === 'rtl' ? 'fa' : 'en';
    }, [
        direction
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
    }, [
        theme
    ]);
    // ۶. آماده‌سازی مقداری که به تمام کامپوننت‌ها داده می‌شود
    const value = {
        theme,
        direction,
        isSidebarPinned,
        isMobileMenuOpen,
        toggleTheme,
        toggleDirection,
        toggleSidebarPin,
        openMobileMenu,
        closeMobileMenu
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Frontend-Dev/main-parent/packages/admin-panel/src/context/SettingsContext.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useSettings = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2d$Dev$2f$main$2d$parent$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$_b13a0a4285dbe16cf3c4aa2d431c8eb3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SettingsContext);
    if (context === null) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5a392869._.js.map