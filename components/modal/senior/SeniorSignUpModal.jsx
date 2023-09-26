import { ModalActionButton } from '@components/common/btn';
import { useModal } from '@hooks/common';
import { useSignUp } from '@hooks/customer';
import React, { useEffect, useMemo, useState } from 'react'; // 추가: useState import
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components';
import SeniorModalTemplate from 'styles/SeniorModalTemplate';

function SeniorSignUpModal() {
  const genderItems = useMemo(
    () => [
      {
        id: 'male',
        value: 'MALE',
        name: '남',
      },
      {
        id: 'female',
        value: 'FEMALE',
        name: '여',
      },
      {
        id: 'etc',
        value: 'INVALID',
        name: '기타',
      },
    ],
    [],
  );

  const { modal, hideModal } = useModal('signupModal');
  const { openModal } = useModal('signupCompleteModal');

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [gender, setGender] = useState('');
  const { signupWithRequest } = useSignUp();

  const pressSignUp = () => {
    const combinedNumber = input1 + input2;
    const requestBody = { phoneNumber: combinedNumber, gender };

    signupWithRequest(requestBody);

    hideModal();
    openModal();
  };

  return (
    <Modal visible={modal.visible} animationType="slide" transparent={true} onRequestClose={hideModal}>
      <SeniorModalTemplate>
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
                  {/* 수정: onChangeText로 phoneNumber 상태값 업데이트 */}
                  <InputBox maxLength={4} keyboardType="numeric" onChangeText={(text) => setInput1(text)} />
                </PhoneSection>
                <PhoneSection>
                  <NormalText>-</NormalText>
                </PhoneSection>
                <PhoneSection>
                  {/* 수정: onChangeText로 phoneNumber 상태값 업데이트 */}
                  <InputBox maxLength={4} keyboardType="numeric" onChangeText={(text) => setInput2(text)} />
                </PhoneSection>
              </PhoneNumber>
            </PhoneContainer>
            <GenderContainer>
              <TitleText>성별</TitleText>
              <Row>
                {genderItems.map((item) => (
                  <GenderItem
                    key={item.id}
                    // 추가: onPress로 gender 상태값 업데이트
                    onPress={() => setGender(item.value)}
                    style={{
                      // 선택된 성별 스타일 변경
                      borderColor: gender === item.value ? '#ebd3b5' : '#000000',
                      backgroundColor: gender === item.value ? '#ebd3b5' : '#fff',
                    }}
                  >
                    <NormalText>{item.name}</NormalText>
                  </GenderItem>
                ))}
              </Row>
            </GenderContainer>
          </SignUpContainer>
          <ButtonSection>
            <ModalActionButton
              title={'취소'}
              width={wp(25)}
              height={hp(6)}
              color={'seniorNormal'}
              onPress={hideModal}
            />
            <ModalActionButton
              title={'회원가입'}
              width={wp(25)}
              height={hp(6)}
              color={'seniorConfirm'}
              onPress={pressSignUp}
            />
          </ButtonSection>
        </Container>
      </SeniorModalTemplate>
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
  height: 40%;
  font-weight: bold;
  font-size: ${RFValue(18)}px;
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
  background-color: #ebd3b5;
  justify-content: center;
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const NormalText = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(18)}px;
`;
const ButtonSection = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 120px;
`;

export default SeniorSignUpModal;
