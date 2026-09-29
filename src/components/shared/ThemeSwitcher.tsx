"use client";

import React from "react";
import ModeToggle from "./ModeToggle";
import ColorDropdown from "./ColorDropdown";

const ThemeSwitcher = () => {
    return (
        <div className="flex items-center gap-2">
            <ModeToggle />
            <ColorDropdown />
        </div>
    );
};

export default ThemeSwitcher;