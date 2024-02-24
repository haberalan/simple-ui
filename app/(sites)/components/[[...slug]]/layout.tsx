import { COMPONENTS } from "@/constants";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "./_components";

export default function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { slug?: string[] };
}>) {
  const component = COMPONENTS.find(
    (component) =>
      component.name
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/^-/, "")
        .toLocaleLowerCase() === params.slug?.[0].toLocaleLowerCase(),
  );

  return component ? (
    <>
      <ComponentHeader
        name={component.name}
        description={component.description}
      />
      <ComponentPreview preview={children} />
      <ComponentProps elements={component.props} />
    </>
  ) : (
    children
  );
}
