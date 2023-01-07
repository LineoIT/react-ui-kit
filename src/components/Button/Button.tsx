import * as React from "react";

type Variant = "inverted" | "default" | "outlined"
type Size = "small" | "medium" | "large"

export const LinkButton : React.FC<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
  variant?: Variant
  className?: string,
  onClick?: () => void
}> = ({ variant="default", children, className, ...rest }) => {
  return (
    <>
      <a
       {...rest}
        className={variant === "inverted" ? "text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8" :
         "text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8 "+ className}
      >
        {children}
      </a>
    </>
  );
};

export const Button : React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  className?: string,
}> = ({ variant="default", children, size = "medium", className, ...rest }) => {
  return (
    <>
      <button  
      {...rest} 
      className={`px-4 ${size === "small" ? "py-1": size === "large" ? "py-3": "py-2"}
       rounded-full text-sm font-medium transition-all ease-in-out
       ${variant === "outlined" ? "border border-primary text-primary bg-transparent hover:bg-primary disabled:border-gray-200 disabled:text-gray-300 hover:text-white disabled:hover:bg-transparent dark:hover:bg-black-10 dark:hover:text-gray-200 dark:disabled:border-gray-500 dark:disabled:text-gray-400 dark:disabled:hover:bg-transparent": ""}
       ${variant === "default" ?` text-white dark:text-gray-600  dark:disabled:text-gray-400
       bg-primary  dark:bg-primary disabled:bg-gray-200 hover:bg-primary-dark dark:hover:bg-green-100 dark:disabled:bg-gray-500   `:""}
        
        `}>
      {children}
        </button>

    </>
  );
};
