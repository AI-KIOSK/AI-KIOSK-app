import React from 'react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

MenuIcon.propTypes = {
  image: PropTypes.number,
  label: PropTypes.string,
};

function MenuIcon({ image, label }) {
  return (
    <Container>
      <MenuImage source={image} />
      <Label>{label}</Label>
    </Container>
  );
}

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const MenuImage = styled.Image`
  width: ${wp(12)}px;
  height: ${wp(12)}px;
`;

const Label = styled.Text`
  color: #154d93;
  margin-top: ${RFValue(4)}px;
  font-size: ${RFValue(8)}px;
  font-weight: 700;
`;

export default MenuIcon;
