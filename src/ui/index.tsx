import { Box } from "../components/Box/Box";
import AccordionUI from "./Accordions";
import AlertUI from "./Alerts";
import ButtonUI from "./Buttons";
import CheckBoxUI from "./Checkboxes";
import { Code } from "./Code";
import {accordionCode} from "./snipets";
import InputUI from "./Inputs";
import ModalUI from "./Modals";
import RadioButtonUI from "./RadioButtons";
import { SpinnerUI } from "./Spinners";
import SwitchUI from "./Switchs";
import { TableUI } from "./Tables";
import ToastUI from "./Toasts";

const UIComponents = () => {
  return (
    <div className={`p-10 text-center overflow-y-auto  dark:text-gray-200`}>
      <Box className="h-[300px]" />

      <TableUI className="my-2  p-3" />

      <SwitchUI className="my-2" />

      <RadioButtonUI className="my-2" />

      <CheckBoxUI className="my-2" />

      <InputUI className="my-2" />

      <ButtonUI className="my-2" />

      <AlertUI className="my-2" />

      <ModalUI className="my-2" />

      <ToastUI className="my-2" />

      <SpinnerUI className="my-2" />

      <div className="my-2">
         <AccordionUI/>
         <Code code={accordionCode}/>
      </div>
    </div>
  );
};

export default UIComponents;
