import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components';

function Information() {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Info>
        <Description>안내 문구</Description>
      </Info>

      <Button onPress={() => navigate('camera')}>
        <Label>AI Kiosk 사용하기</Label>
      </Button>

      <Button onPress={() => navigate('home')}>
        <Label>일반 키오스크</Label>
        <Label>사용하기</Label>
      </Button>

      <Button onPress={() => navigate('seniorHome')}>
        <Label>노인 키오스크</Label>
        <Label>사용하기</Label>
      </Button>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  border: 3px solid black;

  justify-content: space-around;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Info = styled.View`
  width: ${wp(80)}px;
  height: ${wp(80)}px;

  border: 1px solid #675d50;
  justify-content: center;
  align-items: center;
`;

const Description = styled.Text``;

const Button = styled.TouchableOpacity`
  width: ${wp(32)}px;
  height: ${hp(6)}px;

  justify-content: center;
  align-items: center;

  background-color: #abc4aa;
  border-color: #675d50;
  border-width: 3px;
  border-radius: 8px;
`;

const Label = styled.Text`
  font-size: ${RFValue(12)}px;
`;

export default Information;
