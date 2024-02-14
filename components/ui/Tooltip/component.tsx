'use client';

// region Imports
import React, { useRef } from 'react';
import { TooltipProps } from './component.types';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { usePosition } from '@/hooks';
// endregion

// region Component
/**
 * @name Tooltip
 * @param {TooltipProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Tooltip: React.FC<TooltipProps> = (props) => {
  const refTooltip = useRef<HTMLDivElement>(null);
  const { active, handleOpen, handleLeave, styles } = usePosition({
    ref: refTooltip,
    direction: props.direction ?? 'top',
  });

  return (
    <div className="relative" onMouseEnter={handleOpen} onMouseLeave={handleLeave} onClick={handleOpen}>
      {createPortal(
        <AnimatePresence>
          {active && (
            <motion.div
              ref={refTooltip}
              className="max-w-[100vw]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: 'easeInOut', delay: props.delay ?? 0.3 }}
              style={{
                ...styles,
              }}
            >
              <motion.div
                initial={{ y: 4, scale: 0.8 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15, ease: 'easeInOut', delay: props.delay ?? 0.3 }}
              >
                {props.content}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
      {props.children}
    </div>
  );
};
// endregion

export default Tooltip;
