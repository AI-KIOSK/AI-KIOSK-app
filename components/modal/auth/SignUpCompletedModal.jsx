import React from 'react';
import { Modal } from 'react-native';
import ModalTemplate from 'styles/ModalTemplate';
import { RFValue } from 'react-native-responsive-fontsize';
import { styled } from 'styled-components';
import RectButton from '../common/RectButton';
import { useRecoilState } from 'recoil';
import { SignUpCompleted } from 'recoil/ModalState';
import { useModal } from '@hooks/common';

function SignUpCompletedModal() {
  const phoneNum = '4722';
  const {modal, hideModal} = useModal('signupCompleteModal');
  const {openModal} = useModal('earningpointsModal');

  const pressBack = () => {
    hideModal();
    openModal();
  };

  return (
    <Modal visible={modal.visible} animationType="slide" transparent={true} onRequestClose={hideModal}>
      <ModalTemplate>
        <TitleContainer>
          <TitleText>회원가입 완료</TitleText>
        </TitleContainer>
        <PhoneNumContainer>
          <TitleText>반갑습니다{'\n'}</TitleText>
          <TitleText>{phoneNum} 님!</TitleText>
        </PhoneNumContainer>
        <ButtonContainer>
          <RectButton onPress={pressBack} text={'돌아가기'} fontColor="#002B85" backColor="#DBEDFF"/>
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

const PhoneNumContainer = styled.View`
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

export default SignUpCompletedModal;
