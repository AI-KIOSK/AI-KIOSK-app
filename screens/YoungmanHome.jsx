import YoungmanMenuScrollList from '@components/youngman/YoungmanMenuScrollList';
import YoungmanOrderSection from '@components/youngman/YoungmanOrderSection';
import SignUpCompletedModal from '@components/modal/auth/SignUpCompletedModal';
import SignUpModal from '@components/modal/auth/SignUpModal';
import MenuSelectModal from '@components/modal/menu/MenuSelectModal';
import OrderConfirmModal from '@components/modal/order/OrderConfirmModal';
import { PaymentCompletedModal, PaymentModal } from '@components/modal/payment';
import EarningPointsModal from '@components/modal/point/EarningPointsModal';
import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { Category, Recommendation } from 'recoil/Category';
import styled from 'styled-components/native';

function YoungmanHome(props) {
  const menuItems = useMemo(
    () => [
      {
        id: 'americano1',
        name: '추천아메리카노',
        category: 'coffee',
        recommendation: 'yes',
        img: require('@assets/menu/americano.jpeg'),
        price: 2500,
      },
      {
        id: 'americano2',
        name: '아메리카노',
        category: 'coffee',
        recommendation: 'no',
        img: require('@assets/menu/americano.jpeg'),
        price: 2500,
      },
      {
        id: 'cafemoca',
        name: '추천카페모카',
        category: 'coffee',
        recommendation: 'yes',
        img: require('@assets/menu/cafemoca.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte',
        name: '추천바닐라라떼',
        category: 'non_coffee',
        recommendation: 'yes',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
      {
        id: 'cafelatte',
        name: '4카페라떼',
        category: 'non_coffee',
        recommendation: 'no',
        img: require('@assets/menu/cafelatte.jpeg'),
        price: 4000,
      },
      {
        id: 'einspanner',
        name: '추천아인슈페너',
        category: 'smoothie',
        recommendation: 'yes',
        img: require('@assets/menu/einspanner.jpeg'),
        price: 5000,
      },
      {
        id: 'hazelnutlatte',
        name: '6헤이즐넛 라떼',
        category: 'smoothie',
        recommendation: 'no',
        img: require('@assets/menu/hazelnutlatte.jpeg'),
        price: 4500,
      },
      {
        id: 'cafemoca1',
        name: '7카페모카',
        category: 'tea',
        recommendation: 'no',
        img: require('@assets/menu/cafemoca.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte1',
        name: '8바닐라라떼',
        category: 'tea',
        recommendation: 'no',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
      {
        id: 'cafemoca2',
        name: '9카페모카',
        category: 'etc',
        recommendation: 'no',
        img: require('@assets/menu/cafemoca.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte2',
        name: '10바닐라라떼',
        category: 'etc',
        recommendation: 'no',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte3',
        name: '추천바닐라라떼',
        category: 'etc',
        recommendation: 'yes',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
    ],
    [],
  );
  
  const category = useRecoilValue(Category);
  const recommendation = useRecoilValue(Recommendation);

  const recData = menuItems.filter((item) => item.recommendation === 'yes');
  const norData = menuItems.filter((item) => item.recommendation === 'no');
//   const filterMenuItemsByCategory = recData.filter((item) => item.category === category);
  const filterMenuItemsByCategory = (category) => {
    return norData.filter((item) => item.category === category);
  };
  const filterMenuItemsByRec = (category) => {
    return recData.filter((item) => item.category === category);
  };
  
  return (
    <Container>
      <YoungmanMenuScrollList filteredItem={filterMenuItemsByCategory(category)}
                                  filteredItemRec = {filterMenuItemsByRec(category)} />
      <YoungmanOrderSection />
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

export default YoungmanHome;
