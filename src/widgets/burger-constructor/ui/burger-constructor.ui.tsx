import clsx from 'clsx';

import { fixtureBurgerIngredients } from '@/entities/burger-ingredient';
import { ConstructorElement, CurrencyIcon, DragIcon } from '@/shared/ui';

import styles from './burger-constructor.module.css';

import { ButtonPlaceOrder } from '@/feature/button-place-order';

export function BurgerConstructor() {
  const bun = fixtureBurgerIngredients.find(({ type }) => type === 'bun');

  if (!bun) {
    return null;
  }

  const ingredients = fixtureBurgerIngredients.filter(
    ({ type }) => type !== 'bun',
  );

  const total =
    bun.price * 2 + ingredients.reduce((sum, { price }) => sum + price, 0);

  const { name, price, image } = bun;

  return (
    <div className="grid justify-items-end">
      <ConstructorElement
        type="top"
        isLocked={true}
        text={`${name} (верх)`}
        price={price}
        thumbnail={image}
        extraClass="mb-4 mr-4"
      />
      <ul
        className={clsx(
          styles.scroll,
          'scroll flex flex-col gap-4 list-none p-0 m-0',
        )}
      >
        {ingredients.map(({ _id, name, price, image }) => {
          return (
            <li key={_id} className="flex items-center gap-4 pr-1">
              <DragIcon type="primary" />
              <ConstructorElement text={name} price={price} thumbnail={image} />
            </li>
          );
        })}
      </ul>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={`${name} (низ)`}
        price={price}
        thumbnail={image}
        extraClass="mt-4 mr-4"
      />
      <div className="flex justify-end pr-4 pt-10">
        <div className="flex items-center">
          <p className="text text_type_digits-medium">{total}</p>
          <CurrencyIcon
            className={clsx(styles.currencyIcon, 'pl-2')}
            type="primary"
          />
          <div className="pl-10">
            <ButtonPlaceOrder />
          </div>
        </div>
      </div>
    </div>
  );
}
