import { Button } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";

export default function Page() {
  return (
    <>
      <ComponentHeader
        name="Button"
        description="Buttons are used to perform an action. They can be used to submit a form, to open a dialog, to navigate to a new page, to save a record, or to perform any other action."
      />
      <ComponentPreview
        preview={
          <Button variant="primary" size="md">
            Button
          </Button>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Button",
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
                name: "children",
                default: "undefined",
                type: "string",
                description: "Button contents.",
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
                name: "iconPosition",
                default: "undefined",
                type: "'left' | 'right'",
                description: "Sets icon position.",
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
              {
                name: "rounded",
                default: "false",
                type: "boolean",
                description: "Rounds the button.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
