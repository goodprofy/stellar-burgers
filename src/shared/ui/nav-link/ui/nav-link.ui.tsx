import { type PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './nav-link.module.css';

interface Props {
  isActive?: boolean;
  text?: string;
  url: string;
}

export function NavLink({
  children,
  text,
  url,
  isActive,
}: PropsWithChildren<Props>) {
  return (
    <a
      className={clsx(
        `text text_type_main-default pt-4 pb-4 pl-5 pr-5`,
        styles.link,
        isActive && styles.isActive,
      )}
      href={url}
    >
      {children}
      {!!text && <span className="pl-2">{text}</span>}
    </a>
  );
}
