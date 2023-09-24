import { ModalActionButton } from '@components/common/btn';
import { useModal } from '@hooks/common';
import React from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRecoilState } from 'recoil';
import { SelectedMenu } from 'recoil/menu/SelectedMenu';
import { styled } from 'styled-components/native';
import ModalTemplate from 'styles/ModalTemplate';

export default function BeverageDetail() {
  const { modal, hideModal: hideBeverageDetailModal } = useModal('beverageDetail');
  const [selectedMenu, setSelectedMenu] = useRecoilState(SelectedMenu);

  const Detail = '단 맛이 강해요.우유가 들어가 있어요.씁쓸한 맛이 강해요.과일 맛이 나요.';
  console.log(selectedMenu['description']);

  const DetailParser = (detail) => {
    const sentences = detail.split('.');

    // 마지막 항목이 빈 문자열일 경우 제거
    if (sentences[sentences.length - 1] === '') {
      sentences.pop();
    }

    // 분리된 문장들을 반환
    return sentences;
  };
  const onPressCancel = () => {
    hideBeverageDetailModal();
  };

  const parsedSentences = DetailParser(selectedMenu['description']);

  return (
    <Modal visible={modal.visible} animationType={'slide'} transparent={true} onRequestClose={hideBeverageDetailModal}>
      <ModalTemplate>
        <Container>
          <Title>음료 설명</Title>
          <DetailContainer>
            {parsedSentences.map((sentence, index) => (
              <DetailLabel key={index}>
                <Icon name="circle-medium" size={20} />
                {sentence}
              </DetailLabel>
            ))}
          </DetailContainer>
          <ButtonSection>
            <ModalActionButton
              title={'설명 닫기'}
              width={wp(70)}
              height={hp(6)}
              color={'red'}
              onPress={onPressCancel}
            />
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

  align-content: space-around;
  justify-content: space-around;

  padding: ${wp(4)}px;
`;

const Title = styled.Text`
  color: #002b85;
  font-size: ${RFValue(20)}px;
  font-weight: 700;

  width: 100%;
`;

const DetailContainer = styled.View`
  width: 100%;
  height: 80%;
  border: 1px;
  padding: ${RFValue(10)}px;
`;

const DetailLabel = styled.Text`
  font-size: ${RFValue(15)}px;
  margin-bottom: ${RFValue(8)}px;
`;

const ButtonSection = styled.View`
  width: ${wp(70)}px;

  justify-content: space-between;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;
