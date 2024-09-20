"use client";

// region Imports
import React, { useId, useState } from "react";
import { Card, Dialog, Icon, Link, Separator } from "..";
import { CommandProps } from "./component.types";
import { CommandStyles } from "./component.styles";
// endregion

// region Component
/**
 * @name Command
 * @param {CommandProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Command: React.FC<CommandProps> = (props) => {
  const id = useId();

  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const filteredLabels = props.labels.map((label) => {
    return {
      label: label.label,
      items: label.items.filter((item) => {
        return item.label.toLowerCase().includes(input.toLowerCase());
      }),
    };
  });

  const isEmpty = filteredLabels.every((label) => label.items.length === 0);

  return (
    <Dialog open={props.open} handleClose={props.handleClose}>
      <Card className={CommandStyles(props.className)}>
        <div className="flex items-center gap-2 p-3">
          <label htmlFor={id}>
            <Icon
              name="Search"
              className="size-5 cursor-pointer text-gray-400 transition-all duration-150 ease-in-out hover:text-black dark:text-gray-700 hover:dark:text-gray-500"
            />
          </label>
          <input
            id={id}
            placeholder="Search or type a command..."
            className="w-full bg-transparent text-sm placeholder:text-gray-400 focus-visible:outline-none placeholder:dark:text-gray-700"
            type="text"
            value={input}
            onChange={handleChange}
          />
          <Icon
            name="Close"
            className="size-4 cursor-pointer text-gray-400 transition-all duration-150 ease-in-out hover:text-black dark:text-gray-700 hover:dark:text-gray-500"
            onClick={props.handleClose}
          />
        </div>
        <Separator variant="horizontal" />
        <div className="scrollbar max-h-[320px] overflow-y-auto">
          {filteredLabels.map(
            (item) =>
              item.items.length > 0 && (
                <React.Fragment key={item.label}>
                  <ul className="flex flex-col gap-2 p-2">
                    <div className="text-xs font-500 text-gray-500 dark:text-gray-600">
                      {item.label}
                    </div>
                    {item.items.map((item) => (
                      <li
                        onClick={props.handleClose}
                        className="rounded-1 p-1 text-sm transition-all duration-100 ease-in-out hover:bg-gray-200 hover:dark:bg-gray-900"
                        key={item.label}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 rounded-1"
                        >
                          <Icon name={item.icon} className="size-4" />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Separator
                    variant="horizontal"
                    className="last-of-type:hidden"
                  />
                </React.Fragment>
              ),
          )}
          {isEmpty && (
            <p className="py-4 text-center text-gray-400 dark:text-gray-700">
              No results found.
            </p>
          )}
        </div>
      </Card>
    </Dialog>
  );
};
// endregion

export default Command;
