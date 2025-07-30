import React from 'react';
import { createPortal } from 'react-dom';
import HireMe from '../Pages/HireMe.jsx';
import { useModal } from '../Context/ModalContext.jsx';

function ModalRoot() {
  const { isHireMeOpen, closeHireMeModal } = useModal();
  const modalRoot = document.getElementById('modal-root');

  return createPortal(
    <HireMe isOpen={isHireMeOpen} onClose={closeHireMeModal} />,
    modalRoot
  );
}

export default ModalRoot;