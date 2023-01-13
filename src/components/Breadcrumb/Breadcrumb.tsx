import { FC } from "react";


export const BreadcrumbItem: FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & {
    index?: number;
    disabled?: boolean
  }
> = (props) => {
  const { className, children, index = 0, disabled = false } = props;
  let _className =
    `inline-flex items-center font-medium 
    ${disabled ? 'text-slate-500 ml-1 font-[300] md:ml-2': 'cursor-pointer text-primary  dark:text-accent'} 
    ${disabled ? '': 'hover:text-primary-dark  dark:hover:text-accent/30'}`;
    
  if (className) _className = _className + className;

  return (
    <li className="inline-flex items-center">
      {index > 0 && (
        <svg
          className="h-6 w-6 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
      <a {...props} className={_className}>
        {children}
      </a>
    </li>
  );
};

export const Breadcrumb: FC<{ 
    items: {href:string, title: string}[],
     className?: string
}> = ({ className, items = [] }) => {

    let _className = "flex p-3 md:text-[14px]"
    if(className) _className = _className +" "+ className

  return (
    <nav className={_className}>
        {items.map((item,i) =>  <BreadcrumbItem   key={i} index={i} disabled={i+1 === items.length}>
            {item.title}
        </BreadcrumbItem>)}
    </nav>
  );
};