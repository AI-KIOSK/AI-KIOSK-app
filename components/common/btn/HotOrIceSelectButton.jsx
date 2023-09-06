import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

HotOrIceSelectButton.propTypes = {
  option: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default function HotOrIceSelectButton({ option, onPress }) {
  return (
    <Container option={option} onPress={onPress}>
      <ButtonText option={option}>{option}</ButtonText>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: ${wp(18)}px;
  height: ${hp(4)}px;
  border-radius: ${wp(18)}px;
  flex-shrink: 0;

  ${({ option }) =>
    option === 'HOT'
      ? `
    border: 3px solid #FEC3C4;
  `
      : `
    border: 3px solid #002b85;
  `}
`;

const ButtonText = styled.Text`
  font-size: ${RFValue(18)}px;
  ${({ option }) =>
    option === 'HOT'
      ? `
    color: #FEC3C4;
  `
      : `
    color: #002b85;
  `}
`;