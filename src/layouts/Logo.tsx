import { FC } from "react";

export const Logo: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const { className = "h-8 w-8 fill-white dark:fill-gray-300" } = props;

  return (

    <svg
    {...props}
    enableBackground="new 0 0 503.589 503.589"
    viewBox="0 0 503.589 503.589"
    className={className}
  >
    <g>
      <path d="m69.954 459.229 168.711-291.214-71.765-123.863-166.9 290.897z" />
      <path d="m503.355 319.98-166.877-290.858h-143.615l168.521 290.858z" />
      <path d="m167.917 349.98-72.12 124.488h337.666l70.126-124.488z" />
    </g>
  </svg>

  );
};
