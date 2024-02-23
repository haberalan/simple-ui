import { Card } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";

export default function Page() {
  return (
    <>
      <ComponentHeader
        name="Card"
        description="Cards are used to display content in a structured and visually appealing way. They can be used to display a variety of content types, such as images, text, links, and buttons."
      />
      <ComponentPreview preview={<Card>This is a card</Card>} />
      <ComponentProps
        elements={[
          {
            name: "Card",
            props: [
              {
                name: "children",
                default: "undefined",
                type: "React.ReactElement | React.ReactNode",
                description: "Card contents.",
              },
              {
                name: "href",
                default: "undefined",
                type: "string",
                description: "Adds link to the card.",
              },
              {
                name: "onClick",
                default: "undefined",
                type: "(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",
                description: "Card onClick event.",
              },
              {
                name: "onContextMenu",
                default: "undefined",
                type: "(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",
                description: "Card onContextMenu event.",
              },
              {
                name: "className",
                default: "undefined",
                type: "string",
                description: "Card additional class names.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
