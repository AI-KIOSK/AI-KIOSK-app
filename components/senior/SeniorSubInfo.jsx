import MenuIcon from '@components/common/MenuIcon';
import { useModal } from '@hooks/common';
import React, { useCallback, useMemo, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ShoppingList } from 'recoil/menu/ShoppingList';
import styled from 'styled-components/native';

function SeniorSubInfo() {
  const { openModal } = useModal('orderConfirmModal');
  const shoppingList = useRecoilValue(ShoppingList);

  const items = useMemo(
    () => [
      {
        id: 1,
        quantity: 1,
        img: require('@assets/menu/americano.jpeg'),
      },
      {
        id: 2,
        quantity: 4,
        img: require('@assets/menu/cafelatte.jpeg'),
      },
      {
        id: 3,
        quantity: 2,
        img: require('@assets/menu/einspanner.jpeg'),
      },
      {
        id: 4,
        quantity: 2,
        img: require('@assets/menu/banillalatte.jpeg'),
      },
    ],
    [],
  );
  const img = require('@assets/menu/cafelatte.jpeg');

  /** 담은 메뉴 출력되는 범위의 시작 인덱스 */
  const [offset, setOffset] = useState(0);

  const nextMenuSets = useCallback(() => {
    if (offset <= items.length / 3 - 1) setOffset((prev) => prev + 1);
  }, [items.length, offset]);

  const prevMenuSets = useCallback(() => {
    if (offset > 0) setOffset((prev) => prev - 1);
  }, [offset]);

  const handleOrderButtonClick = () => {
    console.log(shoppingList);
    openModal();
  };

  return (
    <Container>
      <ContainedMenuView>
        <TitleView>
          <Title>담은 메뉴</Title>
        </TitleView>

        <ContainedMenuList>
          <AntDesign name="caretleft" size={50} color={offset < 1 ? 'lightgray' : 'black'} onPress={prevMenuSets} />

          {shoppingList.slice(offset * 3, offset * 3 + 3).map((item) => (
            <MenuIcon key={item.id} image={img} label={item.name} />
          ))}
          <AntDesign
            name="caretright"
            size={50}
            color={offset <= items.length / 3 - 1 ? 'black' : 'lightgray'}
            onPress={nextMenuSets}
          />
        </ContainedMenuList>
      </ContainedMenuView>
      <ButtonContainer>
        <OrderButton onPress={handleOrderButtonClick}>
          <ButtonLabel>결제</ButtonLabel>
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
  font-weight: 700;
`;

const ContainedMenuView = styled.View`
  align-items: center;
  justify-content: space-around;
  flex: 3;
  height: 100%;
`;

const ContainedMenuList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
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
  padding: ${RFValue(8)}px;

  justify-content: center;
  align-items: center;

  border: 5px solid #675d50;
  border-radius: 22px;
  background-color: #f06e31;
`;

const ButtonLabel = styled.Text`
  font-size: ${RFValue(28)}px;
  font-weight: 700;
`;

export default SeniorSubInfo;
