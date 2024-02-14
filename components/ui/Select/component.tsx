'use client';

// region Imports
import React from 'react';
import { OptionType, SelectProps } from './component.types';
import {
  BadgesWrapperStyles,
  HelperStyles,
  IconStyles,
  ItemStyles,
  LabelStyles,
  SelectStyles,
} from './component.styles';
import { Badge, Icon, Input } from '..';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelect } from './hooks';
// endregion

// region Component
/**
 * @name Select
 * @param {SelectProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Select: React.FC<SelectProps> = (props) => {
  const {
    open,
    search,
    filteredOptions,
    handleSearch,
    handleOpen,
    handleKeyDownSelect,
    handleKeyDownOption,
    handleClickSelectedOption,
    refOptions,
  } = useSelect(props.options, !!props.disabled, props.onChange);

  const handleClick = (label: string) => {
    props.onChange(label);
    if (!props.multiple) {
      handleOpen();
    }
  };

  const status = props.disabled ? 'disabled' : props.status ?? 'default';
  const text = { error: props.errorText, default: props.helperText, disabled: '', valid: '' }[
    props.status ?? 'default'
  ];

  const isSelected = (option: OptionType) =>
    Array.isArray(props.value) ? props.value.includes(option.label) : props.value === option.label;

  const selected = props.multiple ? (
    <div className={BadgesWrapperStyles({ disabled: props.disabled })}>
      {props.value.map((item) => (
        <Badge
          variant="tertiary"
          size="xs"
          shape="pill"
          key={item}
          onClick={(e) => handleClickSelectedOption(e!, item)}
        >
          {item}
        </Badge>
      ))}
    </div>
  ) : (
    <p>{props.value}</p>
  );

  return (
    <div className="flex flex-col gap-1">
      <div className="relative flex flex-col-reverse gap-1" ref={refOptions}>
        <div
          className={SelectStyles({ status })}
          tabIndex={props.disabled ? -1 : 0}
          onClick={handleOpen}
          onKeyDown={handleKeyDownSelect}
          onBlur={props.onBlur}
          autoFocus={props.autoFocus}
        >
          {props.placeholder && (!props.value || props.value.length === 0) && (
            <p className="pointer-events-none select-none text-gray-500 dark:text-gray-700">{props.placeholder}</p>
          )}
          {props.value && selected}
          <Icon name="ChevronDown" className={IconStyles({ open })} />
        </div>
        <AnimatePresence>
          {open && !props.disabled && (
            <motion.div
              className="scrollbar absolute top-full z-20 mt-[2px] max-h-[320px] w-full overflow-y-auto rounded-1 border border-gray-300 bg-white p-1 text-sm dark:border-gray-900 dark:bg-gray-1000"
              initial={{ opacity: 0, y: -4, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15, ease: 'easeInOut' }}
            >
              {props.search && (
                <div className="mb-2">
                  <Input
                    hideHelper
                    status="default"
                    value={search}
                    onChange={handleSearch}
                    icon="Search"
                    iconPositon="right"
                    placeholder="Search..."
                  />
                </div>
              )}
              <ul className="flex flex-col gap-1 py-1">
                {filteredOptions.map((option) => (
                  <li
                    tabIndex={option.disabled ? -1 : 0}
                    key={option.label}
                    onClick={handleClick.bind(this, option.label)}
                    onKeyDown={(e) => handleKeyDownOption(e, option)}
                    className={ItemStyles({
                      selected: isSelected(option),
                      disabled: !!option.disabled,
                    })}
                  >
                    {option.label}
                    {isSelected(option) && <Icon name="Check" className="absolute right-2 top-2 h-4 w-4" />}
                  </li>
                ))}
                {filteredOptions.length === 0 && (
                  <li className="px-3 text-center dark:text-gray-600">No results found</li>
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        {props.label && <div className={LabelStyles({ status })}>{props.label}</div>}
      </div>
      <div className="h-4">
        <p className={HelperStyles({ status })}>{text}</p>
      </div>
    </div>
  );
};
// endregion

export default Select;
