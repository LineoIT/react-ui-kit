import * as React from "react";

export const TextField: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & {
    inputClass?: string;
    error?: boolean;
  }
> = ({error=false, inputClass, ...rest}) => {
  const color = React.useMemo(
    () =>
      error 
        ? "text-red-500 border-red-400 focus-within:text-red-700 focus-within:ring-red-500  focus-within:border-red-500"
        : "text-gray-500 border-gray-400 focus-within:text-gray-700 focus-within:ring-primary  focus-within:border-primary ",
    [error]
  );

  return (
    <div className={`rounded px-2 border focus-within:ring-1 dark:bg-black dark:text-gray-300 dark:bg-opacity-30 dark:focus-within:bg-opacity-10 dark:focus-within:text-gray-200 dark:placeholder-gray-400  ${color}`}>
      <input
      {...rest}
        className={
          `px-2 py-2  ring-0 focus:outline-none bg-transparent focus:ring-0 dark:bg-transparent dark:placeholder-gray-400` +
          inputClass
        }
      />
    </div>
  );
};



