"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 text-sm dark:border-gray-900 dark:text-gray-400">
      <div className="container flex items-center justify-between py-6">
        <p>
          Created by <span className="font-500">Alan Haber</span> &copy;{" "}
          {new Date().getFullYear()}
        </p>
        <div className="flex items-center justify-center gap-2">
          <a
            href="https://github.com/"
            target="_blank"
            aria-label="Will open in new tab."
            className="hover:underline"
          >
            Github
          </a>
          <a
            href="https://www.youtube.com/@haberalan"
            target="_blank"
            aria-label="Will open in new tab."
            className="hover:underline"
          >
            Youtube
          </a>
          <a
            href="https://www.linkedin.com/in/alanhaber/"
            target="_blank"
            aria-label="Will open in new tab."
            className="hover:underline"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
