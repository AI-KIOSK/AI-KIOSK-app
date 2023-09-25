import { useModal } from '@hooks/common';
import { useOrder } from '@hooks/order';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useRecoilValue } from 'recoil';
import { orderResponse } from 'recoil/order/atom';
import { styled } from 'styled-components';

import ModalTemplate from '../../../styles/ModalTemplate';
import RectButton from '../common/RectButton';

function PaymentCompletedModal() {
  const { modal, hideModal } = useModal('paymentCompletedModal');
  const navigation = useNavigation();

  const response = useRecoilValue(orderResponse);

  const { resetOrder, resetRequest } = useOrder();
  const pressBack = () => {
    hideModal();
    resetOrder();
    resetRequest();
    navigation.reset({ routes: [{ name: 'information' }] });
  };

  return (
    <Modal visible={modal.visible} animationType="slide" transparent={true} onRequestClose={hideModal}>
      <ModalTemplate>
        <TitleContainer>
          <TitleText>주문이 완료되었습니다.</TitleText>
        </TitleContainer>
        <OrderNumContainer>
          <TitleText>주문번호{'\n'}</TitleText>
          <TitleText>{response?.data.id} 번</TitleText>
        </OrderNumContainer>
        <ButtonContainer>
          <RectButton onPress={pressBack} text={'돌아가기'} fontColor="#000000" backColor="#ABC4AA" />
        </ButtonContainer>
      </ModalTemplate>
    </Modal>
  );
}

const TitleContainer = styled.View`
  flex: 0.8;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

const TitleText = styled.Text`
  color: #675d50;
  font-weight: bold;
  font-size: ${RFValue(23)}px;
`;

const OrderNumContainer = styled.View`
  flex: 4;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export default PaymentCompletedModal;
