import * as React from "react";

export const TextArea: React.FC<
  React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement
  > & {
    inputClass?: string;
    error?: boolean;
    shape?: "rounded" | "flat"
  }
> = ({error=false, inputClass, shape, ...rest}) => {
  const color = React.useMemo(
    () =>
      error 
        ? "text-red-500 border-red-400 focus-within:text-red-700 focus-within:ring-red-500  focus-within:border-red-500"
        : "text-gray-500 border-gray-400 focus-within:text-gray-700 focus-within:ring-primary  focus-within:border-primary ",
    [error]
  );

  const rounded = shape === "flat" ? "" : "rounded"

  return (
    <div className={`${rounded} border focus-within:ring-1 bg-white dark:bg-black dark:text-gray-300 dark:bg-opacity-30 dark:focus-within:bg-opacity-10 dark:focus-within:text-gray-200 dark:placeholder-gray-400  ${color}`}>
      <textarea
      {...rest}
        className={
          `px-2 py-2  w-full ring-0 focus:outline-none bg-transparent focus:ring-0 dark:bg-transparent dark:placeholder-gray-400` +
          inputClass
        }
      />
    </div>
  );
};



