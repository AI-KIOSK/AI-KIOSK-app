import { MenuCard } from '@components/menu/common';
import { useModal } from '@hooks/common';
import { useFetch } from '@hooks/useFecth';
import useMenu from '@hooks/useMenu';
import { fetchMenus } from 'api/fetch';
import React, { useMemo } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components';

function YoungmanMenuScrollList() {
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
      <ListContainer>
        <RecommendContainer>
          <Title> recommendation menu</Title>
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            numColumns={4}
            data={data}
            renderItem={({ item }) => (
              <CardWrapper onPress={() => handleChooseMenu(item)} key={`recommend${item.id}`}>
                <MenuCard img={item.img} label={item.name} price={item.price} />
              </CardWrapper>
            )}
          />
        </RecommendContainer>
        <NormalContainer>
          <Title> normal menu</Title>
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
        </NormalContainer>
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

const RecommendContainer = styled.View`
  height: 35%;
`;
const NormalContainer = styled.View`
  height: 65%;
`;

const CardWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 25%;
  min-height: ${hp(20)}px;
`;

const Title = styled.Text`
  margin-left: 20px;
  font-size: ${RFValue(20)}px;
  font-weight: 700;
`;

export default YoungmanMenuScrollList;
