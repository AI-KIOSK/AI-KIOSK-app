import { MenuCard } from '@components/menu/common';
import { useModal } from '@hooks/common';
import { useFetch } from '@hooks/useFecth';
import useMenu from '@hooks/useMenu';
import { fetchMenus } from 'api/fetch';
import { testGPT } from 'api/gpt';
import format from 'pretty-format';
import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components';

function ForeignerMenuScrollList() {
  const { openModal } = useModal('menuSelectModal');
  const { isLoading, data } = useFetch(fetchMenus);
  const { category, selectMenu } = useMenu();

  const handleChooseMenu = (menu) => {
    selectMenu(menu);
    openModal();
  };

  const [answer, setAnswer] = useState('입력 값 없음');
  const genderIndex = 1;
  const ageIndex = 3;
  const menus = [
    '아메리카노',
    '카페라떼',
    '바닐라라떼',
    '헤이즐넛라떼',
    '카페모카',
    '아인슈페너',
    '초코라떼',
    '그린티라떼',
    '곡물라떼',
    '고구마라떼',
    '딸기라떼',
    '자몽에이드',
    '레몬에이드',
    '패션후르츠에이드',
    '얼그레이티',
    '녹차',
    '밀크티',
    '자몽차',
    '유자차',
    '딸기스무디',
    '망고스무디',
    '요거트스무디',
    '녹차프라페',
    '자바칩프라페',
  ];
  const gender = ['남성', '여성'];
  const age = ['청소년', '청년', '증년', '노년'];
  const recommend_num = 5;

  const query = `${menus.join(', ')} 중에서 ${age[ageIndex]}층 ${
    gender[genderIndex]
  } 외국인이 좋아할만한 카페메뉴를 추천해줘. 답변은 설명 없이 ["메뉴1", "메뉴2", "메뉴3", ...] 형식으로 ${recommend_num}개 작성해줘`;

  const getAnswer = (question) => {
    setAnswer('입력 값 없음');
    testGPT(question)
      .then((result) => {
        setAnswer(result.choices[0].message.content);
        console.log(result.choices[0].message.content);
      })
      .catch((error) => console.log(error));
  };

  const filteredMenu = useMemo(() => data.filter((item) => item.category.category === category), [category, data]);
  const filteredRecMenu = useMemo(() => data.filter((item) => answer.includes(item.name)), [answer, data]);

  useEffect(() => {
    getAnswer(query);
  }, []);

  console.log(data[0]);

  if ((isLoading || answer === '입력 값 없음') && category === '추천')
    return (
      <Container>
        <TitleView>
          <Title>Loading recommended menu....</Title>
          <ActivityIndicator size={'large'} color={'black'} />
        </TitleView>
      </Container>
    );

  return (
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
