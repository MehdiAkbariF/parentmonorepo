module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/Frontend-Dev/parent-monorepo/my-monorepo/packages/admin-panel/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "build/chunks/c7ca2__pnpm_9074fe3b._.js",
  "build/chunks/[root-of-the-server]__c5c6e2a2._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/Frontend-Dev/parent-monorepo/my-monorepo/packages/admin-panel/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];