import OptionButton from '@components/common/btn/OptionButton';
import { useFetch } from '@hooks/fetch';
import { fetchMenus } from 'api/fetch';
import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useRecoilValue } from 'recoil';
import { ModalTemperature } from 'recoil/Category';
import { SelectedMenu } from 'recoil/menu/SelectedMenu';
import { styled } from 'styled-components/native';

MenuOptionList.propTypes = {
  label: PropTypes.string.isRequired,
};

export default function MenuOptionList({ label }) {
  const modalTemperature = useRecoilValue(ModalTemperature);
  const selectedItem = useRecoilValue(SelectedMenu);

  const freeOptions = (
    <OptionList>
      <OptionSubList>
        <OptionButton option="sweetness" label="보통" />
        <OptionButton option="sweetness" label="덜 달게" />
      </OptionSubList>
      <OptionSubList>
        <OptionButton option="pump" label="시럽 0회" num={0} />
        <OptionButton option="pump" label="시럽 1회" num={1} />
        <OptionButton option="pump" label="시럽 2회" num={2} />
        <OptionButton option="pump" label="시럽 3회" num={3} />
      </OptionSubList>
      {modalTemperature !== 'HOT' && (
        <OptionSubList>
          <OptionButton option="iceAmount" label="얼음 적게" />
          <OptionButton option="iceAmount" label="얼음 보통" />
          <OptionButton option="iceAmount" label="얼음 많이" />
        </OptionSubList>
      )}
      {selectedItem['whipping'] && (
        <OptionSubList>
          <OptionButton option="whippingAmount" label="휘핑 없음" />
          <OptionButton option="whippingAmount" label="휘핑 적게" />
          <OptionButton option="whippingAmount" label="휘핑 보통" />
          <OptionButton option="whippingAmount" label="휘핑 많이" />
        </OptionSubList>
      )}
    </OptionList>
  );

  const paidOptions = (
    <OptionList>
      <OptionSubList>
        <OptionLabel>샷 추가 </OptionLabel>
        <OptionButton option="shots" label="1회 추가" num={1} />
        <OptionButton option="shots" label="2회 추가" num={2} />
        <OptionButton option="shots" label="3회 추가" num={3} />
      </OptionSubList>
      <OptionSubList>
        <OptionLabel>휘핑크림 추가 </OptionLabel>
        <OptionButton option="whippings" label="1회 추가" num={1} />
        <OptionButton option="whippings" label="2회 추가" num={2} />
        <OptionButton option="whippings" label="3회 추가" num={3} />
      </OptionSubList>
    </OptionList>
  );

  return (
    <Container>
      <Label>{label}</Label>
      <HorizontalLine />
      {/* label에 따라 옵션 리스트를 렌더링 */}
      {label === '무료 옵션' ? freeOptions : paidOptions}
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 32%;

  flex-direction: column;
  flex-wrap: wrap;

  padding: ${wp(2)}px;
`;

const Label = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 700;
`;

const HorizontalLine = styled.View`
  width: 100%;
  height: 1px;

  margin: ${hp(1)}px 0px;
  background: #000000;
`;

const OptionList = styled.ScrollView``;

const OptionSubList = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${RFValue(10)}px;
  margin: ${RFValue(3)}px;
`;

const OptionLabel = styled.Text`
  margin: ${RFValue(3)}px;
  font-size: ${RFValue(13)}px;
  font-weight: bold;
`;
