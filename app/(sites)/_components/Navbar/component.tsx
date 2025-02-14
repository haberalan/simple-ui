import React from "react";
import { COMPONENTS } from "@/constants";
import { ActiveLink } from "@/components/ui";

const GROUPS = [
  {
    name: "Getting started",
    path: "/general",
    items: [
      {
        name: "Installation",
        formattedName: undefined,
        path: "/general/installation",
      },
      {
        name: "Documentation",
        formattedName: undefined,
        path: "/general/documentation",
      },
      {
        name: "Icons",
        formattedName: undefined,
        path: "/general/icons",
      },
    ],
  },
  {
    name: "Components",
    path: "/components",
    items: COMPONENTS,
  },
];

const Navbar = () => {
  return (
    <nav className="scrollbar sticky top-[90px] hidden max-h-[calc(100vh-122px)] w-[240px] flex-col gap-4 self-start overflow-auto text-sm xl:flex">
      {GROUPS.map((group) => (
        <div key={group.name} className="flex flex-col gap-3">
          <ActiveLink
            noAbsolute
            href={group.path}
            className="font-500"
            activeClassName="underline"
          >
            {group.name}
          </ActiveLink>
          <ul className="flex flex-col gap-1 text-gray-500 dark:text-gray-500">
            {group.items.map((item) => (
              <li key={item.name}>
                <ActiveLink
                  exact
                  href={item.path}
                  className="group transition-spacing duration-150"
                  activeClassName="dark:text-white text-black ml-1 font-500"
                >
                  <span className="transition-spacing duration-150 group-hover:pl-1">
                    {item.formattedName || item.name}
                  </span>
                </ActiveLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
