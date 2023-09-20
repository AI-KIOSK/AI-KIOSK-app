import { ModalActionButton } from '@components/common/btn';
import { useModal } from '@hooks/common';
import axios from 'axios';
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

  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

  const requestBody = { phoneNumber, gender };

  const pressSignUp = () => {
    // API 요청을 보낼 URL
    const apiUrl = 'http://14.36.131.49:10008/api/v1/user/';

    // Axios 사용하여 GET 요청을 보냄
    axios
      .post(apiUrl, JSON.stringify(requestBody), {
        headers: {
          'Content-Type': 'application/json', // 요청 본문의 데이터 형식을 JSON으로 설정
        },
      })
      .then((response) => {
        console.log('회원가입 요청 성공:', response.data);
      })
      .catch((error) => {
        // 요청이 실패한 경우 에러 처리
        console.log(error.response);
        console.error('회원가입 요청 중 오류 발생:', error);
      });
    hideModal();
    openModal();
  };

  useEffect(() => {
    console.log(requestBody);
  }, [requestBody]);

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
                  <InputBox maxLength={4} keyboardType="numeric" />
                </PhoneSection>
                <PhoneSection>
                  <NormalText>-</NormalText>
                </PhoneSection>
                <PhoneSection>
                  {/* 수정: onChangeText로 phoneNumber 상태값 업데이트 */}
                  <InputBox maxLength={4} keyboardType="numeric" onChangeText={(text) => setPhoneNumber(text)} />
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
