import { type PropsWithChildren } from 'react';

import styles from './container.module.css';

export function Container({ children }: PropsWithChildren) {
  return <main className={styles.container}>{children}</main>;
}
