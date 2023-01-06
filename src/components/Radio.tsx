import React from "react";

const Radio: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & {
    checkable?: boolean;
  }
> = (prop) => {
  return (
    <label className="cursor-pointer ">
      <input {...prop} type="radio" className="peer sr-only" />
      <div
        className="rounded-full border bg-white dark:bg-white
         text-white dark:text-transparent ring-2 ring-transparent transition-all hover:shadow 
      peer-checked:text-green-600 peer-checked:ring-green-400 peer-checked:ring-offset-0

     "
      >
        <div className="flex items-center justify-between">
          {prop.checkable ? (
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
              />
            </svg>
          ) : (
            <svg
              style={{ margin: "2px", width: "14px", height: "14px" }}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="12" fill="currentColor" />
            </svg>
          )}
        </div>
      </div>
    </label>
  );
};

export default Radio;
