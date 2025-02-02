import { type PropsWithChildren } from 'react';

export type ModalProps = PropsWithChildren<{
  title?: string;
  onCloseClick: () => void;
  onEscapeKeydown: () => void;
  onOverlayClick: () => void;
}>;

export type ShowModalParams = Pick<ModalProps, 'title' | 'children'>;

export interface ModalContextVariables {
  showModal: ({ title, children }: ShowModalParams) => void;
  hideModal: () => void;
}
