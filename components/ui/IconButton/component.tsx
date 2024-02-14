'use client';

// region Imports
import React from 'react';
import { IconButtonProps } from './component.types';
import { IconButtonStyles, LinkStyles } from './component.styles';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon, Link, Loader } from '..';
// endregion

// region Component
/**
 * @name IconButton
 * @param {IconButtonProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const IconButton: React.FC<IconButtonProps> = (props) => {
  const content = (
    <button
      className={IconButtonStyles({ variant: props.variant, size: props.size })}
      onClick={props.onClick}
      disabled={props.disabled || props.loading}
      type={props.type ?? 'button'}
      tabIndex={props.href ? -1 : 0}
    >
      <AnimatePresence initial={false}>
        {props.loading && (
          <motion.div
            className="absolute top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.15 }}
          >
            <Loader size="sm" />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        <motion.div
          className="h-full w-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: props.loading ? 0 : 1,
          }}
          transition={{ ease: 'easeInOut', duration: 0.15 }}
        >
          <Icon name={props.icon} className="h-5 w-5 shrink-0" />
        </motion.div>
      </AnimatePresence>
    </button>
  );

  if (props.href)
    return (
      <Link className={LinkStyles({ disabled: !!props.disabled })} href={props.href} tabIndex={props.disabled ? -1 : 0}>
        {content}
      </Link>
    );

  return content;
};
// endregion

export default IconButton;
