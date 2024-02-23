import { Accordion, AccordionItem } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";

export default function Page() {
  return (
    <>
      <ComponentHeader
        name="Accordion"
        description="Accordions are a way to manage content in a collapsible manner. They are useful when you want to toggle between hiding and showing large amount of content."
      />
      <ComponentPreview
        preview={
          <div className="w-1/2">
            <Accordion>
              <AccordionItem label="First Label">
                <p>Content of the first label</p>
              </AccordionItem>
              <AccordionItem label="Second Label">
                <p>Content of the second label</p>
              </AccordionItem>
              <AccordionItem label="Third Label">
                <p>Content of the third label</p>
              </AccordionItem>
            </Accordion>
          </div>
        }
      />
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
