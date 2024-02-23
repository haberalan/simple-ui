import { Link } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";

export default function Page() {
  return (
    <>
      <ComponentHeader
        name="Link"
        description="Links are used to navigate between pages or to open a new page in the same window or a new tab. They can be used to navigate to a new page, to open a dialog, to save a record, or to perform any other action."
      />
      <ComponentPreview preview={<Link href="/components">Components</Link>} />
      <ComponentProps
        elements={[
          {
            name: "Link",
            props: [
              {
                name: "href",
                default: "undefined",
                type: "string",
                description: "Href of the link.",
              },
              {
                name: "children",
                default: "undefined",
                type: "React.ReactNode",
                description: "Content of the link.",
              },
              {
                name: "className",
                default: "undefined",
                type: "string",
                description: "Class name of the link.",
              },
              {
                name: "tabIndex",
                default: "undefined",
                type: "number",
                description: "Specifies the tab order of the element.",
              },
              {
                name: "target",
                default: "undefined",
                type: "'_blank' | '_self' | '_parent' | '_top'",
                description: "Specifies where to open the linked document.",
              },
              {
                name: "rel",
                default: "undefined",
                type: "string",
                description:
                  "Specifies the relationship between the current document and the linked document.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
