import React from "react";

type ComponentHeaderProps = {
  name: string;
  description?: string;
};

const ComponentHeader: React.FC<ComponentHeaderProps> = (props) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-display-md font-500 dark:text-white md:text-display-lg">
        {props.name}
      </h2>
      {props.description && (
        <p className="max-w-[800px] text-sm text-gray-600 dark:text-gray-500 md:text-md">
          {props.description}
        </p>
      )}
    </div>
  );
};

export default ComponentHeader;
