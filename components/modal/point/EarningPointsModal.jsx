import { useModal } from '@hooks/common';
import React from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components';

import ModalTemplate from '../../../styles/ModalTemplate';
import RectButton from '../common/RectButton';
import Numpad from '../point/Numpad';

function EarningPointsModal() {
  const { modal, hideModal } = useModal('earningpointsModal');
  const { openModal } = useModal('paymentModal');
  const { openModal: openOtherModal } = useModal('signupModal');

  const pressPayment = () => {
    hideModal();
    openModal();
  };

  const pressSignUp = () => {
    hideModal();
    openOtherModal();
  };

  return (
    <Modal visible={modal.visible} animationType="slide" transparent={true} onRequestClose={hideModal}>
      <ModalTemplate>
        <TitleContainer>
          <TitleText>적립하기</TitleText>
        </TitleContainer>
        <EarningPointContainer>
          <NormalText> 적립을 위해 휴대폰번호를 입력해주세요.{'\n'}</NormalText>
          <NormalText> (회원만 적립이 가능합니다.){'\n'}</NormalText>
          <PhoneNumberPrint>
            <PhoneNumberText>010 - </PhoneNumberText>
            <PhoneNumberText></PhoneNumberText>
            <PhoneNumberText>-</PhoneNumberText>
            <PhoneNumberText></PhoneNumberText>
          </PhoneNumberPrint>
          <Numpad />
        </EarningPointContainer>
        <ButtonContainer_1>
          <RectButton onPress={hideModal} text={'취소'} fontColor="#002B85" backColor="#DBEDFF" />
          <RectButton onPress={pressPayment} text={'결제하기'} fontColor="#FFA3A3" backColor="#DBEDFF" />
        </ButtonContainer_1>
        <ButtonContainer_2>
          <RectButton onPress={pressSignUp} text={'회원가입'} fontColor="#FFA3A3" backColor="#FEF4F4" />
        </ButtonContainer_2>
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
  font-size: ${RFValue(20)}px;
`;
const PhoneNumberPrint = styled.View`
  margin-top: 30px;
  justifycontent: space-around;
  width: ${wp(50)}px;
  flexdirection: row;
  margin-bottom: 160px;
`;

const EarningPointContainer = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
  margin: 90px;
`;

const PhoneNumberText = styled.Text`
  color: #002b85;
  font-weight: bold;
  font-size: ${RFValue(16)}px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const NormalText = styled.Text`
  color: #002b85;
  align-text: center;
  font-weight: bold;
  font-size: ${RFValue(16)}px;
`;

const ButtonContainer_1 = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ButtonContainer_2 = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

export default EarningPointsModal;
