import { TabItem, Tabs } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";

export default function Page() {
  return (
    <>
      <ComponentHeader
        name="Tabs"
        description="Tabs are used to navigate between different sections. They can be used to navigate between different sections, to navigate between different sections, or to navigate between different sections. They can also be used to navigate between different sections, to navigate between different sections, or to navigate between different sections."
      />
      <ComponentPreview
        preview={
          <Tabs labels={["First", "Second", "Third"]} variant="primary">
            <TabItem label="First">
              <></>
            </TabItem>
            <TabItem label="Second">
              <></>
            </TabItem>
            <TabItem label="Third">
              <></>
            </TabItem>
          </Tabs>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Tabs",
            props: [
              {
                name: "labels",
                default: "[]",
                type: "string[]",
                description: "Tabs labels.",
              },
              {
                name: "variant",
                default: "undefined",
                type: "TabsNavProps['variant']",
                description: "Tabs variant.",
              },
              {
                name: "children",
                default: "undefined",
                type: "React.ReactNode",
                description: "Tabs content.",
              },
              {
                name: "className",
                default: "undefined",
                type: "string",
                description: "Adds additional classes.",
              },
            ],
          },
          {
            name: "TabItem",
            props: [
              {
                name: "label",
                default: "undefined",
                type: "string",
                description: "Tab item label.",
              },
              {
                name: "children",
                default: "undefined",
                type: "React.ReactNode",
                description: "Tab item content.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
