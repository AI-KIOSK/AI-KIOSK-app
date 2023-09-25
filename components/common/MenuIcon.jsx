import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components';

MenuIcon.propTypes = {
  image: PropTypes.number,
  label: PropTypes.string,
  quantity: PropTypes.number,
};

function MenuIcon({ image, label, quantity }) {
  return (
    <Container>
      <MenuImage source={{ url: `data:image/png;base64,${image}` }} />
      <Label>
        {label} {quantity !== undefined && `${quantity}개`}
      </Label>
    </Container>
  );
}

const Container = styled.View`
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const MenuImage = styled.Image`
  width: ${wp(12)}px;
  height: ${wp(12)}px;
  border-radius: 8px;
`;

const Label = styled.Text`
  margin-top: ${RFValue(4)}px;
  font-size: ${RFValue(8)}px;
  font-weight: 700;
`;

export default MenuIcon;
