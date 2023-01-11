import { FC, useMemo, useState } from "react";


export type DowndownOption = {
  value: string
  title: string
}
export const Dropdown: FC<{
  placeholder?:string
  items: DowndownOption[]
  error?: boolean
}> = ({placeholder="", items = [], error = false}) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState<DowndownOption>();
  const [open, setOpen] = useState(false);

  const defaultSpace = useMemo(() => {
    if (placeholder === "")
       if(selected === undefined)
         return "py-3"
    return ""
  }, [selected, placeholder])


  return (
    <div className="relative min-w-[180px] font-medium ">
      <div
        onClick={() => setOpen(!open)}
        className={` w-full border ${error && 'border-red-700 text-red-700'} bg-white  dark:bg-black dark:text-gray-300 p-2 flex items-center justify-between rounded  
        ${!selected ? "text-gray-500" : 'text-gray-500' }
        ${open ? ` ring-1 ${error? 'border-red-700 ring-red-700' :'border-primary ring-primary'}`  :  'border-gray-400'}`
       }
      >
          <span className={`${defaultSpace}`}>
          {selected
          ? selected?.title?.length > 25
            ? selected?.title?.substring(0, 25) + "..."
            : selected.title
          : placeholder}
          
          </span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-[14px] h-[14px] ${open && "rotate-180"}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <ul
        className={`absolute text-gray-500  bg-white dark:bg-gray-700 dark:text-gray-300 shadow drop-shadow-2xl  rounded  mt-1 overflow-y-auto transition-all duration-200  ${
          open ? "max-h-60  ring-accent ring-1" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 border-b dark:border-b-white-30 focus-within:border-primary bg-white dark:bg-gray-900  ">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4  text-gray-500 dark:text-gray-400">
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="search item"
            className="placeholder:text-gray-400 p-2 outline-none font-thin placeholder:italic bg-transparent"
          />
        </div>
        {items?.map((item) => (
          <li
            key={item?.title}
            className={` text-left p-2  text-sm hover:bg-accent hover:text-white
            ${
              item?.value?.toLowerCase() === selected?.value.toLowerCase() &&
              "bg-primary text-white"
            }
            ${
              item?.title?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (item?.value?.toLowerCase() !== selected?.value.toLowerCase()) {
                setSelected(item);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {item?.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
