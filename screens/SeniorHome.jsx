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
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Category, Temperature } from 'recoil/Category';
import { ShoppingList } from 'recoil/menu/ShoppingList';
import styled from 'styled-components';

function SeniorHome() {
  const [currentPage, setCurrentPage] = useState(1);

  const category = useRecoilValue(Category);
  const temperature = useRecoilValue(Temperature);
  const setShoppingList = useSetRecoilState(ShoppingList);

  const [menuItems2, setMenuItems] = useState([]);

  useEffect(() => {
    // API 요청을 보낼 URL
    const apiUrl = 'http://14.36.131.49:10008/api/v1/menus/';

    // Axios를 사용하여 GET 요청을 보냄
    axios
      .get(apiUrl)
      .then((response) => {
        // 데이터를 받아온 후에 필터링 작업 수행
        const filteredData = response.data.data.filter((item) => {
          console.log(temperature, category);
          return (
            (category === 0 || item.category.id === category) &&
            (item.hotOrIced === 'BOTH' || item.hotOrIced === temperature)
          );
        });
        setMenuItems(filteredData);
        console.log('filtered: ', filteredData);
      })
      .catch((error) => {
        // 요청이 실패한 경우 에러 처리
        console.error('메뉴 요청 중 오류 발생:', error);
      });
  }, [category, temperature]);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(menuItems2.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const menuItemsToShow = menuItems2.slice(startIndex, endIndex);

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
