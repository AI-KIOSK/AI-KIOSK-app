import { ModalOptionButton } from '@components/common/btn';
import { useOrder } from '@hooks/order';
import React, { Fragment, useMemo } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRecoilValue } from 'recoil';
import { chosenMenuInfo } from 'recoil/menu/atom';
import styled from 'styled-components/native';

export default function PaidOption() {
  const menuFeatures = useRecoilValue(chosenMenuInfo);

  const { order, handleSelectMenu } = useOrder();

  const shots = useMemo(
    () => [
      {
        label: '1회 추가',
        value: 1,
      },
      {
        label: '2회 추가',
        value: 2,
      },
      {
        label: '3회 추가',
        value: 3,
      },
    ],
    [],
  );
  const whippings = useMemo(
    () => [
      {
        label: '1회 추가',
        value: 1,
      },
      {
        label: '2회 추가',
        value: 2,
      },
      {
        label: '3회 추가',
        value: 3,
      },
    ],
    [],
  );
  return (
    <Container>
      <LabelContainer>
        <OptionLabel>샷</OptionLabel>
      </LabelContainer>
      <OptionSection>
        {shots.map((item, index) => (
          <ButtonContainer key={index}>
            <ModalOptionButton
              label={item.label}
              onPress={() => handleSelectMenu('shots', item.value)}
              highlight={order.shots === item.value}
            />
          </ButtonContainer>
        ))}
      </OptionSection>
      {menuFeatures.whipping && (
        <Fragment>
          <LabelContainer>
            <OptionLabel>휘핑크림</OptionLabel>
          </LabelContainer>
          <OptionSection>
            {whippings.map((item, index) => (
              <ButtonContainer key={index}>
                <ModalOptionButton
                  label={item.label}
                  onPress={() => handleSelectMenu('whippings', item.value)}
                  highlight={order.whippings === item.value}
                />
              </ButtonContainer>
            ))}
          </OptionSection>
        </Fragment>
      )}
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
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

const ButtonContainer = styled.View`
  margin-right: ${wp(2)}px;
`;
