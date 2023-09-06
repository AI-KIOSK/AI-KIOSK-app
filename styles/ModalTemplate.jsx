import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components';

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
  margin-top: 10%;
  width: ${wp(80)}px;
  height: ${hp(80)}px;
  background-color: white;
  border-color: #002b85;
  border-width: 5px;
`;

export default ModalTemplate;
