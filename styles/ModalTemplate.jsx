import PropTypes from 'prop-types';
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components';

ModalTemplate.propTypes = {
  children: PropTypes.node,
};

function ModalTemplate({ children }) {
  return (
    <FullSCreen>
      <Container>{children}</Container>
    </FullSCreen>
  );
}

const FullSCreen = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  width: ${wp(80)}px;
  height: ${hp(90)}px;
  background-color: white;
  border-color: #abc4aa;
  border-width: 5px;
  border-radius: 8px;
`;

export default ModalTemplate;
