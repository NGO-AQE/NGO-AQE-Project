import { ReactNode, FC } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    console.error(
      "The element with id 'modal-root' was not found in the document.",
    );
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
