import * as React from "react";


export const LinkButton : React.FC<React.PropsWithChildren & {
  to?: string
  type?: "inverted" | "default"
  className?: string,
  onClick?: () => void
}> = ({to = "#", type="default", children, className, onClick }) => {
  return (
    <>
      <a
        href={to}
        onClick={onClick}
        className={type === "inverted" ? "text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8" :
         "text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8 "+ className}
      >
        {children}
      </a>
    </>
  );
};

