import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

MenuIcon.propTypes = {
  label: PropTypes.string,
  quantity: PropTypes.number,
  image: PropTypes.string.isRequired,
};

function MenuIcon({ image, label, quantity }) {
  return (
    <Container>
      <MenuImage source={{ url: `data:image/png;base64,${image}` }} resizeMode={'contain'} />
      <Label>
        {label} {quantity !== undefined && `${quantity}개`}
      </Label>
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
  margin-top: ${RFValue(4)}px;
  font-size: ${RFValue(8)}px;
  font-weight: 700;
`;

export default MenuIcon;
