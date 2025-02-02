import doneSvgSource from '@/shared/assets/images/done.svg';

import { type OrderDetailsProps } from '../model/order.types';

import styles from './order-details.module.css';

export function OrderDetails({ number }: OrderDetailsProps) {
  return (
    <div className="pb-20">
      <h2 className={`${styles.title} text text_type_digits-large mt-2 mb-8`}>
        {number}
      </h2>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <img
        className={'pt-15 pb-15'}
        src={doneSvgSource}
        alt="изображение статуса заказа."
      />
      <p className="text text_type_main-default mb-1">
        Ваш заказ начали готовить
      </p>
      <p className={`${styles.text} text text_type_main-default`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}
