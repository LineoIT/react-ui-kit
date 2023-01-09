import { FC } from "react";
import {Radio} from "../components/Radio";

const RadioButtonUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
      <fieldset className="border p-2">
        <legend className="p-2  dark:text-gray-400">Radio buttons</legend>
        <div className="flex items-center flex-wrap gap-8 p-2 ">
          <div className="flex items-center">
            <Radio name="radio2" />
            <span className="ml-1">Radio</span>
          </div>
          <div className="flex items-center">
            <Radio defaultChecked name="radio2" />
            <span className="ml-1">Radio checked</span>
          </div>

          <div className="h-3 w-[1px] bg-white" />
          <div className="flex items-center">
            <Radio defaultChecked checkable name="checkable2" />
            <span className="ml-1">Radio</span>
          </div>

          <div className="flex items-center">
            <Radio defaultChecked checkable name="checkable2" />
            <span className="ml-1">Radio checked</span>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default RadioButtonUI;
