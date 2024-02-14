import { TabsNavProps } from './TabsNav/component.types';

type TabsContextProps = {
  /**
   * Array of tab labels
   */
  labels: string[];
  /**
   * Currently active tab label
   */
  active: string;
  /**
   * Function to update active tab
   */
  updateActive: (label: string) => void;
};

type TabsProps = {
  /**
   * Array of tab labels
   */
  labels: string[];
  /**
   * Content of tabs
   */
  children: React.ReactNode;
  /**
   * Tabs Variant
   */
  variant: TabsNavProps['variant'];
  /**
   * Additional class names
   */
  className?: string;
};

export { type TabsProps, type TabsContextProps };
