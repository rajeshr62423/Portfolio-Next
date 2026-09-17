"use client";

import { useRef, type PointerEvent } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useTilt(reducedMotion: boolean, max = 10) {
  const ref = useRef<HTMLDivElement>(null);

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(rawRotateY, { stiffness: 300, damping: 30 });

  const rawGlareX = useMotionValue(50);
  const rawGlareY = useMotionValue(50);
  const glareX = useSpring(rawGlareX, { stiffness: 300, damping: 30 });
  const glareY = useSpring(rawGlareY, { stiffness: 300, damping: 30 });

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || e.pointerType === "touch" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rawRotateY.set((px - 0.5) * max * 2);
    rawRotateX.set((0.5 - py) * max * 2);
    rawGlareX.set(px * 100);
    rawGlareY.set(py * 100);
  }

  function onPointerLeave() {
    rawRotateX.set(0);
    rawRotateY.set(0);
    rawGlareX.set(50);
    rawGlareY.set(50);
  }

  return [
    ref,
    { rotateX, rotateY, glareX, glareY, onPointerMove, onPointerLeave },
  ] as const;
}
