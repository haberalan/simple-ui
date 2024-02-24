import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";

import dynamic from "next/dynamic";

const Preview = dynamic(() => import("./preview"), {
  loading: () => <p>Loading...</p>,
});

export default function Page() {
  return (
    <>
      <ComponentHeader
        name="Accordion"
        description="Accordions are a way to manage content in a collapsible manner. They are useful when you want to toggle between hiding and showing large amount of content."
      />
      <ComponentPreview preview={<Preview />} />
      <ComponentProps
        elements={[
          {
            name: "Accordion",
            props: [
              {
                name: "children",
                default: "undefined",
                type: "React.ReactNode | React.ReactElement",
                description: "Accordion contents.",
              },
              {
                name: "multiple",
                default: "false",
                type: "boolean",
                description:
                  "Whether to allow multiple items to be open at the same time.",
              },
            ],
          },
          {
            name: "AccordionItem",
            props: [
              {
                name: "label",
                default: "undefined",
                type: "React.ReactElement | React.ReactNode",
                description: "Label of the accordion item.",
              },
              {
                name: "children",
                default: "undefined",
                type: "React.ReactElement | React.ReactNode",
                description: "Content of the accordion item.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
