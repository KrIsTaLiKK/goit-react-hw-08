import Modal from 'react-modal';
import { useEffect } from 'react';

import css from './ModalSample.module.css';

Modal.setAppElement('#root');

const ModalSample = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    isOpen
      ? document.body.classList.add(`${css.modalOpen}`)
      : document.body.classList.remove(`${css.modalOpen}`);
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Change Contact Modal"
      className={`${css.content}`}
      overlayClassName={`${css.overlay}`}
    >
      {children}
    </Modal>
  );
};

export default ModalSample;
