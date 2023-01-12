import { FC } from "react";
import { Tab } from "../components/Tab";
import { Heading } from "./Heading";

const TiersUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
      <Heading>Tab components</Heading>
      <div className="  py-2">
        <Tab
          onTabItemChange={(tab: number) => {
            console.log(tab);
          }}
        >
          <div className="flex">
            <Tab.Header tab={0}> Item 1 </Tab.Header>
            <Tab.Header tab={2}> Item 2 </Tab.Header>
            <Tab.Header tab={3}> Item 3 </Tab.Header>
          </div>
          <div className="flex">
            <Tab.Content tab={0}>Content 1</Tab.Content>
            <Tab.Content tab={2}>Content 2</Tab.Content>
            <Tab.Content tab={3}>Content 3</Tab.Content>
          </div>
        </Tab>
      </div>
    </div>
  );
};

export default TiersUI;
