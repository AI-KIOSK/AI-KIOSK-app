import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styled } from 'styled-components/native';

OrderListItem.propTypes = {
  order: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.number,
      menu: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
    }),
  ),
};

export default function OrderListItem({ order }) {
  const { img, menu, quantity, price } = order;

  return (
    <Container>
      <MenuImageView>
        <Image style={{ maxWidth: RFValue(60) }} source={img} resizeMode="contain" />
      </MenuImageView>
      <MenuOptionView>
        <MenuLabel>{menu}</MenuLabel>
        <AntDesign name={'close'} size={RFValue(16)} />
        <QunatityOptionView>
          <QuantityLabel>수량</QuantityLabel>
          <AntDesign name={'minuscircleo'} size={RFValue(16)} />
          <QuantityLabel>{quantity}</QuantityLabel>
          <AntDesign name={'pluscircleo'} size={RFValue(16)} />
        </QunatityOptionView>
        <TextView>
          <TotalPriceText>{quantity * price}원</TotalPriceText>
        </TextView>
      </MenuOptionView>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: ${hp(12)}px;

  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: #002b85;
`;

const MenuImageView = styled.View`
  width: 25%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const MenuOptionView = styled.View`
  width: 75%;
  height: 90%;

  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MenuLabel = styled.Text`
  color: #002b85;
  font-size: ${RFValue(18)}px;
  width: 93%;
  font-weight: 700;
`;

const QunatityOptionView = styled.View`
  margin-top: ${hp(2)}px;
  margin-right: auto;

  width: 40%;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;

const QuantityLabel = styled.Text`
  color: #002b85;
  font-size: ${RFValue(16)}px;
  font-weight: 700;
`;

const TextView = styled.View`
  margin-top: ${hp(2)}px;
`;

const TotalPriceText = styled.Text`
  color: #002b85;
  font-size: ${RFValue(16)}px;
  font-weight: 700;
`;
