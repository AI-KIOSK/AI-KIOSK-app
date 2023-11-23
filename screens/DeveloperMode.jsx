import Logo from '@components/common/icon/Logo';
import useAudio from '@hooks/useAudio';
import { useOrder } from '@hooks/useOrder';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRecoilState } from 'recoil';
import { phoneNumber } from 'recoil/auth/atom';
import { onForeigner } from 'recoil/common/Foreigner';
import { ShoppingList } from 'recoil/menu/ShoppingList';
import styled from 'styled-components';
function DeveloperMode() {
  const { navigate } = useNavigation();
  const [shoppingList, setShoppingList] = useRecoilState(ShoppingList);
  const [phone, setPhone] = useRecoilState(phoneNumber);
  const { resetOrder, resetRequest } = useOrder();
  const [Foreigner, setForeigner] = useRecoilState(onForeigner);
  const { play, isLoading } = useAudio(require('../assets/audio/main.mp3'));
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      resetOrder();
      resetRequest();
      setShoppingList([]);
      setForeigner(0);
      setPhone('');
    }, [setShoppingList, setPhone]),
  );

  useEffect(() => {
    if (isLoading) play();
  }, [isLoading, play]);

  return (
    <Container>
      <ImageContainer>
        <Info source={require('@assets/logo.png')} resizeMode="contain" />
        <SecretBtn onPress={() => navigate('information')} />
      </ImageContainer>
      <KioskButton onPress={() => navigate('home')}>
        <KioskLabel>일반 키오스크</KioskLabel>
        <KioskLabel>사용하기</KioskLabel>
      </KioskButton>
      <KioskButton onPress={() => navigate('camera')}>
        <KioskLabel>AI Kiosk</KioskLabel>
        <KioskLabel>사용하기</KioskLabel>
      </KioskButton>

      <KioskButton onPress={() => navigation.navigate('seniorHome', { age: '청년층', gender: '남성' })}>
        <KioskLabel>노인 키오스크</KioskLabel>
        <KioskLabel>사용하기</KioskLabel>
      </KioskButton>

      <KioskButton onPress={() => navigation.navigate('youngmanHome', { age: '청년층', gender: '남성' })}>
        <KioskLabel>청년 키오스크</KioskLabel>
        <KioskLabel>test</KioskLabel>
      </KioskButton>
      <KioskButton onPress={() => navigation.navigate('foreignerHome', { age: '청년층', gender: '남성' })}>
        <KioskLabel>Foreigner KIOSK</KioskLabel>
        <KioskLabel>test</KioskLabel>
      </KioskButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;

  background-color: #a9907e;
  justify-content: space-around;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ImageContainer = styled.View`
  width: ${wp(100)}px;
  height: ${wp(60)}px;

  justify-content: center;
  align-items: center;
`;

const SecretBtn = styled.TouchableOpacity`
  position: absolute;
  width: ${wp(12)}px;
  height: ${wp(18)}px;
  top: 32%;
  left: 33%;
`;

const Info = styled.Image`
  width: ${wp(100)}px;
  height: ${wp(60)}px;

  justify-content: center;
  align-items: center;
`;

const Description = styled.Text`
  font-size: ${RFValue(16)}px;
`;

const BoldDescription = styled(Description)`
  font-weight: bold;
  font-size: ${RFValue(18)}px;
`;

const Button = styled.TouchableOpacity`
  width: ${wp(36)}px;
  height: ${hp(10)}px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;

  ${() =>
    Platform.OS === 'android'
      ? `
    elevation: 8;
    `
      : `
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `}
`;

const NormalButton = styled(Button)`
  background-color: #675d50;
`;

const KioskButton = styled(Button)`
  background-color: #abc4aa;
  border-color: #675d50;
`;

const Label = styled.Text`
  font-size: ${RFValue(18)}px;
  color: white;
  font-family: SCDream5;
`;
const KioskLabel = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: SCDream5;
`;

export default DeveloperMode;
