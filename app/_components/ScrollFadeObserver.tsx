"use client";

import { useEffect } from "react";

/**
 * Wires up the IntersectionObserver that toggles `.in` on
 * elements with `.scroll-fade`. Kept as a tiny client component
 * so the rest of the page can stay server-rendered.
 *
 * Also staggers the entrance of review cards (every 3rd card resets
 * the delay) to match the original CSS behavior.
 */
export default function ScrollFadeObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll<HTMLElement>(".scroll-fade");
    elements.forEach((el, i) => {
      if (el.classList.contains("review-card")) {
        el.style.transitionDelay = `${(i % 3) * 0.08}s`;
      }
      observer.observe(el);
    });

    window.setTimeout(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("in");
        }
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  return null;
}
