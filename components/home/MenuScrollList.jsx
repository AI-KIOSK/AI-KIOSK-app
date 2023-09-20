import MenuIcon from '@components/common/MenuIcon';
import { useModal } from '@hooks/common';
import PropTypes from 'prop-types';
import React from 'react';
import { FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components';

MenuScrollList.propTypes = {
  filteredItem: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.object,
      hotOrIced: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      whipping: PropTypes.bool,
    }),
  ),
};

function MenuScrollList({ filteredItem }) {
  const { openModal } = useModal('menuSelectModal');
  const img = require('@assets/menu/cafelatte.jpeg');

  return (
    <Container>
      <ListContainer>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          numColumns={4}
          data={filteredItem}
          renderItem={({ item }) => (
            <Menu onPress={openModal} key={item.id}>
              <MenuIcon image={img} label={item.name} />
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

export default MenuScrollList;
