"use client";

import { useEffect, useState } from "react";
import { Label } from "@my-ds/design-system";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const sizes = ["xs", "sm", "md", "lg", "xl", "2x", "3x", "4x"] as const;
  const variants = ["primary", "secondary", "error", "disabled"] as const;

  const labels = Array.from({ length: 60 }, (_, i) => ({
    text: `Label ${i + 1}`,
    size: sizes[i % sizes.length],
    variant: variants[i % variants.length]
  }));

  return (
    <main className="min-h-screen w-full p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">
          لیست لیبل‌ها ({labels.length})
        </h1>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-4 py-2 rounded"
        >
          تغییر به {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center justify-center">
            <Label
              text={`${label.text} (${label.size})`}
              size={label.size}
              variant={label.variant}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
