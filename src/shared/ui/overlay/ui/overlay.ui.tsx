import { type PropsWithChildren, type SyntheticEvent } from 'react';

import { type OverlayProps } from '../model/overlay.types';

import styles from './overlay.module.css';

type Props = PropsWithChildren<OverlayProps>;

export function Overlay({ children, onClick }: Props) {
  const handleClick = ({ target }: SyntheticEvent<HTMLElement>) => {
    if (
      onClick &&
      target instanceof HTMLElement &&
      target.classList.contains(String(styles.overlay))
    ) {
      onClick();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleClick}>
      {children}
    </div>
  );
}
