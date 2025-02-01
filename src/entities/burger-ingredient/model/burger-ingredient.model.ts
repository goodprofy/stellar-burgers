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
} & Pick<BurgerIngredientEntity, '_id' | 'name' | 'price' | 'image'>;

export type TabName = BurgerIngredientEntity['type'];

export type MappingBurgerIngredients = Record<TabName, BurgerIngredientProps[]>;

export const tabNameMapping: Record<TabName, string> = {
  bun: 'Булки',
  sauce: 'Соусы',
  main: 'Начинки',
};

export const tabNames: TabName[] = ['bun', 'sauce', 'main'];
