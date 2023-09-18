import { PaymentCompletedModal } from '@components/modal/payment';
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
import React, { useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Category, Temperature } from 'recoil/Category';
import styled from 'styled-components';

function SeniorHome() {
  const [currentPage, setCurrentPage] = useState(1);
  const menuItems = useMemo(
    () => [
      {
        id: 'americano',
        name: '1.뜨아메리카노',
        category: 'coffee',
        temperature: 'hot',
        img: require('@assets/menu/americano.jpeg'),
        price: 2500,
      },
      {
        id: 'cafemoca',
        name: '2.뜨카페모카',
        category: 'coffee',
        temperature: 'hot',
        img: require('@assets/menu/cafemoca.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte',
        name: '3.뜨바닐라라떼',
        category: 'coffee',
        temperature: 'hot',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
      {
        id: 'cafelatte',
        name: '4.뜨카페라떼',
        category: 'coffee',
        temperature: 'hot',
        img: require('@assets/menu/cafelatte.jpeg'),
        price: 4000,
      },
      {
        id: 'einspanner',
        name: '5.뜨아인슈페너',
        category: 'beverage',
        temperature: 'hot',
        img: require('@assets/menu/einspanner.jpeg'),
        price: 5000,
      },
      {
        id: 'hazelnutlatte',
        name: '6.차헤이즐넛 라떼',
        category: 'beverage',
        temperature: 'ice',
        img: require('@assets/menu/hazelnutlatte.jpeg'),
        price: 4500,
      },
      {
        id: 'cafemoca1',
        name: '7.차카페모카',
        category: 'beverage',
        temperature: 'ice',
        img: require('@assets/menu/cafemoca.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte1',
        name: '8.차바닐라라떼',
        category: 'beverage',
        temperature: 'ice',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
      {
        id: 'cafemoca2',
        name: '9.차카페모카',
        category: 'tea',
        temperature: 'ice',
        img: require('@assets/menu/cafemoca.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte2',
        name: '10.차바닐라라떼',
        category: 3,
        temperature: 'ice',
        hotOrIced: 'ICE',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
    ],
    [],
  );

  const category = useRecoilValue(Category);
  const temperature = useRecoilValue(Temperature);

  const [menuItems2, setMenuItems] = useState([]);

  useEffect(() => {
    // API 요청을 보낼 URL
    const apiUrl = 'http://14.36.131.49:10008/api/v1/menus/';

    // Axios를 사용하여 GET 요청을 보냄
    axios
      .get(apiUrl)
      .then((response) => {
        // 요청이 성공하면 response.data를 menuItems 상태에 저장
        setMenuItems(response.data.data);

        // 데이터를 받아온 후에 필터링 작업 수행
        const filteredData = response.data.data.filter((item) => {
          console.log(temperature, category);
          return (
            (category === 0 || item.category.id === category) &&
            (item.hotOrIced === 'BOTH' || item.hotOrIced === temperature)
          );
        });
        setMenuItems(filteredData);
        console.log(filteredData);
      })
      .catch((error) => {
        // 요청이 실패한 경우 에러 처리
        console.error('메뉴 요청 중 오류 발생:', error);
      });
  }, [category, temperature]);

  // const tempData = menuItems.filter((item) => item.hotOrIced === temperature);
  // const filterMenuItemsByCategory = tempData.filter((item) => item.category.id === category);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(menuItems2.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const menuItemsToShow = menuItems2.slice(startIndex, endIndex);
  console.log(currentPage + ' / ' + totalPages);

  const handleNextPage = () => {
    // 다음 페이지로 이동
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
    console.log(menuItems2.data[0]);
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
