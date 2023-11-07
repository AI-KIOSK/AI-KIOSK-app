import { useModal } from '@hooks/common';
import format from 'pretty-format';
import React, { useCallback, useState } from 'react';
import { Image, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilValue } from 'recoil';
import { orderRequest } from 'recoil/order/atom';
import styled from 'styled-components/native';

function OrderSection() {
  const { openModal } = useModal('orderConfirmModal');

  const request = useRecoilValue(orderRequest);

  const items = request.orders;

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
          {items.slice(offset * 3, offset * 3 + 3).map((item, index) => (
            <View key={`addedItem${index}`} style={{ width: '33.3%', alignItems: 'center' }}>
              <SelectedMenuCard>
                <MenuImage source={{ uri: item.img }} />
                <TextWrapper>
                  <MenuName>{item.menuName}</MenuName>
                </TextWrapper>
                <TextWrapper>
                  <Quantity>{item.orderQuantity}개</Quantity>
                </TextWrapper>
              </SelectedMenuCard>
            </View>
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
          <ButtonLabel>담은음료</ButtonLabel>
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
`;

const SelectedMenuCard = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-content: space-around;

  width: ${wp(14)}px;
  height: ${hp(12)}px;

  padding: ${RFValue(4)}px;
  border-radius: ${RFValue(6)}px;
  ${({ theme }) => `
    background: ${theme.colors.chanpagneBeige};
    `}
`;

const MenuImage = styled.Image`
  width: 100%;
  height: 80%;

  object-fit: cover;
  border-radius: ${wp(2)}px;
`;

const TextWrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const MenuName = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: SCDream6;
`;

const Quantity = styled.Text`
  font-size: ${RFValue(9)}px;
  font-family: SCDream4;
`;

const ButtonContainer = styled.View`
  width: 25%;
  height: 70%;

  justify-content: center;
  align-items: center;
`;

const OrderButton = styled.TouchableOpacity`
  width: ${wp(18)}px;
  height: ${wp(16)}px;
  padding: ${RFValue(8)}px;

  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 3px solid #675d50;
  background-color: #f3deba;
`;

const ButtonLabel = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: SCDream6;
`;
export default OrderSection;
