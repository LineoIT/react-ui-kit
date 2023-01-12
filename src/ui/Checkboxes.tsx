import { FC } from "react";
import { CheckBox } from "../components/CheckBox/";
import { Tab } from "../components/Tab";
import { Heading } from "./Heading";

const CheckBoxUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
      <Heading>Checkboxes</Heading>
      <Tab
        onTabItemChange={(tab: number) => {
          console.log(tab);
        }}
      >
        <div className="flex mt-2">
          <Tab.Header tab={0}> Preview </Tab.Header>
          <Tab.Header tab={1}> Code </Tab.Header>
        </div>
        <div className="flex">
          <Tab.Content tab={0}>
            <div className="flex items-center flex-wrap gap-8 p-4">
              <div className="flex items-center">
                <CheckBox />
                <span className="ml-2">Default</span>
              </div>
              <div className="flex items-center">
                <CheckBox defaultChecked />
                <span className="ml-2">Checked</span>
              </div>
              <div className="flex items-center">
                <CheckBox disabled />
                <span className="ml-2">Disabled</span>
              </div>
            </div>
          </Tab.Content>
          <Tab.Content tab={1}>Code will be here</Tab.Content>
        </div>
      </Tab>
    </div>
  );
};

export default CheckBoxUI;
