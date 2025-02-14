"use client";

import { Icon, Sheet, ActiveLink } from "@/components/ui";
import { useEffect, useState } from "react";
import { COMPONENTS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const NavMobile = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleClose();
  }, [pathname]);

  return (
    <>
      <div className="xl:hidden">
        <Icon
          name="menu"
          onClick={handleOpen}
          className="size-8 cursor-pointer"
        />
      </div>

      <Sheet open={open} handleClose={handleClose} direction="left">
        <div className="flex h-full flex-col gap-8 px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="hover:underline">
              <h1 className="text-md font-500 font-mono dark:text-white">
                alanhaber/simple-ui
              </h1>
            </Link>
            <Icon
              name="close"
              className="size-5 cursor-pointer self-end"
              onClick={handleClose}
            />
          </div>
          <nav className="scrollbar flex max-h-[90%] w-full flex-col gap-4 self-start overflow-auto text-sm">
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
                <ul className="ml-2 flex flex-col gap-2 text-gray-500 dark:text-gray-500">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <ActiveLink
                        href={item.path}
                        className="group transition-spacing duration-150"
                        activeClassName="dark:text-white text-black ml-1 font-500"
                      >
                        <span className="transition-spacing duration-150 group-hover:ml-1">
                          {item.formattedName || item.name}
                        </span>
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </Sheet>
    </>
  );
};

export default NavMobile;
