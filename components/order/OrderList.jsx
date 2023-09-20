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
    console.log(itemId);
    setShoppingList([...updatedList]);
  };

  return (
    <Container>
      <OrderedList contentContainerStyle={{ flexGrow: 1 }}>
        {shoppingList.map((order) => (
          <OrderListItem
            key={order.id}
            name={order.name}
            price={order.price}
            onDelete={() => handleDeleteItem(order.id)}
          />
        ))}
      </OrderedList>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: ${hp(45)}px;

  padding: ${wp(3)}px;
`;

const OrderedList = styled.ScrollView``;
