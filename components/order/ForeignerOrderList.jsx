import React, { useMemo } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

import ForeignerOrderListItem from './ForeignerOrderListItem';

export default function ForeignerOrderList() {
  const foreignerOrderedList = useMemo(
    () => [
      {
        id: 1,
        img: require('@assets/menu/americano.jpeg'),
        menu: 'americano',
        quantity: 3,
        price: 3000,
      },
      {
        id: 2,
        img: require('@assets/menu/cafelatte.jpeg'),
        menu: 'cafelatte',
        quantity: 2,
        price: 5000,
      },
      {
        id: 3,
        img: require('@assets/menu/einspanner.jpeg'),
        menu: 'einspanner',
        quantity: 5,
        price: 5000,
      },
    ],
    [],
  );
  return (
    <Container>
      <OrderedList contentContainerStyle={{ flexGrow: 1 }}>
        {foreignerOrderedList.map((order) => (
          <ForeignerOrderListItem key={order.id} order={order} />
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
