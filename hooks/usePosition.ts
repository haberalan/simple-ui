import { useState, useMemo, useLayoutEffect } from "react";

type usePositionProps = {
  ref: React.RefObject<HTMLElement | null>;
  direction?: "top" | "bottom";
};

const hasFixedParent = (element: HTMLElement | null) => {
  while (element) {
    const style = window.getComputedStyle(element);
    if (style.position === "fixed") {
      return true;
    }
    element = element.parentElement;
  }
  return false;
};

const usePosition = ({ ref, direction }: usePositionProps) => {
  const [active, setActive] = useState(false);
  const [target, setTarget] = useState<(EventTarget & HTMLElement) | null>(
    null,
  );
  const baseStyles: React.CSSProperties = useMemo(
    () => ({
      position: hasFixedParent(target!) ? "fixed" : "absolute",
      width: "max-content",
      zIndex: 10,
    }),
    [target],
  );

  const [styles, setStyles] = useState<React.CSSProperties>(baseStyles);

  const handleOpen = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setTarget(e.currentTarget);
    setActive((prev) => !prev);
  };

  const handleLeave = () => {
    setActive(false);
  };

  useLayoutEffect(() => {
    if (!active || !target) return;

    const updatePosition = () => {
      if (!ref.current) return;

      const tooltipRect = ref.current.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      const width = window.innerWidth;

      let calculatedY: React.CSSProperties = {};
      let newStyles: React.CSSProperties = {};

      if (direction === "top") {
        const top =
          targetRect.top -
          tooltipRect.height -
          6 +
          (hasFixedParent(target) ? 0 : window.scrollY);
        calculatedY = { top };
      } else {
        const top =
          targetRect.bottom + 6 + (hasFixedParent(target) ? 0 : window.scrollY);
        calculatedY = { top };
      }

      newStyles = {
        left: targetRect.left + targetRect.width / 2 - tooltipRect.width / 2,
      };

      if ((newStyles.left as number) < 0) {
        newStyles.left = 0;
      } else if ((newStyles.left as number) + tooltipRect.width > width) {
        newStyles.right = 0;
        delete newStyles.left;
      }

      setStyles({ ...baseStyles, ...newStyles, ...calculatedY });
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [active, target, ref, direction, baseStyles]);

  return {
    active,
    handleOpen,
    handleLeave,
    styles,
  };
};

export default usePosition;
