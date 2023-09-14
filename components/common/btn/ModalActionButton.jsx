import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

ModalActionButton.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onPress: PropTypes.func,
  color: PropTypes.string,
};

function ModalActionButton({ title, width, height, onPress, color }) {
  let backgroundColor;
  let fontColor;
  let borderColor;

  switch (color) {
    case 'seniorConfirm':
      backgroundColor = '#f06e31';
      fontColor = '#000000'; // 흰색
      borderColor = '#998a75';
      break;
    case 'seniorNormal':
      backgroundColor = '#ebd3b5';
      fontColor = '#000000'; // 검정색
      borderColor = '#998a75';
      break;
    case 'cancel':
      backgroundColor = '#abc4aa';
      fontColor = '#000000'; // 검정색
      borderColor = '#f3deba';
      break;
    default:
      backgroundColor = '#675D50'; // 기본값
      fontColor = '#ffffff'; // 흰색
      borderColor = '#f3deba';
  }

  return (
    <Container
      width={width}
      height={height}
      onPress={onPress}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
    >
      <Title style={{ color: fontColor }}>{title}</Title>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  border-width: 3px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  ${({ width, height, borderColor, backgroundColor }) => `
    width: ${width}px;
    height: ${height}px;
    background: ${backgroundColor};
    border-color: ${borderColor};
  `}
`;

const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: 700;
`;

export default ModalActionButton;
