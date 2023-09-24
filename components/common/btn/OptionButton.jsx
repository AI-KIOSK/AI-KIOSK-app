// OptionButton.js
import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRecoilState } from 'recoil';
import { OptionList } from 'recoil/menu/OptionList'; // 예시로 만든 상태
import { styled } from 'styled-components/native';

OptionButton.propTypes = {
  option: PropTypes.string.isRequired,
  label: PropTypes.string,
  num: PropTypes.number,
};

export default function OptionButton({ option, label, num }) {
  const [optionList, setOptionList] = useRecoilState(OptionList);
  const isSelected =
    optionList[option] === (option === 'pump' || option === 'shots' || option === 'whippings' ? num : label);

  const pressHandler = (key) => {
    if (['pump', 'shots', 'whippings'].includes(option)) {
      setOptionList((prevOptionList) => ({
        ...prevOptionList,
        [key]: num,
      }));
    } else {
      setOptionList((prevOptionList) => ({
        ...prevOptionList,
        [key]: label,
      }));
    }
    console.log(optionList);
  };

  return (
    <Container isSelected={isSelected} onPress={() => pressHandler(option)}>
      <ButtonText>{label}</ButtonText>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: ${wp(13)}px;
  height: ${hp(3)}px;
  border-radius: ${wp(13)}px;

  border: 2px solid ${({ isSelected }) => (isSelected ? '#FEC3C4' : '#ebd3b5')};
  background-color: ${({ isSelected }) => (isSelected ? '#FEC3C4' : 'transparent')};
`;

const ButtonText = styled.Text`
  font-size: ${RFValue(11)}px;
  color: ${({ isSelected }) => (isSelected ? 'black' : 'black')};
`;
