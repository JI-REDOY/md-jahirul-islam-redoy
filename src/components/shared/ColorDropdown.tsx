"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme, DarkColor, LightColor, Color } from "@/context/ThemeContext";

const darkColors: { value: DarkColor; label: string; color: string }[] = [
    { value: "lime", label: "Neon Lime", color: "#CCFF00" },
    { value: "orange", label: "Ember Orange", color: "#FF6B1A" },
    { value: "pink", label: "Hot Pink", color: "#FF3D8B" },
    { value: "purple", label: "Deep Purple", color: "#A855F7" },
];

const lightColors: { value: LightColor; label: string; color: string }[] = [
    { value: "blue", label: "Azure Blue", color: "#0066FF" },
    { value: "green", label: "Emerald Green", color: "#10B981" },
    { value: "rose", label: "Rose Red", color: "#E11D48" },
];

const ColorDropdown = () => {
    const { mode, color, setColor } = useTheme();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const activeColors = mode === "dark" ? darkColors : lightColors;
    const currentColor = activeColors.find((c) => c.value === color) || activeColors[0];

    const handleSelect = (value: Color) => {
        setColor(value);
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [mode]);

    return (
        <div ref={dropdownRef} className="relative w-full sm:w-[160px]">

            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-2 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] sm:text-sm"
            >
                <div className="flex min-w-0 items-center gap-2">
                    <span
                        className="h-3 w-3 flex-shrink-0 rounded-full"
                        style={{
                            backgroundColor: currentColor.color,
                            boxShadow: `0 0 6px ${currentColor.color}`,
                        }}
                    />
                    <span className="truncate">{currentColor.label}</span>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-3.5 w-3.5 flex-shrink-0 text-[var(--text-secondary)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>

            {open && (
                <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl sm:left-auto sm:right-0 sm:w-52">

                    {activeColors.map((item) => {
                        const isActive = color === item.value;
                        return (
                            <button
                                key={item.value}
                                type="button"
                                onClick={() => handleSelect(item.value)}
                                className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-xs font-medium transition-colors sm:text-sm ${
                                    isActive
                                        ? "bg-[var(--accent-soft)] text-accent"
                                        : "text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className="h-3 w-3 rounded-full"
                                        style={{
                                            backgroundColor: item.color,
                                            boxShadow: `0 0 6px ${item.color}`,
                                        }}
                                    />
                                    <span>{item.label}</span>
                                </div>
                                {isActive && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-3.5 w-3.5"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                )}
                            </button>
                        );
                    })}

                </div>
            )}

        </div>
    );
};

export default ColorDropdown;