import { Loader } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";

export default function Page() {
  return (
    <>
      <ComponentHeader
        name="Loader"
        description="Loaders are used to indicate that a page or a component is loading. They can be used to indicate that a page or a component is loading, to indicate that a process is in progress, or to indicate that a process is complete."
      />
      <ComponentPreview preview={<Loader size="md" />} />
      <ComponentProps
        elements={[
          {
            name: "Loader",
            props: [
              {
                name: "size",
                default: "'md'",
                type: "'sm' | 'md' | 'lg'",
                description: "Loader size.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
