import { Badge } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";

export default function Page() {
  return (
    <>
      <ComponentHeader
        name="Badge"
        description="Badges are used to inform the user about the status of an object or about a new or unread item. They can be used to represent a new message, a new notification, a new feature, a new product, or a new event."
      />
      <ComponentPreview
        preview={
          <Badge variant="primary" size="md" shape="rounded">
            Badge
          </Badge>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Badge",
            props: [
              {
                name: "children",
                default: "undefined",
                type: "string",
                description: "Badge contents.",
              },
              {
                name: "variant",
                default: "undefined",
                type: "'primary' | 'secondary' | 'tertiary'",
                description: "Badge variant.",
              },
              {
                name: "size",
                default: "undefined",
                type: "'xs' | 'sm' | 'md' | 'lg'",
                description: "Badge size.",
              },
              {
                name: "shape",
                default: "undefined",
                type: "'rounded' | 'pill'",
                description: "Badge shape.",
              },
              {
                name: "disabled",
                default: "undefined",
                type: "boolean",
                description: "Is badge disabled.",
              },
              {
                name: "icon",
                default: "undefined",
                type: "keyof typeof ICONS",
                description: "Sets badge with icon.",
              },
              {
                name: "iconPosition",
                default: "'left'",
                type: "'left' | 'right'",
                description: "Sets icon position.",
              },
              {
                name: "href",
                default: "undefined",
                type: "string",
                description: "Adds link to the badge.",
              },
              {
                name: "onClick",
                default: "undefined",
                type: "(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",
                description: "Adds onClick event to the badge.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
