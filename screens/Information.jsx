import useAudio from '@hooks/useAudio';
import { useOrder } from '@hooks/useOrder';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
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
      <Info source={require('@assets/information.png')} resizeMode="contain" />

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

      <Button onPress={() => navigate('youngmanHome')}>
        <Label>청년 키오스크</Label>
        <Label>test</Label>
      </Button>
      <Button onPress={() => navigate('foreignerHome')}>
        <Label>Foreigner KIOSK</Label>
        <Label>test</Label>
      </Button>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;

  justify-content: space-around;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;

  background: #ffffff;
`;

const Info = styled.Image`
  width: ${wp(120)}px;
  height: ${wp(90)}px;

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
  font-family: SCDream4;
`;

export default Information;
