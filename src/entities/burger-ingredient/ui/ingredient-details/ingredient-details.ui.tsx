import clsx from 'clsx';

import { type IngredientDetailsProps } from '../../model/ingredient-details.types';

import styles from './ingredient-details.module.css';

export function IngredientDetails({
  calories,
  carbohydrates,
  fat,
  image_large,
  name,
  proteins,
}: IngredientDetailsProps) {
  const nutritionalValues = [
    { label: 'Калории, ккал', value: calories },
    { label: 'Белки, г', value: proteins },
    { label: 'Жиры, г', value: fat },
    { label: 'Углеводы, г', value: carbohydrates },
  ];

  const renderNutritionalValues = ({
    label,
    value,
  }: (typeof nutritionalValues)[number]) => (
    <li key={label} className={styles.nutritionalValue}>
      <p className={'text mb-2'}>{label}</p>
      <p className="text text_type_digits-default">{value}</p>
    </li>
  );

  return (
    <div className={styles.ingredientDetails}>
      <img
        className={'mt-4 mb-4'}
        alt="изображение ингредиента"
        loading="lazy"
        src={image_large}
      />
      <h3 className="text text_type_main-medium mb-8">{name}</h3>
      <ul
        className={clsx(
          styles.nutritionalValues,
          'text_type_main-default gap-5',
        )}
      >
        {nutritionalValues.map(renderNutritionalValues)}
      </ul>
    </div>
  );
}
