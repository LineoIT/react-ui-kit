import React, { FC, ReactNode, createContext, useContext } from "react"


type Props = {
    value: number
    onChange?: (index: number) => void
    variant?: "tab" | "switch"
}

const TabContext = createContext<Props>({
    value: 0
});

const Item = (prop: React.PropsWithChildren<{ tab: number, className?: string }>) => {
    const { tab = 0, className = "py-2 px-3", children, ...rest } = prop
    const { value, onChange, variant = "tab" } = useContext(TabContext)

    const handleClick = () => {
        if (onChange) onChange(tab)
    }
    const _activeSwitchClass = tab === value ? 'cursor-default bg-white dark:bg-white/20 dark:text-white ' : 'cursor-pointer hover:bg-white/30 dark:text-white/30'
    const _activeTabClass = tab === value ? 'cursor-default dark:text-sky-500 text-primary border-b-2 border-primary dark:border-sky-500' : 'cursor-pointer'

    return <div onClick={handleClick} {...rest} className={` ${variant === "switch" && "text-black/60 rounded-md"} 
    ${variant === "switch" ? _activeSwitchClass : _activeTabClass}
  ${className}`}>
        {children}
    </div>
}




const TabSwitcher: FC<Props & {
    children?: ReactNode
    className?: string
}> & {
    Item: typeof Item
} = ({ children, value, onChange, className, variant = "tab" }) => {
    return (
        <TabContext.Provider value={{ value, onChange, variant }}>
            <div className={`inline-flex gap-1  
              ${variant === 'switch' ? 'rounded bg-black/5 dark:bg-white/5 p-1' : 'dark:bg-white/5   w-full border-b  border-black/[0.03]  dark:border-white/10'} 
              ${className}`}>
                {children}
            </div>
        </TabContext.Provider>
    );
}

TabSwitcher.Item = Item

export { TabSwitcher }