import { useModal } from '@/widgets/modal';
import { Button } from '@/shared/ui';

import { OrderDetails } from '../../../entities/order';

export function ButtonPlaceOrder() {
  const { showModal } = useModal();

  const handleClick = () => {
    showModal({
      children: <OrderDetails number={'034536'} />,
    });
  };

  return (
    <Button htmlType="button" type="primary" size="large" onClick={handleClick}>
      Оформить заказ
    </Button>
  );
}
