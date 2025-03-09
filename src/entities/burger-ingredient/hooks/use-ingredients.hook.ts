import { useEffect, useState } from 'react';

import { getIngredients } from '../api/burger-ingredients.api';
import { type BurgerIngredientEntity } from '../model/burger-ingredient.model';

const cache = {};

export const useIngredients = () => {
  const hasCache = !!Object.keys(cache).length;
  const [ingredients, setIngredients] = useState<BurgerIngredientEntity[]>([]);
  const [isLoading, setIsLoading] = useState(!hasCache);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      try {
        const data = await getIngredients(signal);
        if (data) {
          setIngredients(data);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Неизвестная ошибка');
      } finally {
        setIsLoading(false);
      }
    };

    void fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return { ingredients, isLoading, error };
};
