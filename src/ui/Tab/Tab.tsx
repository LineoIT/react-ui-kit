import React, { FC,  } from 'react'

const TabContext = React.createContext({ currentTab: 0, setCurrentTab: (tab: number) => { }, onTabItemChange: (tab: number) => { } })

type BaseProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const TabHeaders : React.FC<BaseProps> & {

} = ({ children, className }) => {
    return (<div className={['tab__header', className].join(' ')}>
        {children}
    </div>);
}

const TabHeader :  FC<BaseProps & {
    tab: number,
    activeClass?: string
}> = ({ children, tab = 0, className, activeClass = "active" }) => {
    const { currentTab, setCurrentTab, onTabItemChange } = React.useContext(TabContext)
    return (<div className={['tab_header_item', className, tab === currentTab ? activeClass : ''].join(' ')}
        onClick={() => {
            setCurrentTab(tab)
            if (onTabItemChange)
                onTabItemChange(tab)
        }
        }>
        {children}
    </div>);
}

const TabItem : FC<BaseProps & {
    tab: number
}> = ({ children, tab = 0 }) => {
    const { currentTab } = React.useContext(TabContext)
    if (tab === currentTab)
        return <>{children}</>
    return null
}

const TabContent: FC<BaseProps> = ({ children, className }) => {
    // const { currentTab } = React.useContext(TabContext)
    // return (<div className={className}>{children[currentTab]}</div>);
    return (<div className={className}>{children}</div>);
}

const Tab: FC<BaseProps & {
    onTabItemChange: (tab: number) => void
}> & {
    Headers: typeof TabHeaders,
    Header: typeof TabHeader,
    Content: typeof TabContent,
    Item: typeof TabItem,
} = ({ children, onTabItemChange }) => {
    const [currentTab, setCurrentTab] = React.useState<number>(0)
    return <TabContext.Provider value={{ currentTab, setCurrentTab, onTabItemChange }}>
        {children}
    </TabContext.Provider>
}

Tab.Headers = TabHeaders
Tab.Header = TabHeader
Tab.Content = TabContent
Tab.Item = TabItem

export default Tab;