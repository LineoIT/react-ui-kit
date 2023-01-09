import AlertUI from "./Alerts";
import ButtonUI from "./Buttons";
import CheckBoxUI from "./Checkboxes";
import InputUI from "./Inputs";
import ModalUI from "./Modals";
import RadioButtonUI from "./RadioButtons";
import { SpinnerUI } from "./Spinners";
import SwitchUI from "./Switchs";
import ToastUI from "./Toasts";


const UIComponents = () => {
    return   <>
    <div
      className={`p-10 min-h-screen flex justify-center flex-wrap items-center bg-gray-700 `}
    >
      {/* light components */}
      <div className="flex flex-col  flex-1  p-10 bg-white  mr-10">

        <SwitchUI className="my-2" />

        <RadioButtonUI className="my-2" />

        <CheckBoxUI className="my-2" />

        <InputUI className="my-2" />

        <ButtonUI className="my-2" />

        <AlertUI className="my-2" />

        <ModalUI className="my-2" />

        <ToastUI className="my-2" />

        <SpinnerUI className="my-2"/>

      </div>
      {/* dark components */}
      <div className="dark  flex flex-col flex-1 p-10 bg-gray-600 bg-opacity-1">
        <SwitchUI className="my-2" />

        <RadioButtonUI className="my-2" />

        <CheckBoxUI className="my-2" />

        <InputUI className="my-2" />

        <ButtonUI className="my-2" />

        <AlertUI className="my-2" />

        <ModalUI className="my-2" />

        <ToastUI className="my-2" />

        <SpinnerUI className="my-2"/>
        
      </div>

     

    </div>
  </>
}
 
export default UIComponents;