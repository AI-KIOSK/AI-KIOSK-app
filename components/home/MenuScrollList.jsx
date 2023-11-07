import { MenuCard } from '@components/menu/common';
import { useModal } from '@hooks/useModal';
import { useFetch } from '@hooks/useFecth';
import useMenu from '@hooks/useMenu';
import { fetchMenus } from 'api/fetch';
import React, { useMemo } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components';

function MenuScrollList() {
  const { openModal } = useModal('menuSelectModal');
  const { isLoading, data } = useFetch(fetchMenus);
  const { category, selectMenu } = useMenu();

  const filteredMenu = useMemo(() => data.filter((item) => item.category.category === category), [category, data]);

  const handleChooseMenu = (menu) => {
    selectMenu(menu);
    openModal();
  };

  return isLoading ? (
    <Container>
      <ActivityIndicator size={'large'} color={'black'} />
    </Container>
  ) : (
    <Container>
      <ListWrapper>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          numColumns={4}
          data={filteredMenu}
          renderItem={({ item }) => (
            <CardWrapper onPress={() => handleChooseMenu(item)} key={item.id}>
              <MenuCard img={item.img} label={item.name} price={item.price} />
            </CardWrapper>
          )}
        />
      </ListWrapper>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;

  width: 100%;
  height: 75%;
`;

const ListWrapper = styled.View``;

const CardWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 25%;
  min-height: ${hp(20)}px;
`;

export default MenuScrollList;
