import { Icon } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";

export default function Page() {
  return (
    <>
      <ComponentHeader
        name="Icon"
        description="Icons are used to represent different types of content, such as images, text, links, and buttons. They can be used to display a variety of content types, such as images, text, links, and buttons."
      />
      <ComponentPreview preview={<Icon name="Sunset" className="size-16" />} />
      <ComponentProps
        elements={[
          {
            name: "Icon",
            props: [
              {
                name: "name",
                default: "undefined",
                type: "keyof typeof ICONS",
                description: "Name of the icon to render.",
              },
              {
                name: "onClick",
                default: "undefined",
                type: "() => void",
                description: "Icon onClick event.",
              },
              {
                name: "className",
                default: "undefined",
                type: "string",
                description: "Icon additional classes.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
