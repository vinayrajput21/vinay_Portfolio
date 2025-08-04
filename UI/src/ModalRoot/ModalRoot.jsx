import React from 'react';
import { createPortal } from 'react-dom';
import HireMe from '../Pages/HireMe.jsx';
import Info from '../Pages/Info.jsx';
import { useModal } from '../Context/ModalContext.jsx';

function ModalRoot() {
  const { isHireMeOpen, closeHireMeModal, isInfoOpen, closeInfoModal } = useModal();
  const modalRoot = document.getElementById('modal-root');

  return createPortal(
    <>
      <HireMe isOpen={isHireMeOpen} onClose={closeHireMeModal} />
      <Info isOpen={isInfoOpen} onClose={closeInfoModal} />
    </>,
    modalRoot
  );
}

export default ModalRoot;