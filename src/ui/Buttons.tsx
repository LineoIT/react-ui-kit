import { FC } from "react";
import { Button } from "../components/Button/Button";

const ButtonUI: FC<{className?:string}> = (prop) => {
    return <div className={prop.className}>
        <fieldset className="border p-2">
        <legend className="p-2  dark:text-gray-400">Buttons</legend>
    <div className="flex items-center flex-wrap gap-2 py-2">
      <Button>default</Button>
      <Button disabled>disabled</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="outlined" disabled>
        outlined disabled
      </Button>
    </div>
  </fieldset>
    </div>
}
 
export default ButtonUI;