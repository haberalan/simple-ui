import { Avatar } from "@/components/ui";
import img from "@/assets/images/avatar.png";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";

export default function Page() {
  return (
    <>
      <ComponentHeader
        name="Avatar"
        description="Avatars are used to represent people or entities. They can be used to represent a user, a bot, or a system entity. They can also be used to represent a contact in a messaging application."
      />
      <ComponentPreview preview={<Avatar src={img} alt="AH" size={160} />} />
      <ComponentProps
        elements={[
          {
            name: "Avatar",
            props: [
              {
                name: "src",
                default: "undefined",
                type: "string | StaticImageData",
                description: "Avatar image.",
              },
              {
                name: "alt",
                default: "undefined",
                type: "string",
                description: "Avatar alt text.",
              },
              {
                name: "size",
                default: "undefined",
                type: "number",
                description: "Avatar size in px.",
              },
              {
                name: "onClick",
                default: "undefined",
                type: "() => void",
                description: "Avatar onClick event.",
              },
              {
                name: "onContextMenu",
                default: "undefined",
                type: "() => void",
                description: "Avatar onContextMenu event.",
              },
              {
                name: "onMouseEnter",
                default: "undefined",
                type: "() => void",
                description: "Avatar onMouseEnter event.",
              },
              {
                name: "onMouseLeave",
                default: "undefined",
                type: "() => void",
                description: "Avatar onMouseLeave event.",
              },
              {
                name: "className",
                default: "undefined",
                type: "string",
                description: "Avatar additional classNames.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
