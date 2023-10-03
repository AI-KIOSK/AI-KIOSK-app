import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

import OptionItem from './OptionItem';

OptionList.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        }),
      ),
    }),
  ),
};

export default function OptionList({ type, data }) {
  return (
    <Container>
      <Label>{type}</Label>
      <HorizontalLine />
      {data.map((item, index) => (
        <OptionItem id={data.id} key={index} label={item.label} options={item.options} />
      ))}
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
