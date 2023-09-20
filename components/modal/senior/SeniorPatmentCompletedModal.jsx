import { useModal } from '@hooks/common';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { styled } from 'styled-components';
import SeniorModalTemplate from 'styles/SeniorModalTemplate';

import RectButton from '../common/RectButton';

function SeniorPaymentCompletedModal() {
  const orderNum = '14';
  const { modal, hideModal } = useModal('paymentCompletedModal');
  const navigation = useNavigation();

  const pressBack = () => {
    hideModal();
    navigation.reset({ routes: [{ name: 'information' }] });
  };

  return (
    <Modal visible={modal.visible} animationType="slide" transparent={true} onRequestClose={hideModal}>
      <SeniorModalTemplate>
        <TitleContainer>
          <TitleText>주문이 완료되었습니다.</TitleText>
        </TitleContainer>
        <OrderNumContainer>
          <TitleText>주문번호{'\n'}</TitleText>
          <TitleText>{orderNum} 번</TitleText>
        </OrderNumContainer>
        <ButtonContainer>
          <RectButton onPress={pressBack} text={'돌아가기'} fontColor="#000000" backColor="#ebd3b5" />
        </ButtonContainer>
      </SeniorModalTemplate>
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
  font-size: ${RFValue(26)}px;
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

export default SeniorPaymentCompletedModal;