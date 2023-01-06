import React from "react";
import Dialog from "./components/Dialog";
import Switch, { Switch2 } from "./components/Switch";
import CustomTheme from "./examples/CustomTheme";

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
        <div className="flex flex-col  flex-1">
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

          <div className="h-3" />

          {/* light dialog  */}
          <div className="flex flex-wrap gap-8">
            <Dialog title="Light mode">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi
              maxime necessitatibus nisi libero.
            </Dialog>
          </div>
        </div>

        {/* dark components */}
        <div className="flex flex-col flex-1 ">
          {/* dark switch */}
          <div className="flex flex-wrap gap-8 dark">
            <div className="flex items-center">
              <Switch />
              <span className="ml-1">Switch</span>
            </div>
            <div className="flex items-center">
              <Switch2 />
              <span className="ml-1">Switch2</span>
            </div>
          </div>
          <div className="h-3" />
          {/* dark switch */}
          <div className="flex flex-wrap gap-8">
            <Dialog title="Dark mode" className="dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi
              maxime necessitatibus nisi libero.
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
