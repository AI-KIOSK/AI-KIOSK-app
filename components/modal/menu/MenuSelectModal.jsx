import { ModalActionButton } from '@components/common/btn';
import TemperatureOptionButton from '@components/common/btn/TemperatureOptionButton';
import { OptionList } from '@components/menu/normal';
import { useModal } from '@hooks/useModal';
import useMenu from '@hooks/useMenu';
import { useOrder } from '@hooks/useOrder';
import { freeOptionsData, paidOptionsData } from 'const/options';
import format from 'pretty-format';
import React, { useCallback, useMemo } from 'react';
import { Image, Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilValue } from 'recoil';
import { onForeigner } from 'recoil/common/Foreigner';
import { styled } from 'styled-components';
import ModalTemplate from 'styles/ModalTemplate';
import { HotOrIce, OptionTypes } from 'types/menu';

function MenuSelectModal() {
  const { modal, hideModal } = useModal('menuSelectModal');
  const { selectedMenu, resetSelectedMenu } = useMenu();
  const { add, handleSelectMenu, resetOrder, order, handleQuantity } = useOrder();
  const isForeigner = useRecoilValue(onForeigner);

  const handleCloseModal = useCallback(() => {
    hideModal();
    resetSelectedMenu();
    resetOrder();
  }, [hideModal, resetOrder, resetSelectedMenu]);

  const handleAddMenu = () => {
    add();
    resetOrder();
    hideModal();
    resetSelectedMenu();
  };

  const freeOptions = useMemo(
    () =>
      freeOptionsData.reduce((acc, cur) => {
        switch (cur.id) {
          case 'whippingAmount':
            if (selectedMenu?.whipping) return [...acc, cur];
            else return [...acc];

          case 'iceAmount':
            if (order?.hotOrIced === HotOrIce.HOT) return [...acc];
            else return [...acc, cur];

          default:
            return [...acc, cur];
        }
      }, []),
    [order?.hotOrIced, selectedMenu?.whipping],
  );

  const paidOptions = paidOptionsData;

  if (selectedMenu == null) return;

  return (
    <Modal visible={modal.visible} transparent={true} animationType="slide" onRequestClose={hideModal}>
      <ModalTemplate>
        <Container>
          <MenuSection>
            <MenuImageView>
              <Image
                style={{ maxWidth: RFValue(200), height: RFValue(200) }}
                source={{ uri: selectedMenu.img }}
                resizeMode="contain"
              />
            </MenuImageView>
            <MenuOptionView>
              {isForeigner ? <MenuLabel>{selectedMenu.nameEng}</MenuLabel> : <MenuLabel>{selectedMenu.name}</MenuLabel>}
              <QunatityOptionView>
                {isForeigner ? <QuantityLabel>Quantity </QuantityLabel> : <QuantityLabel>수량</QuantityLabel>}
                <AntDesign name={'caretdown'} size={24} color={'#F3DEBA'} onPress={() => handleQuantity(-1)} />
                <QuantityLabel>{order.orderQuantity}</QuantityLabel>
                <AntDesign name={'caretup'} size={24} color={'#F3DEBA'} onPress={() => handleQuantity(1)} />
              </QunatityOptionView>
              <OptionButtonView>
                <TemperatureOptionButton
                  title={HotOrIce.ICE}
                  highlight={order.hotOrIced === HotOrIce.ICE}
                  disabled={selectedMenu.hotOrIced === HotOrIce.HOT}
                  onPress={() => handleSelectMenu('hotOrIced', HotOrIce.ICE)}
                />
                <TemperatureOptionButton
                  title={HotOrIce.HOT}
                  highlight={order.hotOrIced === HotOrIce.HOT}
                  disabled={selectedMenu.hotOrIced === HotOrIce.ICE}
                  onPress={() => handleSelectMenu('hotOrIced', HotOrIce.HOT)}
                />
              </OptionButtonView>
            </MenuOptionView>
          </MenuSection>

          <OptionList type={OptionTypes.FREE_ENG} data={freeOptions} />
          <OptionList type={OptionTypes.PAID_ENG} data={paidOptions} />

          {isForeigner ? (
            <>
              <ModalActionButton
                title={'Cancel'}
                width={wp(25)}
                height={hp(6)}
                color={'cancel'}
                onPress={handleCloseModal}
              />
              <ModalActionButton
                title={'Add'}
                width={wp(25)}
                height={hp(6)}
                color={'#675D50'}
                onPress={handleAddMenu}
              />
            </>
          ) : (
            <>
              <ModalActionButton
                title={'취소'}
                width={wp(25)}
                height={hp(6)}
                color={'cancel'}
                onPress={handleCloseModal}
              />
              <ModalActionButton
                title={'음료담기'}
                width={wp(25)}
                height={hp(6)}
                color={'#675D50'}
                onPress={handleAddMenu}
              />
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
  font-family: SCDream6;
`;

const QunatityOptionView = styled.View`
  width: 50%;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;

const QuantityLabel = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: SCDream6;
`;

const OptionButtonView = styled.View`
  width: 100%;
  height: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export default MenuSelectModal;
