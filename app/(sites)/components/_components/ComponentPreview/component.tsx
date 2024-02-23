import { TabItem, Tabs } from "@/components/ui";
import React from "react";

type ComponentPreviewProps = {
  preview: React.ReactNode;
  code?: React.ReactNode;
};

const ComponentPreview: React.FC<ComponentPreviewProps> = (props) => {
  return (
    <section className="flex flex-col gap-4">
      <Tabs labels={["Preview", "Code"]} variant="secondary">
        <div className="flex min-h-[400px] w-full items-center justify-center rounded-2 border border-gray-300 bg-grid-light dark:border-gray-900 dark:bg-grid-dark">
          <TabItem label="Preview">{props.preview}</TabItem>
          <TabItem label="Code">Here will be code tab someday :d</TabItem>
        </div>
      </Tabs>
    </section>
  );
};

export default ComponentPreview;
