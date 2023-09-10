import PropTypes from 'prop-types';
import React from 'react';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components';

import SeniorMenu from './SeniorMenu';

SeniorMenuList.propTypes = {
  menuItemsToShow: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.number,
      price: PropTypes.number,
    }),
  ),
};

function SeniorMenuList({ menuItemsToShow }) {
  return (
    <Container>
      <ListContainer>
        <FlatList
          numColumns={1}
          data={menuItemsToShow}
          renderItem={({ item }) => <SeniorMenu key={item.id} img={item.img} name={item.name} />}
        />
      </ListContainer>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 75%;
  justify-content: center;
  align-items: center;
  padding: 0px ${RFValue(10)}px;
`;

const ListContainer = styled.View`
  height: 100%;
`;

export default SeniorMenuList;
