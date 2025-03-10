import clsx from 'clsx';

import { Counter, CurrencyIcon } from '@/shared/ui';

import { type BurgerIngredientProps } from '../../model/burger-ingredient.model';

import styles from './burger-ingredient.module.css';

export function BurgerIngredient({
  count,
  name,
  price,
  image,
  _id,
  onClick,
}: BurgerIngredientProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(_id);
    }
  };

  return (
    <div
      key={_id}
      className={clsx(styles.container, 'pb-8')}
      onClick={handleClick}
    >
      {count && <Counter count={count} />}
      <img className={styles.img} src={image} alt={name} loading="lazy" />
      <div className={clsx(styles.cost, 'mt-2 mb-2')}>
        <p className="mr-2 text text_type_digits-default">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={clsx(styles.text, 'text text_type_main-default')}>{name}</p>
    </div>
  );
}
