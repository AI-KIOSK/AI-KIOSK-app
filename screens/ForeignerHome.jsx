import ForeignerMenuScrollList from '@components/foreigner/ForeignerMenuScrollList';
import ForeignerOrderSection from '@components/foreigner/ForeignerOrderSection';
import ForeignerSignUpCompletedModal from '@components/modal/auth/ForeignerSignUpCompletedModal';
import ForeignerSignUpModal from '@components/modal/auth/ForeignerSignUpModal';
import ForeignerMenuSelectModal from '@components/modal/menu/ForeignerMenuSelectModal';
import ForeignerOrderConfirmModal from '@components/modal/order/ForeignerOrderConfirmModal';
import { ForeignerPaymentCompletedModal, ForeignerPaymentModal } from '@components/modal/payment';
import ForeignerEarningPointsModal from '@components/modal/point/ForeignerEarningPointsModal';

import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { Category, Recommendation } from 'recoil/Category';
import styled from 'styled-components/native';

function ForeignerHome(props) {
  const menuItems = useMemo(
    () => [
      {
        id: 'americano1',
        name: 'rec americano',
        category: 'coffee',
        recommendation: 'yes',
        img: require('@assets/menu/americano.jpeg'),
        price: 2500,
      },
      {
        id: 'americano2',
        name: 'americano',
        category: 'coffee',
        recommendation: 'no',
        img: require('@assets/menu/americano.jpeg'),
        price: 2500,
      },
      {
        id: 'cafemoca',
        name: 'rec cafemoca',
        category: 'coffee',
        recommendation: 'yes',
        img: require('@assets/menu/cafemoca.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte',
        name: 'rec banilalatte',
        category: 'non_coffee',
        recommendation: 'yes',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
      {
        id: 'cafelatte',
        name: 'cafelatte',
        category: 'non_coffee',
        recommendation: 'no',
        img: require('@assets/menu/cafelatte.jpeg'),
        price: 4000,
      },
      {
        id: 'einspanner',
        name: 'rec einspanner',
        category: 'smoothie',
        recommendation: 'yes',
        img: require('@assets/menu/einspanner.jpeg'),
        price: 5000,
      },
      {
        id: 'hazelnutlatte',
        name: 'hazelnutlatte 라떼',
        category: 'smoothie',
        recommendation: 'no',
        img: require('@assets/menu/hazelnutlatte.jpeg'),
        price: 4500,
      },
      {
        id: 'cafemoca1',
        name: 'cafemoca',
        category: 'tea',
        recommendation: 'no',
        img: require('@assets/menu/cafemoca.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte1',
        name: 'banilalatte',
        category: 'tea',
        recommendation: 'no',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
      {
        id: 'cafemoca2',
        name: 'cafemoca',
        category: 'etc',
        recommendation: 'no',
        img: require('@assets/menu/cafemoca.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte2',
        name: 'banilalatte',
        category: 'etc',
        recommendation: 'no',
        img: require('@assets/menu/banillalatte.jpeg'),
        price: 3500,
      },
      {
        id: 'banilalatte3',
        name: 'rec banilalatte',
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
      <ForeignerMenuScrollList filteredItem={filterMenuItemsByCategory(category)}
                                  filteredItemRec = {filterMenuItemsByRec(category)} />
      <ForeignerOrderSection />
      <ForeignerMenuSelectModal />
      <ForeignerOrderConfirmModal />
      <ForeignerEarningPointsModal />
      <ForeignerPaymentModal />
      <ForeignerPaymentCompletedModal />
      <ForeignerSignUpModal />
      <ForeignerSignUpCompletedModal />
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

export default ForeignerHome;
