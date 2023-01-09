import React, { FC } from "react";
import {Dialog} from "../components/Dialog";
import { Modal } from "../components/Modal";

const ModalUI : FC<{className?:string}> = (prop) => {
    const [openModal, setOpenModal] = React.useState<boolean>();

    return <>
      <div className={prop.className}> <fieldset className="border p-2">
        <legend className="p-2  dark:text-gray-400">Modals</legend>
        <div className="flex items-center flex-wrap gap-8 py-2">
        <Dialog
            title="Dark mode"
            textOk="Try now"
            textCancel="No thanks"
            onOk={() => setOpenModal(true)}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi
            maxime necessitatibus nisi libero.
          </Dialog>
        </div>
  </fieldset>
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
}
 
export default ModalUI;