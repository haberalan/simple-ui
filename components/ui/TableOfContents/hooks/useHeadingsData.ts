import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const useHeadingsData = (container: string) => {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<HTMLElement[]>([]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll(
        `${container} h2, ${container} h3, ${container} h4, ${container} h5, ${container} h6`,
      ),
    );

    setHeadings(headingElements as HTMLElement[]);
  }, [container, pathname]);

  const handleClick = (heading: HTMLElement) => {
    const rect = heading.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const targetPosition = rect.top + scrollTop - 96;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return { headings, handleClick };
};

export default useHeadingsData;
