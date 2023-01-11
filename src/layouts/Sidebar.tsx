import { FC, useEffect, useState } from "react";
import { IconButton } from "../components/Button";
import {
  NotificationIcon,
  SearchIcon,
  UserProfileIcon,
} from "../components/Icons";
import { Switch } from "../components/Switch";
import { useTheme } from "../hooks/useTheme";
import { BottomMenu } from "./BottomMenu";
import { MenuItems } from "./Menu";



const Sidebar: FC<{
  className?: string;
}> = (prop) => {
  const { theme, toggleTheme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>(theme === "dark");
  const [isBottomMenuOpen, openBottomMenu] = useState(false);

  useEffect(() => {
    if (isDark) toggleTheme("dark");
    else toggleTheme("light");
  }, [isDark]);

  return (
    <aside className=" ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r dark:border-r-white-10 bg-primary-dark  dark:bg-primary-darkness transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div className="flex items-center p-2 my-5 font-semibold text-white dark:text-gray-300">
        <svg
          enableBackground="new 0 0 503.589 503.589"
          viewBox="0 0 503.589 503.589"
          className="h-8 w-8 fill-white dark:fill-gray-300"
        >
          <g>
            <path d="m69.954 459.229 168.711-291.214-71.765-123.863-166.9 290.897z" />
            <path d="m503.355 319.98-166.877-290.858h-143.615l168.521 290.858z" />
            <path d="m167.917 349.98-72.12 124.488h337.666l70.126-124.488z" />
          </g>
        </svg>
        <div className="ml-2">Logo</div>
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="flex items-center rounded px-4 py-3 cursor-text text-gray-200 dark:text-gray-500 bg-white-10 dark:bg-white-10">
          <SearchIcon className="w-5 h-5" />
        </div>

        <MenuItems />

        <div className="border border-white-10 my-5" />

        <div className="flex gap-3 items-center justify-between mb-3 px-2">
          <div className="text-white-60">Dark mode</div>
          <Switch size="small" value={isDark} onChange={setIsDark} />
        </div>
      </div>

      <div className=" relative flex justify-end border-t border-white-10 py-5">
        <IconButton className="relative" onClick={() => openBottomMenu(true)}>
          <UserProfileIcon />
          <span className="absolute flex h-3 w-3 right-1 top-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
          </span>
        </IconButton>

        <IconButton className="relative" >
          <NotificationIcon className="w-4 h-4" />
          <span className="absolute flex  right-[-5px] top-[-5px] bg-green-500 rounded-full">
            <span className="text-white p-1 text-[10px]">21</span>
          </span>
        </IconButton>
        <BottomMenu isOpen={isBottomMenuOpen}  setOpen={openBottomMenu}/>
      </div>
    </aside>
  );
};

export default Sidebar;
