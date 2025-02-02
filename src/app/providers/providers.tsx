import { type FC } from 'react';

import { withModalProvider } from './modal.provider';

export const withProviders = (Component: FC) => withModalProvider(Component);
