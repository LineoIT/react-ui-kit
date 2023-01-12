import { FC } from "react";
import { Tab } from "../components/Tab";
import { Heading } from "./Heading";
import LoginPage from "./page/Login";

const PageLoginUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
      <Heading>Login UI</Heading>

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
              <LoginPage />
            </Tab.Content>
            <Tab.Content tab={1}>Code will be here</Tab.Content>
          </div>
        </Tab>
      </div>
    </div>
  );
};

export default PageLoginUI;
