import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

MenuOptionList.propTypes = {
  label: PropTypes.string.isRequired,
};
export default function MenuOptionList({ label, data }) {
  return (
    <Container>
      <Label>{label}</Label>
      <HorizontalLine />
      <OptionList />
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 30%;

  flex-direction: row;
  flex-wrap: wrap;

  padding: ${wp(2)}px;
`;

const Label = styled.Text`
 
  font-size: ${RFValue(18)}px;
  font-weight: 700;
`;

const HorizontalLine = styled.View`
  width: 100%;
  height: 1px;

  margin-vertical: ${hp(1)}px;
  background: #000000;
`;

const OptionList = styled.ScrollView``;
