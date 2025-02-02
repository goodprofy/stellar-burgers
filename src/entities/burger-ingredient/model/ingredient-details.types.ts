import { type BurgerIngredientEntity } from './burger-ingredient.model';

export type IngredientDetailsProps = Pick<
  BurgerIngredientEntity,
  'name' | 'image_large' | 'calories' | 'proteins' | 'fat' | 'carbohydrates'
>;
