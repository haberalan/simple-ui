import React from "react";

type ComponentPropsProps = {
  elements: {
    name: string;
    props: {
      name: string;
      default: string;
      type: string;
      description: string;
    }[];
  }[];
};

const ComponentProps: React.FC<ComponentPropsProps> = (props) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-500">Props</h3>
      {props.elements.map((element) => (
        <div key={element.name} className="flex flex-col gap-4">
          <div className="w-min rounded-1 bg-gray-300 px-2 py-1 text-sm text-gray-700 dark:bg-gray-700/60 dark:text-gray-300">
            {element.name}
          </div>

          <div className="scrollbar overflow-x-auto pb-2">
            <table className="w-full min-w-[800px] border border-gray-300 text-sm dark:border-gray-900">
              <thead className="[&_th]:border [&_th]:border-gray-300 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-600 dark:[&_th]:border-gray-900">
                <tr>
                  <th className="w-[140px]">Prop</th>
                  <th className="w-[160px]">Default Value</th>
                  <th className="w-[220px]">Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody className="text-xs [&_td]:border [&_td]:border-gray-300 [&_td]:p-2 dark:[&_td]:border-gray-900">
                {element.props.map((prop) => (
                  <tr
                    key={prop.name}
                    className="group text-gray-700 odd:bg-gray-200 dark:text-gray-300 dark:odd:bg-gray-700/20"
                  >
                    <td>
                      <div className="w-fit rounded-1 bg-gray-300 px-2 py-1 font-mono group-odd:bg-gray-200 dark:bg-gray-700/60 dark:group-odd:bg-gray-700/60">
                        {prop.name}
                      </div>
                    </td>
                    <td>
                      <div className="w-fit rounded-1 bg-gray-300 px-2 py-1 font-mono group-odd:bg-gray-200 dark:bg-gray-700/60 dark:group-odd:bg-gray-700/60">
                        {prop.default}
                      </div>
                    </td>
                    <td>
                      <div className="w-fit rounded-1 bg-gray-300 px-2 py-1 font-mono group-odd:bg-gray-200 dark:bg-gray-700/60 dark:group-odd:bg-gray-700/60">
                        {prop.type}
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-1">{prop.description}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentProps;
