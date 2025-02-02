import { type FC } from 'react';

import { ModalProvider } from '@/widgets/modal/model/modal.provider';

export const withModalProvider = (Component: FC) => {
  const WrappedComponent = () => (
    <ModalProvider>
      <Component />
    </ModalProvider>
  );

  WrappedComponent.displayName = `withModalProvider(${Component.displayName})`;

  return WrappedComponent;
};
