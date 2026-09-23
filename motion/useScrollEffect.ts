"use client";

import { useLayoutEffect, useRef } from "react";

/** Attach a motion/scroll.ts registrar to an element and tear it down on unmount. */
export function useScrollEffect<T extends Element>(register: (el: T) => () => void) {
  const ref = useRef<T>(null);
  const registerRef = useRef(register);
  registerRef.current = register;

  useLayoutEffect(() => {
    if (!ref.current) return;
    return registerRef.current(ref.current);
  }, []);

  return ref;
}
