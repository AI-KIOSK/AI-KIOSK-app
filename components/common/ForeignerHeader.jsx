import React, { useMemo } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import { useRecoilState } from 'recoil';
import { Category } from 'recoil/Category';
import styled from 'styled-components';

function ForeignerHeader(props) {
  const menuItems = useMemo(
    () => [
      {
        id: 'coffee',
        menu: 'coffee',
      },
      {
        id: 'non_coffee',
        menu: 'non coffee',
      },
      {
        id: 'smoothie',
        menu: 'smoothie',
      },
      {
        id: 'tea',
        menu: 'tea',
      },
      {
        id: 'etc',
        menu: 'etc',
      },
    ],
    [],
  );

  const [category, setCategory] = useRecoilState(Category);

  const categoryHandler = (id) => {
    setCategory(id);
  };

  return (
    <Container>
      <Entypo name="home" size={RFValue(30)} color={'black'} />
      {menuItems.map((item) => (
        <Button key={item.id} onPress={() => categoryHandler(item.id)}>
          <Label>{item.menu}</Label>
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
  background-color: #abc4aa;

  width: ${wp(12)}px;
  height: ${hp(4)}px;
  border-radius: 8px;
`;

const Label = styled.Text`
  font-size: ${RFValue(10)}px;
`;

export default ForeignerHeader;
