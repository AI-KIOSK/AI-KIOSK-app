import MenuScrollList from '@components/home/MenuScrollList';
import OrderSection from '@components/home/OrderSection';
import SignUpCompletedModal from '@components/modal/auth/SignUpCompletedModal';
import SignUpModal from '@components/modal/auth/SignUpModal';
import MenuSelectModal from '@components/modal/menu/MenuSelectModal';
import OrderConfirmModal from '@components/modal/order/OrderConfirmModal';
import { PaymentCompletedModal, PaymentModal } from '@components/modal/payment';
import EarningPointsModal from '@components/modal/point/EarningPointsModal';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Category } from 'recoil/Category';
import { ShoppingList } from 'recoil/menu/ShoppingList';
import styled from 'styled-components/native';

function Home(props) {
  const menuItems = useMemo(
    () => [
      {
        id: 'americano',
        name: '1아메리카노',
        category: 'coffee',
        img: require('@assets/menu/americano.jpeg'),
        price: 2500,
      },
      {
        id: 'cafemoca',
        name: '2카페모카',
        category: 'coffee',
        img: require('@assets/menu/cafemoca.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte',
        name: '3바닐라라떼',
        category: 'non_coffee',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
      {
        id: 'cafelatte',
        name: '4카페라떼',
        category: 'non_coffee',
        img: require('@assets/menu/cafelatte.jpeg'),
        price: 4000,
      },
      {
        id: 'einspanner',
        name: '5아인슈페너',
        category: 'smoothie',
        img: require('@assets/menu/einspanner.jpeg'),
        price: 5000,
      },
      {
        id: 'hazelnutlatte',
        name: '6헤이즐넛 라떼',
        category: 'smoothie',
        img: require('@assets/menu/hazelnutlatte.jpeg'),
        price: 4500,
      },
      {
        id: 'cafemoca1',
        name: '7카페모카',
        category: 'tea',
        img: require('@assets/menu/cafemoca.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte1',
        name: '8바닐라라떼',
        category: 'tea',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
      {
        id: 'cafemoca2',
        name: '9카페모카',
        category: 'etc',
        img: require('@assets/menu/cafemoca.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte2',
        name: '10바닐라라떼',
        category: 'etc',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
    ],
    [],
  );

  const category = useRecoilValue(Category);
  const setShoppingList = useSetRecoilState(ShoppingList);

  const [menuItems2, setMenuItems] = useState([]);

  useEffect(() => {
    setShoppingList([]);
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
          console.log(category);
          return category === 0 || item.category.id === category;
        });
        setMenuItems(filteredData);
        console.log(filteredData);
      })
      .catch((error) => {
        // 요청이 실패한 경우 에러 처리
        console.error('메뉴 요청 중 오류 발생:', error);
      });
  }, [category]);

  return (
    <Container>
      <MenuScrollList filteredItem={menuItems2} />
      <OrderSection />

      <MenuSelectModal />
      <OrderConfirmModal />
      <EarningPointsModal />
      <PaymentModal />
      <PaymentCompletedModal />
      <SignUpModal />
      <SignUpCompletedModal />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;

  justify-content: space-around;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Home;
