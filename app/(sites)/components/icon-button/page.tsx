import { IconButton } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";

export default function Page() {
  return (
    <>
      <ComponentHeader
        name="IconButton"
        description="Icon buttons are used to perform an action. They can be used to submit a form, to open a dialog, to navigate to a new page, to save a record, or to perform any other action."
      />
      <ComponentPreview
        preview={<IconButton variant="primary" size="md" icon="Sunset" />}
      />
      <ComponentProps
        elements={[
          {
            name: "IconButton",
            props: [
              {
                name: "variant",
                default: "undefined",
                type: "'primary' | 'secondary' | 'tertiary' | 'quaternary'",
                description: "Button variants.",
              },
              {
                name: "size",
                default: "undefined",
                type: "'sm' | 'md' | 'lg'",
                description: "Button sizes.",
              },
              {
                name: "onClick",
                default: "undefined",
                type: "() => void",
                description: "Button onClick event.",
              },
              {
                name: "icon",
                default: "undefined",
                type: "keyof typeof ICONS",
                description: "Adds icon to the button.",
              },
              {
                name: "type",
                default: "'button'",
                type: "'button' | 'submit' | 'reset'",
                description: "Sets button type.",
              },
              {
                name: "disabled",
                default: "undefined",
                type: "boolean",
                description: "Is button disabled.",
              },
              {
                name: "loading",
                default: "undefined",
                type: "boolean",
                description: "Is button loading.",
              },
              {
                name: "href",
                default: "undefined",
                type: "string",
                description: "Adds link to the button.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
