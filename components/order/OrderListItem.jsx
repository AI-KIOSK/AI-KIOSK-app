import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styled } from 'styled-components/native';

OrderListItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  onDelete: PropTypes.func,
};

export default function OrderListItem({ name, price, onDelete }) {
  const img = require('@assets/menu/einspanner.jpeg');

  return (
    <Container>
      <MenuImageView>
        <Image style={{ maxWidth: RFValue(60) }} source={img} resizeMode="contain" />
      </MenuImageView>
      <MenuOptionView>
        <NameContainer>
          <MenuLabel>{name}</MenuLabel>
        </NameContainer>
        <AntDesign name={'closesquareo'} size={RFValue(24)} color={'#818181'} onPress={onDelete} />
        <TextView>
          <TotalPriceText>{price}원</TotalPriceText>
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
  border-bottom-color: #000000;
`;

const MenuImageView = styled.View`
  width: 25%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const MenuOptionView = styled.View`
  width: 75%;
  height: 90%;

  align-content: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const NameContainer = styled.View`
  width: 45%;
  justify-content: center;
  align-items: center;
`;

const MenuLabel = styled.Text`
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
  font-size: ${RFValue(16)}px;
  font-weight: 700;
`;

const TextView = styled.View`
  margin-top: ${hp(2)}px;
`;

const TotalPriceText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 700;
`;
