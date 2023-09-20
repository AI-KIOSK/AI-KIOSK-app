import { ModalActionButton } from '@components/common/btn';
import { OrderList } from '@components/order';
import { useModal } from '@hooks/common';
import React from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRecoilValue } from 'recoil';
import { ShoppingList } from 'recoil/menu/ShoppingList';
import { styled } from 'styled-components/native';
import SeniorModalTemplate from 'styles/SeniorModalTemplate';

export default function SeniorOrderConfirmModal() {
  const { modal, hideModal: hideOrderConfirmModal } = useModal('orderConfirmModal');
  const { openModal: openEarningPointsModal } = useModal('seniorEarningPointsModal');
  const { openModal: openPaymentModal } = useModal('paymentModal');
  const shoppingList = useRecoilValue(ShoppingList);
  const totalPrice = shoppingList.reduce((accumulator, item) => accumulator + item.price, 0);

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
      <SeniorModalTemplate>
        <Container>
          <Title>주문 목록</Title>
          <OrderList />
          <OrderResultText>총 수량 {shoppingList.length}개</OrderResultText>
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