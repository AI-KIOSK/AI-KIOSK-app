import { HotOrIceSelectButton, ModalActionButton } from '@components/common/btn';
import MenuOptionList from '@components/menu/MenuOptionList';
import { useModal } from '@hooks/common';
import React from 'react';
import { Image, Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styled } from 'styled-components';
import ModalTemplate from 'styles/ModalTemplate';
function MenuSelectModal() {
  const { modal, hideModal } = useModal('menuSelectModal');

  return (
    <Modal visible={modal.visible} transparent={true} animationType="slide" onRequestClose={hideModal}>
      <ModalTemplate>
        <Container>
          <MenuSection>
            <MenuImageView>
              <Image
                style={{ maxWidth: RFValue(100) }}
                source={require('@assets/menu/americano.jpeg')}
                resizeMode="contain"
              />
            </MenuImageView>
            <MenuOptionView>
              <MenuLabel>아메리카노</MenuLabel>
              <QunatityOptionView>
                <QuantityLabel>수량</QuantityLabel>
                <AntDesign name={'caretdown'} size={24} color={"#F3DEBA"}/>
                <QuantityLabel>1</QuantityLabel>
                <AntDesign name={'caretup'} size={24} color={"#F3DEBA"}/>
              </QunatityOptionView>
              <OptionButtonView>
                <HotOrIceSelectButton option="HOT" />
                <HotOrIceSelectButton option="ICED" />
              </OptionButtonView>
            </MenuOptionView>
          </MenuSection>

          <MenuOptionList label="무료 옵션" />

          <MenuOptionList label="유료 옵션" />

          <ButtonSection>
            <ModalActionButton title={'취소'} width={wp(25)} height={hp(6)} color={'cancel'} onPress={hideModal} />
            <ModalActionButton title={'음료담기'} width={wp(25)} height={hp(6)} color={'#675D50'} />
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
  justify-content: space-around;

  padding: ${wp(3)}px;
`;

const MenuSection = styled.View`
  width: 100%;
  height: 25%;

  align-items: center;
  flex-direction: row;
`;

const MenuImageView = styled.View`
  width: 30%;
  height: 100%;
  justify-content: center;
`;

const MenuOptionView = styled.View`
  width: 70%;
  height: 90%;

  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MenuLabel = styled.Text`
  
  font-size: ${RFValue(24)}px;
  width: 100%;
  font-weight: 700;
`;

const QunatityOptionView = styled.View`
  width: 40%;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;

const QuantityLabel = styled.Text`
 
  font-size: ${RFValue(18)}px;
  font-weight: 700;
`;

const OptionButtonView = styled.View`
  width: 100%;
  height: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const OptionButton = styled.TouchableOpacity`
  width: 35%;
  height: 44px;
  border: 3px solid #002b85;
  border-radius: 10px;
  flex-shrink: 0;
`;

const ButtonSection = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ActionButton = styled.TouchableOpacity`
  width: 30%;
  height: 50%;
  border: 3px solid #002b85;
  background: #dbedff;

  justify-content: center;
  align-items: center;
`;

const ButtonLabel = styled.Text`
  color: #002b85;
  font-size: ${RFValue(16)}px;
  font-weight: 700;
`;
export default MenuSelectModal;
