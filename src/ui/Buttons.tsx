import { FC } from "react";
import { Button } from "../components/Button/Button";
import { Heading } from "./Heading";

const ButtonUI: FC<{className?:string}> = (prop) => {
    return <div className={prop.className}>
         <Heading>Buttons</Heading>
    <div className="flex items-center flex-wrap gap-2 py-2">
      <Button>default</Button>
      <Button disabled>disabled</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="outlined" disabled>
        outlined disabled
      </Button>
    </div>
    </div>
}
 
export default ButtonUI;