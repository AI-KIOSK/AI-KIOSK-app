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
function Information() {
  const { navigate } = useNavigation();
  const [shoppingList, setShoppingList] = useRecoilState(ShoppingList);
  const [phone, setPhone] = useRecoilState(phoneNumber);
  const { resetOrder, resetRequest } = useOrder();
  const [Foreigner, setForeigner] = useRecoilState(onForeigner);
  const { play, isLoading } = useAudio(require('../assets/audio/main.mp3'));
  useFocusEffect(
    useCallback(() => {
      resetOrder();
      resetRequest();
      setShoppingList([]);
      setForeigner(0);
      setPhone('');
    }, [setShoppingList, setPhone]),
  );

  // useEffect(() => {
  //   async function playSound() {
  //     console.log('Loading Sound');
  //     const { sound } = await Audio.Sound.createAsync(require('../assets/audio/main.mp3'));

  //     console.log('Playing Sound');
  //     await sound.playAsync();
  //   }
  //   playSound();
  // }, []);

  useEffect(() => {
    if (isLoading) play();
  }, [isLoading, play]);

  return (
    <Container>
      <Info source={require('@assets/logo.png')} resizeMode="contain" />
      <NormalButton onPress={() => navigate('home')}>
        <Label>일반 키오스크</Label>
        <Label>사용하기</Label>
      </NormalButton>
      <KioskButton onPress={() => navigate('camera')}>
        <KioskLabel>AI Kiosk</KioskLabel>
        <KioskLabel>사용하기</KioskLabel>
      </KioskButton>

      {/* <Button onPress={() => navigate('seniorHome')}>
        <Label>노인 키오스크</Label>
        <Label>사용하기</Label>
      </Button> */}

      {/* <Button onPress={() => navigate('youngmanHome')}>
        <Label>청년 키오스크</Label>
        <Label>test</Label>
      </Button>
      <Button onPress={() => navigate('foreignerHome')}>
        <Label>Foreigner KIOSK</Label>
        <Label>test</Label>
      </Button> */}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;

  /* background-color: #f5e9d9; */
  /* background-color: #f0f0f0; */
  background-color: #a9907e;
  /* background-color: white; */

  /* background-color: #9d9d9d; */
  /* background-color: #675d50; */
  justify-content: space-around;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
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

export default Information;
