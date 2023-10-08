import { useModal } from '@hooks/common';
import { HotOrIceSelectButton, ModalActionButton } from '@components/common/btn';
import React, { useMemo } from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components';

import ModalTemplate from '../../../styles/ModalTemplate';
import RectButton from '../common/RectButton';

function ForeignerPaymentModal() {
  const paymentPlans = useMemo(
    () => [
      {
        id: 'card',
        value: 'card',
        name: 'card',
      },
      {
        id: 'kakaopay',
        value: 'kakaopay',
        name: 'kakaopay',
      },
    ],
    [],
  );

  const { modal, hideModal } = useModal('foreignerPaymentModal');
  const { openModal } = useModal('foreignerPaymentCompletedModal');

  const pressPayment = () => {
    hideModal();
    openModal();
  };

  return (
    <Modal visible={modal.visible} animationType="slide" transparent={true} onRequestClose={hideModal}>
      <ModalTemplate>
        <TitleContainer>
          <TitleText>Payment details</TitleText>
        </TitleContainer>
        <PaymentContainer>
          <PointContainer>
            <Row>
              <TitleText>Order amount</TitleText>
              <NormalText> 16000₩ </NormalText>
            </Row>
            <TitleText>Points</TitleText>
            <Row>
              <NormalText>Retained</NormalText>
              <NormalText>1000 point</NormalText>
            </Row>
            <Row>
              <NormalText>Use</NormalText>
              <InputBox maxLength={8} keyboardType="numeric" />
              <NormalText>point</NormalText>
            </Row>
          </PointContainer>
          <PaymentPlanContainer>
            <TitleText>Payment method</TitleText>
            <Row>
              {paymentPlans.map((item) => (
                <PaymentPlanItem key={item.id}>
                  <NormalText>{item.name}</NormalText>
                </PaymentPlanItem>
              ))}
            </Row>
          </PaymentPlanContainer>
        </PaymentContainer>
        <ButtonSection>
          <ModalActionButton title={'cancel'} width={wp(25)} height={hp(6)} color={'cancel'} onPress={hideModal} />
          <ModalActionButton title={'Payment'} width={wp(25)} height={hp(6)} color={'#675D50'} onPress={pressPayment} />
        </ButtonSection>
      </ModalTemplate>
    </Modal>
  );
}

const TitleContainer = styled.View`
  flex: 0.8;
  justify-content: center;
  align-items: flex-start;
  padding-left: ${wp(3)}px;
`;

const TitleText = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(20)}px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PaymentContainer = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  padding: 10px 40px;
`;

const PointContainer = styled.View`
  flex: 3;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  padding: 10px 50px;
`;

const InputBox = styled.TextInput`
  border-width: 3px;
  flex-direction: row;
  border-color: #000000;
  border-radius: 8px;
  padding: 0px 100px;
  justify-content: space-around;
  align-items: center;
  font-size: ${RFValue(16)}px;
  margin-left: auto;
  margin-right: 10px;
`;

const PaymentPlanContainer = styled.View`
  flex: 5;
  justify-content: space-around;
  width: ${wp(60)}px;
`;

const PaymentPlanItem = styled.TouchableOpacity`
  border-width: 3px;
  border-radius: 8px;
  width: ${wp(16)}px;
  height: ${hp(10)}px;
  background-color: #f3deba;
  border-color: #675d50;
  justify-content: center;
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const NormalText = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(16)}px;
`;

const ButtonSection = styled.View`
  width: 100%;
  margin-bottom: 80px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export default ForeignerPaymentModal;
