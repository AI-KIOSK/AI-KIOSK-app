import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

const MenuCard = ({ img, label, price }) => {
  return (
    <Container>
      <MenuImage source={{ uri: `data:image/png;base64,${img}` }} />
      <TextWrapper>
        <MenuName>{label}</MenuName>
      </TextWrapper>
      <TextWrapper>
        <Price>{price.toLocaleString()}원</Price>
      </TextWrapper>
    </Container>
  );
};

MenuCard.propTypes = {
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
  label: PropTypes.string,
  price: PropTypes.number,
};

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-content: space-around;

  width: ${wp(20)}px;
  height: ${hp(16)}px;

  padding: ${RFValue(4)}px;
  border-radius: ${RFValue(6)}px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${({ theme }) => `
    background: ${theme.colors.chanpagneBeige};
    `}
`;

const MenuImage = styled.Image`
  width: 100%;
  height: 65%;

  object-fit: contain;
  border-radius: ${wp(2)}px;
`;

const TextWrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const MenuName = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: 600;
`;

const Price = styled.Text`
  font-size: ${RFValue(9)}px;
`;

export default MenuCard;
