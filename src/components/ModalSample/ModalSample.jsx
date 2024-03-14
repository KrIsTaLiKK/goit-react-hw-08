import Modal from 'react-modal';
import css from './ModalSample.module.css';

Modal.setAppElement('#root');

const ModalSample = ({ children, isOpen, onClose }) => {
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
