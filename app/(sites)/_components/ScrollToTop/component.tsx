"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <></>;
};

export default ScrollToTop;
