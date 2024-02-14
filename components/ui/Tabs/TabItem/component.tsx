'use client';

// region Imports
import React, { useContext } from 'react';
import { TabItemProps } from './component.types';
import { TabsContext } from '../component';
// endregion

// region Component
/**
 * @name TabItem
 * @param {TabItemProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const TabItem: React.FC<TabItemProps> = (props) => {
  const ctxTabs = useContext(TabsContext);

  return ctxTabs.active === props.label && props.children;
};
// endregion

export default TabItem;
