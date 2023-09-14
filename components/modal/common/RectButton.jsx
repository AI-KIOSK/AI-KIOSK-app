import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components';

RectButton.propTypes = {
  text: PropTypes.string,
  fontColor: PropTypes.string,
  backColor: PropTypes.string,
  onPress: PropTypes.func,
};

function RectButton({ text, fontColor, backColor, onPress }) {
  return (
    <Button backColor={backColor} fontColor={fontColor} onPress={onPress}>
      <ButtonText fontColor={fontColor}>{text}</ButtonText>
    </Button>
  );
}

const Button = styled.TouchableOpacity`
  border-width: 3px;
  height: ${hp(6)}px;
  width: ${wp(25)}px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border-color: ${(props) => props.backColor};
  background-color: ${(props) => props.backColor};
`;

const ButtonText = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(20)}px;
  color: ${(props) => props.fontColor};
`;

export default RectButton;
