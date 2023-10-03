import { OrderListItem } from '@components/order';
import { useOrder } from '@hooks/useOrder';
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRecoilState } from 'recoil';
import { orderRequest } from 'recoil/order/atom';
import { styled } from 'styled-components/native';

export default function OrderList() {
  const { deleteMenu } = useOrder();
  const [shoppingList, setShoppingList] = useRecoilState(orderRequest);

  return (
    <Container>
      <OrderedList>
        {shoppingList.orders.map((order) => (
          <OrderListItem key={order.id} item={order} onDelete={() => deleteMenu(order.id)} />
        ))}
      </OrderedList>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: ${hp(40)}px;
  padding: ${wp(3)}px;
  flex-grow: 1;
  border: 3px #ebd3b5;
`;

const OrderedList = styled.ScrollView`
  flex: 1;
`;
