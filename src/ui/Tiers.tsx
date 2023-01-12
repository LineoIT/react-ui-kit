import { FC } from "react";
import { Tab } from "../components/Tab";
import { Heading } from "./Heading";

const TiersUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
        <Heading>Tiers components</Heading>
        <div className="flex items-center flex-wrap gap-2 py-2">
          <span className="absolute flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </div>

        <Heading>Tab components</Heading>
        <div className="  py-2">
          <Tab  onTabItemChange={(tab: number) => {
            console.log(tab)
          }}>
           <div className="flex">
              <Tab.Header tab={0}> Item 1 </Tab.Header>
              <Tab.Header tab={2}> Item 2 </Tab.Header>
              <Tab.Header tab={3}> Item 3 </Tab.Header>
           </div>
            <div className="flex">
               <Tab.Content tab={0}>
                Content 1
              </Tab.Content>
               <Tab.Content tab={2}>Content 2</Tab.Content>
               <Tab.Content tab={3}>Content 3</Tab.Content>
            </div>
          </Tab>
          </div>
    </div>
  );
};

export default TiersUI;
