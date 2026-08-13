"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL = "rajeshravichandrans2001@gmail.com";

export default function CopyEmailButton() {
  const [show, setShow] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // clipboard unavailable — the mailto link still works
    }
    setShow(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShow(false), 2200);
  }

  return (
    <>
      <button type="button" className="btn btn-ghost" onClick={handleClick}>
        Copy email
      </button>
      <div className={`toast${show ? " show" : ""}`} role="status" aria-live="polite">
        <span className="tick">✓</span> Email copied to clipboard
      </div>
    </>
  );
}
