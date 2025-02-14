"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "./highlight.css";
import { TabItem, Tabs } from "@/components/ui";
import React from "react";

type ComponentPreviewProps = {
  preview: React.ReactNode;
  code: string;
};

const ComponentPreview: React.FC<ComponentPreviewProps> = (props) => {
  return (
    <section className="flex flex-col gap-4">
      <Tabs labels={["Preview", "Code"]} variant="secondary">
        <TabItem label="Preview">
          <div className="flex min-h-[400px] w-full items-center justify-center rounded-2 border border-gray-300 bg-grid-light dark:border-gray-900 dark:bg-grid-dark">
            {props.preview}
          </div>
        </TabItem>
        <TabItem label="Code">
          <div className="scrollbar max-h-[400px] min-h-[200px] overflow-auto rounded-2 border border-gray-300 bg-gray-100 px-2 py-4 font-sans dark:border-gray-900 dark:bg-gray-1000">
            <SyntaxHighlighter
              language="typescript"
              style={style}
              customStyle={{
                backgroundColor: "transparent",
                fontSize: "14px",
              }}
            >
              {props.code}
            </SyntaxHighlighter>
          </div>
        </TabItem>
      </Tabs>
    </section>
  );
};

export default ComponentPreview;
