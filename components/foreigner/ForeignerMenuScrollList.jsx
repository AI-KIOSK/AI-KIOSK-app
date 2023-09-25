import MenuIcon from '@components/common/MenuIcon';
import { useModal } from '@hooks/common';
import format from 'pretty-format';
import PropTypes from 'prop-types';
import React from 'react';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components';

ForeignerMenuScrollList.propTypes = {
  filteredItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      recommendation: PropTypes.string,
      img: PropTypes.number,
      price: PropTypes.number,
    }),
  ),
};

function ForeignerMenuScrollList({ filteredItemRec, filteredItem }) {
  const { openModal } = useModal('menuSelectModal');

  return (
    <Container>
      <ListContainer>
        <Title> recommendation menu</Title>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          numColumns={4}
          data={filteredItemRec}
          renderItem={({ item }) => (
            <Menu onPress={openModal} key={item.id}>
              <MenuIcon image={item.img} label={item.nameEng} />
            </Menu>
          )}
        />
        <Title> normal menu</Title>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          numColumns={4}
          data={filteredItem}
          renderItem={({ item }) => (
            <Menu onPress={openModal} key={item.id}>
              <MenuIcon image={item.img} label={item.nameEng} />
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
  width: 100%;
`;

const Menu = styled.TouchableOpacity`
  width: 25%;
  min-height: ${hp(20)}px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  margin-left: 20px;
  font-size: ${RFValue(20)}px;
  font-weight: 700;
`;

export default ForeignerMenuScrollList;
