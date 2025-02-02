import {
  type BurgerIngredientEntity,
  type BurgerIngredientProps,
} from '@/entities/burger-ingredient';

export type TabName = BurgerIngredientEntity['type'];

export type MappingBurgerIngredients = Record<TabName, BurgerIngredientProps[]>;

export const tabNameMapping: Record<TabName, string> = {
  bun: 'Булки',
  sauce: 'Соусы',
  main: 'Начинки',
};

export const tabNames: TabName[] = ['bun', 'sauce', 'main'];
