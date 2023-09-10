import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { styled } from 'styled-components';

import SeniorButton from './SeniorButton';

SeniorMenu.propTypes = {
  name: PropTypes.string,
  img: PropTypes.number,
};

function SeniorMenu({ name, img }) {
  const [counter, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(counter + 1);
  };

  const decreaseCounter = () => {
    setCount(counter - 1);
  };

  return (
    <Container>
      <MenuImage source={img} />
      <Info>
        <Name>{name}</Name>
        <TemperatureGroup>
          <SeniorButton label={'따뜻한'} borderColor="#154D93" backColor="#transparent" radius={0} />
          <SeniorButton label={'차가운'} borderColor="#154D93" backColor="#transparent" radius={0} />
        </TemperatureGroup>
        <CounterGroup>
          <Counter>갯수</Counter>
          <CounterButton>
            <CounterButtonText onPress={decreaseCounter}>-</CounterButtonText>
          </CounterButton>
          <Counter>{counter}</Counter>
          <CounterButton>
            <CounterButtonText onPress={increaseCounter}>+</CounterButtonText>
          </CounterButton>
        </CounterGroup>
      </Info>
      <BtnGroup>
        <SeniorButton label={'설명'} borderColor="#154D93" backColor="#DBEDFF" radius={10} />
        <SeniorButton label={'맞춤선택'} borderColor="#154D93" backColor="#DBEDFF" radius={10} />
      </BtnGroup>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: ${RFValue(10)}px 0;
`;

const MenuImage = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  object-fit: cover;
`;

const Info = styled.View`
  flex: 2;
  flex-direction: column;
  justify-content: space-around;
  margin: ${RFValue(5)}px;
`;

const Name = styled.Text`
  font-size: ${RFValue(20)}px;
  text-align: center;
  font-weight: bold;
  color: #002b85;
`;

const TemperatureGroup = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  gap: ${RFValue(5)}px;
  margin: 0;
  padding: ${RFValue(3)}px ${RFValue(20)}px;
  height: ${RFValue(20)}px;
`;

const CounterGroup = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: ${RFValue(3)}px ${RFValue(15)}px;
  height: ${RFValue(15)}px;
`;

const Counter = styled.Text`
  color: #154d93;
  font-size: ${RFValue(15)}px;
  font-weight: bold;
`;

const CounterButton = styled.TouchableOpacity`
  width: ${RFValue(26)}px;
  height: ${RFValue(26)}px;
  border-width: 2px;
  border-color: #154d93;
  border-radius: ${RFValue(13)}px;
  align-items: center;
  padding: 0;
`;

const CounterButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: #000;
`;

const BtnGroup = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
  gap: ${RFValue(10)}px;
`;

export default SeniorMenu;
