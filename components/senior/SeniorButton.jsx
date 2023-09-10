import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components';

SeniorButton.propTypes = {
  label: PropTypes.string,
  borderColor: PropTypes.string,
  backColor: PropTypes.string,
  radius: PropTypes.number,
  onPress: PropTypes.func,
};

/**
 *
 * @param label
 * @param borderColor
 * @param backColor
 * @param radius
 * @description SeniorHome에서 사용되는 버튼.
 *              테두리와 배경색을 borderColor, backColor로 받습니다.
 *              버튼에 출력될 문자는 label로 받습니다.
 *              테두리의 둥근 정도를 radius(px단위)로 받습니다.
 */
function SeniorButton({ label, borderColor = 'black', backColor = 'white', radius, onPress }) {
  const borderRadius = RFValue(radius);
  return (
    <Button backColor={backColor} borderColor={borderColor} radius={borderRadius} onPress={onPress}>
      <Label borderColor={borderColor}>{label}</Label>
    </Button>
  );
}

const Button = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  border-width: 2px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backColor};
  border-color: ${(props) => props.borderColor};
  border-radius: ${(props) => props.radius}px;
`;

const Label = styled.Text`
  padding: ${RFValue(5)}px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: ${(props) => props.borderColor};
`;

export default SeniorButton;
