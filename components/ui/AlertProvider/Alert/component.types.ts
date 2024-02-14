import React from 'react';
import { ICONS } from '@/assets/assets';
import { ButtonProps } from '../../Button/component.types';

type AlertProps = {
  /**
   * Unique key for the alert
   */
  key: string;
  /**
   * Alert label
   */
  label: string;
  /**
   * Alert description
   */
  children: React.ReactNode;
  /**
   * Icon of the alert
   */
  icon?: keyof typeof ICONS;
  /**
   * Action button
   */
  action?: ButtonProps;
  /**
   * Shows timer of the alert
   */
  timer?: boolean;
};

export { type AlertProps };
