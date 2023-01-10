import { FC } from "react";
import {CheckBox} from "../components/CheckBox/";
import { Heading } from "./Heading";

const CheckBoxUI: FC<{className?:string}> = (prop) => {
    return <div className={prop.className}>
         <Heading>Checkboxes</Heading>
        <div className="flex items-center flex-wrap gap-8 py-2">
          <div className="flex items-center">
            <CheckBox />
            <span className="ml-2">Default</span>
          </div>
          <div className="flex items-center">
            <CheckBox   defaultChecked/>
            <span className="ml-2">Checked</span>
          </div>
          <div className="flex items-center">
            <CheckBox   disabled/>
            <span className="ml-2">Disabled</span>
          </div>
        </div>
    </div>
}
 
export default CheckBoxUI;