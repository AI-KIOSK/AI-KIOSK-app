import OrderSection from '@components/home/OrderSection';
import { OrderConfirmModal } from '@components/modal/order';
import BeverageDetail from '@components/modal/senior/BeverageDetail';
import SeniorMenuList from '@components/senior/SeniorMenuList';
import SeniorSubInfo from '@components/senior/SeniorSubInfo';
import React, { useMemo, useState } from 'react';
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
        category: 'tea',
        temperature: 'ice',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
    ],
    [],
  );

  const category = useRecoilValue(Category);
  const temperature = useRecoilValue(Temperature);

  const tempData = menuItems.filter((item) => item.temperature === temperature);
  const filterMenuItemsByCategory = tempData.filter((item) => item.category === category);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filterMenuItemsByCategory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const menuItemsToShow = filterMenuItemsByCategory.slice(startIndex, endIndex);
  console.log(currentPage + ' / ' + totalPages);

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
      <OrderConfirmModal />
      <BeverageDetail />
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
