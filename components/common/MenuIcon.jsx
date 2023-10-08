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

  // console.log(`menuIcon ${label}`);

  return (
    <Container>
      {image !== undefined ? (
        <MenuImage source={{ uri: `data:image/png;base64,${image}` }} />
      ) : (
        <MenuImage source={img} />
      )}
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
  width: ${wp(12)}px;
  height: ${wp(12)}px;
`;

const Label = styled.Text`
  margin-top: ${RFValue(4)}px;
  font-size: ${RFValue(8)}px;
  font-weight: 700;
`;

export default MenuIcon;
