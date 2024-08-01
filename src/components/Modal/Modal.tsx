import { FC } from 'react';
import ReactDOM from 'react-dom';
import './Modal.module.scss';

interface ModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  content: string;
}

const Modal: FC<ModalProps> = ({ modalIsOpen, closeModal, content }) => {
  return ReactDOM.createPortal(
    modalIsOpen ? (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          {content}
        </div>
      </div>
    ) : null,
    document.body,
  );
};

export default Modal;
