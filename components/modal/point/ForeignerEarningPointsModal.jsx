import { useModal } from '@hooks/useModal';
import React from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components';
import { ModalActionButton } from '@components/common/btn';
import ModalTemplate from '../../../styles/ModalTemplate';
import Numpad from './Numpad';

function ForeignerEarningPointsModal() {
  const { modal, hideModal } = useModal('foreignerEarningpointsModal');
  const { openModal } = useModal('foreignerPaymentModal');
  const { openModal: openOtherModal } = useModal('foreignerSignupModal');

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
          <TitleText>saving points</TitleText>
        </TitleContainer>
        <EarningPointContainer>
          <NormalText> Please enter your mobile phone number for accumulation.{'\n'}</NormalText>
          <NormalText> (Only members can save points.){'\n'}</NormalText>
          <PhoneNumberPrint>
            <PhoneNumberText>010 - </PhoneNumberText>
            <PhoneNumberText></PhoneNumberText>
            <PhoneNumberText>-</PhoneNumberText>
            <PhoneNumberText></PhoneNumberText>
          </PhoneNumberPrint>
          <Numpad />
        </EarningPointContainer>
        <ButtonContainer_1>
          <ModalActionButton title={'cancel'} width={wp(25)} height={hp(6)} color={'cancel'} onPress={hideModal} />
          <ModalActionButton title={'payment'} width={wp(25)} height={hp(6)} color={'blue'} onPress={pressPayment} />
          <ModalActionButton
            title={'join membership'}
            width={wp(70)}
            height={hp(6)}
            color={'cancel'}
            onPress={pressSignUp}
          />
        </ButtonContainer_1>
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
  font-size: ${RFValue(20)}px;
`;
const PhoneNumberPrint = styled.View`
  margin-top: ${wp(2)}px;
  justify-content: space-around;
  width: ${wp(50)}px;
  flex-direction: row;
  margin-bottom: ${wp(2)}px;
`;

const EarningPointContainer = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
  margin: ${wp(0.3)}px;
`;

const PhoneNumberText = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  letter-spacing: 2px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const NormalText = styled.Text`
  align-text: center;
  font-weight: bold;
  font-size: ${RFValue(16)}px;
`;

const ButtonContainer_1 = styled.View`
  width: ${wp(70)}px;
  height: ${hp(15)}px;
  justify-content: space-between;
  align-content: space-around;
  align-self: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export default ForeignerEarningPointsModal;
