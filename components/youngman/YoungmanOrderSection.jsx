import MenuIcon from '@components/common/MenuIcon';
import { useModal } from '@hooks/common';
import { useOrder } from '@hooks/useOrder';
import React, { useCallback, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

function YoungmanOrderSection() {
  const { openModal } = useModal('orderConfirmModal');

  const { request } = useOrder();

  const items = request.orders;

  /** 담은 메뉴 출력되는 범위의 시작 인덱스 */
  const [offset, setOffset] = useState(0);

  const nextMenuSets = useCallback(() => {
    if (offset <= items.length / 3 - 1) setOffset((prev) => prev + 1);
  }, [items.length, offset]);

  const prevMenuSets = useCallback(() => {
    if (offset > 0) setOffset((prev) => prev - 1);
  }, [offset]);

  return (
    <Container>
      <TitleView>
        <Title>담은 메뉴</Title>
      </TitleView>
      <ContainedMenuView>
        <AntDesign name="caretleft" size={50} color={offset < 1 ? 'lightgray' : '#ABC4AA'} onPress={prevMenuSets} />

        <ContainedMenuList>
          {items.slice(offset * 3, offset * 3 + 3).map((item) => (
            <MenuIcon key={item.id} image={item.img} label={`수량 ${item.orderQuantity}`} />
          ))}
        </ContainedMenuList>
        <AntDesign
          name="caretright"
          size={50}
          color={offset <= items.length / 3 - 1 ? '#ABC4AA' : 'lightgray'}
          onPress={nextMenuSets}
        />
      </ContainedMenuView>
      <ButtonContainer>
        <OrderButton onPress={openModal}>
          <ButtonLabel>결제하기</ButtonLabel>
        </OrderButton>
      </ButtonContainer>
    </Container>
  );
}
const Container = styled.View`
  width: 100%;
  height: 25%;

  background-color: #a9907e;
  border-radius: 8px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  flex-direction: row;
`;

const TitleView = styled.View`
  width: 100%;
  padding: ${RFValue(12)}px;
  height: 30%;
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(16)}px;
  font-weight: 700;
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
  justify-content: space-between;
  width: 60%;
`;

const ButtonContainer = styled.View`
  width: 25%;
  height: 70%;

  justify-content: center;
  align-items: center;
`;

const OrderButton = styled.TouchableOpacity`
  width: ${wp(12)}px;
  height: ${wp(12)}px;
  padding: ${RFValue(8)}px;

  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 3px solid #675d50;
  background-color: #f3deba;
`;

const ButtonLabel = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 700;
`;

const Blank = styled.View`
  width: 40px;
  border: 1px solid black;
`;
export default YoungmanOrderSection;
