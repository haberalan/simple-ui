import { AlertProps } from './Alert/component.types';
import React from 'react';

type AlertContextProps = {
  /**
   * Array of alerts
   */
  alerts: AlertProps[];
  /**
   * Function that adds an alert to the array
   */
  push: (alert: Omit<AlertProps, 'key'>) => void;
};

type AlertProviderProps = {
  /**
   * Content of the provider
   */
  children: React.ReactNode;
};

export { type AlertContextProps, type AlertProviderProps };
