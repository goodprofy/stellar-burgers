export interface BurgerIngredientEntity {
  _id: string;
  name: string;
  type: 'bun' | 'main' | 'sauce';
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: `https://${string}.png`;
  image_mobile: `https://${string}.png`;
  image_large: `https://${string}.png`;
  __v: 0;
}

export type BurgerIngredientProps = {
  count?: number;
  onClick?: (ingredientId: BurgerIngredientProps['_id']) => void;
} & Pick<BurgerIngredientEntity, '_id' | 'name' | 'price' | 'image'>;
