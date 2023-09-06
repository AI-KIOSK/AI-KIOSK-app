import React, { useMemo } from 'react';
import { Modal, TextInput } from 'react-native';
import ModalTemplate from '../../../styles/ModalTemplate';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
import { SignUp, SignUpCompleted } from 'recoil/ModalState';
import RectButton from '../common/RectButton';

function SignUpModal() {
  const genderItems = useMemo(
    () => [
      {
        id: 'male',
        value: 'male',
        name: '남',
      },
      {
        id: 'female',
        value: 'female',
        name: '여',
      },
      {
        id: 'etc',
        value: 'etc',
        name: '기타',
      },
    ],
    [],
  );

  const [showSignUpModal, setShowSignUpModal] = useRecoilState(SignUp);
  const [showSignUpCompletedModal, setShowSignUpCompletedModal] = useRecoilState(SignUpCompleted);

  const pressCancel = () => {
    setShowSignUpModal(false);
  };

  const pressSignUp = () => {
    setShowSignUpModal(false);
    setShowSignUpCompletedModal(true);
  };

  return (
    <Modal visible={showSignUpModal} animationType="slide" transparent={true}>
      <ModalTemplate>
        <TitleContainer>
          <TitleText>회원가입</TitleText>
        </TitleContainer>
        <SignUpContainer>
          <PhoneContainer>
            <TitleText>전화번호</TitleText>
            <PhoneNumber>
              <PhoneSection>
                <NormalText>010</NormalText>
              </PhoneSection>
              <PhoneSection>
                <NormalText>-</NormalText>
              </PhoneSection>
              <PhoneSection>
                <InputBox maxLength={4} keyboardType="numeric"/>
              </PhoneSection>
              <PhoneSection>
                <NormalText>-</NormalText>
              </PhoneSection>
              <PhoneSection>
                <InputBox maxLength={4} keyboardType="numeric"/>
              </PhoneSection>
            </PhoneNumber>
          </PhoneContainer>
          <GenderContainer>
            <TitleText>성별</TitleText>
            <Row>
              {genderItems.map((item) => (
                <GenderItem key={item.id}>
                  <NormalText>{item.name}</NormalText>
                </GenderItem>
              ))}
            </Row>
          </GenderContainer>
        </SignUpContainer>
        <ButtonContainer>
          <RectButton onPress={pressCancel} text={'취소'} fontColor="#002B85" backColor="#DBEDFF" />
          <RectButton onPress={pressSignUp} text={'회원가입'} fontColor="#FFA3A3" backColor="#FEF4F4" />
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
  font-size: ${RFValue(20)}px;
`;

const SignUpContainer = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;

const PhoneContainer = styled.View`
  flex: 1;
  width: ${wp(60)}px;
  justify-content: space-around;
`;

const PhoneNumber = styled.View`
  color: #002b85;
  border-width: 3px;
  flex-direction: row;
  border-color: #002b85;
  padding: 0px 10px;
  justify-content: space-around;
  align-items: center;
`;

const PhoneSection = styled.View`
  height: 60%;
  width: ${wp(10)}px;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.TextInput`
  width: 100%;
  color: #002b85;
  font-weight: bold;
  font-size: ${RFValue(16)}px;
`;

const GenderContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  width: ${wp(60)}px;
`;

const GenderItem = styled.TouchableOpacity`
  border-width: 3px;
  border-radius: 50px;
  padding: 10px;
  width: ${wp(16)}px;
  height: ${hp(6)}px;
  border-color: #002b85;
  justify-content: center;
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const NormalText = styled.Text`
  color: #002b85;
  font-weight: bold;
  font-size: ${RFValue(16)}px;
`;

const ButtonContainer = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export default SignUpModal;
