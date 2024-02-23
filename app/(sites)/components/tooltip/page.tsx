import { Button, Card, Tooltip } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";

export default function Page() {
  return (
    <>
      <ComponentHeader
        name="Tooltip"
        description="Tooltips are used to display additional information when hovering over an element. They can be used to display additional information when hovering over an element, to display additional information when hovering over an element, or to display additional information when hovering over an element. They can also be used to display additional information when hovering over an element, to display additional information when hovering over an element, or to display additional information when hovering over an element."
      />
      <ComponentPreview
        preview={
          <Tooltip content={<Card>Hovered text.</Card>} direction="top">
            <Button variant="secondary" size="md">
              Hover
            </Button>
          </Tooltip>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Tooltip",
            props: [
              {
                name: "content",
                default: "undefined",
                type: "React.ReactNode",
                description: "Tooltip content.",
              },
              {
                name: "direction",
                default: "'top'",
                type: "'top' | 'bottom'",
                description: "Tooltip direction.",
              },
              {
                name: "children",
                default: "undefined",
                type: "React.ReactNode",
                description: "Tooltip children.",
              },
              {
                name: "delay",
                default: "undefined",
                type: "number",
                description: "Tooltip delay.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
