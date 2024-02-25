import React from "react";
import Link from "next/link";
import ThemeMenu from "./ThemeMenu";
import SearchMenu from "./SearchMenu";
import NavMobile from "./NavMobile/component";

const Header = () => {
  return (
    <header className="h-[58px]">
      <div className="fixed top-0 z-10 w-full border-b border-gray-300 text-sm backdrop-blur-md dark:border-gray-900 dark:text-gray-400">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center justify-center gap-2">
            <NavMobile />
            <Link href="/" className="hover:underline">
              <h1 className="text-md font-500 dark:text-white">simple-ui</h1>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="hidden lg:block">
              <SearchMenu />
            </div>
            <ThemeMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
