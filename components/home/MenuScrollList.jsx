import MenuIcon from '@components/common/MenuIcon';
import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components';

function MenuScrollList(props) {
  const menuItems = useMemo(
    () => [
      {
        id: 'americano',
        name: '아메리카노',
        img: require('@assets/menu/americano.jpeg'),
        price: 2500,
      },
      {
        id: 'cafemoca',
        name: '카페모카',
        img: require('@assets/menu/cafemoca.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte',
        name: '바닐라라떼',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
      {
        id: 'cafelatte',
        name: '카페라떼',
        img: require('@assets/menu/cafelatte.jpeg'),
        price: 4000,
      },
      {
        id: 'einspanner',
        name: '아인슈페너',
        img: require('@assets/menu/einspanner.jpeg'),
        price: 5000,
      },
      {
        id: 'hazelnutlatte',
        name: '헤이즐넛 라떼',
        img: require('@assets/menu/hazelnutlatte.jpeg'),
        price: 4500,
      },
    ],
    [],
  );

  return (
    <Container>
      <ListContainer>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          numColumns={4}
          data={menuItems}
          renderItem={({ item }) => (
            <Menu>
              <MenuIcon key={item.id} image={item.img} label={item.name} />
            </Menu>
          )}
        />
      </ListContainer>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 75%;

  justify-content: space-around;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ListContainer = styled.View`
  height: 100%;
`;

const MenuImgae = styled.Image`
  width: ${wp(12)}px;
  height: ${wp(12)}px;
`;

const Menu = styled.TouchableOpacity`
  width: 25%;
  min-height: ${hp(20)}px;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text`
  color: #154d93;
  padding-top: ${RFValue(12)}px;
  font-size: ${RFValue(12)}px;
  font-weight: 600;
`;

export default MenuScrollList;
