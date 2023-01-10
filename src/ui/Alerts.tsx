import { FC } from "react";
import { Alert } from "../components/Alert";
import { Heading } from "./Heading";

const AlertUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
        <Heading>Alerts</Heading>
        <div className="flex">
        <div className="flex-1 flex flex-col justify-center gap-2 py-2">
          <Alert variant="error">
            <Alert.Header>Warning Title goes Here</Alert.Header>
            <Alert.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              et pharetra dui, sed varius tellus.
              <div>
                <a className="text-sm tracking-wide hover:underline" href="">
                  See Detail
                </a>
              </div>
            </Alert.Content>
          </Alert>
          <Alert variant="success" >
            <Alert.Header>Warning Title goes Here</Alert.Header>
            <Alert.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              et pharetra dui, sed varius tellus.
              <div>
                <a className="text-sm tracking-wide hover:underline" href="">
                  See Detail
                </a>
              </div>
            </Alert.Content>
          </Alert>
          <Alert variant="info">
            <Alert.Header>Warning Title goes Here</Alert.Header>
            <Alert.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              et pharetra dui, sed varius tellus.
              <div>
                <a className="text-sm tracking-wide hover:underline" href="">
                  See Detail
                </a>
              </div>
            </Alert.Content>
          </Alert>
          <Alert variant="warning">
            <Alert.Header>Warning Title goes Here</Alert.Header>
            <Alert.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              et pharetra dui, sed varius tellus.
              <div>
                <a className="text-sm tracking-wide hover:underline" href="">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              et pharetra dui, sed varius tellus.
              <div>
                <a className="text-sm tracking-wide hover:underline" href="">
                  See Detail
                </a>
              </div>
            </Alert.Content>
          </Alert>
          <Alert variant="success" icon closable>
            <Alert.Header>Warning Title goes Here</Alert.Header>
            <Alert.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              et pharetra dui, sed varius tellus.
              <div>
                <a className="text-sm tracking-wide hover:underline" href="">
                  See Detail
                </a>
              </div>
            </Alert.Content>
          </Alert>
          <Alert variant="info" icon closable>
            <Alert.Header>Warning Title goes Here</Alert.Header>
            <Alert.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              et pharetra dui, sed varius tellus.
              <div>
                <a className="text-sm tracking-wide hover:underline" href="">
                  See Detail
                </a>
              </div>
            </Alert.Content>
          </Alert>
          <Alert variant="warning" icon closable>
            <Alert.Header>Warning Title goes Here</Alert.Header>
            <Alert.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              et pharetra dui, sed varius tellus.
              <div>
                <a className="text-sm tracking-wide hover:underline" href="">
                  See Detail
                </a>
              </div>
            </Alert.Content>
          </Alert>
        </div>
        </div>
    </div>
  );
};

export default AlertUI;
