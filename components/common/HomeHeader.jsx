import React, { useMemo } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import styled from 'styled-components';

function HomeHeader(props) {
  const menuItems = useMemo(
    () => [
      {
        id: 'coffee',
        menu: '커피',
      },
      {
        id: 'non-coffee',
        menu: '논커피',
      },
      {
        id: 'smoothie',
        menu: '스무디',
      },
      {
        id: 'tea',
        menu: '티',
      },
      {
        id: 'etc',
        menu: '그외',
      },
    ],
    [],
  );

  return (
    <Container>
      <Entypo name="home" size={RFValue(30)} color={'black'} />
      {menuItems.map((item) => (
        <Button key={item.id}>
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

  background-color: #dbedff;

  width: ${wp(12)}px;
  height: ${hp(4)}px;
  border-radius: 30px;
`;

const Label = styled.Text`
  font-size: ${RFValue(10)}px;
`;

export default HomeHeader;
