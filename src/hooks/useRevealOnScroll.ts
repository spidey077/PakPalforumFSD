"use client";

import { useEffect, useRef, useState } from "react";

type RevealOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useRevealOnScroll<T extends HTMLElement = HTMLElement>(options: RevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: options.threshold ?? 0.14,
        rootMargin: options.rootMargin ?? "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.rootMargin, options.threshold]);

  return { ref, isVisible };
}