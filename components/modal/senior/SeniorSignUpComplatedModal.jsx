import { ModalActionButton } from '@components/common/btn';
import { useModal } from '@hooks/useModal';
import useAudio from '@hooks/useAudio';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components';
import SeniorModalTemplate from 'styles/SeniorModalTemplate';

function SeniorSignUpCompletedModal() {
  const phoneNum = '4722';
  const { modal, hideModal } = useModal('signupCompleteModal');
  const { play, isLoading } = useAudio(require('@assets/audio/signupcomplete.mp3'));
  const navigation = useNavigation();

  useEffect(() => {
    if (isLoading && modal.visible) play();
  }, [isLoading, modal.visible, play]);

  const pressBack = () => {
    hideModal();
    navigation.reset({ routes: [{ name: 'information' }] });
  };

  return (
    <Modal visible={modal.visible} animationType="slide" transparent={true} onRequestClose={hideModal}>
      <SeniorModalTemplate>
        <TitleContainer>
          <TitleText>회원가입 완료</TitleText>
        </TitleContainer>
        <PhoneNumContainer>
          <TitleText>반갑습니다{'\n'}</TitleText>
          <TitleText>{phoneNum} 님!</TitleText>
        </PhoneNumContainer>
        <ButtonSection>
          <ModalActionButton
            title={'돌아가기'}
            width={wp(25)}
            height={hp(6)}
            color={'seniorNormal'}
            onPress={pressBack}
          />
        </ButtonSection>
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
  font-family: SCDream6;
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

export default SeniorSignUpCompletedModal;
