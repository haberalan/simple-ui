"use client";

import { IconButton } from "@/components/ui";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 text-sm dark:border-gray-900 dark:text-gray-400">
      <div className="container flex flex-col-reverse items-center justify-between gap-4 py-6 md:flex-row md:gap-0">
        <div className="flex items-center justify-center gap-2">
          <IconButton
            size="sm"
            variant="primary"
            icon="github"
            href="https://github.com/haberalan/simple-ui"
          />
          <p className="text-sm">
            The source code is available on{" "}
            <span className="font-500">Github</span>.
          </p>
        </div>
        <p>
          Created by <span className="font-500">Alan Haber</span> &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
