'use client';

import React, { createContext, useState } from 'react';
import { TabsContextProps, TabsProps } from './component.types';
import TabsNav from './TabsNav';

const TabsContext = createContext<TabsContextProps>({
  labels: [],
  active: '',
  updateActive: () => {},
});

const Tabs: React.FC<TabsProps> = (props) => {
  const [active, setActive] = useState<string>(props.labels[0] ?? '');

  const updateActive = (label: string) => {
    setActive(label);
  };

  return (
    <TabsContext.Provider
      value={{
        labels: props.labels,
        active,
        updateActive,
      }}
    >
      <TabsNav variant={props.variant} />
      <div className={props.className ?? ''}>{props.children}</div>
    </TabsContext.Provider>
  );
};

export { TabsContext };
export default Tabs;
