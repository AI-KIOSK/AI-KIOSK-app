import ForeignerMenuScrollList from '@components/foreigner/ForeignerMenuScrollList';
import ForeignerOrderSection from '@components/foreigner/ForeignerOrderSection';
import ForeignerSignUpCompletedModal from '@components/modal/auth/ForeignerSignUpCompletedModal';
import ForeignerSignUpModal from '@components/modal/auth/ForeignerSignUpModal';
import ForeignerMenuSelectModal from '@components/modal/menu/ForeignerMenuSelectModal';
import ForeignerOrderConfirmModal from '@components/modal/order/ForeignerOrderConfirmModal';
import { ForeignerPaymentCompletedModal, ForeignerPaymentModal } from '@components/modal/payment';
import ForeignerEarningPointsModal from '@components/modal/point/ForeignerEarningPointsModal';
import { useFetch } from '@hooks/useFecth';
import { fetchMenus } from 'api/fetch';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { Category, Recommendation } from 'recoil/Category';
import styled from 'styled-components/native';

function ForeignerHome(props) {
  const { data, isLoading } = useFetch(fetchMenus);
  const menuItems = data;
  const category = useRecoilValue(Category);
  const recommendation = useRecoilValue(Recommendation);

  const recData = menuItems.filter((item, index) => item.id < 2);
  const norData = menuItems.filter((item, index) => item.id >= 2);

  //   const filterMenuItemsByCategory = recData.filter((item) => item.category === category);
  const filterMenuItemsByCategory = (category) => {
    return norData.filter((item) => item.category.id === category);
  };
  const filterMenuItemsByRec = (category) => {
    return recData.filter((item) => item.category.id === category);
  };

  return (
    <Container>
      <ForeignerMenuScrollList
        filteredItem={filterMenuItemsByCategory(category)}
        filteredItemRec={filterMenuItemsByRec(category)}
      />
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
