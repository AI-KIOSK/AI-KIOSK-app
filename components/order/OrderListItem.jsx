import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilValue } from 'recoil';
import { onForeigner } from 'recoil/common/Foreigner';
import { styled } from 'styled-components/native';

OrderListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    menuName: PropTypes.string,
    nameEng: PropTypes.string,
    hotOrIced: PropTypes.string,
    orderQuantity: PropTypes.number,
    sweetness: PropTypes.string,
    pump: PropTypes.number,
    iceAmount: PropTypes.string,
    whippingAmount: PropTypes.string,
    shots: PropTypes.number,
    whippings: PropTypes.number,
    price: PropTypes.number,
    iceImgUrl: PropTypes.string,
    hotImgUrl: PropTypes.string,
  }),
  onDelete: PropTypes.func,
};

export default function OrderListItem({ item, onDelete }) {
  const isForeigner = useRecoilValue(onForeigner);

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
  const generateOptionEngLabel = () => {
    const options = [];
    if (item.hotOrIced) {
      options.push(item.hotOrIced);
    }
    if (item.sweetness === '덜 달게') {
      options.push(item.sweetness);
    }
    if (item.pump !== 0) {
      options.push(`${item.pump} Syrup`);
    }
    if (item.iceAmount) {
      options.push(`Ice ${item.iceAmount}`);
    }
    if (item.whippingAmount) {
      options.push(`Whipping ${item.whippingAmount}`);
    }
    if (item.shots !== 0) {
      options.push(`Add ${item.shots} Shots`);
    }
    if (item.whippings !== 0) {
      options.push(`Add ${item.whippings} Whippings`);
    }
    return options.join(', ');
  };
  const img = require('@assets/menu/cafelatte.jpeg');
  const totalQuantity = item.orderQuantity;

  const totalQuantityText = totalQuantity === 1 ? 'Cup' : 'Cups';
  console.log(item);

  return (
    <Container>
      <MainContent>
        <MenuImageView>
          <Image
            style={{ width: RFValue(60), height: RFValue(60) }}
            source={{ uri: item.hotOrIced === 'ICE' ? item.iceImgUrl : item.hotImgUrl }}
            resizeMode="cover"
          />
        </MenuImageView>
        {isForeigner ? (
          <>
            <MenuOptionView>
              <NameContainer>
                <MenuLabel>{item.nameEng}</MenuLabel>
              </NameContainer>
              <QuantityContainer>
                <QuantityLabel>
                  {item.orderQuantity} {totalQuantityText}
                </QuantityLabel>
              </QuantityContainer>
              <AntDesign name={'closesquareo'} size={RFValue(20)} color={'#818181'} onPress={onDelete} />
              <TextView>
                <TotalPriceEngText>{item.price * item.orderQuantity} Won</TotalPriceEngText>
              </TextView>
            </MenuOptionView>
          </>
        ) : (
          <>
            <MenuOptionView>
              <NameContainer>
                <MenuLabel>{item.menuName}</MenuLabel>
              </NameContainer>
              <QuantityContainer>
                <QuantityLabel>{item.orderQuantity}개</QuantityLabel>
              </QuantityContainer>
              <AntDesign name={'closesquareo'} size={RFValue(24)} color={'#818181'} onPress={onDelete} />
              <TextView>
                <TotalPriceText>{item.price * item.orderQuantity}원</TotalPriceText>
              </TextView>
            </MenuOptionView>
          </>
        )}
      </MainContent>
      <Option>
        {isForeigner ? (
          <OptionLabel>{generateOptionEngLabel()}</OptionLabel>
        ) : (
          <OptionLabel>{generateOptionLabel()}</OptionLabel>
        )}
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
  font-size: ${RFValue(12)}px;
  font-family: SCDream6;
  padding-left: ${RFValue(5)}px;
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
  width: 40%;
  justify-content: center;
  align-items: center;
`;

const MenuLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  width: 93%;
  font-family: SCDream6;
`;

const QuantityContainer = styled.View`
  width: 20%;
  justify-content: center;
  align-items: center;
`;

const QuantityLabel = styled(MenuLabel)``;

const TextView = styled.View`
  justify-content: center;
  align-items: center;
`;

const TotalPriceText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: SCDream6;
`;

const TotalPriceEngText = styled(TotalPriceText)`
  font-size: ${RFValue(12)}px;
  margin-left: ${RFValue(8)}px;
  font-family: SCDream6;
`;
