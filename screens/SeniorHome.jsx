import { OrderConfirmModal } from '@components/modal/order';
import SeniorMenuList from '@components/senior/SeniorMenuList';
import SeniorSubInfo from '@components/senior/SeniorSubInfo';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

function SeniorHome() {
  const [currentPage, setCurrentPage] = useState(1);
  const menuItems = useMemo(
    () => [
      {
        id: 'americano',
        name: '1아메리카노',
        img: require('@assets/menu/americano.jpeg'),
        price: 2500,
      },
      {
        id: 'cafemoca',
        name: '2카페모카',
        img: require('@assets/menu/cafemoca.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte',
        name: '3바닐라라떼',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
      {
        id: 'cafelatte',
        name: '4카페라떼',
        img: require('@assets/menu/cafelatte.jpeg'),
        price: 4000,
      },
      {
        id: 'einspanner',
        name: '5아인슈페너',
        img: require('@assets/menu/einspanner.jpeg'),
        price: 5000,
      },
      {
        id: 'hazelnutlatte',
        name: '6헤이즐넛 라떼',
        img: require('@assets/menu/hazelnutlatte.jpeg'),
        price: 4500,
      },
      {
        id: 'cafemoca1',
        name: '7카페모카',
        img: require('@assets/menu/cafemoca.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte1',
        name: '8바닐라라떼',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
      {
        id: 'cafemoca2',
        name: '9카페모카',
        img: require('@assets/menu/cafemoca.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte2',
        name: '10바닐라라떼',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
    ],
    [],
  );
  const itemsPerPage = 3;
  const totalPages = Math.ceil(menuItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const menuItemsToShow = menuItems.slice(startIndex, endIndex);
  console.log(currentPage + " / " + totalPages);

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
      <SeniorMenuList currentPage={currentPage} menuItemsToShow={menuItemsToShow} />
      <SeniorSubInfo onNextPage={handleNextPage} onPrevPage={handlePrevPage} />
      <OrderConfirmModal />

    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

export default SeniorHome;
