import MenuIcon from '@components/common/MenuIcon';
import { useModal } from '@hooks/common';
import PropTypes from 'prop-types';
import React from 'react';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components';

MenuScrollList.propTypes = {
  filteredItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      img: PropTypes.number,
      price: PropTypes.number,
    }),
  ),
};

function MenuScrollList({ filteredItem }) {
  const { openModal } = useModal('menuSelectModal');

  return (
    <Container>
      <ListContainer>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          numColumns={4}
          data={filteredItem}
          renderItem={({ item }) => (
            <Menu onPress={openModal} key={item.id}>
              <MenuIcon image={item.img} label={item.name} />
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
  border: 1px;
`;

const Menu = styled.TouchableOpacity`
  width: 25%;
  min-height: ${hp(20)}px;
  align-items: center;
  justify-content: center;
`;

export default MenuScrollList;
