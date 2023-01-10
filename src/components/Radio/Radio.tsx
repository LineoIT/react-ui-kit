import React from "react";

export const Radio: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & {
   
  }
> = (props) => {
  return (
    <label className="cursor-pointer ">
      <input {...props} type="radio" className="peer sr-only" />
      <div
        className="rounded-full border border-gray-400 bg-white dark:bg-transparent
         text-white dark:text-transparent ring-2 ring-transparent transition-all hover:shadow 
      peer-checked:text-primary-dark peer-checked:ring-accent  peer-checked:border-transparent
      dark:peer-checked:text-accent  
      peer-disabled:border-gray-300 dark:peer-disabled:border-gray-600
      peer-disabled:bg-transparent 
      peer-disabled:text-slate-100 dark:peer-disabled:text-transparent
     "
      >
        <div className="flex items-center justify-between">
            <svg
              style={{ margin: "2px", width: "14px", height: "14px" }}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="12" fill="currentColor" />
            </svg>
         
        </div>
      </div>
    </label>
  );
};
