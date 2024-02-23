import { ActiveLink } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";

export default function Page() {
  return (
    <>
      <ComponentHeader
        name="ActiveLink"
        description="ActiveLink is a special kind of Link that applies an active class when its href is equal to the current URL. You can use it to style the link differently when it is active."
      />
      <ComponentPreview
        preview={<ActiveLink href="/components">Components</ActiveLink>}
      />
      <ComponentProps
        elements={[
          {
            name: "ActiveLink",
            props: [
              {
                name: "children",
                default: "undefined",
                type: "React.ReactNode | React.ReactElement",
                description: "Content of the link.",
              },
              {
                name: "href",
                default: "undefined",
                type: "string",
                description:
                  "Href of the link. If the href is equal to the current URL, the link will be active.",
              },
              {
                name: "noAbsolute",
                default: "false",
                type: "boolean",
                description:
                  "If true, the link will be relative to the current path.",
              },
              {
                name: "className",
                default: "undefined",
                type: "string",
                description: "Class name of the link.",
              },
              {
                name: "activeClassName",
                default: "undefined",
                type: "string",
                description: "Class name when the link is active.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
