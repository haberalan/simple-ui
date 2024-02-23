import { Separator } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";

export default function Page() {
  return (
    <>
      <ComponentHeader
        name="Separator"
        description="Separators are used to separate content. They can be used to separate content, to separate content, or to separate content. They can also be used to separate content, to separate content, or to separate content."
      />
      <ComponentPreview
        preview={
          <div className="w-3/4">
            <Separator variant="horizontal" className="my-auto" />
          </div>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Separator",
            props: [
              {
                name: "variant",
                default: "undefined",
                type: "'vertical' | 'horizontal'",
                description: "Sets the variant of the separator.",
              },
              {
                name: "className",
                default: "undefined",
                type: "string",
                description: "Adds additional classes.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
