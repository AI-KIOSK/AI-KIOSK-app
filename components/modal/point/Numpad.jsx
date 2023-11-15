import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRecoilState } from 'recoil';
import { phoneNumber } from 'recoil/auth/atom';
import styled from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather';

function Numpad(props) {
  const [phone, setPhoneNumber] = useRecoilState(phoneNumber);

  // 숫자 버튼을 누를 때마다 휴대폰 번호를 업데이트합니다.
  const handleNumberPress = (number) => {
    if (phone.length < 8) {
      // 최대 8자리까지만 입력 가능
      setPhoneNumber(phone + number.toString());
    }
  };

  const deleteNumber = () => {
    if (phone.length > 0) {
      setPhoneNumber((prev) => prev.slice(0, -1));
    }
  };

  const items = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, -1],
  ];

  return (
    <Container>
      {items.map((item, rowIndex) => (
        <Row key={rowIndex}>
          {item.map((number, columnIndex) => (
            <Column key={columnIndex} onPress={number !== -1 ? () => handleNumberPress(number) : () => deleteNumber()}>
              {number === -1 ? <Feather name="delete" size={RFValue(24)} color={'black'} /> : <Text>{number}</Text>}
            </Column>
          ))}
        </Row>
      ))}
    </Container>
  );
}

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
  margin-left: auto;
`;

const Column = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 8px;
  margin: ${wp(0.3)}px;
  width: ${wp(9)}px;
  height: ${wp(9)}px;
  justify-content: center;
  align-items: center;
  background-color: #f3deba;
`;

const Text = styled.Text`
  font-size: ${RFValue(27)}px;
  color: #675d50;
  font-family: SCDream4;
`;

export default Numpad;
