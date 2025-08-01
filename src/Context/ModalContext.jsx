import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [hasInfoBeenDismissed, setHasInfoBeenDismissed] = useState(false);

  const openHireMeModal = () => setIsHireMeOpen(true);
  const closeHireMeModal = () => setIsHireMeOpen(false);
  
  const openInfoModal = () => {
    if (!hasInfoBeenDismissed) {
      setIsInfoOpen(true);
    }
  };
  const closeInfoModal = () => {
    setIsInfoOpen(false);
    setHasInfoBeenDismissed(true);
  };

  return (
    <ModalContext.Provider value={{ 
      isHireMeOpen, 
      openHireMeModal, 
      closeHireMeModal,
      isInfoOpen,
      openInfoModal,
      closeInfoModal,
      hasInfoBeenDismissed
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}