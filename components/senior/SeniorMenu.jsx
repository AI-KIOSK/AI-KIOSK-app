import { useModal } from '@hooks/common';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Temperature } from 'recoil/Category';
import { SelectedMenu } from 'recoil/menu/SelectedMenu';
import { ShoppingList } from 'recoil/menu/ShoppingList';
import { styled } from 'styled-components';

SeniorMenu.propTypes = {
  item: PropTypes.shape({
    category: PropTypes.object,
    hotOrIced: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    whipping: PropTypes.bool,
    img: PropTypes.string,
  }),
};

function SeniorMenu({ item }) {
  const [counter, setCounter] = useState(1);
  const [orderList, setOrderList] = useRecoilState(ShoppingList);
  const [selectedMenu, setSelectedMenu] = useRecoilState(SelectedMenu);
  const temperature = useRecoilValue(Temperature);

  const img = require('@assets/menu/cafelatte.jpeg');

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
      hotOrIced: temperature,
      orderQuantity: num,
      sweetness: '',
      pump: 0,
      iceAmount: '',
      whippingAmount: '',
      shots: 0,
      whippings: 0,
      price: item.price,
      img: item.img,
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
  };

  const { openModal: openBeverageDetailModal } = useModal('beverageDetail');
  const { openModal: openOptionModal } = useModal('seniorOptionModal');

  const onPressDetail = () => {
    setSelectedMenu(item);
    openBeverageDetailModal();
  };

  const onPressOption = () => {
    setSelectedMenu(item);
    openOptionModal();
  };

  return (
    <Container>
      {item.img !== undefined ? (
        <MenuImage source={{ uri: `data:image/png;base64,${item.img}` }} />
      ) : (
        <MenuImage source={img} />
      )}
      <Info>
        <NameContainer>
          <Name>{item.name}</Name>
        </NameContainer>
        <Button onPress={onPressDetail}>
          <Label>{'음료 설명'}</Label>
        </Button>
        <Button onPress={onPressOption}>
          <Label>{'부가 선택'}</Label>
        </Button>
      </Info>
      <CounterGroup>
        <Counter>갯수</Counter>
        <CounterButton>
          <CounterButtonText onPress={decreaseCounter}>-</CounterButtonText>
        </CounterButton>
        <Counter>{counter}</Counter>
        <CounterButton>
          <CounterButtonText onPress={increaseCounter}>+</CounterButtonText>
        </CounterButton>
      </CounterGroup>
      <AddButton onPress={() => AddOrder(item, counter)}>
        <AddLabel>{'담기'}</AddLabel>
      </AddButton>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 0.33;
  margin: 10px 0px;
`;

const MenuImage = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(130)}px;
  object-fit: contain;

  background-color: #f5e9d9;
  border-radius: 20px;
`;

const Info = styled.View`
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(10)}px 0px;
`;

const NameContainer = styled.View`
  flex: 3;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

const Name = styled.Text`
  font-size: ${RFValue(18)}px;
  text-align: center;
  font-weight: bold;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  width: 60%;
  border-width: 2px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: #000000;
  border-radius: 20px;
  margin: 10px 0px;
`;

const Label = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: bold;
  color: #000000;
`;

const CounterGroup = styled.View`
  flex: 1.5;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Counter = styled.Text`
  color: #000000;
  font-size: ${RFValue(12)}px;
  font-weight: bold;
`;

const CounterButton = styled.TouchableOpacity`
  width: ${RFValue(22)}px;
  height: ${RFValue(22)}px;
  border-width: 2px;
  border-color: #000000;
  border-radius: ${RFValue(13)}px;
  align-items: center;
  justify-content: center;
`;

const CounterButtonText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  color: #000;
`;

const AddButton = styled(Button)`
  height: 50%;
  flex: 1.2;
  background-color: #ebd3b5;
  margin: ${RFValue(10)}px;
`;

const AddLabel = styled(Label)`
  font-size: ${RFValue(18)}px;
`;

export default SeniorMenu;
