import React from "react";
import CheckBox from "./components/Checkbox";
import Dialog from "./components/Dialog";
import Radio from "./components/Radio";
import Switch, { Switch2 } from "./components/Switch";
import CustomTheme from "./examples/CustomTheme";

function LightComponents() {
  return (
    <div className="flex flex-col  flex-1  p-10 bg-white bg-opacity-10 mr-10">
      {/* light switch */}
      <div className="flex  flex-wrap gap-8">
        <div className="flex items-center">
          <Switch />
          <span className="ml-1">Switch</span>
        </div>
        <div className="flex items-center">
          <Switch2 />
          <span className="ml-1">Switch2</span>
        </div>
      </div>
      
      <div className="h-5" />
      
      <div className="flex items-center flex-wrap gap-8 py-2">
        <div className="flex items-center">
          <Radio name="radio"/>
          <span className="ml-1">Radio</span>
        </div>
        <div className="flex items-center">
          <Radio checked name="radio"/>
          <span className="ml-1">Radio checked</span>
        </div>


        <div className="h-3 w-[1px] bg-white"/>
        <div className="flex items-center">
          <Radio checked checkable name="checkable"/>
          <span className="ml-1">Radio </span>
        </div>
       

        <div className="flex items-center">
          <Radio checked checkable name="checkable"/>
          <span className="ml-1">Radio  checked</span>
        </div>
       
      </div>

      <div className="h-5" />
      
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

      <div className="h-5" />

      {/* light dialog  */}
      <div className="flex flex-wrap gap-8">
        <Dialog title="Light mode">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi
          maxime necessitatibus nisi libero.
        </Dialog>
      </div>
    </div>
  );
}

function DarkComponents() {
  return (
    <div className="dark  flex flex-col flex-1 p-10 bg-black bg-opacity-10">
      {/* dark switch */}
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
      <div className="h-5" />
      
      <div className="flex items-center flex-wrap gap-8 p-2 ">
        <div className="flex items-center">
          <Radio name="radio2"/>
          <span className="ml-1">Radio</span>
        </div>
        <div className="flex items-center">
          <Radio checked name="radio2"/>
          <span className="ml-1">Radio checked</span>
        </div>


        <div className="h-3 w-[1px] bg-white"/>
        <div className="flex items-center">
          <Radio checked checkable name="checkable2"/>
          <span className="ml-1">Radio</span>
        </div>
       

        <div className="flex items-center">
          <Radio checked checkable name="checkable2"/>
          <span className="ml-1">Radio  checked</span>
        </div>
       
      </div>

      <div className="h-5" />
      
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


      <div className="h-5" />
      
      {/* dark switch */}
      <div className="flex flex-wrap gap-8">
        <Dialog title="Dark mode" className="dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi
          maxime necessitatibus nisi libero.
        </Dialog>
      </div>
    </div>
  );
}

function App() {
  const [isDark, setIsDark] = React.useState<boolean>();

  function toggleTheme(value: boolean) {
    setIsDark(value);
  }

  return (
    <>
      <div
        className={`p-10 min-h-screen flex justify-center items-center bg-indigo-500 `}
      >
        {/* light components */}
        <LightComponents />
        {/* dark components */}
        <DarkComponents />
      </div>
    </>
  );
}

export default App;
