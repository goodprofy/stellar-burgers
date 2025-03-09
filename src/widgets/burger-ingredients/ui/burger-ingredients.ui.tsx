import { noop } from 'lodash-es';

import { useModal } from '@/widgets/modal';
import {
  BurgerIngredient,
  type BurgerIngredientEntity,
  IngredientDetails,
} from '@/entities/burger-ingredient';
import { type BurgerIngredientProps } from '@/entities/burger-ingredient';
import { Tabs } from '@/shared/ui/tabs/ui/tabs.ui';

import { type MappingBurgerIngredients } from '../model/burger-ingredients.types';

interface Props {
  ingredients: BurgerIngredientEntity[];
}

export function BurgerIngredients({ ingredients }: Props) {
  const { showModal } = useModal();

  const handleIngredientClick = (
    burgerIngredientId: BurgerIngredientProps['_id'],
  ) => {
    const foundIngredient = ingredients.find(
      ({ _id }) => _id === burgerIngredientId,
    );

    if (foundIngredient) {
      showModal({
        children: <IngredientDetails {...foundIngredient} />,
        title: 'Детали ингредиента',
      });
    }
  };

  const groupedIngredients = ingredients.reduce<MappingBurgerIngredients>(
    (acc, burgerIngredient) => {
      const { type } = burgerIngredient;
      return {
        ...acc,
        [type]: [
          ...acc[type],
          {
            ...burgerIngredient,
            onClick: handleIngredientClick,
          },
        ],
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
