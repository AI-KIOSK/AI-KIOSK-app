import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRecoilState } from 'recoil';
import { ShoppingList } from 'recoil/menu/ShoppingList';
import { styled } from 'styled-components/native';

import OrderListItem from './OrderListItem';

export default function OrderList() {
  const [shoppingList, setShoppingList] = useRecoilState(ShoppingList);

  const handleDeleteItem = (itemId) => {
    const updatedList = shoppingList.filter((item) => item.id !== itemId);
    setShoppingList([...updatedList]);
  };

  return (
    <Container>
      <OrderedList>
        {shoppingList.map((order) => (
          <OrderListItem key={order.id} item={order} onDelete={() => handleDeleteItem(order.id)} />
        ))}
      </OrderedList>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: ${hp(50)}px;
  padding: ${wp(3)}px;
  flex-grow: 1;
  border: 3px #ebd3b5;
`;

const OrderedList = styled.ScrollView`
  flex: 1;
`;
