import clsx from 'clsx';

import { AppHeader } from '@/widgets/app-header';
import { BurgerConstructor } from '@/widgets/burger-constructor';
import { BurgerIngredients } from '@/widgets/burger-ingredients';
import { Container } from '@/shared/ui/container';

import styles from './index-page.module.css';

export function IndexPage() {
  return (
    <>
      <AppHeader />
      <Container>
        <h1 className={clsx('text text_type_main-large pt-10 pb-5')}>
          Соберите бургер
        </h1>
        <div className={clsx(styles.columns)}>
          <section>
            <BurgerIngredients />
          </section>
          <section>
            <BurgerConstructor />
          </section>
        </div>
      </Container>
    </>
  );
}
