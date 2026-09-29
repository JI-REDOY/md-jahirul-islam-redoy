"use client";

import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkTouch = window.matchMedia("(pointer: coarse)").matches;
        setIsTouchDevice(checkTouch);

        if (checkTouch) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Dot follows instantly
            dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Ring follows with smooth lag
        const animate = () => {
            ringX += (mouseX - ringX) * 0.18;
            ringY += (mouseY - ringY) * 0.18;

            ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

            requestAnimationFrame(animate);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        requestAnimationFrame(animate);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    if (isTouchDevice) return null;

    return (
        <>
            {/* Ring */}
            <div
                ref={ringRef}
                className="pointer-events-none fixed left-0 top-0 z-[9998] hidden rounded-full border-2 transition-opacity duration-200 lg:block"
                style={{
                    width: "24px",
                    height: "24px",
                    borderColor: "var(--accent)",
                    opacity: isVisible ? 0.6 : 0,
                }}
                aria-hidden="true"
            />

            {/* Dot */}
            <div
                ref={dotRef}
                className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full transition-opacity duration-200 lg:block"
                style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: "var(--accent)",
                    opacity: isVisible ? 1 : 0,
                }}
                aria-hidden="true"
            />
        </>
    );
};

export default CustomCursor;