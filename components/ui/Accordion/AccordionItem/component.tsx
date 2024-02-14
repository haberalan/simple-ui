'use client';

// region Imports
import React, { useContext, useId } from 'react';
import { AccordionItemProps } from './component.types';
import { AnimatePresence, motion } from 'framer-motion';
import { AccordionContext } from '../component';
import { Icon } from '../..';
import { IconStyles } from './component.styles';
// endregion

// region Component
/**
 * @name AccordionItem
 * @param {AccordionItemProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const AccordionItem: React.FC<AccordionItemProps> = (props) => {
  const id = useId();

  const ctxAccordion = useContext(AccordionContext);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      ctxAccordion.toggle(id);
    }
  };

  return (
    <div className="border-b border-solid border-gray-500 py-2">
      <button
        className="group flex w-full cursor-pointer select-none items-center justify-between gap-4 rounded-1 py-1"
        onKeyDown={handleKeyDown}
        onClick={ctxAccordion.toggle.bind(this, id)}
        aria-expanded={ctxAccordion.isOpen(id)}
        aria-controls={`controls-${id}`}
        aria-labelledby={`label-${id}`}
      >
        <p className="text-lg font-400 group-hover:underline" id={`label-${id}`}>
          {props.label}
        </p>
        <Icon name="ChevronDown" className={IconStyles({ open: ctxAccordion.isOpen(id) })} />
      </button>
      <AnimatePresence initial={false}>
        {ctxAccordion.isOpen(id) && (
          <motion.div
            className="overflow-hidden text-sm text-gray-700 dark:text-gray-300"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.15 }}
            id={`controls-${id}`}
          >
            {props.children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
// endregion

export default AccordionItem;
