import { useEffect } from 'react';
import './Modal.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ showModal, onClose, children }) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, showModal]);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose(false);
    }
  };
  return createPortal(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">{children}</div>
    </div>,
    modalRoot
  );
};
