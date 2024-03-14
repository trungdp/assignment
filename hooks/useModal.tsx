"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";

interface ModalState {
  open: boolean;
  setOpen: any;
  toggle: any;
}

const initialState: ModalState = {
  open: false,
  setOpen: () => {},
  toggle: () => {},
};

const ModalContext = createContext<ModalState>(initialState);

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((open) => !open);
  };

  return (
    <ModalContext.Provider value={{ open, toggle, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default useModal;
