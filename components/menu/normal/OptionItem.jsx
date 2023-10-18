import ProgressBar from '@components/common/ProgressBar';
import { useOrder } from '@hooks/useOrder';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

const OptionItem = ({ id, label, options }) => {
  const { handleSelectMenu } = useOrder();
  const [currentStep, setCurrentStep] = useState(0);

  const onPressBar = (value, index) => {
    console.log(value);
    handleSelectMenu(id, value);
    setCurrentStep(index);
  };
  return (
    <Container>
      <LabelContainer>
        <OptionLabel>{label}</OptionLabel>
      </LabelContainer>
      <OptionSection>
        <ProgressBar target={options} totalStep={options.length} currentStep={currentStep} onPress={onPressBar} />
      </OptionSection>
    </Container>
  );
};

OptionItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
};

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const LabelContainer = styled.View`
  width: 25%;

  align-items: flex-start;
  justify-content: center;
`;

const OptionLabel = styled.Text`
  font-size: ${RFValue(13)}px;
  font-weight: bold;
`;

const OptionSection = styled.View`
  width: 75%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  padding: ${wp(1)}px;
`;

export default OptionItem;
