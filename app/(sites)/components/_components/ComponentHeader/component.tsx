import React from "react";

type ComponentHeaderProps = {
  name: string;
  description: string;
};

const ComponentHeader: React.FC<ComponentHeaderProps> = (props) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-display-lg font-500 dark:text-white">{props.name}</h2>
      <p className="max-w-[800px] text-md text-gray-600 dark:text-gray-500">
        {props.description}
      </p>
    </div>
  );
};

export default ComponentHeader;
