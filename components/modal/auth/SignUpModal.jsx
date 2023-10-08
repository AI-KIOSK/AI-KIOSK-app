import { ModalActionButton } from '@components/common/btn';
import { useModal } from '@hooks/common';
import { useSignUp } from '@hooks/customer';
import React, { useMemo } from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components';

import ModalTemplate from '../../../styles/ModalTemplate';
import { onForeigner } from 'recoil/common/Foreigner';
import { useRecoilValue } from 'recoil';

function SignUpModal() {
  const genderItems = useMemo(
    () => [
      {
        id: 'male',
        value: 'MALE',
        name: '남',
        nameEng: 'Male',
      },
      {
        id: 'female',
        value: 'FEMALE',
        name: '여',
        nameEng: 'Female',
      },
      {
        id: 'etc',
        value: 'etc',
        name: '기타',
        nameEng: 'Etc',
      },
    ],
    [],
  );

  const isForeigner = useRecoilValue(onForeigner);
  const { modal, hideModal } = useModal('signupModal');
  const { openModal } = useModal('signupCompleteModal');

  const { onPressGender, onPressNextPhoneNumber, onPressPrevPhoneNumber, phoneNumberPrev, phoneNumberNext, signup } =
    useSignUp();

  const pressSignUp = () => {
    signup();
    hideModal();
    openModal();
  };

  return (
    <Modal visible={modal.visible} animationType="slide" transparent={true} onRequestClose={hideModal}>
      <ModalTemplate>
        {isForeigner ? (
          <>
            <Container>
              <TitleContainer>
                <TitleText>Sign up</TitleText>
              </TitleContainer>
              <SignUpContainer>
                <PhoneContainer>
                  <TitleText>Phone Number</TitleText>
                  <PhoneNumber>
                    <PhoneSection>
                      <NormalText>010</NormalText>
                    </PhoneSection>
                    <PhoneSection>
                      <NormalText>-</NormalText>
                    </PhoneSection>
                    <PhoneSection>
                      <InputBox
                        value={phoneNumberPrev}
                        maxLength={4}
                        keyboardType="numeric"
                        onChangeText={onPressPrevPhoneNumber}
                      />
                    </PhoneSection>
                    <PhoneSection>
                      <NormalText>-</NormalText>
                    </PhoneSection>
                    <PhoneSection>
                      <InputBox
                        value={phoneNumberNext}
                        maxLength={4}
                        keyboardType="numeric"
                        onChangeText={onPressNextPhoneNumber}
                      />
                    </PhoneSection>
                  </PhoneNumber>
                </PhoneContainer>
                <GenderContainer>
                  <TitleText>Gender</TitleText>
                  <Row>
                    {genderItems.map((item) => (
                      <GenderItem key={item.id} onPress={() => onPressGender(item.value)}>
                        <NormalText>{item.nameEng}</NormalText>
                      </GenderItem>
                    ))}
                  </Row>
                </GenderContainer>
              </SignUpContainer>
              <ButtonSection>
                <ModalActionButton
                  title={'Cancel'}
                  width={wp(25)}
                  height={hp(6)}
                  color={'cancel'}
                  onPress={hideModal}
                />
                <ModalActionButton
                  title={'Confirm'}
                  width={wp(25)}
                  height={hp(6)}
                  color={'sign'}
                  onPress={pressSignUp}
                />
              </ButtonSection>
            </Container>
          </>
        ) : (
          <>
            <Container>
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
                      <InputBox
                        value={phoneNumberPrev}
                        maxLength={4}
                        keyboardType="numeric"
                        onChangeText={onPressPrevPhoneNumber}
                      />
                    </PhoneSection>
                    <PhoneSection>
                      <NormalText>-</NormalText>
                    </PhoneSection>
                    <PhoneSection>
                      <InputBox
                        value={phoneNumberNext}
                        maxLength={4}
                        keyboardType="numeric"
                        onChangeText={onPressNextPhoneNumber}
                      />
                    </PhoneSection>
                  </PhoneNumber>
                </PhoneContainer>
                <GenderContainer>
                  <TitleText>성별</TitleText>
                  <Row>
                    {genderItems.map((item) => (
                      <GenderItem key={item.id} onPress={() => onPressGender(item.value)}>
                        <NormalText>{item.name}</NormalText>
                      </GenderItem>
                    ))}
                  </Row>
                </GenderContainer>
              </SignUpContainer>
              <ButtonSection>
                <ModalActionButton title={'취소'} width={wp(25)} height={hp(6)} color={'cancel'} onPress={hideModal} />
                <ModalActionButton
                  title={'회원가입'}
                  width={wp(25)}
                  height={hp(6)}
                  color={'sign'}
                  onPress={pressSignUp}
                />
              </ButtonSection>
            </Container>
          </>
        )}
      </ModalTemplate>
    </Modal>
  );
}

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: ${wp(3)}px;
`;
const TitleContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
`;

const TitleText = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(20)}px;
`;

const SignUpContainer = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;
`;

const PhoneContainer = styled.View`
  width: 85%;
  justify-content: space-around;
`;

const PhoneNumber = styled.View`
  flex-direction: row;
  border-radius: 8px;
  background-color: #f3deba;
  padding: 0px 20px;
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
  height: 30%;
  font-weight: bold;
  font-size: ${RFValue(16)}px;
`;

const GenderContainer = styled.View`
  width: 85%;
  height: 30%;
  justify-content: space-around;
  width: ${wp(60)}px;
`;

const GenderItem = styled.TouchableOpacity`
  border-width: 2px;
  border-radius: 8px;
  width: ${wp(16)}px;
  height: ${hp(5)}px;
  border-color: #000000;
  background-color: #abc4aa;
  justify-content: center;
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const NormalText = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(16)}px;
`;
const ButtonSection = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 200px;
`;

export default SignUpModal;
