import clsx from 'clsx';

import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@/shared/ui';
import { NavLink } from '@/shared/ui/nav-link';

import styles from './app-header.module.css';

export function AppHeader() {
  return (
    <header className={clsx(styles.header, 'pt-4 pb-4')}>
      <nav className={styles.nav}>
        <div className={styles.menu}>
          <NavLink text="Конструктор" url="/" isActive>
            <BurgerIcon type="primary" />
          </NavLink>
          <NavLink text="Лента заказов" url="/feed">
            <ListIcon type="primary" />
          </NavLink>
        </div>
        <div className={styles.logo}>
          <a href="/" title="Бургер">
            <Logo />
          </a>
        </div>
        <div className={styles.profile}>
          <NavLink text="Личный кабинет" url="/profile">
            <ProfileIcon type="primary" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
