import React, { FC } from "react";
import { Dialog } from "../components/Dialog";
import { Modal } from "../components/Modal";
import { Tab } from "../components/Tab";
import { Heading } from "./Heading";

const ModalUI: FC<{ className?: string }> = (prop) => {
  const [openModal, setOpenModal] = React.useState<boolean>();

  return (
    <>
      <div className={prop.className}>
        <Heading>Modals</Heading>

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
                <div className="flex items-center flex-wrap gap-8 p-2">
                  <Dialog
                    title="Dark mode"
                    textOk="Try now"
                    textCancel="No thanks"
                    onOk={() => setOpenModal(true)}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt modi maxime necessitatibus nisi libero.
                  </Dialog>
                </div>
              </Tab.Content>
              <Tab.Content tab={1}>Code will be here</Tab.Content>
            </div>
          </Tab>
        </div>
      </div>

      <Modal
        visible={openModal}
        setVisible={setOpenModal}
        dismissible
        name="asdlka"
      >
        <Dialog
          title="Dark mode"
          textOk="Try now"
          textCancel="No thanks"
          onCancel={() => setOpenModal(false)}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi
          maxime necessitatibus nisi libero.
        </Dialog>
      </Modal>
    </>
  );
};

export default ModalUI;
