import MenuIcon from '@components/common/MenuIcon';
import { useModal } from '@hooks/useModal';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilValue } from 'recoil';
import { ShoppingList } from 'recoil/menu/ShoppingList';
import styled from 'styled-components/native';

function SeniorSubInfo() {
  const { openModal } = useModal('orderConfirmModal');
  const shoppingList = useRecoilValue(ShoppingList);

  const [offset, setOffset] = useState(0);

  const nextMenuSets = useCallback(() => {
    if (offset <= shoppingList.length / 3 - 1) setOffset((prev) => prev + 1);
  }, [shoppingList.length, offset]);

  const prevMenuSets = useCallback(() => {
    if (offset > 0) setOffset((prev) => prev - 1);
  }, [offset]);

  const handleOrderButtonClick = () => {
    openModal();
  };

  return (
    <Container>
      <TitleView>
        <Title>담은 음료</Title>
      </TitleView>

      <ContainedMenuView>
        <AntDesign name="caretleft" size={50} color={offset < 1 ? 'lightgray' : 'black'} onPress={prevMenuSets} />

        <ContainedMenuList>
          {shoppingList.slice(offset * 3, offset * 3 + 3).map((item) => (
            <View key={item.id} style={{ width: '33.3%', alignItems: 'center' }}>
              <MenuIcon image={item.img} label={item.menuName} quantity={item.orderQuantity} />
            </View>
          ))}
        </ContainedMenuList>
        <AntDesign
          name="caretright"
          size={50}
          color={offset <= shoppingList.length / 3 - 1 ? 'black' : 'lightgray'}
          onPress={nextMenuSets}
        />
      </ContainedMenuView>
      <ButtonContainer>
        <OrderButton onPress={handleOrderButtonClick}>
          <ButtonLabel>주문</ButtonLabel>
          <ButtonLabel>확인</ButtonLabel>
        </OrderButton>
      </ButtonContainer>
    </Container>
  );
}
const Container = styled.View`
  width: 100%;
  height: 22%;

  background-color: #ebd3b5;

  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  flex-direction: row;
`;

const TitleView = styled.View`
  width: 100%;
  padding: ${RFValue(6)}px ${RFValue(12)}px 0px ${RFValue(12)}px;
  height: 30%;
`;

const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: SCDream6;
`;

const ContainedMenuView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  width: 75%;
  height: 70%;
`;

const ContainedMenuList = styled.View`
  flex-direction: row;

  width: 75%;
  margin-bottom: ${hp(1.625)}px;
`;

const ButtonContainer = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const OrderButton = styled.TouchableOpacity`
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;

  border: 5px solid #675d50;
  border-radius: 22px;
  background-color: #f06e31;
`;

const ButtonLabel = styled.Text`
  font-size: ${RFValue(26)}px;
  font-family: SCDream6;
`;

export default SeniorSubInfo;
