import { type PropsWithChildren, useState } from 'react';

import { Modal } from '../ui/modal.ui';

import { ModalContext } from './modal.context';
import { type ShowModalParams } from './modal.types';

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalData, setModalData] = useState<ShowModalParams>();

  const showModal = (props: ShowModalParams) => {
    setModalData(props);
  };

  const hideModal = () => {
    setModalData(undefined);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {modalData ? (
        <Modal
          title={modalData.title}
          onCloseClick={hideModal}
          onEscapeKeydown={hideModal}
          onOverlayClick={hideModal}
        >
          {modalData.children}
        </Modal>
      ) : null}
    </ModalContext.Provider>
  );
};
