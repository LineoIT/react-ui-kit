import { FC } from "react";
import { RippleIndicator } from "../components/Indicator";
import { Tab } from "../components/Tab";
import { Heading } from "./Heading";

const TiersUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
      <Heading>Tiers components</Heading>

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
              <div className="flex items-center flex-wrap gap-2 p-4">
               <div className="flex flex-col justify-center items-center">

                  <div className="relative m-5">
                     <RippleIndicator className="absolute flex h-3 w-3"/>
                  </div>
                  <span>Tracker indicator</span>
               </div>
              </div>
            </Tab.Content>
            <Tab.Content tab={1}>Code will be here</Tab.Content>
          </div>
        </Tab>
      </div>
    </div>
  );
};

export default TiersUI;
