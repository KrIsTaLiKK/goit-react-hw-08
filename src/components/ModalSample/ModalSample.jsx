import Modal from 'react-modal';
import css from './ModalSample.module.css';
import { useEffect } from 'react';

Modal.setAppElement('#root');

const ModalSample = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    isOpen && document.body.classList.add(css.modalOpen);

    return () => {
      document.body.classList.remove(css.modalOpen);
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Contact Modal"
      className={`${css.content}`}
      overlayClassName={`${css.overlay}`}
    >
      {children}
    </Modal>
  );
};

export default ModalSample;
