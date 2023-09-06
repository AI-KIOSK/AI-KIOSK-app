import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { styled } from 'styled-components';
import SeniorButton from './SeniorButton';

function SeniorSubInfo({ onNextPage, onPrevPage }) {
  return (
    <Container>
      <SeniorButton label={'이전'} borderColor="#154D93" backColor="#DBEDFF" radius={23} onPress={onPrevPage} />
      <SeniorButton label={'담은 상품보기'} borderColor="#154D93" backColor="#DBEDFF" radius={23} />
      <SeniorButton label={'다음'} borderColor="#154D93" backColor="#DBEDFF" radius={23} onPress={onNextPage} />
    </Container>
  );
}

const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding: ${RFValue(20)}px;
    gap: ${RFValue(30)}px;
    background-color: #DBEDFF;
`

export default SeniorSubInfo;