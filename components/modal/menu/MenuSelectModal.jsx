import { ModalActionButton } from '@components/common/btn';
import TemperatureOptionButton from '@components/common/btn/TemperatureOptionButton';
import { OptionList } from '@components/menu/normal';
import { useModal } from '@hooks/common';
import { useOrder } from '@hooks/order';
import React, { useCallback } from 'react';
import { Image, Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilState } from 'recoil';
import { chosenMenuInfo } from 'recoil/menu/atom';
import { styled } from 'styled-components';
import ModalTemplate from 'styles/ModalTemplate';
import { HotOrIce, OptionTypes } from 'types/menu';

function MenuSelectModal() {
  const { modal, hideModal } = useModal('menuSelectModal');
  const [chosenMenu, resetChosenMenu] = useRecoilState(chosenMenuInfo);

  const { add, handleSelectMenu, resetOrder, order, handleQuantity } = useOrder();

  const handleCloseModal = useCallback(() => {
    hideModal();
    resetChosenMenu(null);
    resetOrder();
  }, [hideModal, resetChosenMenu, resetOrder]);

  const handleAddMenu = () => {
    add();
    resetOrder();
    hideModal();
    resetChosenMenu(null);
  };

  /** Do not render unless choose menu */
  if (chosenMenu == null) return;

  return (
    <Modal visible={modal.visible} transparent={true} animationType="slide" onRequestClose={hideModal}>
      <ModalTemplate>
        <Container>
          <MenuSection>
            <MenuImageView>
              <Image
                style={{ maxWidth: RFValue(100), height: RFValue(100) }}
                source={{ uri: `data:image/png;base64,${chosenMenu.img}` }}
                resizeMode="contain"
              />
            </MenuImageView>
            <MenuOptionView>
              <MenuLabel>{chosenMenu.name}</MenuLabel>
              <QunatityOptionView>
                <QuantityLabel>수량</QuantityLabel>
                <AntDesign name={'caretdown'} size={24} color={'#F3DEBA'} onPress={() => handleQuantity(-1)} />
                <QuantityLabel>{order.orderQuantity}</QuantityLabel>
                <AntDesign name={'caretup'} size={24} color={'#F3DEBA'} onPress={() => handleQuantity(1)} />
              </QunatityOptionView>
              <OptionButtonView>
                <TemperatureOptionButton
                  option={chosenMenu.hotOrIced === HotOrIce.BOTH || HotOrIce.HOT ? HotOrIce.HOT : 'DISABLE'}
                  label={'HOT'}
                  onPress={() => handleSelectMenu('hotOrIced', HotOrIce.HOT)}
                />
                <TemperatureOptionButton
                  option={chosenMenu.hotOrIced === HotOrIce.BOTH || HotOrIce.ICE ? HotOrIce.ICE : 'DISABLE'}
                  label={'ICE'}
                  onPress={() => handleSelectMenu('hotOrIced', HotOrIce.ICE)}
                />
              </OptionButtonView>
            </MenuOptionView>
          </MenuSection>

          <OptionList type={OptionTypes.FREE} />
          <OptionList type={OptionTypes.PAID} />

          <ModalActionButton title={'취소'} width={wp(25)} height={hp(6)} color={'cancel'} onPress={handleCloseModal} />
          <ModalActionButton
            title={'음료담기'}
            width={wp(25)}
            height={hp(6)}
            color={'#675D50'}
            onPress={handleAddMenu}
          />
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
  align-content: space-between;

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

export default MenuSelectModal;
