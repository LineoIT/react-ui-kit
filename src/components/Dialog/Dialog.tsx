import * as React from 'react';

export const Dialog: React.FC<React.PropsWithChildren<{
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
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {prop.children}
          </div>
        </div>
        <div className="px-6 py-3 bg-gray-200 dark:bg-gray-700 flex items-center justify-end divide-x-2 divide-gray-400 dark:divide-gray-500 divide-dashed">
            <div className="pr-4">
                <button onClick={prop.onCancel}
                 className="text-sm font-medium text-primary dark:text-accent hover:text-primary-dark dark:hover:text-primary/90 focus:outline-none focus:shadow-sm">{prop.textCancel}</button>
            </div>
            <div className="pl-4">
                <button onClick={prop.onOk}
                  className="px-4 py-1 rounded-full text-sm font-medium text-gray-200 dark:text-primary bg-primary/90 dark:bg-accent hover:bg-primary-dark/80 dark:hover:bg-primary/50 dark:hover:text-gray-200">{prop.textOk}</button>
            </div>
        </div>
      </div>
    </div>
  );
};
