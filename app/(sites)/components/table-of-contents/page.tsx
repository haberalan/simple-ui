import { TableOfContents } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";

export default function Page() {
  return (
    <>
      <ComponentHeader
        name="TableOfContents"
        description="Table of contents are used to navigate a page. They can be used to navigate a page, to navigate a page, or to navigate a page. They can also be used to navigate a page, to navigate a page, or to navigate a page."
      />
      <ComponentPreview preview={<TableOfContents heading="This Page" />} />
      <ComponentProps
        elements={[
          {
            name: "TableOfContents",
            props: [
              {
                name: "heading",
                default: "undefined",
                type: "string",
                description: "Table of contents heading.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
