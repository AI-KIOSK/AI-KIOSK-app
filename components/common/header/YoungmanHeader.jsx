import useCategory from '@hooks/useCategory';
import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import styled from 'styled-components';
import { CategoryTypes } from 'types/category';

function YoungmanHeader() {
  const { category, onPressCategory } = useCategory();

  const navigation = useNavigation();
  const menuItems = useMemo(
    () => [
      {
        id: 1,
        label: CategoryTypes.RECOMMENDED,
      },
      {
        id: 2,
        label: CategoryTypes.COFFEE,
      },
      {
        id: 3,
        label: CategoryTypes.NON_COFFEE,
      },
      {
        id: 4,
        label: CategoryTypes.TEA,
      },
      {
        id: 5,
        label: CategoryTypes.SMOOTHE,
      },
    ],
    [],
  );

  return (
    <Container>
      <Entypo
        name="home"
        size={RFValue(30)}
        color={'black'}
        onPress={() => navigation.reset({ routes: [{ name: 'information' }] })}
      />
      {menuItems.map((item) => (
        <Button key={item.id} onPress={() => onPressCategory(item.label)} highlight={category === item.label}>
          <Label>{item.label}</Label>
        </Button>
      ))}
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: ${hp(12)}px;
`;

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  ${({ theme, highlight }) =>
    highlight
      ? `
    background-color: ${theme.colors.lavenderMist};
  `
      : `
    border: 1px solid black;
  `}

  width: ${wp(12)}px;
  height: ${hp(4)}px;
  border-radius: ${RFValue(6)}px;
`;

const Label = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: SCDream6;
`;

export default YoungmanHeader;
