import { FC } from "react";
import Switch, { Switch2 } from "../components/Switch";

const SwitchUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
      <fieldset className="border p-2">
        <legend className="p-2  dark:text-gray-400">Switch</legend>
        <div className="flex flex-wrap gap-8 ">
          <div className="flex items-center">
            <Switch />
            <span className="ml-1">Switch</span>
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
