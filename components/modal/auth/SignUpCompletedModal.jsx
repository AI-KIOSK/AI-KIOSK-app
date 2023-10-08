import { ModalActionButton } from '@components/common/btn';
import { useModal } from '@hooks/common';
import React from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRecoilValue } from 'recoil';
import { signUpRequest } from 'recoil/auth/atom';
import { onForeigner } from 'recoil/common/Foreigner';
import { styled } from 'styled-components';
import ModalTemplate from 'styles/ModalTemplate';

function SignUpCompletedModal() {
  const request = useRecoilValue(signUpRequest);
  const isForeigner = useRecoilValue(onForeigner);

  const { modal, hideModal } = useModal('signupCompleteModal');
  const { openModal } = useModal('earningpointsModal');

  const pressBack = () => {
    hideModal();
    openModal();
  };

  return (
    <Modal visible={modal.visible} animationType="slide" transparent={true} onRequestClose={hideModal}>
      <ModalTemplate>
        {isForeigner ? (
          <>
            <TitleContainer>
              <TitleText>Registration completed</TitleText>
            </TitleContainer>
            <PhoneNumContainer>
              <TitleText>Hello,{'\n'}</TitleText>
              <TitleText>{request.phoneNumber.substring(4)}!</TitleText>
            </PhoneNumContainer>
            <ButtonSection>
              <ModalActionButton title={'Back'} width={wp(25)} height={hp(6)} color={'back'} onPress={pressBack} />
            </ButtonSection>
          </>
        ) : (
          <>
            <TitleContainer>
              <TitleText>회원가입 완료</TitleText>
            </TitleContainer>
            <PhoneNumContainer>
              <TitleText>반갑습니다{'\n'}</TitleText>
              <TitleText>{request.phoneNumber.substring(4)} 님!</TitleText>
            </PhoneNumContainer>
            <ButtonSection>
              <ModalActionButton title={'돌아가기'} width={wp(25)} height={hp(6)} color={'back'} onPress={pressBack} />
            </ButtonSection>
          </>
        )}
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

export default SignUpCompletedModal;
