import { ModalActionButton } from '@components/common/btn';
import { ForeignerOrderList } from '@components/order';
import { useModal } from '@hooks/common';
import React from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import ModalTemplate from 'styles/ModalTemplate';

export default function ForeignerOrderConfirmModal() {
  const { modal, hideModal: hideOrderConfirmModal } = useModal('foreignerOrderConfirmModal');
  const { openModal: openEarningPointsModal } = useModal('foreignerEarningpointsModal');
  const { openModal: openPaymentModal } = useModal('foreignerPaymentModal');

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
          <Title>Order List</Title>
          <ForeignerOrderList />
          <OrderResultText>Total quantity 3</OrderResultText>
          <OrderResultText> Total Payment Amount 36,000₩</OrderResultText>
          <ButtonSection>
            <ModalActionButton
              title={'cancel'}
              width={wp(25)}
              height={hp(6)}
              color={'cancel'}
              onPress={hideOrderConfirmModal}
            />
            <ModalActionButton
              title={'saving points'}
              width={wp(25)}
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

const ButtonSection = styled.View`
  width: ${wp(70)}px;

  justify-content: space-between;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;
