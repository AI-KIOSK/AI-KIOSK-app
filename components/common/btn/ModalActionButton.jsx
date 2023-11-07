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
  return (
    <Container width={width} height={height} onPress={onPress} color={color}>
      <Title color={color}>{title}</Title>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  border-width: 3px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  ${({ color }) => {
    switch (color) {
      case 'seniorConfirm':
        return `
          background-color: #f06e31;
          border-color: #998a75;
        `;
      case 'seniorNormal':
        return `
          background-color: #ebd3b5;
          border-color: #998a75;
        `;
      case 'cancel':
        return `
          background-color: #abc4aa;
          border-color:#f3deba;
        `;
      default:
        return `
          background-color: #675D50;
          border-color:#f3deba;
        `;
    }
  }}

  ${({ width, height, color }) => `
    width: ${width}px;
    height: ${height}px;
    
  `}
`;

const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: SCDream6;

  ${({ color }) => {
    switch (color) {
      case 'seniorConfirm':
        return `
          color: #000;
        `;
      case 'seniorNormal':
        return `
          color: #000;
        `;
      case 'cancel':
        return `
          color: #000;
        `;
      default:
        return `
          color: #fff;
        `;
    }
  }}
`;

export default ModalActionButton;
