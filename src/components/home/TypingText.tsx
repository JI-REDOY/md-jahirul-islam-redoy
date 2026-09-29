"use client";

import React, { useState, useEffect } from "react";

type TypingTextProps = {
    words: string[];
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseTime?: number;
    className?: string;
};

const TypingText = ({
    words,
    typeSpeed = 80,
    deleteSpeed = 40,
    pauseTime = 1500,
    className = "",
}: TypingTextProps) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    // Typing forward
                    const nextText = currentWord.substring(0, text.length + 1);
                    setText(nextText);

                    if (nextText === currentWord) {
                        // Word complete → wait → start deleting
                        setTimeout(() => setIsDeleting(true), pauseTime);
                    }
                } else {
                    // Deleting backward
                    const nextText = currentWord.substring(0, text.length - 1);
                    setText(nextText);

                    if (nextText === "") {
                        // Word deleted → next word
                        setIsDeleting(false);
                        setWordIndex((prev) => (prev + 1) % words.length);
                    }
                }
            },
            isDeleting ? deleteSpeed : typeSpeed
        );

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

    return (
        <span className={className}>
            {text}
            <span className="inline-block w-[2px] h-[1em] ml-1 translate-y-[2px] bg-[var(--accent)] animate-pulse" />
        </span>
    );
};

export default TypingText;