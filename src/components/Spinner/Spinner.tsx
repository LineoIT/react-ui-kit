import { CSSProperties, FC } from "react";


export const Spinner: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> &{
  className?: string;
  variant?: "default" | "inverted"
  size?: string
  stroke?: string
}> = (props) => {
  
  const { 
    variant  = "default",
    stroke = "2px",
    size = "1.5rem"
  } = props

  let _style : CSSProperties = {}
  _style.borderWidth = stroke
  _style.height = size
  _style.width = size

  if(props.style) _style = {..._style, ...props.style}

  let borderStyle = variant === "inverted" ? 
   `border-white dark:border-gray-400` :
   `border-primary dark:border-accent`

  return (
    <div {...props} className={`
    border-solid rounded-full animate-spin 
    border-t-transparent dark:border-t-transparent 
    ${borderStyle}`} style={_style}/>
  );
};


