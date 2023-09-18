import { ModalActionButton } from '@components/common/btn';
import { useModal } from '@hooks/common';
import React, { useMemo } from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components';
import SeniorModalTemplate from 'styles/SeniorModalTemplate';

function SeniorPaymentModal() {
  const paymentPlans = useMemo(
    () => [
      {
        id: 'card',
        value: 'card',
        name: '카드',
      },
      {
        id: 'kakaopay',
        value: 'kakaopay',
        name: '카카오페이',
      },
    ],
    [],
  );

  const { modal, hideModal } = useModal('paymentModal');
  const { openModal } = useModal('paymentCompletedModal');

  const pressPayment = () => {
    hideModal();
    openModal();
  };

  return (
    <Modal visible={modal.visible} animationType="slide" transparent={true} onRequestClose={hideModal}>
      <SeniorModalTemplate>
        <TitleContainer>
          <TitleText>결제내역</TitleText>
        </TitleContainer>
        <PaymentContainer>
          <PointContainer>
            <Row>
              <TitleText>주문 금액</TitleText>
              <NormalText> 16000원 </NormalText>
            </Row>
            <TitleText>적립포인트</TitleText>
            <Row>
              <NormalText>보유</NormalText>
              <NormalText>1000</NormalText>
            </Row>
            <Row>
              <NormalText>사용</NormalText>
              <InputBox maxLength={8} keyboardType="numeric" />
              <NormalText>point</NormalText>
            </Row>
          </PointContainer>
          <PaymentPlanContainer>
            <TitleText>결제수단</TitleText>
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
          <ModalActionButton title={'취소'} width={wp(25)} height={hp(6)} color={'seniorNormal'} onPress={hideModal} />
          <ModalActionButton
            title={'결제하기'}
            width={wp(25)}
            height={hp(6)}
            color={'seniorConfirm'}
            onPress={pressPayment}
          />
        </ButtonSection>
      </SeniorModalTemplate>
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
  width: ${wp(26)}px;
  height: ${hp(10)}px;
  background-color: #fba627;
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
  font-size: ${RFValue(18)}px;
`;

const ButtonSection = styled.View`
  width: 100%;
  margin-bottom: 80px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export default SeniorPaymentModal;
