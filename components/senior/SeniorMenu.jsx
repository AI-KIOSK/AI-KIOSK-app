import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { styled } from 'styled-components';

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
        <NameContainer>
          <Name>{name}</Name>
        </NameContainer>
        <Button>
          <Label>{'음료 설명'}</Label>
        </Button>
        <Button>
          <Label>{'부가 선택'}</Label>
        </Button>
      </Info>
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
      <AddButton>
        <AddLabel>{'담기'}</AddLabel>
      </AddButton>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 0.33;
  margin: 10px 0px;
`;

const MenuImage = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(130)}px;
  object-fit: cover;
  border-radius: 22px;
`;

const Info = styled.View`
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(10)}px 0px;
`;

const NameContainer = styled.View`
  flex: 3;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

const Name = styled.Text`
  font-size: ${RFValue(18)}px;
  text-align: center;
  font-weight: bold;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  width: 60%;
  border-width: 2px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: #000000;
  border-radius: 20px;
  margin: 10px 0px;
`;

const Label = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: bold;
  color: #000000;
`;

const CounterGroup = styled.View`
  flex: 1.5;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Counter = styled.Text`
  color: #000000;
  font-size: ${RFValue(12)}px;
  font-weight: bold;
`;

const CounterButton = styled.TouchableOpacity`
  width: ${RFValue(22)}px;
  height: ${RFValue(22)}px;
  border-width: 2px;
  border-color: #000000;
  border-radius: ${RFValue(13)}px;
  align-items: center;
  justify-content: center;
`;

const CounterButtonText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  color: #000;
`;

const AddButton = styled(Button)`
  height: 50%;
  flex: 1.2;
  background-color: #d7a86a;
  margin: ${RFValue(10)}px;
`;

const AddLabel = styled(Label)`
  font-size: ${RFValue(18)}px;
`;

export default SeniorMenu;
