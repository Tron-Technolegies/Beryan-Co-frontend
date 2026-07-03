import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const threshold = options.threshold ?? 0.1;
  const rootMargin = options.rootMargin ?? "0px 0px -60px 0px";
  const triggerOnce = options.triggerOnce ?? true;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove("reveal-visible");
          }
        });
      },
      { threshold, rootMargin }
    );

    const container = ref.current;
    if (!container) return;

    const targets: Element[] = [];
    
    if (container.classList.contains("reveal")) {
      targets.push(container);
    }
    
    // Find all descendants with 'reveal' class
    container.querySelectorAll(".reveal").forEach((el: Element) => {
      targets.push(el);
    });

    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => {
        try {
          observer.unobserve(target);
        } catch (e) {
          // Element might have been unmounted already
        }
      });
    };
  }, [threshold, rootMargin, triggerOnce]);

  return ref;
}
