import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function ModalCustom({
  modalStatus = false,
  onCloseModal = () => {},
  children,
}) {
  return (
    <div>
      <Modal open={modalStatus} onClose={onCloseModal} center>
        {children}
      </Modal>
    </div>
  );
}

export default ModalCustom;
