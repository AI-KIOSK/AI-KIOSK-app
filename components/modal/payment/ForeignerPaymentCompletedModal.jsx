import { useModal } from '@hooks/useModal';
import React from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { styled } from 'styled-components';

import ModalTemplate from '../../../styles/ModalTemplate';
import RectButton from '../common/RectButton';

function ForeignerPaymentCompletedModal() {
  const orderNum = '14';
  const { modal, hideModal } = useModal('foreignerPaymentCompletedModal');
  const { openModal } = useModal('information');

  const pressBack = () => {
    hideModal();
    openModal();
  };

  return (
    <Modal visible={modal.visible} animationType="slide" transparent={true} onRequestClose={hideModal}>
      <ModalTemplate>
        <TitleContainer>
          <TitleText>Your order has been completed.</TitleText>
        </TitleContainer>
        <OrderNumContainer>
          <TitleText>Order Number{'\n'}</TitleText>
          <TitleText>{orderNum} </TitleText>
        </OrderNumContainer>
        <ButtonContainer>
          <RectButton onPress={pressBack} text={'Back'} fontColor="#000000" backColor="#ABC4AA" />
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

export default ForeignerPaymentCompletedModal;
