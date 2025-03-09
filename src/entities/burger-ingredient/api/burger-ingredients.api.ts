import { API_URL } from '@/shared/config/api';
import { logError } from '@/shared/lib/utils/log-error';

import { type BurgerIngredientEntity } from '../model/burger-ingredient.model';

const url = `${API_URL}/ingredients`;

type Failure = undefined;
type Response<T> = Promise<T | Failure>;

export const getIngredients = async (
  signal?: AbortSignal,
): Response<BurgerIngredientEntity[]> => {
  try {
    const response = await fetch(url, { signal });

    if (!response.ok) {
      throw new Error(`Ошибка загрузки: ${response.status}`);
    }

    const responseData = (await response.json()) as {
      data?: BurgerIngredientEntity[];
    };
    if (!Array.isArray(responseData.data)) {
      throw new Error('Invalid data format');
    }

    return responseData.data;
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      // eslint-disable-next-line no-console
      console.warn('Запрос отменен');
    } else {
      logError(error);
    }
    return undefined;
  }
};
