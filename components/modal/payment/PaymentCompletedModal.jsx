import React, { useMemo } from 'react';
import { Modal, TextInput } from 'react-native';
import ModalTemplate from '../../../styles/ModalTemplate';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
import RectButton from '../common/RectButton';
import { useModal } from '@hooks/common';


function PaymentCompletedModal() {
    const orderNum = '14';
    const {modal, hideModal} = useModal('paymentCompletedModal');
    const pressConfirm = () => {
      setShow(false);
    };
  
    return (
      <Modal visible={modal.visible} animationType="slide" transparent={true} onRequestClose={hideModal}>
        <ModalTemplate>
          <TitleContainer>
            <TitleText>주문이 완료되었습니다.</TitleText>
          </TitleContainer>
          <OrderNumContainer>
            <TitleText>주문번호{'\n'}</TitleText>
            <TitleText>{orderNum} 번</TitleText>
          </OrderNumContainer>
          <ButtonContainer>
            <RectButton onPress={hideModal} text={'돌아가기'} fontColor="#002B85" backColor="#DBEDFF"/>
          </ButtonContainer>
        </ModalTemplate>
      </Modal>
    );
  }
  
  const TitleContainer = styled.View`
    flex: 0.8;
    justify-content: center;
    align-items: flex-start;
    padding-left: 30px;
  `;
  
  const TitleText = styled.Text`
    color: #002b85;
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
  