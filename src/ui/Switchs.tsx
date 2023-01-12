import { FC, useState } from "react";
import { Switch, Switch2 } from "../components/Switch";
import { Tab } from "../components/Tab";
import { Heading } from "./Heading";

const SwitchUI: FC<{ className?: string }> = (prop) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={prop.className}>
      <Heading>Switch</Heading>

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
              <div className="flex flex-wrap gap-8  p-4">
                <div className="flex items-center">
                  <Switch value={isDark} onChange={setIsDark} />
                  <span className="ml-1">Switch</span>
                </div>
                <div className="flex items-center">
                  <Switch value={isDark} onChange={setIsDark} size="medium" />
                  <span className="ml-1">Switch medium</span>
                </div>
                <div className="flex items-center">
                  <Switch value={isDark} onChange={setIsDark} size="small" />
                  <span className="ml-1">Switch small</span>
                </div>
                <div className="flex items-center">
                  <Switch2 name="switch2" />
                  <span className="ml-1">Switch2</span>
                </div>
              </div>
            </Tab.Content>
            <Tab.Content tab={1}>code will be here</Tab.Content>
          </div>
        </Tab>
      </div>
    </div>
  );
};

export default SwitchUI;
