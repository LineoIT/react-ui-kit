import * as React from 'react';

const Dialog: React.FC<React.PropsWithChildren<{
    className?: string,
    title?:string
    textOk?: string
    textCancel?: string
    onCancel?: () => void
    onOk?: () => void
}>> = (prop) => {
  return (
    <div className={`w-96 ` + prop.className}>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
        <div className="p-6 space-y-2">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">{prop.title}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {prop.children}
          </p>
        </div>
        <div className="px-6 py-3 bg-gray-200 dark:bg-gray-700 flex items-center justify-end divide-x-2 divide-gray-400 dark:divide-gray-500 divide-dashed">
            <div className="pr-4">
                <button onClick={prop.onCancel}
                 className="text-sm font-medium text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-500 focus:outline-none focus:shadow-sm">{prop.textCancel}</button>
            </div>
            <div className="pl-4">
                <button onClick={prop.onOk}
                  className="px-4 py-1 rounded-full text-sm font-medium text-green-100 dark:text-green-700 bg-green-500 dark:bg-green-200 hover:bg-green-400 dark:hover:bg-green-100">{prop.textOk}</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
