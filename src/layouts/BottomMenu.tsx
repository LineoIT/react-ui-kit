import { FC, useState } from "react";
import { XMarkIcon } from "../components/Icons";
import { Switch } from "../components/Switch";
import { useTheme } from "../hooks/useTheme";


export 
const BottomMenu: FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & {
    isOpen?: boolean;
    setOpen?: (v: boolean) => void;
  }
> = (props) => {
  const { className, isOpen = false, setOpen } = props;
  let _className = ``;
  if (className) _className = _className + " " + className;

  const { theme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>(theme === "dark");


  return (
    <div className={` ${isOpen ? 'max-h-[600px]': "max-h-0"} rounded drop-shadow-md transition-max-height duration-300 ease-in-out absolute left-0 right-0 bottom-0  overflow-hidden overflow-y-auto bg-white dark:bg-skin-dark dark:text-gray-400`}>
      <XMarkIcon
        className="m-1 h-6 w-6 absolute right-0 top-0 hover:text-rose-400 cursor-pointer transition hover:rotate-180"
        onClick={() => {
          if (setOpen) setOpen(false);
        }}
      />

      <div className="flex items-center p-3 border-b dark:border-white-20">
        <div className="flex items-center justify-center rounded-full bg-green-400 
        h-[40px] w-[40px] font-light dark:text-white">
          CA
        </div>
        <span className="ml-2 dark:text-white">Claver Amon</span>
      </div>

      <div className="p-3">

        <div className="flex gap-3 items-center mb-3 dark:text-white-60 hover:text-primary">
        <a href="#"> My profile</a>
        </div>

        <div className="flex gap-3 items-center mb-3 dark:text-white-60 hover:text-primary">
          <a href="#">Notification</a>
        </div>

        <div className="border-b my-5 dark:border-white-20"/>

        <div className="flex gap-3 items-center mb-3 dark:text-white-60 hover:text-primary">
        <a href="#">Help</a>
        </div>

        <div className="flex gap-3 items-center justify-between mb-3 hover:text-primary">
          <div className="dark:text-white-60">Dark mode</div>
          <Switch size="small" value={isDark} onChange={setIsDark} />
        </div>

      </div>

    </div>
  );
};
