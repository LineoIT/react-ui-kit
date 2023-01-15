import { FC } from "react";
import { Spinner } from "../components/Spinner";
import { ArcSpinner, DotSpinner } from "../components/Spinner/";
import { Tab } from "../components/Tab";
import { Heading } from "./Heading";

export const SpinnerUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
      <Heading>Spinners</Heading>

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
              <div className="flex items-center flex-wrap gap-8 p-4">
                <Spinner />
                <ArcSpinner />
                <DotSpinner />
              </div>
            </Tab.Content>
            <Tab.Content tab={1}>Code will be here</Tab.Content>
          </div>
        </Tab>
      </div>
    </div>
  );
};
