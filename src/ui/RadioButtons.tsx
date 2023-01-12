import { FC } from "react";
import { Radio } from "../components/Radio";
import { Tab } from "../components/Tab";
import { Heading } from "./Heading";

const RadioButtonUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
      <Heading>Radio buttons</Heading>
      <div className="  py-2">
        <Tab
          onTabItemChange={(tab: number) => {
            console.log(tab);
          }}
        >
          <div className="flex">
            <Tab.Header tab={0}> Preview </Tab.Header>
            <Tab.Header tab={1}> Code </Tab.Header>
          </div>
          <div className="flex">
            <Tab.Content tab={0}>
              <div className="flex items-center flex-wrap gap-8 p-2 ">
                <div className="flex items-center">
                  <Radio name="radio2" />
                  <span className="ml-2">Default</span>
                </div>
                <div className="flex items-center">
                  <Radio defaultChecked name="radio2" />
                  <span className="ml-2">Checked</span>
                </div>

                <div className="h-3 w-[1px] bg-white" />
                <div className="flex items-center">
                  <Radio disabled name="checkable2" />
                  <span className="ml-2">Disable</span>
                </div>
              </div>
            </Tab.Content>
            <Tab.Content tab={1}> Code will be here</Tab.Content>
          </div>
        </Tab>
      </div>
    </div>
  );
};

export default RadioButtonUI;
