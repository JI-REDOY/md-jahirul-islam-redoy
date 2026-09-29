"use client";

import React, { useEffect, useState } from "react";

const VisitCounter = () => {
    const [count, setCount] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Delay counter fetch by 500ms — lets page render first
        const timer = setTimeout(() => {
            const hasVisitedThisSession =
                typeof window !== "undefined" &&
                sessionStorage.getItem("jiredoy-visited") === "true";

            const method = hasVisitedThisSession ? "GET" : "POST";

            fetch("/api/track-visit", { method })
                .then((res) => res.json())
                .then((data) => {
                    const value = data?.data?.up_count;

                    if (typeof value === "number") {
                        setCount(value);
                        sessionStorage.setItem("jiredoy-visited", "true");
                    }
                })
                .catch(() => {
                    setCount(null);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const formattedCount = count?.toLocaleString("en-US") ?? "—";

    return (
        <div
            className="flex items-center gap-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
            title="Total portfolio visits"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 text-accent"
            >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="tabular-nums">
                {isLoading ? "..." : formattedCount}
            </span>
        </div>
    );
};

export default VisitCounter;