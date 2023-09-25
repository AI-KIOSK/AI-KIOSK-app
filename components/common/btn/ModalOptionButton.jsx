import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

ModalOptionButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  highlight: PropTypes.bool,
};

export default function ModalOptionButton({ label, onPress, highlight }) {
  return (
    <Container onPress={onPress} highlight={highlight}>
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

  border: 2px solid ${({ highlight }) => (highlight ? 'red' : '#ebd3b5')};
`;

const ButtonText = styled.Text`
  font-size: ${RFValue(11)}px;
  color: ${({ highlight }) => (highlight ? 'black' : 'black')};
`;
