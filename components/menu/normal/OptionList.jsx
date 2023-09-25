import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { OptionTypes } from 'types/menu';

import FreeOption from './FreeOption';
import PaidOption from './PaidOption';

OptionList.propTypes = {
  type: PropTypes.string.isRequired,
};

export default function OptionList({ type }) {
  return (
    <Container>
      <Label>{type}</Label>
      <HorizontalLine />
      {type === OptionTypes.FREE ? <FreeOption /> : <PaidOption />}
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  padding: ${wp(2)}px;
`;

const Label = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 700;
`;

const HorizontalLine = styled.View`
  width: 100%;
  height: 1px;

  margin: ${hp(1)}px 0px;
  background: #000000;
`;
