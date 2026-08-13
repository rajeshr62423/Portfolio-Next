"use client";

import { useEffect, useState } from "react";

const DEFAULT_WORDS = [
  "Full Stack Developer (MERN)",
  "React · React Native · Node.js",
  "Building ERP-scale web & mobile apps",
];

export default function Typewriter({ words = DEFAULT_WORDS }: { words?: string[] }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = words[wordIndex];
      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1600);
          return;
        }
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? 35 : 55);
    };

    timeoutId = setTimeout(tick, 400);
    return () => clearTimeout(timeoutId);
  }, [words]);

  return <span id="tw">{text}</span>;
}
