import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRecoilValue } from 'recoil';
import { onForeigner } from 'recoil/common/Foreigner';
import { styled } from 'styled-components/native';

MenuIcon.propTypes = {
  label: PropTypes.string,
  quantity: PropTypes.number,
  image: PropTypes.string.isRequired,
};

function MenuIcon({ image, label, quantity }) {
  const img = require('@assets/menu/cafelatte.jpeg');
  const isForeigner = useRecoilValue(onForeigner);

  return (
    <Container>
      <MenuImage source={{ uri: image }} />

      {isForeigner ? (
        quantity === 1 ? (
          <Label>
            {label} {quantity !== undefined && `${quantity} Cup`}
          </Label>
        ) : (
          <Label>
            {label} {quantity !== undefined && `${quantity} Cups`}
          </Label>
        )
      ) : (
        <Label>
          {label} {quantity !== undefined && `${quantity}개`}
        </Label>
      )}
    </Container>
  );
}

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const MenuImage = styled.Image`
  object-fit: cover;
  width: ${wp(13)}px;
  height: ${wp(13)}px;
`;

const Label = styled.Text`
  font-size: ${RFValue(8)}px;
  font-family: SCDream6;
`;

export default MenuIcon;
