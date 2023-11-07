import { ModalActionButton } from '@components/common/btn';
import { useModal } from '@hooks/common';
import useAudio from '@hooks/useAudio';
import React, { useEffect } from 'react';
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
  const { play, isLoading } = useAudio(require('@assets/audio/beverageInfo.mp3'));
  const [selectedMenu, setSelectedMenu] = useRecoilState(SelectedMenu);

  const DetailParser = (detail) => {
    if (detail) {
      const sentences = detail.split('.');

      // 마지막 항목이 빈 문자열일 경우 제거
      if (sentences[sentences.length - 1] === '') {
        sentences.pop();
      }

      // 분리된 문장들을 반환
      return sentences;
    } else {
      // 선택된 메뉴가 없거나 'description' 프로퍼티가 빈 딕셔너리인 경우
      return ['설명이 없습니다.'];
    }
  };

  const onPressCancel = () => {
    hideBeverageDetailModal();
  };

  useEffect(() => {
    if ((isLoading, modal.visible)) play();
  }, [isLoading, modal.visible, play]);

  const parsedSentences = DetailParser(selectedMenu && selectedMenu['description']);

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
  font-family: SCDream6;

  width: 100%;
`;

const DetailContainer = styled.View`
  width: 100%;
  height: 80%;
  border: 1px;
  padding: ${RFValue(10)}px;
`;

const DetailLabel = styled.Text`
  font-size: ${RFValue(18)}px;
  margin-bottom: ${RFValue(8)}px;
  font-family: SCDream4;
`;

const ButtonSection = styled.View`
  width: ${wp(70)}px;

  justify-content: space-between;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;
