import clsx from 'clsx';

import { AppHeader } from '@/widgets/app-header';
import { BurgerConstructor } from '@/widgets/burger-constructor';
import { BurgerIngredients } from '@/widgets/burger-ingredients';
import { useIngredients } from '@/entities/burger-ingredient';
import { Container } from '@/shared/ui/container';

import styles from './index-page.module.css';

export function IndexPage() {
  const { ingredients, isLoading, error } = useIngredients();

  return (
    <>
      <AppHeader />
      <Container>
        <h1 className={clsx('text text_type_main-large pt-10 pb-5')}>
          Соберите бургер
        </h1>
        {!!isLoading && (
          <p className="text text_type_main-default">
            Загрузка ингредиентов...
          </p>
        )}
        {!!error && (
          <p className="text text_type_main-default">Ошибка: {error}</p>
        )}

        {!isLoading && !error && (
          <div className={clsx(styles.columns)}>
            <section>
              <BurgerIngredients ingredients={ingredients} />
            </section>
            <section>
              <BurgerConstructor ingredients={ingredients} />
            </section>
          </div>
        )}
      </Container>
    </>
  );
}
