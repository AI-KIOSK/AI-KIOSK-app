import MenuScrollList from '@components/home/MenuScrollList';
import OrderSection from '@components/home/OrderSection';
import MenuSelectModal from '@components/modal/menu/MenuSelectModal';
import { OrderCompleteModal } from '@components/modal/order';
import OrderConfirmModal from '@components/modal/order/OrderConfirmModal';
import React from 'react';
import styled from 'styled-components/native';

function Home(props) {
  return (
    <Container>
      <MenuScrollList />
      <OrderSection />

      <MenuSelectModal />
      <OrderConfirmModal />
      <OrderCompleteModal />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;

  justify-content: space-around;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Home;
