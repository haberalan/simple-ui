"use client";

import { Card, Icon, useThemeContext } from "@/components/ui";
import { usePosition } from "@/hooks";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ThemeStyles } from "./component.styles";

const ThemeMenu = () => {
  const refMenu = useRef<HTMLDivElement>(null);
  const refButton = useRef<HTMLButtonElement>(null);
  const { active, handleOpen, handleLeave, styles } = usePosition({
    ref: refMenu,
    direction: "bottom",
  });

  const ctxTheme = useThemeContext();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        refButton.current &&
        !refButton.current.contains(e.target as Node) &&
        refMenu.current &&
        !refMenu.current.contains(e.target as Node)
      ) {
        handleLeave();
      }
    };

    if (active) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleLeave, active]);

  return (
    <>
      <button
        className="rounded-1 flex items-center justify-between gap-2 border border-gray-300 p-[6px] text-left text-sm text-gray-600 transition-all hover:bg-gray-200 hover:text-black dark:border-gray-900 dark:text-gray-100 dark:hover:bg-gray-900"
        onClick={handleOpen}
        ref={refButton}
      >
        <Icon name="sun" className="size-5" />
      </button>
      {createPortal(
        <AnimatePresence>
          {active && (
            <motion.div
              ref={refMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              style={{
                ...styles,
              }}
            >
              <motion.div
                initial={{ y: 4, scale: 0.8 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
              >
                <Card className="flex flex-col gap-1 p-1! shadow-sm">
                  <button
                    onClick={ctxTheme.changeTheme.bind(this, "light")}
                    className={ThemeStyles({
                      selected: ctxTheme.theme === "light",
                    })}
                  >
                    <span>Light</span>
                    <Icon name="sun" className="size-4" />
                  </button>
                  <button
                    onClick={ctxTheme.changeTheme.bind(this, "dark")}
                    className={ThemeStyles({
                      selected: ctxTheme.theme === "dark",
                    })}
                  >
                    <span>Dark</span>
                    <Icon name="moon-star" className="size-4" />
                  </button>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

export default ThemeMenu;
