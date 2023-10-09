import { ModalActionButton } from '@components/common/btn';
import { OrderList } from '@components/menu/normal';
import { useModal } from '@hooks/common';
import { useOrder } from '@hooks/useOrder';
import React from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import ModalTemplate from 'styles/ModalTemplate';

export default function OrderConfirmModal() {
  const { modal, hideModal: hideOrderConfirmModal } = useModal('orderConfirmModal');
  const { openModal: openEarningPointsModal } = useModal('earningpointsModal');
  const { openModal: openPaymentModal } = useModal('paymentModal');

  const { request } = useOrder();

  const onPressOrder = () => {
    hideOrderConfirmModal();
    openPaymentModal();
  };

  const onPressPoint = () => {
    hideOrderConfirmModal();
    openEarningPointsModal();
  };
  return (
    <Modal visible={modal.visible} animationType={'slide'} transparent={true} onRequestClose={hideOrderConfirmModal}>
      <ModalTemplate>
        <Container>
          <Title>주문 목록</Title>
          <OrderList />

          <OrderResultText>총 수량 {request.quantity}개</OrderResultText>
          <OrderResultText>총 결제 금액 {request.totalPrice.toLocaleString()}원</OrderResultText>

          <ButtonSection>
            <ModalActionButton
              title={'취소'}
              width={wp(25)}
              height={hp(6)}
              color={'cancel'}
              onPress={hideOrderConfirmModal}
            />
            <ModalActionButton
              title={'적립하기'}
              width={wp(25)}
              height={hp(6)}
              color={'normal'}
              onPress={onPressPoint}
            />
            <ModalActionButton
              title={'결제하기'}
              width={wp(70)}
              height={hp(6)}
              color={'cancel'}
              onPress={onPressOrder}
            />
          </ButtonSection>
        </Container>
      </ModalTemplate>
    </Modal>
  );
}

const Container = styled.View`
  flex: 1;

  flex-direction: row;
  flex-wrap: wrap;

  align-content: space-around;
  justify-content: space-around;

  padding: ${wp(4)}px;
`;

const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: 700;

  width: 100%;
`;

const OrderResultText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 700;
`;

const ButtonSection = styled.View`
  width: ${wp(70)}px;

  justify-content: space-between;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;
