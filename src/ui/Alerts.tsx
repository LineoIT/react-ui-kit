import { FC } from "react";
import { Alert } from "../components/Alert";
import { Tab } from "../components/Tab";
import { Code } from "./Code";
import { Heading } from "./Heading";
import {  alertCodeSnipet } from "./snipets";

const AlertUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
      <Heading>Alerts</Heading>

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
                <div className="flex-1 flex flex-col justify-center gap-2 py-2">
                  <Alert variant="error">
                    <Alert.Header>Warning Title goes Here</Alert.Header>
                    <Alert.Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent et pharetra dui, sed varius tellus.
                      <div>
                        <a
                          className="text-sm tracking-wide hover:underline"
                          href=""
                        >
                          See Detail
                        </a>
                      </div>
                    </Alert.Content>
                  </Alert>
                  <Alert variant="success">
                    <Alert.Header>Warning Title goes Here</Alert.Header>
                    <Alert.Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent et pharetra dui, sed varius tellus.
                      <div>
                        <a
                          className="text-sm tracking-wide hover:underline"
                          href=""
                        >
                          See Detail
                        </a>
                      </div>
                    </Alert.Content>
                  </Alert>
                  <Alert variant="info">
                    <Alert.Header>Warning Title goes Here</Alert.Header>
                    <Alert.Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent et pharetra dui, sed varius tellus.
                      <div>
                        <a
                          className="text-sm tracking-wide hover:underline"
                          href=""
                        >
                          See Detail
                        </a>
                      </div>
                    </Alert.Content>
                  </Alert>
                  <Alert variant="warning">
                    <Alert.Header>Warning Title goes Here</Alert.Header>
                    <Alert.Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent et pharetra dui, sed varius tellus.
                      <div>
                        <a
                          className="text-sm tracking-wide hover:underline"
                          href=""
                        >
                          See Detail
                        </a>
                      </div>
                    </Alert.Content>
                  </Alert>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-2 py-2">
                  <Alert variant="error" icon closable>
                    <Alert.Header>Warning Title goes Here</Alert.Header>
                    <Alert.Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent et pharetra dui, sed varius tellus.
                      <div>
                        <a
                          className="text-sm tracking-wide hover:underline"
                          href=""
                        >
                          See Detail
                        </a>
                      </div>
                    </Alert.Content>
                  </Alert>
                  <Alert variant="success" icon closable>
                    <Alert.Header>Warning Title goes Here</Alert.Header>
                    <Alert.Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent et pharetra dui, sed varius tellus.
                      <div>
                        <a
                          className="text-sm tracking-wide hover:underline"
                          href=""
                        >
                          See Detail
                        </a>
                      </div>
                    </Alert.Content>
                  </Alert>
                  <Alert variant="info" icon closable>
                    <Alert.Header>Warning Title goes Here</Alert.Header>
                    <Alert.Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent et pharetra dui, sed varius tellus.
                      <div>
                        <a
                          className="text-sm tracking-wide hover:underline"
                          href=""
                        >
                          See Detail
                        </a>
                      </div>
                    </Alert.Content>
                  </Alert>
                  <Alert variant="warning" icon closable>
                    <Alert.Header>Warning Title goes Here</Alert.Header>
                    <Alert.Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent et pharetra dui, sed varius tellus.
                      <div>
                        <a
                          className="text-sm tracking-wide hover:underline"
                          href=""
                        >
                          See Detail
                        </a>
                      </div>
                    </Alert.Content>
                  </Alert>
                </div>
              </div>
            </Tab.Content>
            <Tab.Content tab={1}>
              <Code content={alertCodeSnipet} />;
            </Tab.Content>
          </div>
        </Tab>
      </div>
    </div>
  );
};

export default AlertUI;
