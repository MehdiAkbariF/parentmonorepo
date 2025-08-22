module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/Frontend-Dev/main-parent/packages/admin-panel/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "build/chunks/46fdc__pnpm_494d2128._.js",
  "build/chunks/[root-of-the-server]__16e04c5c._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/Frontend-Dev/main-parent/packages/admin-panel/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];