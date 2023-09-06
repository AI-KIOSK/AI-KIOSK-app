import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import SeniorMenu from './SeniorMenu';
import { RFValue } from 'react-native-responsive-fontsize';

function SeniorMenuList({currentPage, menuItemsToShow}) {
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
