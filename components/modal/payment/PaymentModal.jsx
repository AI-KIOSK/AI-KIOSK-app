import React, { useMemo } from 'react';
import { Modal, TextInput } from 'react-native';
import ModalTemplate from '../../../styles/ModalTemplate';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
import RectButton from '../common/RectButton';
import { useModal } from '@hooks/common';


function PaymentModal(){
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

    const {modal, hideModal} = useModal('paymentModal');
    const {openModal} = useModal('paymentCompletedModal');
  
    const pressPayment = () => {
      hideModal();
      openModal();
    };


      return (
        <Modal visible={modal.visible} animationType="slide" transparent={true} onRequestClose={hideModal}>
          <ModalTemplate>
            <TitleContainer>
              <TitleText>결제내역</TitleText>
            </TitleContainer>
            <PaymentContainer>
              <Row>
                <TitleText>주문 금액</TitleText>
                <NormalText> 16000원 </NormalText>
              </Row>
                <PointContainer>
                    <TitleContainer>
                        <TitleText>적립포인트</TitleText>
                    </TitleContainer>
                    <Row>
                        <NormalText>보유</NormalText>
                        <NormalText>1000</NormalText>
                    </Row>
                    <Row>
                        <NormalText>사용</NormalText>
                        <InputBox maxLength={8} keyboardType="numeric"/>
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
            <ButtonContainer>
              <RectButton onPress={hideModal} text={'취소'} fontColor="#002B85" backColor="#DBEDFF" />
              <RectButton onPress={pressPayment} text={'결제하기'} fontColor="#FFA3A3" backColor="#FEF4F4" />
            </ButtonContainer>
          </ModalTemplate>
        </Modal>
      );
}



const TitleContainer = styled.View`
  flex: 0.8;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
`;

const TitleText = styled.Text`
  color: #002b85;
  font-weight: bold;
  font-size: ${RFValue(20)}px;
`;

const PaymentContainer = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;

const PointContainer = styled.View`
    flex: 3;
    justify-content: center;
    align-items: center;
`;

const InputBox = styled.TextInput`
    color: #002b85;
    border-width: 3px;
    flex-direction: row;
    border-color: #002b85;
    padding: 0px 10px;
    justify-content: space-around;
    align-items: center;
  font-size: ${RFValue(16)}px;
`;

const PaymentPlanContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  width: ${wp(60)}px;
`;

const PaymentPlanItem = styled.TouchableOpacity`
  border-width: 3px;
  border-radius: 50px;
  padding: 10px;
  width: ${wp(16)}px;
  height: ${hp(6)}px;
  border-color: #002b85;
  justify-content: center;
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const NormalText = styled.Text`
  color: #002b85;
  font-weight: bold;
  font-size: ${RFValue(16)}px;
`;

const ButtonContainer = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;


export default PaymentModal;

