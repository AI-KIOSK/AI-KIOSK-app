import React, { useMemo } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

import OrderListItem from './OrderListItem';

export default function OrderList() {
  const orderedList = useMemo(
    () => [
      {
        id: 1,
        img: require('@assets/menu/americano.jpeg'),
        menu: '아메리카노',
        quantity: 3,
        price: 3000,
      },
      {
        id: 2,
        img: require('@assets/menu/cafelatte.jpeg'),
        menu: '카페라떼',
        quantity: 2,
        price: 5000,
      },
      {
        id: 3,
        img: require('@assets/menu/einspanner.jpeg'),
        menu: '아인슈페너',
        quantity: 5,
        price: 5000,
      },
    ],
    [],
  );
  return (
    <Container>
      <OrderedList contentContainerStyle={{ flexGrow: 1 }}>
        {orderedList.map((order) => (
          <OrderListItem key={order.id} order={order} />
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
