import { ModalActionButton } from '@components/common/btn';
import { useModal } from '@hooks/common';
import React from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import ModalTemplate from 'styles/ModalTemplate';

export default function OrderCompleteModal() {
  const { modal, hideModal } = useModal('orderCompleteModal');

  return (
    <Modal visible={modal.visible} animationType={'slide'} transparent={true} onRequestClose={hideModal}>
      <ModalTemplate>
        <TitleContainer>
          <Title>주문이 완료되었습니다.</Title>
        </TitleContainer>
        <OrderNumberContainer>
          <Title>주분번호</Title>
          <Title>14번</Title>
        </OrderNumberContainer>
        <ButtonSection>
          <ModalActionButton title={'돌아가기'} width={wp(25)} height={hp(6)} color={'blue'} onPress={hideModal} />
        </ButtonSection>
      </ModalTemplate>
    </Modal>
  );
}

const TitleContainer = styled.View`
  flex: 0.8;
  justify-content: center;
  align-items: center;
  border-bottom-width: 3;
  border-bottom-color: #002b85;
`;
const Title = styled.Text`
  color: #002b85;
  font-weight: 700;
  font-size: ${RFValue(24)}px;
`;

const OrderNumberContainer = styled.View`
  flex: 4;
  justify-content: center;
  align-items: center;
`;

const ButtonSection = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: center;
`;
