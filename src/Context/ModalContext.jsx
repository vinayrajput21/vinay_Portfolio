import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

  const openHireMeModal = () => setIsHireMeOpen(true);
  const closeHireMeModal = () => setIsHireMeOpen(false);

  return (
    <ModalContext.Provider value={{ isHireMeOpen, openHireMeModal, closeHireMeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}