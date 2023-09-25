import { ModalActionButton } from '@components/common/btn';
import Numpad from '@components/modal/point/Numpad';
import { useModal } from '@hooks/common';
import React from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRecoilValue } from 'recoil';
import { phoneNumber } from 'recoil/auth/atom';
import { styled } from 'styled-components';
import SeniorModalTemplate from 'styles/SeniorModalTemplate';

function SeniorEarningPointsModal() {
  const { modal, hideModal } = useModal('seniorEarningPointsModal');
  const { openModal } = useModal('paymentModal');
  const { openModal: openOtherModal } = useModal('signupModal');

  const phoneNumber = useRecoilValue(phoneNumber);

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
      <SeniorModalTemplate>
        <TitleContainer>
          <TitleText>적립하기</TitleText>
        </TitleContainer>
        <EarningPointContainer>
          <NormalText> 적립을 위해 휴대폰번호를 입력해주세요.{'\n'}</NormalText>
          <NormalText> (회원만 적립이 가능합니다.){'\n'}</NormalText>
          <PhoneNumberPrint>
            <PhoneNumberText>010 - </PhoneNumberText>
            <PhoneNumberText>{phoneNumber.substr(0, 4)}</PhoneNumberText>
            <PhoneNumberText>-</PhoneNumberText>
            <PhoneNumberText>{phoneNumber.substr(4)}</PhoneNumberText>
          </PhoneNumberPrint>
          <Numpad />
        </EarningPointContainer>
        <ButtonContainer_1>
          <ModalActionButton title={'취소'} width={wp(25)} height={hp(6)} color={'seniorNormal'} onPress={hideModal} />
          <ModalActionButton
            title={'결제하기'}
            width={wp(25)}
            height={hp(6)}
            color={'seniorConfirm'}
            onPress={pressPayment}
          />
          <ModalActionButton
            title={'회원가입'}
            width={wp(70)}
            height={hp(6)}
            color={'seniorNormal'}
            onPress={pressSignUp}
          />
        </ButtonContainer_1>
      </SeniorModalTemplate>
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

const NormalText = styled.Text`
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

export default SeniorEarningPointsModal;
