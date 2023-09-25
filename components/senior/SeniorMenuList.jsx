import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components';

import SeniorMenu from './SeniorMenu';

SeniorMenuList.propTypes = {
  menuItemsToShow: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.object,
      hotOrIced: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      whipping: PropTypes.bool,
    }),
  ),
  onNextPage: PropTypes.func,
  onPrevPage: PropTypes.func,
};

function SeniorMenuList({ menuItemsToShow, onNextPage, onPrevPage }) {
  const pageButton =
    menuItemsToShow.length > 0 ? (
      <PageButton>
        <PrevButton onPress={onPrevPage}>
          <ButtonLabel>이전</ButtonLabel>
        </PrevButton>
        <NextButton onPress={onNextPage}>
          <ButtonLabel>다음</ButtonLabel>
        </NextButton>
      </PageButton>
    ) : null;

  return (
    <Container>
      <MenuList>
        {menuItemsToShow.map((item) => (
          <SeniorMenu key={item.id} item={item} />
        ))}
      </MenuList>

      {pageButton}
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  flex: 3;
  justify-content: center;
  align-items: center;
  padding: 0px ${RFValue(10)}px;
`;

const MenuList = styled.View`
  flex: 3;
  width: 100%;
`;

const PageButton = styled.View`
  flex: 0.25;
  padding: ${RFValue(5)}px 0px ${RFValue(10)}px 0px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: ${RFValue(32)}px;
`;

const PrevButton = styled.TouchableOpacity`
  width: 25%;
  height: 100%;
  border: 3px solid;
  justify-content: center;
  align-items: center;
`;

const NextButton = styled(PrevButton)``;

const ButtonLabel = styled.Text`
  font-size: ${RFValue(22)}px;
  font-weight: bold;
`;

export default SeniorMenuList;
