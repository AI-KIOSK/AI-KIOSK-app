import SignUpCompletedModal from '@components/modal/auth/SignUpCompletedModal';
import SignUpModal from '@components/modal/auth/SignUpModal';
import MenuSelectModal from '@components/modal/menu/MenuSelectModal';
import OrderConfirmModal from '@components/modal/order/OrderConfirmModal';
import { PaymentCompletedModal, PaymentModal } from '@components/modal/payment';
import EarningPointsModal from '@components/modal/point/EarningPointsModal';
import YoungmanMenuScrollList from '@components/youngman/YoungmanMenuScrollList';
import YoungmanOrderSection from '@components/youngman/YoungmanOrderSection';
import React from 'react';
import styled from 'styled-components/native';

function YoungmanHome() {

  return (
    <Container>
      <YoungmanMenuScrollList />
      <YoungmanOrderSection />
      <MenuSelectModal />
      <OrderConfirmModal />
      <EarningPointsModal />
      <PaymentModal />
      <PaymentCompletedModal />
      <SignUpModal />
      <SignUpCompletedModal />
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

export default YoungmanHome;
