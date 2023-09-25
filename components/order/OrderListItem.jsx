import format from 'pretty-format';
import PropTypes, { number } from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styled } from 'styled-components/native';

OrderListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    menuName: PropTypes.string,
    hotOrIced: PropTypes.string,
    orderQuantity: PropTypes.number,
    sweetness: PropTypes.string,
    pump: PropTypes.number,
    iceAmount: PropTypes.string,
    whippingAmount: PropTypes.string,
    shots: PropTypes.number,
    whippings: PropTypes.number,
    price: PropTypes.number,
  }),
  onDelete: PropTypes.func,
};

export default function OrderListItem({ item, onDelete }) {
  console.log(format(item));
  const img = require('@assets/menu/einspanner.jpeg');
  const generateOptionLabel = () => {
    const options = [];
    if (item.hotOrIced) {
      options.push(item.hotOrIced);
    }
    if (item.sweetness === '덜 달게') {
      options.push(item.sweetness);
    }
    if (item.pump !== 0) {
      options.push(`시럽 ${item.pump}회`);
    }
    if (item.iceAmount) {
      options.push(`얼음${item.iceAmount}`);
    }
    if (item.whippingAmount) {
      options.push(`휘핑양 ${item.whippingAmount}`);
    }
    if (item.shots !== 0) {
      options.push(`샷 ${item.shots}회 추가`);
    }
    if (item.whippings !== 0) {
      options.push(`휘핑 ${item.whippings}회 추가`);
    }
    return options.join(', ');
  };

  return (
    <Container>
      <MainContent>
        <MenuImageView>
          <Image style={{ maxWidth: RFValue(60) }} source={img} resizeMode="contain" />
        </MenuImageView>
        <MenuOptionView>
          <NameContainer>
            <MenuLabel>{item.menuName}</MenuLabel>
          </NameContainer>
          <AntDesign name={'closesquareo'} size={RFValue(24)} color={'#818181'} onPress={onDelete} />
          <TextView>
            <TotalPriceText>{item.price * item.orderQuantity}원</TotalPriceText>
          </TextView>
        </MenuOptionView>
      </MainContent>
      <Option>
        <OptionLabel>{generateOptionLabel()}</OptionLabel>
      </Option>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: ${hp(14)}px;

  border-bottom-width: 1px;
  border-bottom-color: #ebd3b5;
  justify-content: flex-start;
  align-items: center;
`;

const MainContent = styled.View`
  height: ${hp(10)}px;

  flex-direction: row;
  justify-content: space-between;
`;

const Option = styled.View`
  width: 100%;
  height: 15%;
  padding: 0px ${RFValue(10)}px;
`;

const OptionLabel = styled.Text`
  font-size: ${RFValue(8)}px;
  font-weight: 700;
`;

const MenuImageView = styled.View`
  width: 25%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const MenuOptionView = styled.View`
  width: 75%;
  height: 90%;

  align-content: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const NameContainer = styled.View`
  width: 45%;
  justify-content: center;
  align-items: center;
`;

const MenuLabel = styled.Text`
  font-size: ${RFValue(18)}px;
  width: 93%;
  font-weight: 700;
`;

const TextView = styled.View`
  justify-content: center;
  align-items: center;
`;

const TotalPriceText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 700;
`;
