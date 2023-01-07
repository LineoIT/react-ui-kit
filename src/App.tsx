import React from "react";
import { LinkButton } from "./components/Button";
import { Button } from "./components/Button/Button";
import CheckBox from "./components/Checkbox";
import Dialog from "./components/Dialog";
import { Modal } from "./components/Modal";
import Radio from "./components/Radio";
import SearchField from "./components/SearchField";
import SelectField from "./components/SelectField";
import Switch, { Switch2 } from "./components/Switch";
import TextField from "./components/TextField";

function LightComponents() {
  return (
    <>
      <div className="flex flex-col  flex-1  p-10 bg-white  mr-10">
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
            <Radio name="radio" />
            <span className="ml-1">Radio</span>
          </div>
          <div className="flex items-center">
            <Radio checked name="radio" />
            <span className="ml-1">Radio checked</span>
          </div>

          <div className="h-3 w-[1px] bg-white" />
          <div className="flex items-center">
            <Radio checked checkable name="checkable" />
            <span className="ml-1">Radio </span>
          </div>

          <div className="flex items-center">
            <Radio checked checkable name="checkable" />
            <span className="ml-1">Radio checked</span>
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

        <div className="h-5" />
        <div className="flex items-center flex-wrap gap-2 py-2">
          <Button>default</Button>
          <Button disabled>disabled</Button>
          <Button variant="outlined">outlined</Button>
          <Button variant="outlined" disabled>outlined disabled</Button>
        </div>
        <div className="h-5" />
        {/* light dialog  */}
        <div className="flex flex-wrap gap-8">
          <Dialog title="Light mode" textOk="Try now" textCancel="No thanks">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi
            maxime necessitatibus nisi libero.
          </Dialog>
        </div>
      </div>
    </>
  );
}

function DarkComponents() {
  return (
    <>
      <div className="dark  flex flex-col flex-1 p-10 bg-gray-600 bg-opacity-1">
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
            <Radio name="radio2" />
            <span className="ml-1">Radio</span>
          </div>
          <div className="flex items-center">
            <Radio checked name="radio2" />
            <span className="ml-1">Radio checked</span>
          </div>

          <div className="h-3 w-[1px] bg-white" />
          <div className="flex items-center">
            <Radio checked checkable name="checkable2" />
            <span className="ml-1">Radio</span>
          </div>

          <div className="flex items-center">
            <Radio checked checkable name="checkable2" />
            <span className="ml-1">Radio checked</span>
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

        <div className="h-5" />
        <div className="flex items-center flex-wrap gap-2 py-2">
          <Button>default</Button>
          <Button disabled>disabled</Button>
          <Button variant="outlined">outlined</Button>
          <Button variant="outlined" disabled>outlined disabled</Button>
        </div>
        <div className="h-5" />

        {/* dark switch */}
        <div className="flex flex-wrap gap-8">
          <Dialog
            title="Dark mode"
            className="dark"
            textOk="Try now"
            textCancel="No thanks"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi
            maxime necessitatibus nisi libero.
          </Dialog>
        </div>
      </div>
    </>
  );
}

function App() {
  const [openModal, setOpenModal] = React.useState<boolean>();

  return (
    <>
      <div
        className={`p-10 min-h-screen flex justify-center flex-wrap items-center bg-gray-700 `}
      >
        {/* light components */}
        <LightComponents />
        {/* dark components */}
        <DarkComponents />

        <div className="w-full flex p-10 bg-white">
          <Button onClick={() => setOpenModal(true)}>Open modal</Button>
        </div>
      </div>

      <Modal
        visible={openModal}
        setVisible={setOpenModal}
        dismissible
        name="asdlka"
      >
        <Dialog
          title="Dark mode"
          className="dark"
          textOk="Try now"
          textCancel="No thanks"
          onCancel={() => setOpenModal(false)}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi
          maxime necessitatibus nisi libero.
        </Dialog>
      </Modal>
    </>
  );
}

export default App;
