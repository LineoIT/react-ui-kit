import { FC, PropsWithChildren, useMemo, useState } from "react";


export type SelectLabelOption = {
  value: string
  name: string
} | undefined | string


export function SelectLabelField(props: PropsWithChildren & {
  placeholder?:string
  items: SelectLabelOption[]
  error?: boolean
  value?: SelectLabelOption
  setValue?: (value : SelectLabelOption) => void
}){
  const {placeholder="", value, items=[], setValue}  = props
  const [open, setOpen] = useState(false);

  const textCaption =  useMemo(() => typeof(value) === "string" ? value: value?.name, [value])

  return (
    <div className="relative min-w-[180px] select-none font-medium ">
      <div
        onClick={() => setOpen(!open)}
        className={` w-full border bg-white   dark:bg-black/30 dark:text-gray-300 p-2 flex items-center justify-between rounded  
         'text-gray-500'
        ${open ? ` ring-1 border-primary ring-primary`  :  'border-gray-400'}`
       }
      >
        <div className="flex items-center flex-1">
            <span className="text-gray-400">{placeholder}</span>
            <div className="ml-2 text-center flex-1 ">
            {textCaption && textCaption.length > 25  ? textCaption?.substring(0, 25) + "..." : textCaption}
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-[14px] h-[14px] ${open && "rotate-180"}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div   className={`absolute z-[99] text-gray-500 w-full bg-white dark:bg-gray-700 dark:text-gray-300 shadow drop-shadow-2xl  rounded  mt-1 overflow-y-auto transition-all duration-100  ${
          open ? "max-h-60  ring-accent ring-1" : "max-h-0"
        } `}>
          {items.map((item, i) =>  <div className="flex flex-col divide-y divide-gray-300 w-full" key={i}>
              <div className={`p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-accent/10 ${value === item && 'text-accent'}`}
              onClick={()=>  {
                if(setValue) setValue(item)
                setOpen(false)
              }}>{
                typeof(item) === "string" ? item : item?.name
              }</div>
           </div>)}
           {props.children}
      </div>
     
    </div>
  );
};
