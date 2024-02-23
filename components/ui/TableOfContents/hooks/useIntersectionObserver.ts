import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (headings: HTMLElement[]) => {
  const [active, setActive] = useState<HTMLElement | null>(null);
  const headingElementsRef = useRef(
    new Map<HTMLElement, IntersectionObserverEntry>(),
  );

  const index = headings.indexOf(active as HTMLElement) ?? -1;

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const targetEl = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          headingElementsRef.current.set(targetEl, entry);
        } else {
          headingElementsRef.current.delete(targetEl);
        }
      });

      const visibleHeadings = Array.from(headingElementsRef.current.values())
        .map((entry) => entry.target as HTMLElement)
        .sort((a, b) => headings.indexOf(a) - headings.indexOf(b));

      if (visibleHeadings.length) {
        setActive(visibleHeadings[0]);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -40% 0px",
    });
    headings.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [headings]);

  return { active, index };
};

export default useIntersectionObserver;
