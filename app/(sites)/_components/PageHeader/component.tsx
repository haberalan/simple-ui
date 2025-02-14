import React from "react";

type PageHeaderProps = {
  name: string;
  description?: string;
};

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-display-md font-500 md:text-display-lg dark:text-white">
        {props.name}
      </h2>
      {props.description && (
        <p className="md:text-md max-w-[800px] text-sm text-gray-600 dark:text-gray-500">
          {props.description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
