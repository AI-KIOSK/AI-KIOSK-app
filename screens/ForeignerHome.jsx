import ForeignerMenuScrollList from '@components/foreigner/ForeignerMenuScrollList';
import ForeignerOrderSection from '@components/foreigner/ForeignerOrderSection';
import SignUpCompletedModal from '@components/modal/auth/SignUpCompletedModal';
import SignUpModal from '@components/modal/auth/SignUpModal';
import MenuSelectModal from '@components/modal/menu/MenuSelectModal';
import { OrderConfirmModal } from '@components/modal/order';
import { PaymentCompletedModal, PaymentModal } from '@components/modal/payment';
import EarningPointsModal from '@components/modal/point/EarningPointsModal';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { onForeigner } from 'recoil/common/Foreigner';
import styled from 'styled-components/native';

function ForeignerHome(props) {
  const [Foreigner, setForeigner] = useRecoilState(onForeigner);

  useFocusEffect(
    useCallback(() => {
      setForeigner(1);
    }, [setForeigner]),
  );

  return (
    <Container>
      <ForeignerMenuScrollList />
      <ForeignerOrderSection />
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

export default ForeignerHome;
