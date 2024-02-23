import { Skeleton } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";

export default function Page() {
  return (
    <>
      <ComponentHeader
        name="Skeleton"
        description="Skeletons are used to indicate that a page or a component is loading. They can be used to indicate that a page or a component is loading, to indicate that a process is in progress, or to indicate that a process is complete."
      />
      <ComponentPreview
        preview={
          <div className="flex w-3/4 flex-wrap gap-1">
            <Skeleton className="h-8 w-full rounded-1" />
            <Skeleton className="h-8 w-full flex-1 rounded-1" />
            <Skeleton className="h-8 w-full flex-[2] rounded-1" />
          </div>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Skeleton",
            props: [
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
