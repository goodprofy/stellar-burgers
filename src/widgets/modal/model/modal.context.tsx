import { createContext, useContext } from 'react';

import { type ModalContextVariables } from './modal.types';

export const ModalContext = createContext<ModalContextVariables | undefined>(
  undefined,
);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
