import { useMemo } from "react";

type IProp = {
  disabled?: boolean;
  active?: boolean
  last?: boolean
  strokeWidth?: number
};


export function TimelineTracker(props: IProp){
  const {
    disabled = false,
    active = false,
    strokeWidth = 4,
  } = props


  return (
    <div
      className={` relative rounded-full flex items-center justify-center w-[20px] h-[20px]  border-[${strokeWidth}px]
      ${disabled ? 'border-gray-300' : active ? 'border-primary dark:border-accent': 'border-primary dark:border-accent'}`}
    >
     {/* <div className={`w-1/2 h-1/2 rounded-full ${active && 'bg-rose-500'}`}/> */}
     {  active && <span className="absolute flex h-[7px] w-[7px] top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-rose-500"></span>
      </span>}

    </div>
  );
};

export function Timeline(props: IProp & {
  strokeWidth?: number
  strokeHeight?: number
  orientation?: 'vertical' | 'horizontal'
  last?: boolean,
}){
  const {
    strokeWidth = 4,
    strokeHeight = 20,
    orientation = "vertical",
    last = false,
    ...rest
  } = props

  const sizeClass = useMemo(() => {
    if(orientation === 'horizontal') return `w-[${strokeHeight}px] h-[${strokeWidth}px]`
    return `w-[${strokeWidth}px] h-[${strokeHeight}px]`
  }, [orientation, strokeHeight, strokeWidth])

  return (
    <div className={`flex items-center ${orientation === "vertical" && 'flex-col'}`}>
     { !last ? <>
      <TimelineTracker {...rest} strokeWidth={strokeWidth} />
      <div className={`flex-1 ${sizeClass} ${props.disabled ? 'bg-gray-300': 'bg-primary dark:bg-accent'}`}/>
     </> : <div className={`w-[20px] h-[10px] bg-primary dark:bg-accent`}/> }
    </div>
  );
};


