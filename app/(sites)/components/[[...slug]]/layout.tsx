import { COMPONENTS } from "@/constants";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "./_components";

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug?: string[] }>;
}>) {
  const { slug } = await params;

  const component = COMPONENTS.find(
    (component) =>
      component.name
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/^-/, "")
        .toLocaleLowerCase() === slug?.[0].toLocaleLowerCase(),
  );

  return component ? (
    <>
      <ComponentHeader
        name={component.name}
        description={component.description}
      />
      <ComponentPreview preview={children} code={component.code} />
      <ComponentProps elements={component.props} />
    </>
  ) : (
    children
  );
}
