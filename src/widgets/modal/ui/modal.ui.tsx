import { createPortal } from 'react-dom';
import clsx from 'clsx';

import { useKeydown } from '@/shared/lib/hooks';
import { CloseIcon } from '@/shared/ui';
import { Overlay } from '@/shared/ui/overlay';

import { type ModalProps } from '../model/modal.types';

import styles from './modal.module.css';

const containerElement = document.getElementById('modals')!;

export function Modal({
  children,
  title,
  onCloseClick,
  onEscapeKeydown,
  onOverlayClick,
}: ModalProps) {
  const handleOverlayClick = () => {
    onOverlayClick();
  };

  const handleCloseClick = () => {
    onCloseClick();
  };

  useKeydown((key: KeyboardEvent['key']) => {
    if (key === 'Escape') {
      onEscapeKeydown();
    }
  });

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <div className={clsx(styles.modal, 'p-10 pb-15')}>
        <div className={clsx(styles.header, 'flex items-center gap-4')}>
          <div
            className={clsx('flex-1', 'text text_type_main-large text-left')}
          >
            {title}
          </div>
          <CloseIcon
            className={styles.close}
            type="primary"
            onClick={handleCloseClick}
          />
        </div>
        {children}
      </div>
    </Overlay>,
    containerElement,
  );
}
