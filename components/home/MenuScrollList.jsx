import MenuIcon from '@components/common/MenuIcon';
import { useModal } from '@hooks/common';
import { useFetch } from '@hooks/fetch';
import { fetchMenus } from 'api/fetch';
import format from 'pretty-format';
import React, { useMemo } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Category } from 'recoil/Category';
import { chosenMenuInfoSelector } from 'recoil/menu/selector';
import styled from 'styled-components';

function MenuScrollList() {
  const { openModal } = useModal('menuSelectModal');

  const chooseMenu = useSetRecoilState(chosenMenuInfoSelector);

  /** 헤더에서 선택한 카테고리 */
  const category = useRecoilValue(Category);
  /** 메뉴들 불러오기 */
  const { isLoading, data } = useFetch(fetchMenus);
  /** 불러온 메뉴 카테고리에 따라 필터링하기 */
  const filteredMenu = useMemo(
    () => data.filter((item) => category === 0 || item.category.id === category),
    [category, data],
  );

  const handleChooseMenu = (menu) => {
    chooseMenu(menu);
    openModal();
  };

  if (isLoading) return <ActivityIndicator size={'small'} color={'black'} />;

  return (
    <Container>
      <ListContainer>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          numColumns={4}
          data={filteredMenu}
          renderItem={({ item }) => (
            <Menu onPress={() => handleChooseMenu(item)} key={item.id}>
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
`;

const Menu = styled.TouchableOpacity`
  width: 25%;
  min-height: ${hp(20)}px;
  align-items: center;
  justify-content: center;
`;

export default MenuScrollList;
