"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Mode = "dark" | "light";

export type DarkColor = "lime" | "orange" | "pink" | "purple";
export type LightColor = "blue" | "green" | "rose";
export type Color = DarkColor | LightColor;

interface ThemeContextType {
    mode: Mode;
    color: Color;
    setMode: (mode: Mode) => void;
    setColor: (color: Color) => void;
    toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const DEFAULT_DARK_COLOR: DarkColor = "lime";
const DEFAULT_LIGHT_COLOR: LightColor = "blue";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setModeState] = useState<Mode>("dark");
    const [color, setColorState] = useState<Color>("lime");

    useEffect(() => {
        const storedMode = localStorage.getItem("portfolio-mode") as Mode | null;
        const storedDarkColor = localStorage.getItem("portfolio-dark-color") as DarkColor | null;
        const storedLightColor = localStorage.getItem("portfolio-light-color") as LightColor | null;

        const initialMode = storedMode || "dark";
        const initialColor = initialMode === "dark"
            ? (storedDarkColor || DEFAULT_DARK_COLOR)
            : (storedLightColor || DEFAULT_LIGHT_COLOR);

        setModeState(initialMode);
        setColorState(initialColor);
        document.documentElement.setAttribute("data-theme", `${initialMode}-${initialColor}`);
    }, []);

    const applyTheme = (newMode: Mode, newColor: Color) => {
        document.documentElement.setAttribute("data-theme", `${newMode}-${newColor}`);
    };

    const setMode = (newMode: Mode) => {
        let newColor: Color;

        if (newMode === "dark") {
            const storedDark = localStorage.getItem("portfolio-dark-color") as DarkColor | null;
            newColor = storedDark || DEFAULT_DARK_COLOR;
        } else {
            const storedLight = localStorage.getItem("portfolio-light-color") as LightColor | null;
            newColor = storedLight || DEFAULT_LIGHT_COLOR;
        }

        setModeState(newMode);
        setColorState(newColor);
        localStorage.setItem("portfolio-mode", newMode);
        applyTheme(newMode, newColor);
    };

    const setColor = (newColor: Color) => {
        setColorState(newColor);

        if (mode === "dark") {
            localStorage.setItem("portfolio-dark-color", newColor);
        } else {
            localStorage.setItem("portfolio-light-color", newColor);
        }

        applyTheme(mode, newColor);
    };

    const toggleMode = () => {
        setMode(mode === "dark" ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider value={{ mode, color, setMode, setColor, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }
    return context;
};