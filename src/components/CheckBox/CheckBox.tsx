import React from "react";

export const CheckBox: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & {
   
  }
> = (prop) => {
  return (
    <label className="cursor-pointer ">
      <input {...prop} type="checkbox" className="peer sr-only" />
      <div
        className="rounded border bg-white dark:bg-transparent
         text-white dark:text-transparent ring-2 ring-transparent transition-all hover:shadow 
      peer-checked:text-primary peer-checked:ring-primary-dark peer-checked:ring-offset-2
       dark:peer-checked:text-white"
      >
        <div className="flex items-center justify-between ">
            {/* <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg> */}
         
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>


         
        </div>
      </div>
    </label>
  );
};

