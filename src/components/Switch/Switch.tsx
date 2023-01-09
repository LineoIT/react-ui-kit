import * as React from "react";




export const Switch: React.FC<{
  onToggle?: (value:boolean) => void;
}> = (prop) => {

  const [value, setValue] = React.useState(false)

  React.useEffect(() => {
    if(prop.onToggle) prop.onToggle(value)
  }, [value])

  return (<div
      className={`w-14 h-8 flex items-center  rounded-full p-1 duration-300 cursor-pointer ${
        value ? "bg-primary " : "bg-gray-200 dark:bg-gray-700"
      }`}
      onClick={() => { setValue(!value)}}
    >
      <div
        className={`bg-white  dark:bg-gray-200 w-6 h-6 rounded-full shadow-md transform duration-300 ${
          value ? "translate-x-6" : ""
        }`}
      ></div>
    </div>
  );
};

export const Switch2 : React.FC<React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
> & {
  className ?: string
}> = (prop) => {

   return <label htmlFor={prop.id} className={`bg-gray-200 dark:bg-gray-700  relative w-14 h-8 rounded-full`}>
    <input {...prop} type="checkbox" className="sr-only peer"/>
    <span className="w-6 h-6 bg-white  dark:bg-gray-200 absolute shadow-md rounded-full left-1 top-1 peer-checked:bg-primary-dark
     peer-checked:left-7 transition-all duration-300"/>
   </label>
}


