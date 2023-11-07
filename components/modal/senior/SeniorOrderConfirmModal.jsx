import { ModalActionButton } from '@components/common/btn';
import { OrderList } from '@components/order';
import { useModal } from '@hooks/common';
import useAudio from '@hooks/useAudio';
import React, { useEffect } from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRecoilState, useRecoilValue } from 'recoil';
import { phoneNumber } from 'recoil/auth/atom';
import { FinalOrder, ShoppingList } from 'recoil/menu/ShoppingList';
import { styled } from 'styled-components/native';
import SeniorModalTemplate from 'styles/SeniorModalTemplate';

export default function SeniorOrderConfirmModal() {
  const { modal, hideModal: hideOrderConfirmModal } = useModal('orderConfirmModal');
  const { openModal: openEarningPointsModal } = useModal('seniorEarningPointsModal');
  const { openModal: openPaymentModal } = useModal('paymentModal');
  const shoppingList = useRecoilValue(ShoppingList);
  const totalPrice = shoppingList.reduce((accumulator, item) => accumulator + item.price * item.orderQuantity, 0);
  const totalOrder = shoppingList.reduce((accumulator, item) => accumulator + item.orderQuantity, 0);
  const [fianlOrder, setFinalOrder] = useRecoilState(FinalOrder);
  const phone = useRecoilValue(phoneNumber);

  const { play, isLoading } = useAudio(require('@assets/audio/orderlist.mp3'));

  useEffect(() => {
    if (modal.visible && isLoading) play();
  }, [isLoading, modal.visible, play]);

  function createRequestBody(phoneNumber, quantity, totalPrice, orderType, orders) {
    const requestBody = {
      phoneNumber,
      quantity,
      totalPrice,
      orderType,
      orders,
    };
    return requestBody;
  }

  const onPressOrder = () => {
    const requestBody = createRequestBody(phone, totalOrder, totalPrice, 'CARD', shoppingList);
    setFinalOrder(requestBody);
    hideOrderConfirmModal();
    openPaymentModal();
  };

  const onPressPoint = () => {
    const requestBody = createRequestBody(phone, totalOrder, totalPrice, 'CARD', shoppingList);
    setFinalOrder(requestBody);
    hideOrderConfirmModal();
    openEarningPointsModal();
  };
  return (
    <Modal visible={modal.visible} animationType={'slide'} transparent={true} onRequestClose={hideOrderConfirmModal}>
      <SeniorModalTemplate>
        <Container>
          <Title>주문 목록</Title>
          <OrderList />
          <OrderResultText>총 수량 {totalOrder}개</OrderResultText>
          <OrderResultText>총 결제 금액 {totalPrice}원</OrderResultText>
          <ButtonSection>
            <ModalActionButton
              title={'취소'}
              width={wp(30)}
              height={hp(8)}
              color={'seniorNormal'}
              onPress={hideOrderConfirmModal}
            />
            <ModalActionButton
              title={'적립하기'}
              width={wp(30)}
              height={hp(8)}
              color={'seniorNormal'}
              onPress={onPressPoint}
            />
            <ModalActionButton
              title={'결제'}
              width={wp(70)}
              height={hp(10)}
              color={'seniorConfirm'}
              onPress={onPressOrder}
            />
          </ButtonSection>
        </Container>
      </SeniorModalTemplate>
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
  font-family: SCDream6;

  width: 100%;
`;

const OrderResultText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: SCDream6;
`;

const ButtonSection = styled.View`
  width: ${wp(70)}px;

  justify-content: space-between;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;
