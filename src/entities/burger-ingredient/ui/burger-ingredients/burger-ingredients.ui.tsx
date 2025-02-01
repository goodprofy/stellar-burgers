import { noop } from 'lodash-es';

import {
  BurgerIngredient,
  fixtureBurgerIngredients,
} from '@/entities/burger-ingredient';
import { Tabs } from '@/shared/ui/tabs/ui/tabs.ui';

import { type MappingBurgerIngredients } from '../../model/burger-ingredient.model';

export function BurgerIngredients() {
  const groupedIngredients =
    fixtureBurgerIngredients.reduce<MappingBurgerIngredients>(
      (acc, burgerIngredient) => {
        const { type } = burgerIngredient;
        return {
          ...acc,
          [type]: [...acc[type], burgerIngredient],
        };
      },
      {
        bun: [],
        sauce: [],
        main: [],
      },
    );

  const tabs = [
    {
      id: 'bun',
      title: 'Булки',
      content: groupedIngredients.bun.map(BurgerIngredient),
    },
    {
      id: 'sauce',
      title: 'Соусы',
      content: groupedIngredients.sauce.map(BurgerIngredient),
    },
    {
      id: 'main',
      title: 'Начинки',
      content: groupedIngredients.main.map(BurgerIngredient),
    },
  ];

  return <Tabs tabs={tabs} onTabClick={noop} />;
}
