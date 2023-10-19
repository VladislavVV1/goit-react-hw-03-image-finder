import Modal from 'react-modal';
import React from "react";

const customStyles = {
    overlay:{
        color: 'rgba(0, 0, 0, 0.8)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      maxWidth: 'calc(100vw - 48px)',
      maxHeight: 'calc(100vh - 24px)',
    },
  };  

  Modal.setAppElement('#root');
  
export const ModalImg = ({isModalOpen, closeModal, children}) => (
    <Modal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    style={customStyles}
  >
      {children}
  </Modal>
)