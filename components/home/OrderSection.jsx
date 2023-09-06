import MenuIcon from '@components/common/MenuIcon';
import SignUpCompletedModal from '@components/modal/auth/SignUpCompletedModal';
import SignUpModal from '@components/modal/auth/SignUpModal';
import React, { useCallback, useMemo, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as wp, widthPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilState } from 'recoil';
import { SignUp } from 'recoil/ModalState';
import styled from 'styled-components';

function OrderSection() {
  const items = useMemo(
    () => [
      {
        id: 1,
        quantity: 1,
        img: require('@assets/menu/americano.jpeg'),
      },
      {
        id: 2,
        quantity: 4,
        img: require('@assets/menu/cafelatte.jpeg'),
      },
      {
        id: 3,
        quantity: 2,
        img: require('@assets/menu/einspanner.jpeg'),
      },
      {
        id: 4,
        quantity: 2,
        img: require('@assets/menu/banillalatte.jpeg'),
      },
    ],
    [],
  );

  const [show, setShow] = useRecoilState(SignUp);

  /** 담은 메뉴 출력되는 범위의 시작 인덱스 */
  const [offset, setOffset] = useState(0);

  const nextMenuSets = useCallback(() => {
    if (offset <= items.length / 3 - 1) setOffset((prev) => prev + 1);
  }, [items.length, offset]);

  const prevMenuSets = useCallback(() => {
    if (offset > 0) setOffset((prev) => prev - 1);
  }, [offset]);

  const pressButton = () => {
    setShow(true);
  };

  return (
    <Container>
      <TitleView>
        <Title>담은 메뉴</Title>
      </TitleView>
      <ContainedMenuView>
        <AntDesign name="caretleft" size={50} color={offset < 1 ? 'lightgray' : 'black'} onPress={prevMenuSets} />

        <ContainedMenuList>
          {items.slice(offset * 3, offset * 3 + 3).map((item) => (
            <MenuIcon key={item.id} image={item.img} label={`수량 ${item.quantity}`} />
          ))}
        </ContainedMenuList>
        <AntDesign
          name="caretright"
          size={50}
          color={offset <= items.length / 3 - 1 ? 'black' : 'lightgray'}
          onPress={nextMenuSets}
        />
      </ContainedMenuView>
      <ButtonContainer>
        <OrderButton onPress={pressButton}>
          <SignUpModal />
          <SignUpCompletedModal/>
          <ButtonLabel>결제하기</ButtonLabel>
        </OrderButton>
      </ButtonContainer>
    </Container>
  );
}
const Container = styled.View`
  width: 100%;
  height: 25%;

  background-color: #dbedff;

  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  flex-direction: row;
`;

const TitleView = styled.View`
  width: 100%;
  padding: ${RFValue(12)}px;
  height: 30%;
`;

const Title = styled.Text`
  color: #154d93;
  font-size: ${RFValue(16)}px;
  font-weight: 700;
`;

const ContainedMenuView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  width: 75%;
  height: 70%;
`;

const ContainedMenuList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
`;

const ButtonContainer = styled.View`
  width: 25%;
  height: 70%;

  justify-content: center;
  align-items: center;
`;

const OrderButton = styled.TouchableOpacity`
  width: ${wp(12)}px;
  height: ${wp(12)}px;
  padding: ${RFValue(8)}px;

  justify-content: center;
  align-items: center;

  border: 3px solid #154d93;
  background-color: #c5dcf3;
`;

const ButtonLabel = styled.Text`
  color: #154d93;
  font-size: ${RFValue(16)}px;
  font-weight: 700;
`;

const Blank = styled.View`
  width: 40px;
  border: 1px solid black;
`;
export default OrderSection;
