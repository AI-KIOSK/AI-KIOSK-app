import { ModalActionButton } from '@components/common/btn';
import { OrderList } from '@components/menu/normal';

import { useModal } from '@hooks/common';
import React from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRecoilState, useRecoilValue } from 'recoil';
import { onForeigner } from 'recoil/common/Foreigner';
import { orderRequest } from 'recoil/order/atom';
import { styled } from 'styled-components/native';
import ModalTemplate from 'styles/ModalTemplate';

export default function OrderConfirmModal() {
  const { modal, hideModal: hideOrderConfirmModal } = useModal('orderConfirmModal');
  const { openModal: openEarningPointsModal } = useModal('earningpointsModal');
  const { openModal: openPaymentModal } = useModal('paymentModal');

  const [request, setRequest] = useRecoilState(orderRequest);
  const isForeigner = useRecoilValue(onForeigner);

  const totalQuantity = request.quantity;

  const totalQuantityText = totalQuantity === 1 ? 'Cup' : 'Cups';

  const onPressOrder = () => {
    hideOrderConfirmModal();
    openPaymentModal();
  };

  const onPressPoint = () => {
    hideOrderConfirmModal();
    openEarningPointsModal();
  };
  return (
    <Modal visible={modal.visible} animationType={'slide'} transparent={true} onRequestClose={hideOrderConfirmModal}>
      <ModalTemplate>
        <Container>
          {isForeigner ? <Title>Order List</Title> : <Title>주문 목록</Title>}
          <OrderList />
          {isForeigner ? (
            <>
              <OrderResultEngText>
                Total Quantity {totalQuantity} {totalQuantityText}
              </OrderResultEngText>
              <OrderResultEngText>Total Price {request.totalPrice.toLocaleString()} Won</OrderResultEngText>
              <ButtonSection>
                <ModalActionButton
                  title={'Cancel'}
                  width={wp(25)}
                  height={hp(6)}
                  color={'cancel'}
                  onPress={hideOrderConfirmModal}
                />
                <ModalActionButton
                  title={'Earn Points'}
                  width={wp(30)}
                  height={hp(6)}
                  color={'blue'}
                  onPress={onPressPoint}
                />
                <ModalActionButton
                  title={'Payment'}
                  width={wp(70)}
                  height={hp(6)}
                  color={'cancel'}
                  onPress={onPressOrder}
                />
              </ButtonSection>
            </>
          ) : (
            <>
              <OrderResultText>총 수량 {request.quantity}개</OrderResultText>
              <OrderResultText>총 결제 금액 {request.totalPrice.toLocaleString()}원</OrderResultText>
              <ButtonSection>
                <ModalActionButton
                  title={'취소'}
                  width={wp(25)}
                  height={hp(6)}
                  color={'cancel'}
                  onPress={hideOrderConfirmModal}
                />
                <ModalActionButton
                  title={'적립하기'}
                  width={wp(25)}
                  height={hp(6)}
                  color={'blue'}
                  onPress={onPressPoint}
                />
                <ModalActionButton
                  title={'결제하기'}
                  width={wp(70)}
                  height={hp(6)}
                  color={'cancel'}
                  onPress={onPressOrder}
                />
              </ButtonSection>
            </>
          )}
        </Container>
      </ModalTemplate>
    </Modal>
  );
}

const Container = styled.View`
  flex: 1;

  flex-direction: row;
  flex-wrap: wrap;

  align-content: space-around;
  justify-content: space-around;

  padding: ${wp(4)}px;
`;

const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: 700;

  width: 100%;
`;

const OrderResultText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 700;
`;

const OrderResultEngText = styled(OrderResultText)`
  font-size: ${RFValue(14)}px;
`;

const ButtonSection = styled.View`
  width: ${wp(70)}px;

  justify-content: space-between;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;
