import { ModalActionButton } from '@components/common/btn';
import { OrderList } from '@components/order';
import { useModal } from '@hooks/common';
import React from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import ModalTemplate from 'styles/ModalTemplate';

export default function OrderConfirmModal() {
  const { modal, hideModal } = useModal('orderConfirmModal');

  return (
    <Modal visible={modal.visible} animationType={'slide'} transparent={true} onRequestClose={hideModal}>
      <ModalTemplate>
        <Container>
          <Title>주문 목록</Title>
          <OrderList />
          <OrderResultText>총 수량 3개</OrderResultText>
          <OrderResultText>총 결제 금액 36,000원</OrderResultText>
          <ButtonSection>
            <ModalActionButton title={'취소'} width={wp(25)} height={hp(6)} color={'blue'} onPress={hideModal} />
            <ModalActionButton title={'결제하기'} width={wp(25)} height={hp(6)} color={'red'} />
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
  color: #002b85;
  font-size: ${RFValue(20)}px;
  font-weight: 700;

  width: 100%;
`;

const OrderResultText = styled.Text`
  color: #002b85;
  font-size: ${RFValue(18)}px;
  font-weight: 700;
`;

const ButtonSection = styled.View`
  width: 100%;

  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;
