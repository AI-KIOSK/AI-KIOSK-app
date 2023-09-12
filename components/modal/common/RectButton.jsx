import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
