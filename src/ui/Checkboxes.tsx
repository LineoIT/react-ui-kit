import { FC } from "react";
import CheckBox from "../components/Checkbox";

const CheckBoxUI: FC<{className?:string}> = (prop) => {
    return <div className={prop.className}>
        <fieldset className="border p-2">
        <legend className="p-2  dark:text-gray-400">Checkboxes</legend>
        <div className="flex items-center flex-wrap gap-8 py-2">
          <div className="flex items-center">
            <CheckBox />
            <span className="ml-1">Checkbox</span>
          </div>
          <div className="flex items-center">
            <CheckBox checked />
            <span className="ml-1">Checkbox checked</span>
          </div>
        </div>
  </fieldset>
    </div>
}
 
export default CheckBoxUI;