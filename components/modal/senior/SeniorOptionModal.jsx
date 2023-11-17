import { HotOrIceSelectButton, ModalActionButton } from '@components/common/btn';
import MenuOptionList from '@components/menu/MenuOptionList';
import { useModal } from '@hooks/useModal';
import React, { useState } from 'react';
import { Image, Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { ModalTemperature, Temperature } from 'recoil/Category';
import { OptionList } from 'recoil/menu/OptionList';
import { SelectedMenu } from 'recoil/menu/SelectedMenu';
import { ShoppingList } from 'recoil/menu/ShoppingList';
import { styled } from 'styled-components';
import SeniorModalTemplate from 'styles/SeniorModalTemplate';

function SeniorOptionModal() {
  const { modal, hideModal } = useModal('seniorOptionModal');
  const selectedItem = useRecoilValue(SelectedMenu);
  const [orderList, setOrderList] = useRecoilState(ShoppingList);
  const [optionList, setOptionList] = useRecoilState(OptionList);
  const resetOptionList = useResetRecoilState(OptionList);
  const [counter, setCounter] = useState(1);
  const temperature = useRecoilValue(Temperature);
  const [modalTemperature, setModalTemperature] = useRecoilState(ModalTemperature);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(Math.min(1, counter - 1));
  };

  const AddOrder = (item, num) => {
    let id = 1;
    if (orderList.length > 0) {
      id = orderList[orderList.length - 1].id + 1;
    }

    const orderItem = {
      id,
      menuName: item.name,
      hotOrIced: modalTemperature,
      orderQuantity: num,
      sweetness: optionList['sweetness'],
      pump: optionList['pump'],
      iceAmount: optionList['iceAmount'],
      whippingAmount: optionList['whippingAmount'],
      shots: optionList['shots'],
      whippings: optionList['whippings'],
      price: item.price + optionList['shots'] * 500 + optionList['whippings'] * 500,
      iceImgUrl: item.iceImgUrl,
      hotImgUrl: item.hotImgUrl,
    };

    // 동일한 아이템이 이미 주문 목록에 있는지 확인
    const existingItemIndex = orderList.findIndex((shoppingItem) => {
      return (
        orderItem.menuName === shoppingItem.menuName &&
        orderItem.hotOrIced === shoppingItem.hotOrIced &&
        orderItem.sweetness === shoppingItem.sweetness &&
        orderItem.pump === shoppingItem.pump &&
        orderItem.iceAmount === shoppingItem.iceAmount &&
        orderItem.whippingAmount === shoppingItem.whippingAmount &&
        orderItem.shots === shoppingItem.shots &&
        orderItem.whippings === shoppingItem.whippings
      );
    });

    if (existingItemIndex !== -1) {
      // 이미 주문 목록에 있는 경우 해당 아이템의 orderQuantity를 num만큼 증가
      const updatedOrderList = [...orderList];
      updatedOrderList[existingItemIndex] = {
        ...updatedOrderList[existingItemIndex],
        orderQuantity: updatedOrderList[existingItemIndex].orderQuantity + num,
      };
      console.log('already existing: ', existingItemIndex);
      setOrderList(updatedOrderList); // Recoil 상태 업데이트
    } else {
      // 주문 목록에 없는 경우 새로운 주문 아이템을 생성하여 목록에 추가
      setOrderList((prevOrderList) => [...prevOrderList, orderItem]); // Recoil 상태 업데이트
    }

    setCounter(1);
    console.log(orderList);
    resetOptionList();
    hideModal();
  };

  return (
    <Modal visible={modal.visible} transparent={true} animationType="slide" onRequestClose={hideModal}>
      <SeniorModalTemplate>
        <Container>
          <MenuSection>
            <MenuImageView>
              <Image
                style={{ width: RFValue(100), height: RFValue(100) }}
                source={{ uri: temperature === 'HOT' ? selectedItem.hotImgUrl : selectedItem.iceImgUrl }}
                resizeMode="cover"
              />
            </MenuImageView>
            <MenuOptionView>
              <MenuLabel>{selectedItem.name}</MenuLabel>
              <QunatityOptionView>
                <QuantityLabel>수량</QuantityLabel>
                <AntDesign name={'minus'} size={RFValue(24)} color={'#F3DEBA'} onPress={decreaseCounter} />
                <QuantityLabel>{counter}</QuantityLabel>
                <AntDesign name={'plus'} size={RFValue(24)} color={'#F3DEBA'} onPress={increaseCounter} />
              </QunatityOptionView>
              <OptionButtonView>
                {modalTemperature === 'HOT' ? (
                  <HotOrIceSelectButton option="HOT" label="뜨거운거" />
                ) : (
                  <HotOrIceSelectButton option="ICE" label="차가운거" />
                )}
              </OptionButtonView>
            </MenuOptionView>
          </MenuSection>

          <MenuOptionList label="무료 옵션" />
          <MenuOptionList label="유료 옵션" />

          <ButtonSection>
            <ModalActionButton
              title={'취소'}
              width={wp(25)}
              height={hp(6)}
              color={'seniorNormal'}
              onPress={hideModal}
            />
            <ModalActionButton
              title={'음료담기'}
              width={wp(25)}
              height={hp(6)}
              color={'seniorConfirm'}
              onPress={() => AddOrder(selectedItem, counter)}
            />
          </ButtonSection>
        </Container>
      </SeniorModalTemplate>
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
  justify-content: space-around;
  flex-direction: row;
`;

const MenuImageView = styled.View`
  width: 30%;
  height: 100%;
  justify-content: center;
  margin-right: ${RFValue(5)}px;
`;

const MenuOptionView = styled.View`
  width: 65%;
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
  justify-content: flex-start;
`;

const ButtonSection = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export default SeniorOptionModal;
