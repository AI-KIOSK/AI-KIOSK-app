import { ModalActionButton } from '@components/common/btn';
import { useModal } from '@hooks/common';
import React from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components';
import ModalTemplate from 'styles/ModalTemplate';

import RectButton from '../common/RectButton';

function ForeignerSignUpCompletedModal() {
  const phoneNum = '4722';
  const { modal, hideModal } = useModal('foreignerSignupCompleteModal');
  const { openModal } = useModal('foreignerEarningpointsModal');

  const pressBack = () => {
    hideModal();
    openModal();
  };

  return (
    <Modal visible={modal.visible} animationType="slide" transparent={true} onRequestClose={hideModal}>
      <ModalTemplate>
        <TitleContainer>
          <TitleText>Membership registration completed</TitleText>
        </TitleContainer>
        <PhoneNumContainer>
          <TitleText>Hello{'\n'}</TitleText>
          <TitleText>{phoneNum} !</TitleText>
        </PhoneNumContainer>
        <ButtonSection>
          <ModalActionButton title={'Back'} width={wp(25)} height={hp(6)} color={'back'} onPress={pressBack} />
        </ButtonSection>
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
  font-weight: bold;
  font-size: ${RFValue(23)}px;
`;

const PhoneNumContainer = styled.View`
  flex: 4;
  justify-content: center;
  align-items: center;
`;

const ButtonSection = styled.View`
  flex: 2;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export default ForeignerSignUpCompletedModal;
