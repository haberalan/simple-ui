"use client";

import { Button, ThemeContext } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";
import { useContext } from "react";

export default function Page() {
  const ctxTheme = useContext(ThemeContext);

  const handleClick = () => {
    ctxTheme.changeTheme(ctxTheme.theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ComponentHeader
        name="Theme"
        description="Theme is used to change the application theme. It can be used to change the application theme, to change the application theme, or to change the application theme. It can also be used to change the application theme, to change the application theme, or to change the application theme."
      />
      <ComponentPreview
        preview={
          <Button variant="secondary" size="md" onClick={handleClick}>
            Toggle Theme
          </Button>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "ThemeProvider",
            props: [
              {
                name: "children",
                default: "undefined",
                type: "React.ReactNode",
                description: "Content.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
