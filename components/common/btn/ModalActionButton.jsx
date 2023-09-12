import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

ModalActionButton.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onPress: PropTypes.func,
};

function ModalActionButton({ title, color, width, height, onPress }) {
  return (
    <Container width={width} height={height} color={color} onPress={onPress}>
      <Title color={color}>{title}</Title>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  border-width: 3px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  ${({ width, height }) => `
    width: ${width}px;
    height: ${height}px;
  `}

  ${({ color }) =>
    color === 'cancel'
      ? `
    background: #ABC4AA;
    border-color: #F3DEBA;
  `
      : `
    background: #675D50;
    border-color: #F3DEBA;
  `}
`;

const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: 700;
  ${({ color }) =>
    color === 'cancel'
      ? `
      color: #000000;
  `
      : `
      color: #ffffff;
  `}
`;

export default ModalActionButton;
