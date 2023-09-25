import { ModalOptionButton } from '@components/common/btn';
import { useOrder } from '@hooks/order';
import React, { Fragment, useMemo } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useRecoilValue } from 'recoil';
import { chosenMenuInfo } from 'recoil/menu/atom';
import styled from 'styled-components/native';

export default function FreeOption() {
  const menuFeatures = useRecoilValue(chosenMenuInfo);

  const { order, handleSelectMenu } = useOrder();

  const sweetness = useMemo(() => ['보통', '덜 달게'], []);
  const pumps = useMemo(
    () => [
      {
        label: '1번',
        value: 1,
      },
      {
        label: '2번',
        value: 2,
      },
      {
        label: '3번',
        value: 3,
      },
    ],
    [],
  );
  const ice = useMemo(() => ['적게', '보통', '많이'], []);
  const whipping = useMemo(() => ['없이', '적게', '보통', '많이'], []);

  return (
    <Container>
      <LabelContainer>
        <OptionLabel>당도</OptionLabel>
      </LabelContainer>
      <OptionSection>
        {sweetness.map((label, index) => (
          <ButtonContainer key={index}>
            <ModalOptionButton
              label={label}
              onPress={() => handleSelectMenu('sweetness', label)}
              highlight={order.sweetness === label}
            />
          </ButtonContainer>
        ))}
      </OptionSection>
      <LabelContainer>
        <OptionLabel>펌프</OptionLabel>
      </LabelContainer>
      <OptionSection>
        {pumps.map((item, index) => (
          <ButtonContainer key={index}>
            <ModalOptionButton
              label={item.label}
              onPress={() => handleSelectMenu('pump', item.value)}
              highlight={order.pump === item.value}
            />
          </ButtonContainer>
        ))}
      </OptionSection>
      <LabelContainer>
        <OptionLabel>얼음</OptionLabel>
      </LabelContainer>
      <OptionSection>
        {ice.map((label, index) => (
          <ButtonContainer key={index}>
            <ModalOptionButton
              label={label}
              onPress={() => handleSelectMenu('iceAmount', label)}
              highlight={order.iceAmount === label}
            />
          </ButtonContainer>
        ))}
      </OptionSection>

      {menuFeatures.whipping && (
        <Fragment>
          <LabelContainer>
            <OptionLabel>휘핑</OptionLabel>
          </LabelContainer>
          <OptionSection>
            {whipping.map((label, index) => (
              <ButtonContainer key={index}>
                <ModalOptionButton
                  label={label}
                  onPress={() => handleSelectMenu('whippingAmount', label)}
                  highlight={order.whippingAmount === label}
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

const ButtonContainer = styled.View`
  margin-right: ${wp(2)}px;
  margin-bottom: ${hp(0.8)}px;
`;
