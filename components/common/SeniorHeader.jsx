import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import { useRecoilState } from 'recoil';
import { Category, ModalTemperature, Temperature } from 'recoil/Category';
import styled from 'styled-components';

function SeniorHeader(props) {
  const menuItems = useMemo(
    () => [
      {
        id: 1,
        menu: '커피',
      },
      {
        id: 2,
        menu: '음료',
      },
      {
        id: 3,
        menu: '차',
      },
      {
        id: 4,
        menu: '기타',
      },
    ],
    [],
  );

  const temperatureItems = useMemo(
    () => [
      {
        id: 'HOT',
        menu: '따뜻한거',
      },
      {
        id: 'ICE',
        menu: '차가운거',
      },
    ],
    [],
  );

  const [category, setCategory] = useRecoilState(Category);
  const [temperature, setTemperature] = useRecoilState(Temperature);
  const [modalTemperature, setModalTemperature] = useRecoilState(ModalTemperature);
  const { navigate } = useNavigation();

  const categoryHandler = (id) => {
    setCategory(id);
  };

  const temperatureHandler = (id) => {
    setTemperature(id);
    setModalTemperature(id);
  };

  return (
    <Container>
      <Entypo name="home" size={RFValue(30)} color={'black'} onPress={() => navigate('information')} />
      <CategoryContainer>
        <TemperatureCategory>
          {temperatureItems.map((item) => (
            <TemperatureButton
              key={item.id}
              onPress={() => temperatureHandler(item.id)}
              isSelected={temperature === item.id}
              temperature={temperature}
            >
              <Label>{item.menu}</Label>
            </TemperatureButton>
          ))}
        </TemperatureCategory>
        <ItemCategory>
          {menuItems.map((item) => (
            <Button
              key={item.id}
              onPress={() => categoryHandler(item.id)}
              isSelected={category === item.id}
              temperature={temperature}
            >
              <Label>{item.menu}</Label>
            </Button>
          ))}
        </ItemCategory>
      </CategoryContainer>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: ${hp(16)}px;
`;

const CategoryContainer = styled.View`
  flex-direction: column;
  width: 80%;
`;

const TemperatureCategory = styled.View`
  width: 100%;
  height: 30%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ItemCategory = styled(TemperatureCategory)``;

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  background-color: ${({ isSelected, temperature }) =>
    isSelected ? (temperature === 'ICE' ? '#5096ff' : '#f29727') : 'transparent'};
  width: ${wp(16)}px;
  height: ${hp(4)}px;
  border: 1px;
  border-radius: 12px;
`;

const TemperatureButton = styled(Button)`
  width: ${wp(28)}px;
`;

const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;

export default SeniorHeader;
