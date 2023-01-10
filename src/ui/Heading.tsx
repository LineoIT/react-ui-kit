import { FC } from "react";


export const Heading : FC<React.PropsWithChildren> = (props) => {
    return <h1 className="mt-[60px] border-b dark:border-gray-400 text-3xl w-full py-2 text-left">{props.children}</h1>
}
 
