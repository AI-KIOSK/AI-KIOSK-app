import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import { HotOrIce } from 'types/menu';

TemperatureOptionButton.propTypes = {
  title: PropTypes.string,
  highlight: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default function TemperatureOptionButton({ title, highlight, onPress, disabled }) {
  const getContainerColor = () => {
    if (highlight && title === HotOrIce.ICE) {
      return '#99eeff'; // ICE 선택 시 파란색
    } else if (highlight && title === HotOrIce.HOT) {
      return '#FEE5E6'; // HOT 선택 시 빨간색
    } else {
      return 'transparent';
    }
  };
  return (
    <Container title={title} onPress={onPress} disabled={disabled} color={getContainerColor()}>
      <ButtonText title={title} disabled={disabled}>
        {title}
      </ButtonText>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: ${wp(13)}px;
  height: ${hp(3)}px;
  border-radius: ${wp(13)}px;
  flex-shrink: 0;

  ${({ color }) =>
    color
      ? `
    background-color: ${color};
  `
      : `
    background-color: #dcdcdc; /* 회색 배경색 */
  `}

  ${({ title }) =>
    title === 'HOT'
      ? `
    border: 3px solid #FEC3C4;
    border-radius: 8px;
  `
      : title === 'ICE'
      ? `
    border: 3px solid #002b85;
    border-radius: 8px;
  `
      : `
    /* 비활성화 스타일 */
    border: none; /* 테두리 없음 */
  `}

  ${({ disabled }) =>
    disabled &&
    `
    border: none;
    background-color: transparent;
    opacity: 0.6; /* 비활성화 상태일 때 투명도 조절 */
  `}
`;

const ButtonText = styled.Text`
  font-size: ${RFValue(13)}px;
  ${({ title }) =>
    title === 'HOT'
      ? `
    color: #FEC3C4;
  `
      : title === 'ICED'
      ? `
    color: #002b85;
  `
      : `
    /* 비활성화 상태일 때 글자색 회색으로 변경 */
    color: #808080;
  `}

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.6; /* 비활성화 상태일 때 투명도 조절 */
  `}
`;
