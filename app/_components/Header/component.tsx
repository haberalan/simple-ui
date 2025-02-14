import React from "react";
import Link from "next/link";
import ThemeMenu from "./ThemeMenu";
import SearchMenu from "./SearchMenu";
import NavMobile from "./NavMobile/component";
import { IconButton } from "@/components/ui";

const Header = () => {
  return (
    <header className="h-[58px]">
      <div className="fixed top-0 z-10 w-full border-b border-gray-300 text-sm backdrop-blur-md dark:border-gray-900 dark:text-gray-400">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center justify-center gap-6">
            <NavMobile />
            <Link href="/" className="hover:underline">
              <h1 className="font-500 font-mono text-sm dark:text-white">
                alanhaber/simple-ui
              </h1>
            </Link>
            <div className="font-500 flex items-center justify-center gap-4 text-sm text-gray-600">
              <Link href="/general/documentation" className="hover:underline">
                Docs
              </Link>
              <Link href="/components" className="hover:underline">
                Components
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className="hidden lg:block">
              <SearchMenu />
            </div>
            <div className="flex items-center justify-center gap-2">
              <IconButton
                variant="tertiary"
                className="rounded-1 flex items-center justify-between gap-2 border border-gray-300 p-[6px] text-left text-sm text-gray-600 transition-all hover:bg-gray-200 hover:text-black dark:border-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-100"
                href="https://github.com/haberalan/simple-ui"
                icon="github"
              />
              <ThemeMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
