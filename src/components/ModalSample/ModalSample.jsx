import Modal from 'react-modal';
import css from './ModalSample.module.css';

Modal.setAppElement('#root');

const ModalSample = ({ children, isOpen, onClose }) => {
  if (isOpen) {
    document.body.classList.add(css.modalOpen);
  } else {
    document.body.classList.remove(css.modalOpen);
  }

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
