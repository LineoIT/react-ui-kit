import { FC } from "react";
import { Button } from "../components/Button/Button";
import { Tab } from "../components/Tab";
import { Heading } from "./Heading";

const ButtonUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
      <Heading>Buttons</Heading>

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
                <Button>default</Button>
                <Button disabled>disabled</Button>
                <Button variant="outlined">outlined</Button>
                <Button variant="outlined" disabled>
                  outlined disabled
                </Button>
              </div>
            </Tab.Content>
            <Tab.Content tab={1}>Code will be here</Tab.Content>
          </div>
        </Tab>
      </div>
    </div>
  );
};

export default ButtonUI;
