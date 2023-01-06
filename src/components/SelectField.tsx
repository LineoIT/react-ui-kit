import * as React from "react";

const SelectField: React.FC<
  React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > & {
    inputClass?: string;
    error?: boolean;
  }
> = (prop) => {
  const color = React.useMemo(
    () =>
      prop.error
        ? "text-red-500 border-red-400 focus-within:text-red-700 focus-within:ring-red-500  focus-within:border-red-500"
        : "text-gray-500 border-gray-400 focus-within:text-gray-700 focus-within:ring-green-500  focus-within:border-green-500 ",
    [prop.color]
  );

  return (
    <div
      className={`rounded px-2 border focus-within:ring-1 dark:bg-black dark:text-gray-300 dark:bg-opacity-30 dark:focus-within:bg-opacity-10 dark:focus-within:text-gray-200   ${color}`}
    >
      <select
        {...prop}
        className={
          `px-2 py-[0.6rem]  ring-0 focus:outline-none bg-transparent focus:ring-0 dark:bg-transparent dark:placeholder-gray-400` +
          prop.inputClass
        }
      >
        <option selected>Choose a country</option>
        {prop.children}
      </select>
    </div>
  );
};

export default SelectField;
