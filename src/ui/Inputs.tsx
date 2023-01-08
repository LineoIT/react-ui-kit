import { FC } from "react";
import SearchField from "../components/SearchField";
import SelectField from "../components/SelectField";
import TextField from "../components/TextField";

const InputUI : FC<{className?:string}> = (prop) => {
    return <div className={prop.className}> <fieldset className="border p-2">
        <legend className="p-2  dark:text-gray-400">Input fields</legend>
        <div className="flex items-center flex-wrap gap-8 py-2">
          <SearchField placeholder="search" />
          <TextField placeholder="normal" />
          <TextField error placeholder="error" />

          <SelectField>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </SelectField>
          <SelectField error>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </SelectField>
        </div>
  </fieldset>
  </div>
}
 
export default InputUI;