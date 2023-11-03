import { MenuCard } from '@components/menu/common';
import { useModal } from '@hooks/common';
import { useFetch } from '@hooks/useFecth';
import useGpt from '@hooks/useGpt';
import useMenu from '@hooks/useMenu';
import { fetchMenus } from 'api/fetch';
import React, { useMemo } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components';

function ForeignerMenuScrollList() {
  const { openModal } = useModal('menuSelectModal');
  const { isLoading: dataLoading, data } = useFetch(fetchMenus);
  const { category, selectMenu } = useMenu();
  const { answer, isLoading: gptLoading } = useGpt();

  const handleChooseMenu = (menu) => {
    selectMenu(menu);
    openModal();
  };

  const filteredMenu = useMemo(() => data.filter((item) => item.category.category === category), [category, data]);
  const filteredRecMenu = useMemo(() => data.filter((item) => answer.includes(item.name)), [answer, data]);

  return (dataLoading || gptLoading) && category === '추천' ? (
    <Container>
      <TitleView>
        <Title>Loading...</Title>
        <ActivityIndicator size={'large'} color={'black'} />
      </TitleView>
    </Container>
  ) : (
    <Container>
      <ListContainer>
        {category === '추천' ? (
          <ListWrapper>
            <FlatList
              contentContainerStyle={{ flexGrow: 1 }}
              numColumns={4}
              data={filteredRecMenu}
              renderItem={({ item }) => (
                <CardWrapper onPress={() => handleChooseMenu(item)} key={item.id}>
                  <MenuCard img={item.img} label={item.nameEng} price={item.price} />
                </CardWrapper>
              )}
            />
          </ListWrapper>
        ) : (
          <ListWrapper>
            <FlatList
              contentContainerStyle={{ flexGrow: 1 }}
              numColumns={4}
              data={filteredMenu}
              renderItem={({ item }) => (
                <CardWrapper onPress={() => handleChooseMenu(item)} key={item.id}>
                  <MenuCard img={item.img} label={item.nameEng} price={item.price} />
                </CardWrapper>
              )}
            />
          </ListWrapper>
        )}
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

const ListWrapper = styled.View``;

const CardWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 25%;
  min-height: ${hp(20)}px;
`;

const ListContainer = styled.View`
  height: 100%;
  width: 100%;
`;

const TitleView = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  margin-bottom: 20px;
  font-size: ${RFValue(20)}px;
  font-weight: 700;
`;

export default ForeignerMenuScrollList;
