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

  justify-content: center;
  align-items: center;

  ${({ width, height }) => `
    width: ${width}px;
    height: ${height}px;
  `}

  ${({ color }) =>
    color === 'red'
      ? `
    background: #FEF4F4;
    border-color: #FFA3A3;
  `
      : `
    background: #DBEDFF;
    border-color: #002B85;
  `}
`;

const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: 700;
  ${({ color }) =>
    color === 'red'
      ? `
      color: #FEC3C3;
  `
      : `
      color: #002B85;
  `}
`;

export default ModalActionButton;
