import React, { FC } from "react";

const TabContext = React.createContext({
  currentTab: 0,
  setCurrentTab: (tab: number) => {},
  onTabItemChange: (tab: number) => {},
});

type BaseProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const TabHeader: FC<
  BaseProps & {
    tab: number;
    activeClass?: string;
    slaveClass?: string;
  }
> = (props) => {
  const {
    children,
    tab = 0,
    className = "cursor-pointer p-2 first:border-l border-y border-r last:rounded-tr first:rounded-tl  border-primary",
    activeClass = "bg-white dark:bg-skin-dark text-primary border-b-0 ",
    slaveClass = "text-primary dark:text-gray-400",
  } = props;

  const { currentTab, setCurrentTab, onTabItemChange } =
    React.useContext(TabContext);
  return (
    <div
      className={`${className} ${
        tab === currentTab ? activeClass : slaveClass
      }`}
      onClick={() => {
        setCurrentTab(tab);
        if (onTabItemChange) onTabItemChange(tab);
      }}
    >
      {children}
    </div>
  );
};

const TabItem: FC<
  BaseProps & {
    tab: number;
  }
> = (props) => {
    const { children, tab = 0, 
        className="py-4 bg-white border-x border-b border-primary dark:bg-skin-dark w-full min-h-[100px] " 
    } = props
  const { currentTab } = React.useContext(TabContext);
  if (tab === currentTab) return <div {...props} className={className}>{children}</div>;
  return null;
};

const Tab: FC<
  BaseProps & {
    onTabItemChange: (tab: number) => void;
  }
> & {
  Header: typeof TabHeader;
  Content: typeof TabItem;
} = (props) => {
    const { children, onTabItemChange, className = "flex flex-col" } = props
  const [currentTab, setCurrentTab] = React.useState<number>(0);
  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab, onTabItemChange }}>
      <div className={className}>
         {children}
      </div>
    </TabContext.Provider>
  );
};

Tab.Header = TabHeader;
Tab.Content = TabItem;

export { Tab };
