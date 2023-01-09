import { FC, useState } from "react";
import  { Switch, Switch2 } from "../components/Switch";

const SwitchUI: FC<{ className?: string }> = (prop) => {
  const [isDark, setIsDark] = useState(false)
  return (
    <div className={prop.className}>
      <fieldset className="border p-2">
        <legend className="p-2  dark:text-gray-400">Switch</legend>
        <div className="flex flex-wrap gap-8 ">
          <div className="flex items-center">
            <Switch value={isDark} onChange={setIsDark} />
            <span className="ml-1">Switch</span>
          </div>
          <div className="flex items-center">
            <Switch value={isDark} onChange={setIsDark} size="medium" />
            <span className="ml-1">Switch medium</span>
          </div>
          <div className="flex items-center">
            <Switch value={isDark} onChange={setIsDark} size="small" />
            <span className="ml-1">Switch small</span>
          </div>
          <div className="flex items-center">
            <Switch2 name="switch2" />
            <span className="ml-1">Switch2</span>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default SwitchUI;
