import { createContext, useState } from 'react';

export const DIDContext = createContext<{
  showMintModal: boolean;
  setShowMintModal: React.Dispatch<React.SetStateAction<boolean>>;
  closeMintModalHandler: () => void;
  showMintModalHandler: () => void;
}>({} as any);

export const BindDidContext = createContext<{
  showBindDidModal: boolean;
  setShowBindDidModal: React.Dispatch<React.SetStateAction<boolean>>;
  closeBindDidModalHandler: () => void;
  showBindDidModalHandler: () => void;
}>({} as any);

export const useDID = () => {
  const [showMintModal, setShowMintModal] = useState(false);
  function closeMintModalHandler() {
    setShowMintModal(false);
  }
  function showMintModalHandler() {
    setShowMintModal(true);
  }
  return {
    showMintModal,
    setShowMintModal,
    closeMintModalHandler,
    showMintModalHandler,
  };
};

export const useBindDid = () => {
  const [showBindDidModal, setShowBindDidModal] = useState(false);

  function closeBindDidModalHandler() {
    setShowBindDidModal(false);
  }

  function showBindDidModalHandler() {
    setShowBindDidModal(true);
  }
  return {
    showBindDidModal,
    setShowBindDidModal,
    closeBindDidModalHandler,
    showBindDidModalHandler,
  };
};
