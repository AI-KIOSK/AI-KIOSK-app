import BeverageDetail from '@components/modal/senior/BeverageDetail';
import SeniorEarningPointsModal from '@components/modal/senior/SeniorEarningPointsModal';
import SeniorOptionModal from '@components/modal/senior/SeniorOptionModal';
import SeniorOrderConfirmModal from '@components/modal/senior/SeniorOrderConfirmModal';
import SeniorPaymentCompletedModal from '@components/modal/senior/SeniorPatmentCompletedModal';
import SeniorPaymentModal from '@components/modal/senior/SeniorPatmentModal';
import SeniorSignUpCompletedModal from '@components/modal/senior/SeniorSignUpComplatedModal';
import SeniorSignUpModal from '@components/modal/senior/SeniorSignUpModal';
import SeniorMenuList from '@components/senior/SeniorMenuList';
import SeniorSubInfo from '@components/senior/SeniorSubInfo';
import { useFetch } from '@hooks/useFecth';
import { fetchMenus } from 'api/fetch';
import React, { useMemo, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useRecoilValue } from 'recoil';
import { Category, Temperature } from 'recoil/Category';
import styled from 'styled-components';

function SeniorHome() {
  const [currentPage, setCurrentPage] = useState(1);

  const category = useRecoilValue(Category);
  const temperature = useRecoilValue(Temperature);

  /** 메뉴들 불러오기 */
  const { isLoading, data } = useFetch(fetchMenus);
  /** 불러온 메뉴 카테고리에 따라 필터링하기 */
  const filteredMenu = useMemo(
    () =>
      data.filter(
        (item) =>
          (category === 0 || item.category.id === category) &&
          (item.hotOrIced === 'BOTH' || item.hotOrIced === temperature),
      ),
    [category, temperature, data],
  );

  if (isLoading) return <ActivityIndicator size={'small'} color={'black'} />;

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredMenu.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const menuItemsToShow = filteredMenu.slice(startIndex, endIndex);

  const handleNextPage = () => {
    // 다음 페이지로 이동
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    // 이전 페이지로 이동
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  return (
    <Container>
      <SeniorOrderConfirmModal />
      <SeniorOptionModal />
      <SeniorEarningPointsModal />
      <SeniorPaymentModal />
      <SeniorPaymentCompletedModal />
      <BeverageDetail />
      <SeniorSignUpModal />
      <SeniorSignUpCompletedModal />
      <SeniorMenuList
        currentPage={currentPage}
        menuItemsToShow={menuItemsToShow}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
      <SeniorSubInfo />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

export default SeniorHome;
